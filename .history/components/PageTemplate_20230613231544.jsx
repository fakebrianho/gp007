import React, { useMemo, useState } from 'react'
import ClickablePage from './ClickablePage'
const PageTemplate = (props) => {
	const radius = props.radius
	const numElements = props.count
	const positions = useMemo(() => {
		const positions = []

		for (let i = 0; i < numElements; i++) {
			const theta = (i / numElements) * 2 * Math.PI // calculate the angle

			const x = radius * Math.cos(theta) // calculate the x position
			const y = radius * Math.sin(theta) // calculate the y position

			positions.push([x, y])
		}

		return positions
	}, [radius, numElements])
	return (
		<>
			{positions.map((position, index) => (
				<ClickablePage key={index} position={position} />
			))}
		</>
	)
}

export default PageTemplate
