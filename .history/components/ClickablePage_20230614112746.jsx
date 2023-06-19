import React, { useMemo, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
const ClickablePage = ({ position, onClick, clicked, exited }, props) => {
	// const [hovered, setHovered] = useState(false)
	const m = useRef()
	useEffect(() => {
		if (clicked) {
			gsap.to(m.current.position, { x: 0, y: 0, z: 0, duration: 1 })
		}
		console.log(m)
		if (exited) {
			// gsap.to(m.current.opac)
		}
	}, [clicked, exited])
	return (
		<>
			<mesh
				ref={m}
				position={[position[0], position[1], 0]}
				onClick={onClick}
			>
				<sphereBufferGeometry args={[0.5, 16, 32]} />
				<meshBasicMaterial color={clicked ? 'blue' : 'red'} />
			</mesh>
		</>
	)
}

export default ClickablePage
