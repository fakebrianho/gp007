import React, { useMemo, useState } from 'react'
const PageTemplate = (props) => {
	const [hovered, setHovered] = useState(false)
	return (
		<>
			<mesh
				position={[props.position[0], props.position[1], 0]}
				onClick={() => setHovered(!hovered)}
			>
				<sphereBufferGeometry args={[0.5, 16, 32]} />
				{/* <meshBasicMaterial color='blue' /> */}
				<meshBasicMaterial color={hovered ? 'blue' : 'red'} />
			</mesh>
		</>
	)
}

export default PageTemplate
