import React, { useMemo, useState } from 'react'
const ClickablePage = ({ position, onClick, clicked }, props) => {
	// const [hovered, setHovered] = useState(false)
	return (
		<>
			<mesh
				position={[props.position[0], props.position[1], 0]}
				onClick={onClick}
			>
				<sphereBufferGeometry args={[0.5, 16, 32]} />
				<meshBasicMaterial color={clicked ? 'blue' : 'red'} />
			</mesh>
		</>
	)
}

export default ClickablePage
