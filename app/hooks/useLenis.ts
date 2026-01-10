'use client';

/**
 * Re-export the useLenis hook for convenience
 * This hook provides access to:
 * - lenis: The Lenis instance for direct control
 * - scrollProgress: Current scroll progress (0-1)
 * - scrollVelocity: Current scroll velocity in pixels per second
 * 
 * @example
 * ```tsx
 * // In a React component
 * const { scrollProgress, scrollVelocity } = useLenis();
 * 
 * // In a Three.js component
 * function MyMesh() {
 *   const { scrollProgress } = useLenis();
 *   const meshRef = useRef<THREE.Mesh>(null);
 *   
 *   useFrame(() => {
 *     if (meshRef.current) {
 *       meshRef.current.rotation.y = scrollProgress * Math.PI * 2;
 *     }
 *   });
 *   
 *   return <mesh ref={meshRef}>...</mesh>;
 * }
 * ```
 */
export { useLenis } from '../contexts/LenisContext';
