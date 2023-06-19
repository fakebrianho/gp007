import React, { useMemo, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
const ClickablePage = ({ position, onClick, clicked, exited, indexPos }) => {
	// const [hovered, setHovered] = useState(false)
	console.log(indexPos)
	const m = useRef()
	useEffect(() => {
		console.log(exited)
		if (clicked) {
			gsap.to(m.current.position, { x: 0, y: 0, z: 0, duration: 1 })
		}
		if (exited) {
			gsap.to(m.current.material, {
				opacity: 0,
				duration: 1,
				delay: indexPos * 0.5,
			})
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
				<meshBasicMaterial
					color={clicked ? 'blue' : 'red'}
					transparent
				/>
			</mesh>
		</>
	)
}

export default ClickablePage
