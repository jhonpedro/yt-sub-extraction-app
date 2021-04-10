import React, { useState } from 'react'
import Header from '../../components/Header'
import axios from '../../services/axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
	Button,
	Form,
	Input,
	MainContainer,
	WordsWithTimesSpoken,
} from './styles'

interface WordsTimesSpoken extends Array<[string, number]> {}

function MainPage() {
	const [youtubeLink, setYoutubeLink] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [wordsTimesSpoken, setWordsTimesSpoken] = useState<WordsTimesSpoken>([])

	function handleChangeYoutubeLink(event: React.ChangeEvent<HTMLInputElement>) {
		setYoutubeLink(event.target.value)
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		if (isLoading) {
			return
		}
		setIsLoading(true)

		try {
			const response = await axios.get(`/?videourl=${youtubeLink}`)

			const wordsWithTimesSponkes = response.data
				.wordsTimesSpoken as WordsTimesSpoken

			setWordsTimesSpoken(wordsWithTimesSponkes)
		} catch (error) {
			if (error.message) {
				toast.error(
					'O seu video pode não conter legendas, tente novamente depois'
				)
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<React.Fragment>
			<Header />
			<MainContainer>
				<strong>Olá, seja bem vindo!</strong>
				<p>
					Com essa aplicação é possível analisar legendas de vídeos do Youtube.
				</p>
				<p>
					Aqui, você pode inserir um link de um vídeo do Youtube e se esse vídeo
					houver legendas diponíveis, você poderá visualizar quais foram as
					palavras mais faladas do vídeo. Se você quiser saber como funciona
					olhe na página <Link to='/about'>sobre</Link>.
				</p>
				<Form onSubmit={handleSubmit}>
					<Input
						placeholder='Url do vídeo'
						value={youtubeLink}
						onChange={handleChangeYoutubeLink}
					/>
					<Button type='submit' loading={String(isLoading)}>
						Enviar
					</Button>
				</Form>
				<WordsWithTimesSpoken>
					<tbody>
						<tr>
							<th>Palavra</th>
							<th>Quantidade de vezes falada</th>
						</tr>
						{wordsTimesSpoken.map((elem, index) => {
							return (
								<tr key={index}>
									<td>{elem[0]}</td>
									<td>{elem[1]}</td>
								</tr>
							)
						})}
					</tbody>
				</WordsWithTimesSpoken>
			</MainContainer>
		</React.Fragment>
	)
}

export default MainPage
