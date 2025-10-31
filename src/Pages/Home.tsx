import heroImage from '../assets/hero.jpg'

export default function Home() {
	return (
		<div className='w-full overflow-x-hidden'>
			{/* Hero Section */}
			<section
				className='relative h-screen bg-cover bg-center flex items-center justify-center'
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black/40' />

				{/* Text overlay container */}
				<div className='relative z-10 flex flex-col items-center text-center px-4'>
					<h1 className='text-[#FF6B00] text-5xl md:text-7xl font-bold tracking-wide mb-4'>Velvet Vibes Entertainment</h1>
					<p className='text-gray-200 text-lg md:text-xl max-w-2xl'>Short Description Here.</p>
				</div>
			</section>

			{/* Content Section */}
			<section className='min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-20'>
				<div className='max-w-3xl text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-semibold mb-4'>About This Section</h2>
					<p className='text-gray-300 text-lg leading-relaxed'>
						This section can include a short description or introduction about your brand, project, or purpose. You can expand this with
						more content as needed.
					</p>
				</div>

				{/* Placeholder for square image */}
				<div className='w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center'>
					<span className='text-gray-400'>Image Here</span>
				</div>
			</section>
			{/* Third Section – Parallax / Fixed Background */}
			<section
				className='relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 py-20'
				style={{
					backgroundImage: `url(${heroImage})`, // replace with a different bg if you like
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				{/* Transparent overlay effect */}
				<div className='absolute inset-0 bg-black/50' />

				<div className='relative z-10 max-w-3xl'>
					<h2 className='text-3xl md:text-4xl font-semibold mb-4'>Experience the Moment</h2>
					<p className='text-gray-200 text-lg leading-relaxed'>
						Immerse yourself in an atmosphere where sound, light, and emotion blend seamlessly — crafting experiences that linger long
						after the night ends.
					</p>
				</div>
			</section>

			{/* Fourth Section – YouTube Video Showcase */}
			<section className='min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-8 py-20'>
				<h2 className='text-3xl md:text-4xl font-semibold mb-8 text-center'>Catch the Vibe on YouTube</h2>

				{/* YouTube Video Embed */}
				<div className='w-full max-w-3xl aspect-video mb-8'>
					<iframe
						className='w-full h-full rounded-lg shadow-lg'
						src='https://www.youtube.com/embed/cSDJOsdP7yc'
						title='Velvet Vibes Entertainment YouTube Video'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>

				{/* Button to Channel */}
				<a
					href='https://www.youtube.com/@VelvetVibesEnt'
					target='_blank'
					rel='noopener noreferrer'
					className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition-colors'
				>
					Velvet Vibes on YouTube
				</a>
			</section>
		</div>
	)
}
