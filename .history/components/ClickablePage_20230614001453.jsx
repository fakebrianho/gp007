import React, { useMemo, useState, useEffect, useRef } from 'react'
const ClickablePage = ({ position, onClick, clicked }, props) => {
	// const [hovered, setHovered] = useState(false)
	const m = useRef()
	useEffect(() => {
		if (clicked) {
			gsap.to(m.position, { x: 0, duration: 2 })
		}
	}, [clicked])
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
