import React from 'react'
import useInput from '../hooks/useInput'

const Form = () => {
	const email = useInput('', { isEmpty: true, minLength: 3 })

	const password = useInput('', { isEmpty: true, minLength: 3 })
	return (
		<div>
			<form>
				<h1>Регистрация</h1>
				{email.isDirty && email.isEmpty && (
					<div style={{ color: 'red' }}>
						the field can not be empty
					</div>
				)}
				{email.isDirty && email.minlength && (
					<div style={{ color: 'red' }}>length is not allowed</div>
				)}
				{email.isDirty && email.emailError && (
					<div style={{ color: 'red' }}>incorrect email</div>
				)}
				<input
					value={email.value}
					onChange={email.onChange}
					onBlur={email.onBlur}
					name='email'
					type='text'
					placeholder='enter your email'
				/>
				{password.isDirty && password.isEmpty && (
					<div style={{ color: 'red' }}>
						the field can not be empty
					</div>
				)}
				{password.isDirty && password.minlength && (
					<div style={{ color: 'red' }}>length is not allowed</div>
				)}
				<input
					value={password.value}
					onChange={password.onChange}
					onBlur={password.onBlur}
					name='password'
					type='password'
					placeholder='enter your password'
				/>
				<button
					disabled={!email.inputValid || !password.inputValid}
					type='submit'
				>
					Registration
				</button>
			</form>
		</div>
	)
}

export default Form
