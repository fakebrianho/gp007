import React, { useEffect, useRef } from 'react'
import { Sine, gsap } from 'gsap'
const ClickablePage = ({ position, onClick, clicked, exited, indexPos }) => {
	const m = useRef()
	useEffect(() => {
		if (clicked) {
			gsap.to(m.current.position, {
				x: 0,
				y: 0,
				z: 0,
				duration: 1,
			})
		}
		if (exited) {
			gsap.to(m.current.material, {
				opacity: 0,
				duration: 1,
				ease: 'sine.inOut',
				delay: indexPos * 0.3,
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
