import styled from 'styled-components'

export const MainContainer = styled.main`
	width: 80%;
	margin: 0 auto;
	padding-top: 5rem;

	strong {
		text-align: center;
		font-size: 5rem;
	}

	p {
		font-size: 2rem;
		margin-bottom: 5rem;
	}
`

export const Input = styled.input`
	width: 50%;
	padding: 2rem;
	border: 2px solid #f1f1f1;
	border-radius: 1.5rem;
	outline: none;
	transition: 300ms;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	font-size: 1.7rem;

	:focus {
		border-color: var(--color-primary);
	}
`

export const Button = styled.button`
	width: 20%;
	padding: 2rem;
	border: 0;
	border-radius: 1.5rem;
	transition: 300ms;
	outline: none;
	margin-left: 1rem;
	font-size: 1.7rem;

	background-color: var(--color-secondary);
	:hover {
		background-color: var(--color-tertiary);
	}
`

export const Form = styled.form`
	display: flex;
	justify-content: center;
`
