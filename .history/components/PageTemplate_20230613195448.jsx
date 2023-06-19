const PageTemplate = () => {
	return (
		<>
			<mesh>
				<sphereBufferGeometry args={[0.1, 16, 32]} />
				<meshBasicMaterial color='blue' />
			</mesh>
		</>
	)
}

export default PageTemplate
