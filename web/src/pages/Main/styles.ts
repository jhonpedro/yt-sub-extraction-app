import styled, { css, keyframes } from 'styled-components'

interface ButtonProps {
	loading?: string
}

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

		a {
			font-weight: bold;
		}
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

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Button = styled.button<ButtonProps>`
	width: 20%;
	padding: 2rem;
	border: 0;
	border-radius: 1.5rem;
	transition: 300ms;
	outline: none;
	margin-left: 1rem;
	font-size: 1.7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	color: var(--color-white);

	background-color: var(--color-secondary);
	:hover {
		background-color: var(--color-tertiary);
	}

	${(props) =>
		props.loading === 'true'
			? css`
					::after {
						content: '';
						height: 1.7rem;
						width: 1.7rem;
						border: 4px solid transparent;
						border-bottom: 4px solid var(--color-white);
						border-radius: 100%;
						position: absolute;

						animation: ${loading} 1s linear infinite;
					}

					cursor: not-allowed;
					color: transparent;
			  `
			: ''}
`

export const Form = styled.form`
	display: flex;
	justify-content: center;
`

export const WordsWithTimesSpoken = styled.table`
	width: 60%;
	margin: 0 auto;
	font-size: 2rem;
	border-collapse: collapse;
	margin-top: 5rem;

	td {
		font-size: 1.6rem;
		width: 50%;
		text-align: center;
	}

	tr {
		border-bottom: 1px solid #c3c3c3;
	}

	@media (max-width: 900px) {
		width: 100%;

		td {
			width: auto;
		}
	}
`
