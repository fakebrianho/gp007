const PageTemplate = () => {
	return (
		<>
			<mesh>
				<sphereBufferGeometry args={[1.0, 16, 32]} />
				<meshBasicMaterial color='blue' />
			</mesh>
		</>
	)
}

export default PageTemplate
