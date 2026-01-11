'use client';

import { memo, useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLenis } from '../hooks/useLenis';
import * as THREE from 'three';

interface PortraitPlaneProps {
  portraitUrl?: string;
  displacementMapUrl?: string;
  roughnessMapUrl?: string;
  alphaMapUrl?: string;
}

function PortraitPlane({
  portraitUrl = '/images/portrait.jpg',
  displacementMapUrl = '/images/portrait.jpg',
  roughnessMapUrl = '/images/portrait.jpg',
  alphaMapUrl = '/images/portrait.jpg',
}: PortraitPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollProgress, scrollVelocity } = useLenis();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [textures, setTextures] = useState<{
    map?: THREE.Texture;
    displacementMap?: THREE.Texture;
    roughnessMap?: THREE.Texture;
    alphaMap?: THREE.Texture;
  }>({});

  // Track mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load textures with proper error handling
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const loadedTextures: {
      map?: THREE.Texture;
      displacementMap?: THREE.Texture;
      roughnessMap?: THREE.Texture;
      alphaMap?: THREE.Texture;
    } = {};

    let loadedCount = 0;
    const totalTextures = 4;

    const checkComplete = () => {
      loadedCount++;
      if (loadedCount === totalTextures) {
        setTextures(loadedTextures);
      }
    };

    // Load portrait texture
    loader.load(
      portraitUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        loadedTextures.map = texture;
        checkComplete();
      },
      undefined,
      () => {
        console.warn('Portrait image not found:', portraitUrl);
        checkComplete();
      }
    );

    // Load displacement map
    loader.load(
      displacementMapUrl,
      (texture) => {
        texture.colorSpace = THREE.LinearSRGBColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        loadedTextures.displacementMap = texture;
        checkComplete();
      },
      undefined,
      () => {
        console.warn('Displacement map not found:', displacementMapUrl);
        checkComplete();
      }
    );

    // Load roughness map
    loader.load(
      roughnessMapUrl,
      (texture) => {
        texture.colorSpace = THREE.LinearSRGBColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        loadedTextures.roughnessMap = texture;
        checkComplete();
      },
      undefined,
      () => {
        console.warn('Roughness map not found:', roughnessMapUrl);
        checkComplete();
      }
    );

    // Load alpha map
    loader.load(
      alphaMapUrl,
      (texture) => {
        texture.colorSpace = THREE.LinearSRGBColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        loadedTextures.alphaMap = texture;
        checkComplete();
      },
      undefined,
      () => {
        console.warn('Alpha map not found:', alphaMapUrl);
        checkComplete();
      }
    );

    // Cleanup function
    return () => {
      Object.values(loadedTextures).forEach((texture) => {
        if (texture) texture.dispose();
      });
    };
  }, [portraitUrl, displacementMapUrl, roughnessMapUrl, alphaMapUrl]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation from scroll progress - slow and elegant
      const baseRotation = scrollProgress * Math.PI * 0.5; // Max 90 degrees total

      // Add velocity-based speed increase (normalized and subtle)
      const velocityFactor = Math.min(Math.abs(scrollVelocity) / 2000, 0.3); // Normalize and cap at 30%
      const velocityRotation = velocityFactor * delta * 2; // Subtle speed boost

      // Combine rotations for smooth, elegant motion
      meshRef.current.rotation.y = baseRotation + velocityRotation;

      // Subtle mouse parallax - elegant and minimal
      const parallaxX = mouse.x * 0.12;
      const parallaxY = mouse.y * 0.12;

      // Very subtle floating animation
      const floatOffset = Math.sin(state.clock.elapsedTime * 0.4) * 0.02;

      // Set position combining parallax and float
      meshRef.current.position.x = parallaxX;
      meshRef.current.position.y = parallaxY + floatOffset;
    }
  });

  // Fallback material if portrait texture isn't loaded
  const hasPortrait = textures.map !== undefined;

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -2]}
      rotation={[0, 0, 0]}
    >
      <planeGeometry args={[3, 4, 64, 64]} />
      {hasPortrait ? (
        <meshStandardMaterial
          map={textures.map}
          displacementMap={textures.displacementMap}
          displacementScale={0.15}
          roughnessMap={textures.roughnessMap}
          roughness={0.6}
          metalness={0.2}
          alphaMap={textures.alphaMap}
          transparent={textures.alphaMap !== undefined}
          side={THREE.DoubleSide}
          toneMapped={true}
        />
      ) : (
        <meshStandardMaterial
          color="#333333"
          roughness={0.7}
          metalness={0.1}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      )}
    </mesh>
  );
}

export default memo(PortraitPlane);
