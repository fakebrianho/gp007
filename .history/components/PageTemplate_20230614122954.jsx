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
	const [exitState, setExitStates] = useState(
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
			prevClickedStates.map((state, i) => {
				return i === index ? !state : state
			})
		)
		setExitStates((prevExitStates) =>
			// prevExitStates.map((state, i) => {
			// 	return i !== index ? !state : state
			// })
            for(let i = index; i < prevExitStates.length; i++){
                console.log(i)
            }
		)
	}
	return (
		<>
			{positions.map((position, index) => (
				<ClickablePage
					key={index}
					indexPos={index}
					position={position}
					hovered={hovered}
					onClick={() => handleChildClick(index)}
					clicked={clickedStates[index]}
					exited={exitState[index]}
				/>
			))}
		</>
	)
}

export default PageTemplate
