import React from 'react'
import { GiTrophy } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import { HeaderContainer } from './styles'

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<GiTrophy color='var(--color-primary)' size='4rem' />
			<div>
				<Link to='/'>Página principal</Link>
				<Link to='/about'>Sobre</Link>
			</div>
		</HeaderContainer>
	)
}

export default Header
