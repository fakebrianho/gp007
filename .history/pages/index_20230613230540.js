import styles from '@/styles/Home.module.css'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Floor from '@/components/Floor'
import Box from '@/components/Box'
import LightBulb from '@/components/Lightbulb'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import PageTemplate from '@/components/PageTemplate'
import React, { useMemo } from 'react'
extend({ OrbitControls })

function Controls() {
	const controls = useRef()
	const { camera, gl } = useThree()
	useFrame(() => controls.current.update())
	return (
		<orbitControls
			ref={controls}
			args={[camera, gl.domElement]}
			enableDamping
			dampingFactor={0.1}
			rotateSpeed={0.5}
		/>
	)
}

export default function Home() {
	const radius = 7
	const numElements = 5
	const positions = useMemo(() => {
		const positions = []

		for (let i = 0; i < numElements; i++) {
			const theta = (i / numElements) * 2 * Math.PI // calculate the angle

			const x = radius * Math.cos(theta) // calculate the x position
			const y = radius * Math.sin(theta) // calculate the y position

			positions.push([x, y])
		}

		return positions
	}, [radius, numElements])
	console.log(positions)

	return (
		<div className={styles.scene}>
			<Canvas
				shadows
				className={styles.canvas}
				camera={{
					position: [0, 0, 7],
					fov: 70,
				}}
			>
				<PageTemplate position={positions[0]} />
				<PageTemplate position={positions[1]} />
				<PageTemplate position={positions[2]} />
				<PageTemplate position={positions[3]} />
				<PageTemplate position={positions[4]} />
				<Controls />
				<ambientLight color={'white'} intensity={0.3} />
			</Canvas>
		</div>
	)
}
