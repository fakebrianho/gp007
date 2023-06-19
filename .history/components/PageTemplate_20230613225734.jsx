import React, { useMemo } from 'react'
const PageTemplate = (props) => {
	return (
		<>
			<mesh position={[props.position[0], props.position[1], 0]}>
				<sphereBufferGeometry args={[8.0, 16, 32]} />
				<meshBasicMaterial color='blue' />
			</mesh>
		</>
	)
}

export default PageTemplate
