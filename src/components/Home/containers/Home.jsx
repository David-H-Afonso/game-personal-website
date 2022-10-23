import logo from './logo.svg'
import './Home.css'

import { experimental_use as use, Suspense, useState, useEffect } from 'react'

const pokeapiFetch = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(async (res) => ({
	data: await res.json(),
}))

const PokeApi = () => {
	const response = use(pokeapiFetch)
	const pokemon = response.data

	return <p style={{ textTransform: 'capitalize' }}>{pokemon.name}</p>
}

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Suspense>
					<PokeApi />
				</Suspense>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
