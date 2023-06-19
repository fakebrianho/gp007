import React, { useMemo, useState } from 'react'
import ClickablePage from './ClickablePage'
import { gsap } from 'gsap'
const PageTemplate = (props) => {
	const radius = props.radius
	const numElements = props.count
	const [hovered, setHovered] = useState(false)
	const [clickedStates, setClickedStates] = useState(
		new Array(numElements).fill(false)
	)
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
	const handleChildClick = (index) => {
		setClickedStates((prevClickedStates) =>
			prevClickedStates.map((state, i) => (i !== index ? !state : state))
		)
	}
	return (
		<>
			{positions.map((position, index) => (
				<ClickablePage
					key={index}
					position={position}
					hovered={hovered}
					// clickEvent={handleChildClick(index)}
					// clicked={clickedStates[index]}
					onClick={() => handleChildClick(index)}
					clicked={clickedStates[index]}
				/>
			))}
		</>
	)
}

export default PageTemplate
