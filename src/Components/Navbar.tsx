import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' 

export default function Navbar() {
	return (
		<nav className='bg-gray-900 text-white shadow-md'>
			<div className='max-w-[1260px] mx-auto flex items-center justify-between px-8 py-4'>
				{/* Logo Section */}
				<div className='flex items-center gap-3'>
					<img
						src={logo}
						alt='Logo'
						className='w-10 h-10 object-contain'
					/>
				</div>

				{/* Links Section */}
				<div className='flex items-center gap-8'>
					<Link
						to='/'
						className='hover:text-blue-400 transition-colors'
					>
						Home
					</Link>
					<Link
						to='/events'
						className='hover:text-blue-400 transition-colors'
					>
						Events
					</Link>
					<Link
						to='/entertainment'
						className='hover:text-blue-400 transition-colors'
					>
						Entertainment
					</Link>
				</div>
			</div>
		</nav>
	)
}
