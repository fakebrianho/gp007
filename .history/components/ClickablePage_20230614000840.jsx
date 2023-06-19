import React, { useMemo, useState, useEffect } from 'react'
const ClickablePage = ({ position, onClick, clicked }, props) => {
	// const [hovered, setHovered] = useState(false)
	useEffect(() => {
		console.log('s')
	}, [clicked])
	return (
		<>
			<mesh position={[position[0], position[1], 0]} onClick={onClick}>
				<sphereBufferGeometry args={[0.5, 16, 32]} />
				<meshBasicMaterial color={clicked ? 'blue' : 'red'} />
			</mesh>
		</>
	)
}

export default ClickablePage
