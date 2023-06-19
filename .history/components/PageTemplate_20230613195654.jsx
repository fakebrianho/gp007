const PageTemplate = (props) => {
	return (
		<>
			<mesh>
				<sphereBufferGeometry
					position={props.position}
					args={[1.0, 16, 32]}
				/>
				<meshBasicMaterial color='blue' />
			</mesh>
		</>
	)
}

export default PageTemplate
