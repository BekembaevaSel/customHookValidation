import React, { useEffect, useState } from 'react'

const useValidation = (value, validations) => {
	const [isEmpty, setIsempty] = useState(true)
	const [minlength, setMinlength] = useState(false)
	const [maxLengthError, setMaxLengthError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [inputValid, setInputValid] = useState(false)

	//  эти состояния хранят информацию об ошибке
	// если тру то у нас какая то ошибка

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation]
						? setMinlength(true)
						: setMinlength(false)
					// если длина текущего значения в инпуте меньше чем значение хранящееся в объекте validation по ключу validation то тогда мы устанавливаем ошибку
					break
				case 'isEmpty':
					value ? setIsempty(false) : setIsempty(true)
					break
				case 'maxLength':
					value.length > validations[validation]
						? setMaxLengthError(true)
						: setMaxLengthError(false)
					break
				case 'isEmail':
					const re =
						/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
					re.test(String(value).toLowerCase())
						? setEmailError(false)
						: setEmailError(true)
					break
			}
		}
	}, [value])

	useEffect(() => {
		if (isEmpty || maxLengthError || minlength || emailError) {
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [isEmpty, maxLengthError, minlength, emailError])

	return {
		isEmpty,
		minlength,
		emailError,
		maxLengthError,
        inputValid,
	}
}

export default useValidation
