// import React from 'react'
import { useState, useEffect, useRef } from 'react'


function LeapForm() {
	const [year, setYear] = useState('')
	const [lyear, setLyear] = useState('')
	const txtYear = useRef(null)

	useEffect(() => {
		setLyear('')
		setYear('')
		txtYear.current.focus()
	}, [])


	const embo = (year) => {
		let rest = year % 19
		let msg = "El año es de tipo "
		setLyear(msg + "Jol (Regular)")
		if (rest === 0 || rest === 3 || rest === 6 || rest === 8 || rest === 11 || rest === 14 || rest === 17) {
			setLyear(msg + "Embolismal")
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (year > 0) {
			embo(year)
			// setYear('')
		}
		else{
			txtYear.current.focus()
		}
	}

	return (
		<div className='max-w-md'>
			<form action="#" onSubmit={handleSubmit}
				className='bg-yellow-50 text-xl bold p-2'
			>
				<p className='font-bold'>¿El año es emolismal?</p>
				<p className='font-bold'>Escriba el Año a evaluar</p>
				<input  type="number" min={1} step={1} ref={txtYear} placeholder="5783"
					onChange={(e) => {
						setYear(e.target.value)
						setLyear('')
					}}
					className='mb-2 w-full'
				/>
				<textarea cols="30" rows="2" placeholder='Respuesta' value={lyear} readOnly>
				</textarea>
				<button
					className='text-white font-bold bg-purple-500 hover:bg-purple-400mb-1 w-full rounded-md mt-1'
				>Generar</button>

			</form>
		</div>
	)
}

export default LeapForm