import React from 'react'
import Header from '../../components/Header'

import { AboutContainer } from './styles'

function AboutPage() {
	return (
		<>
			<Header />
			<AboutContainer>
				<strong>Sobre</strong>
				<p>
					Muito interessante que você quer saber mais como funciona! Então vamos
					lá.
				</p>
				<p>
					Nessa aplicação a API foi e está sendo desenvolvida com um framework
					chamado Flask, ele é responsável receber a requisição com o link do
					Youtube e assim resolver toda a nossa lógica a respeito de como serão
					contadas a ocorrência de palavras na legenda do vídeo. Ao receber o
					link ele verifica se aquele vídeo tem uma legenda, e se houver ele
					retira as{' '}
					<a
						href='https://en.wikipedia.org/wiki/Stop_word'
						target='_blank'
						rel='noopener noreferrer'
					>
						Stopwords{' '}
					</a>
					e então remove partes da palavra para que apenas reste o radical da
					palavra, para que então sejam feitas as contagens nas palavras.
				</p>
				<p className='think-with-me'>
					Pense comigo, é melhor você contar somente o radical das palavras
					certo? <br />
					Vamos supor que você tenha três palavras: Digitar, digitando e
					digitarei. Essas palavras não tem o mesmo sentido, certo? Porém elas
					derivam do mesmo verbo que é "Digitar" então nós supomos que valha a
					pena contar todas essas palavras como uma só, e então nós retiramos o
					partes dessa palavra até um momento em que nós fiquemos somente com o
					radical dessa palavra, no caso "Digit", nesse caso o substantivo
					"Digito" também entraria nessa contagem, porém nós podemos considerar
					ele também como uma ocorrência para essa palavra.
				</p>
				<p>
					E então, com somente o radical da palavra, nós contamos todas as
					ocorrencias dessas palavras e então retornamos para o usuário, porém
					esse não será o único maneira de análisar, serão implementados novos
					métodos que darão mais opções para novas maneiras de analisar as
					legendas.
				</p>
			</AboutContainer>
		</>
	)
}

export default AboutPage
