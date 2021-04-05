import React from 'react'
import Header from '../../components/Header'

import { Button, Form, Input, MainContainer } from './styles'

function MainPage() {
	return (
		<React.Fragment>
			<Header />
			<MainContainer>
				<strong>Olá, seja bem vindo!</strong>
				<p>
					Com essa aplicação é possível analisar legendas de vídeos do Youtube.
					Desenvolvida meramente para fins academicos.
				</p>
				<Form>
					<Input placeholder='Url do vídeo' />
					<Button type='submit'>Enviar</Button>
				</Form>
			</MainContainer>
		</React.Fragment>
	)
}

export default MainPage
