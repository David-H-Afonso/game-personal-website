import { RouterProvider } from 'react-router'
import Router from './Router'

function App() {
	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Lusitana:wght@400;700&display=swap');
			</style>
			<RouterProvider router={Router} />
		</>
	)
}

export default App
