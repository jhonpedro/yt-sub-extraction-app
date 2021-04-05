import styled from 'styled-components'

export const HeaderContainer = styled.header`
	width: 100%;
	height: 8rem;

	padding: 2rem;
	background-color: var(--color-secondary);

	display: flex;
	justify-content: space-between;
	align-items: center;

	div a {
		margin-right: 2rem;
		font-size: 1.7rem;
		transition: 300ms;
	}

	div a:hover {
		letter-spacing: 0.1rem;
	}

	div a:last-child {
		margin-right: 0;
	}
`
