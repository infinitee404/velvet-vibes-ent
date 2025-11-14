import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='fixed w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-10'>
			<div className='container mx-auto flex items-center justify-between py-4'>
				<div className='text-xl font-bold text-orange-600'>Velvet Vibes Entertainment</div>
				<div className='space-x-6 text-gray-800'>
					<Link
						to='/'
						className='hover:text-orange-500'
					>
						Home
					</Link>
					<Link
						to='/events'
						className='hover:text-orange-500'
					>
						Events
					</Link>
					<Link
						to='/entertainment'
						className='hover:text-orange-500'
					>
						Entertainment
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
