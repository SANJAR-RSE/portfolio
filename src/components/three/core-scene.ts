import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export type CoreSceneOptions = {
  /** Lighter geometry and a lower pixel ratio for small / weak devices. */
  lite: boolean;
  /** Render a single still frame and never animate. */
  reducedMotion: boolean;
};

/**
 * "Computational core": a faceted dark-metal crystal held by a three-ring
 * chrome gyroscope. One object, lit by a procedural studio environment so
 * no HDR file has to be downloaded.
 *
 * The render loop only runs while the canvas is on screen and the tab is
 * visible. Returns a dispose function that releases every GPU resource.
 */
export function createCoreScene(
  canvas: HTMLCanvasElement,
  { lite, reducedMotion }: CoreSceneOptions,
): () => void {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !lite,
    alpha: true,
    powerPreference: "default",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lite ? 1.25 : 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 0, 8.2);

  // Procedural studio lighting for believable metal reflections.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const envMap = pmrem.fromScene(room, 0.04).texture;
  scene.environment = envMap;
  scene.environmentIntensity = 0.85;
  room.dispose();
  pmrem.dispose();

  // Coloured rim lights give the purple identity without tinting the metal flat.
  const rimViolet = new THREE.PointLight(0xa855f7, 40, 14, 2);
  rimViolet.position.set(-3.2, 2.2, -2.5);
  const rimDeep = new THREE.PointLight(0x7e22ce, 26, 14, 2);
  rimDeep.position.set(3.4, -2.6, -1.5);
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(2.5, 3, 4);
  scene.add(rimViolet, rimDeep, key);

  // --- The object -----------------------------------------------------------
  const rig = new THREE.Group(); // receives pointer tilt
  const body = new THREE.Group(); // receives idle rotation and float
  rig.add(body);
  scene.add(rig);

  const disposables: { dispose: () => void }[] = [envMap];

  const coreGeometry = new THREE.IcosahedronGeometry(1.05, 1);
  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x241e30,
    metalness: 1,
    roughness: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    flatShading: true,
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  body.add(core);
  disposables.push(coreGeometry, coreMaterial);

  // Hairline edges trace the facets, like a computed mesh.
  const edgeGeometry = new THREE.EdgesGeometry(coreGeometry, 1);
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: 0xc4a1ff,
    transparent: true,
    opacity: 0.22,
  });
  core.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));
  disposables.push(edgeGeometry, edgeMaterial);

  const chrome = new THREE.MeshPhysicalMaterial({
    color: 0xf2f0f7,
    metalness: 1,
    roughness: 0.07,
    clearcoat: 0.6,
  });
  const violetMetal = new THREE.MeshPhysicalMaterial({
    color: 0xb98cff,
    metalness: 1,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });
  const nodeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xa855f7,
    emissiveIntensity: 1.6,
    metalness: 0.2,
    roughness: 0.3,
  });
  disposables.push(chrome, violetMetal, nodeMaterial);

  const radialSegments = lite ? 12 : 24;
  const tubularSegments = lite ? 96 : 200;
  const nodeGeometry = new THREE.SphereGeometry(0.055, 16, 16);
  disposables.push(nodeGeometry);

  const ringSpecs = [
    { radius: 1.62, tube: 0.026, material: chrome, tilt: [Math.PI / 2, 0, 0], speed: 0.32 },
    { radius: 1.86, tube: 0.018, material: violetMetal, tilt: [0.35, Math.PI / 2.4, 0], speed: -0.22 },
    { radius: 2.1, tube: 0.012, material: chrome, tilt: [-0.6, 0.2, Math.PI / 3], speed: 0.14 },
  ] as const;

  const rings = ringSpecs.map((spec) => {
    const holder = new THREE.Group();
    holder.rotation.set(spec.tilt[0], spec.tilt[1], spec.tilt[2]);
    const geometry = new THREE.TorusGeometry(spec.radius, spec.tube, radialSegments, tubularSegments);
    disposables.push(geometry);
    const spinner = new THREE.Group();
    spinner.add(new THREE.Mesh(geometry, spec.material));
    // A single glowing node rides each ring — a "data point" on its orbit.
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.set(spec.radius, 0, 0);
    spinner.add(node);
    holder.add(spinner);
    body.add(holder);
    return { spinner, speed: spec.speed };
  });

  rig.rotation.set(0.18, -0.35, 0);

  // --- Sizing ----------------------------------------------------------------
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Keep the whole object in frame on tall, narrow canvases.
    camera.position.z = camera.aspect < 0.9 ? 8.2 / Math.max(camera.aspect, 0.6) : 8.2;
    camera.updateProjectionMatrix();
    if (!running) renderer.render(scene, camera);
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  // --- Pointer response (damped) --------------------------------------------
  const pointer = { x: 0, y: 0 };
  const onPointerMove = (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  };
  if (!reducedMotion) window.addEventListener("pointermove", onPointerMove, { passive: true });

  // --- Loop ------------------------------------------------------------------
  const clock = new THREE.Clock(false);
  let running = false;
  let frame = 0;
  let elapsed = 0;
  let onScreen = true;

  const tick = () => {
    frame = requestAnimationFrame(tick);
    const delta = Math.min(clock.getDelta(), 0.05);
    elapsed += delta;

    // Entrance: ease the object in over the first ~1.4s.
    const intro = 1 - Math.pow(1 - Math.min(elapsed / 1.4, 1), 3);
    rig.scale.setScalar(0.82 + 0.18 * intro);

    body.rotation.y += delta * 0.12;
    body.position.y = Math.sin(elapsed * 0.7) * 0.07;
    core.rotation.x += delta * 0.05;
    for (const ring of rings) ring.spinner.rotation.z += delta * ring.speed;

    const targetX = 0.18 + pointer.y * 0.3;
    const targetY = -0.35 + pointer.x * 0.45;
    const ease = 1 - Math.exp(-delta * 3);
    rig.rotation.x += (targetX - rig.rotation.x) * ease;
    rig.rotation.y += (targetY - rig.rotation.y) * ease;

    renderer.render(scene, camera);
  };

  const start = () => {
    if (running || reducedMotion) return;
    running = true;
    clock.start();
    clock.getDelta();
    frame = requestAnimationFrame(tick);
  };
  const stop = () => {
    if (!running) return;
    running = false;
    clock.stop();
    cancelAnimationFrame(frame);
  };
  const sync = () => (onScreen && document.visibilityState === "visible" ? start() : stop());

  const visibility = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    sync();
  });
  visibility.observe(canvas);
  document.addEventListener("visibilitychange", sync);

  resize();
  if (reducedMotion) {
    rig.scale.setScalar(1);
    renderer.render(scene, camera);
  }

  return () => {
    stop();
    visibility.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", sync);
    window.removeEventListener("pointermove", onPointerMove);
    for (const item of disposables) item.dispose();
    renderer.dispose();
  };
}
