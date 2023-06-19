import React, { useMemo, useState } from 'react'
const ClickablePage = (props) => {
	// const [hovered, setHovered] = useState(false)
	return (
		<>
			<mesh
				position={[props.position[0], props.position[1], 0]}
				onClick={() => props.setHovered(!props.hovered)}
			>
				<sphereBufferGeometry args={[0.5, 16, 32]} />
				<meshBasicMaterial color={props.hovered ? 'blue' : 'red'} />
			</mesh>
		</>
	)
}

export default ClickablePage
