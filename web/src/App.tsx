import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

import Routes from './routes'
import GlobalStyle from './assets/styles/'

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes />
			<ToastContainer />
		</BrowserRouter>
	)
}

export default App
