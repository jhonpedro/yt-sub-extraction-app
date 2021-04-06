import React, { useState } from 'react'
import Header from '../../components/Header'

import { Button, Form, Input, MainContainer } from './styles'

function MainPage() {
	const [youtubeLink, setYoutubeLink] = useState('')

	function handleChangeYoutubeLink(event: React.ChangeEvent<HTMLInputElement>) {
		setYoutubeLink(event.target.value)
	}

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
					<Input
						placeholder='Url do vídeo'
						value={youtubeLink}
						onChange={handleChangeYoutubeLink}
					/>
					<Button type='submit'>Enviar</Button>
				</Form>
			</MainContainer>
		</React.Fragment>
	)
}

export default MainPage
