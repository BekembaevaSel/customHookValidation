import React, { useEffect, useState } from 'react'

const Form = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Email can not be empty')
	const [passwordError, setPasswordError] = useState(
		'Password can not be empty',
	)
	const [formValid, setFormValid] = useState(false)

	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])

	const emailHandler = (e) => {
		setEmail(e.target.value)
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Некорректный емейл адрес')
		} else {
			setEmailError('')
		}
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 3 || e.target.value.length > 8) {
			setPasswordError('пароль должен быть длиннее 3 и меньше 8')
			if (!e.target.value) {
				setPasswordError('Password can not be empty')
			}
		} else {
			setPasswordError('')
		}
	}

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
		}
	}
	return (
		<div>
			<form>
				<h1>Регистрация</h1>
				{emailDirty && emailError && (
					<div style={{ color: 'red' }}>{emailError}</div>
				)}
				<input
					value={email}
					onBlur={(e) => blurHandler(e)}
					name='email'
					type='text'
					placeholder='enter your email'
					onChange={emailHandler}
				/>
				{passwordDirty && passwordError && (
					<div style={{ color: 'red' }}>{passwordError}</div>
				)}
				<input
					value={password}
					onBlur={(e) => blurHandler(e)}
					name='password'
					type='password'
					placeholder='enter your password'
					onChange={passwordHandler}
				/>
				<button disabled={!formValid} type='submit'>
					Registration
				</button>
			</form>
		</div>
	)
}

export default Form
