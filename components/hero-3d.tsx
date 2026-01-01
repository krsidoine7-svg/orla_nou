"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function AutomationSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ec4899"
          metalness={0.8}
          roughness={0.2}
          emissive="#ec4899"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

function ConnectingLines() {
  const points = [
    new THREE.Vector3(-2, 1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, -1, 0),
    new THREE.Vector3(0, -2, 0),
  ]

  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#a855f7" linewidth={2} />
    </line>
  )
}

function AutomationNodes() {
  const positions: [number, number, number][] = [
    [-2, 1, 0],
    [2, -1, 0],
    [0, -2, 0],
    [1.5, 1.5, -1],
    [-1.5, -1.5, 1],
  ]

  return (
    <>
      {positions.map((position, index) => (
        <AutomationSphere key={index} position={position} />
      ))}
      <ConnectingLines />
    </>
  )
}

function CentralHub() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <mesh>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.9}
            roughness={0.1}
            emissive="#f97316"
            emissiveIntensity={0.2}
          />
        </mesh>

        <Text3D font="/fonts/Geist_Bold.json" size={0.3} height={0.1} position={[-0.8, -0.1, 0]}>
          AI
          <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
        </Text3D>
      </group>
    </Float>
  )
}

export function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} className="w-full h-full">
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

      <CentralHub />
      <AutomationNodes />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
