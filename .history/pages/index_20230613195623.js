import styles from '@/styles/Home.module.css'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Floor from '@/components/Floor'
import Box from '@/components/Box'
import LightBulb from '@/components/Lightbulb'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import PageTemplate from '@/components/PageTemplate'
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
				<PageTemplate />
				<Controls />
				<ambientLight color={'white'} intensity={0.3} />
			</Canvas>
		</div>
	)
}
