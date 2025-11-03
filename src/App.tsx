import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Entertainment from './Pages/Entertainment'

export default function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/events'
					element={<Events />}
				/>
				<Route
					path='/entertainment'
					element={<Entertainment />}
				/>
			</Routes>
		</Router>
	)
}
