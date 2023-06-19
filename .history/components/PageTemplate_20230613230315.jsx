import React, { useMemo, useState } from 'react'
const PageTemplate = (props) => {
	const [hovered, setHovered] = useState(false)
	return (
		<>
			<mesh
				position={[props.position[0], props.position[1], 0]}
				// onClick={setHovered(!hovered)}
			>
				<sphereBufferGeometry args={[5.0, 16, 32]} />
				<meshBasicMaterial color='red' />
				{/* <meshBasicMaterial color={selected ? 'blue' : 'red'} /> */}
			</mesh>
		</>
	)
}

export default PageTemplate
