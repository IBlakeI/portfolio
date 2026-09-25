import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SaturnScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.shadowMap.enabled = false;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Scene and Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x02030a);

    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.set(4, 9, 20);
    camera.lookAt(0, 0, 0);

    // Strong ambient so ring particles are visible from every angle
    const ambient = new THREE.AmbientLight(0x8899bb, 4.2);
    scene.add(ambient);

    const sunLight = new THREE.DirectionalLight(0xfff3cc, 1.5);
    sunLight.position.set(-18, 8, 12);
    sunLight.castShadow = false;

    sunLight.shadow.mapSize.set(1024, 1024);
    sunLight.shadow.camera.near = 0.1;
    sunLight.shadow.camera.far = 80;
    sunLight.shadow.camera.left = -20;
    sunLight.shadow.camera.right = 20;
    sunLight.shadow.camera.top = 20;
    sunLight.shadow.camera.bottom = -20;
    scene.add(sunLight);

    // Opposite fill so the dark side of the ring isn't invisible
    const fillLight = new THREE.DirectionalLight(0x6688aa, 1.2);
    fillLight.position.set(18, -4, -10);
    scene.add(fillLight);

    // Secondary fill from below to catch ring underside
    const rimLight = new THREE.DirectionalLight(0x445566, 0.8);
    rimLight.position.set(0, -15, 0);
    scene.add(rimLight);

    function makePlanetTexture(): THREE.CanvasTexture {
      const size = 1024;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const base = ctx.createLinearGradient(0, 0, 0, size);
      base.addColorStop(0.0, "#c8934a");
      base.addColorStop(0.15, "#e8b96a");
      base.addColorStop(0.3, "#d4a558");
      base.addColorStop(0.45, "#f0c87a");
      base.addColorStop(0.55, "#c89050");
      base.addColorStop(0.7, "#ddb060");
      base.addColorStop(0.85, "#b88040");
      base.addColorStop(1.0, "#c8934a");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, size, size);
      const bands = [
        { y: 0.08, h: 0.025, color: "rgba(160,100,40,0.55)" },
        { y: 0.18, h: 0.04, color: "rgba(200,155,80,0.45)" },
        { y: 0.28, h: 0.03, color: "rgba(140,85,30,0.5)" },
        { y: 0.38, h: 0.055, color: "rgba(220,175,100,0.4)" },
        { y: 0.48, h: 0.025, color: "rgba(100,60,20,0.4)" },
        { y: 0.55, h: 0.04, color: "rgba(185,135,65,0.45)" },
        { y: 0.65, h: 0.03, color: "rgba(130,80,25,0.5)" },
        { y: 0.74, h: 0.045, color: "rgba(210,165,90,0.4)" },
        { y: 0.85, h: 0.025, color: "rgba(155,100,35,0.5)" },
      ];
      bands.forEach(({ y, h, color }) => {
        ctx.fillStyle = color;
        ctx.fillRect(0, y * size, size, h * size);
      });
      for (let i = 0; i < 120; i++) {
        const y = Math.random() * size;
        const len = 40 + Math.random() * 200;
        const x = Math.random() * (size - len);
        const alpha = 0.04 + Math.random() * 0.08;
        ctx.fillStyle =
          Math.random() > 0.5
            ? `rgba(255,240,180,${alpha})`
            : `rgba(80,45,10,${alpha})`;
        ctx.fillRect(x, y, len, 1 + Math.random() * 2);
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    function makeStarTexture(): THREE.CanvasTexture {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.2, "rgba(255,255,255,0.9)");
      grad.addColorStop(0.5, "rgba(200,220,255,0.4)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    function makeMoonTexture(): THREE.CanvasTexture {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#aaa090";
      ctx.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * 256;
        const y = Math.random() * 256;
        const r = 1 + Math.random() * 6;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, "rgba(80,75,65,0.4)");
        g.addColorStop(1, "rgba(80,75,65,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    const saturn = new THREE.Mesh(
      new THREE.SphereGeometry(3.5, 80, 80),
      new THREE.MeshStandardMaterial({
        map: makePlanetTexture(),
        roughness: 0.85,
        metalness: 0.05,
      }),
    );
    saturn.castShadow = false;
    saturn.receiveShadow = false;
    saturn.rotation.z = THREE.MathUtils.degToRad(26.7);
    scene.add(saturn);

    // Ring
    const RING_TILT = THREE.MathUtils.degToRad(10.3); // 90 - 26.7
    const INNER = 5.8;
    const OUTER = 9.5;
    const PARTICLE_COUNT = 6000;

    const rockGeo = new THREE.SphereGeometry(1, 5, 4);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0xb0a890,
      roughness: 0.95,
      metalness: 0.0,
    });
    const ringMesh = new THREE.InstancedMesh(rockGeo, rockMat, PARTICLE_COUNT);
    ringMesh.rotation.x = RING_TILT;
    ringMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(ringMesh);

    const instanceColors = new Float32Array(PARTICLE_COUNT * 3);
    const rockPalette = [
      [0.85, 0.82, 0.78], // warm grey
      [0.92, 0.9, 0.88], // icy white
      [0.7, 0.65, 0.58], // dark rock
      [0.78, 0.72, 0.62], // brownish
      [0.95, 0.93, 0.9], // bright ice
    ];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const col = rockPalette[Math.floor(Math.random() * rockPalette.length)];
      const brightness = 0.75 + Math.random() * 0.25;
      instanceColors[i * 3] = col[0] * brightness;
      instanceColors[i * 3 + 1] = col[1] * brightness;
      instanceColors[i * 3 + 2] = col[2] * brightness;
    }
    ringMesh.instanceColor = new THREE.InstancedBufferAttribute(
      instanceColors,
      3,
    );

    interface ParticleData {
      orbitRadius: number;
      orbitAngle: number;
      orbitSpeed: number;
      size: number;
      yOffset: number;
      tiltX: number;
      tiltZ: number;
      spinX: number;
      spinZ: number;
    }

    const particles: ParticleData[] = [];
    const _matrix = new THREE.Matrix4();
    const _pos = new THREE.Vector3();
    const _quat = new THREE.Quaternion();
    const _scale = new THREE.Vector3();
    const _euler = new THREE.Euler();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Weight distribution: denser toward inner rings like Saturn's B ring
      const u = Math.random();
      const r = INNER + Math.pow(u, 0.7) * (OUTER - INNER);

      const angle = Math.random() * Math.PI * 2;
      // Orbit speed of ring
      const speed = (0.0008 + Math.random() * 0.0014) * Math.sqrt(INNER / r);
      // Random size for orbiting rocks — non-uniform so they look like real debris
      const size = 0.012 + Math.random() * 0.045;
      // Very thin ring — tiny vertical scatter
      const yOffset = (Math.random() - 0.5) * 0.12;
      // Random initial orientation so rocks tumble naturally
      const tiltX = Math.random() * Math.PI * 2;
      const tiltZ = Math.random() * Math.PI * 2;
      // Individual slow tumble rates
      const spinX = (Math.random() - 0.5) * 0.003;
      const spinZ = (Math.random() - 0.5) * 0.003;

      particles.push({
        orbitRadius: r,
        orbitAngle: angle,
        orbitSpeed: speed,
        size,
        yOffset,
        tiltX,
        tiltZ,
        spinX,
        spinZ,
      });

      // Set initial matrix
      _pos.set(Math.cos(angle) * r, yOffset, Math.sin(angle) * r);
      _euler.set(tiltX, angle, tiltZ);
      _quat.setFromEuler(_euler);
      _scale.setScalar(size);
      _matrix.compose(_pos, _quat, _scale);
      ringMesh.setMatrixAt(i, _matrix);
    }
    ringMesh.instanceMatrix.needsUpdate = true;

    // Stars in the background
    const starCount = 6000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const palette = [
      [1.0, 1.0, 1.0],
      [0.9, 0.95, 1.0],
      [1.0, 0.95, 0.85],
      [1.0, 0.85, 0.7],
      [0.8, 0.9, 1.0],
    ];
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 180 + Math.random() * 120;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
      const col = palette[Math.floor(Math.random() * palette.length)];
      const b = 0.6 + Math.random() * 0.4;
      starColors[i * 3] = col[0] * b;
      starColors[i * 3 + 1] = col[1] * b;
      starColors[i * 3 + 2] = col[2] * b;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        map: makeStarTexture(),
        vertexColors: true,
        size: 1.2,
        sizeAttenuation: true,
        transparent: true,
        alphaTest: 0.01,
        depthWrite: false,
      }),
    );
    scene.add(stars);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 32, 32),
      new THREE.MeshStandardMaterial({
        map: makeMoonTexture(),
        roughness: 1.0,
        metalness: 0.0,
      }),
    );
    moon.castShadow = false;
    scene.add(moon);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    let rafId = 0;
    let frame = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      frame++;
      const t = frame * 0.004;

      saturn.rotation.y = t * 0.3;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.orbitAngle += p.orbitSpeed;
        // Tumble each rock slowly on its own axes
        p.tiltX += p.spinX;
        p.tiltZ += p.spinZ;
        _pos.set(
          Math.cos(p.orbitAngle) * p.orbitRadius,
          p.yOffset,
          Math.sin(p.orbitAngle) * p.orbitRadius,
        );
        _euler.set(p.tiltX, p.orbitAngle, p.tiltZ);
        _quat.setFromEuler(_euler);
        _scale.setScalar(p.size);
        _matrix.compose(_pos, _quat, _scale);
        ringMesh.setMatrixAt(i, _matrix);
      }
      ringMesh.instanceMatrix.needsUpdate = true;

      // Moon orbit
      const moonAngle = t * 0.25;
      moon.position.set(
        Math.cos(moonAngle) * 12,
        Math.sin(moonAngle * 0.3) * 1.5,
        Math.sin(moonAngle) * 12,
      );

      stars.rotation.y = t * 0.008;
      stars.rotation.x = t * 0.003;

      camera.position.x += (mouseX * 2.5 + 4 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 1.5 + 9 - camera.position.y) * 0.03;
      camera.lookAt(5, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100vh", background: "#02030a" }}
    />
  );
}
