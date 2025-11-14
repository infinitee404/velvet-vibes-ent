import mainImg from '../assets/main.jpg'

const Hero = () => {
	return (
		<div
			className='relative h-screen bg-cover bg-center'
			style={{ backgroundImage: `url(${mainImg})` }}
		>

			<div className='relative container mx-auto px-4 h-full flex items-center'>
				<div className='text-white max-w-lg'>
					<h1 className='text-4xl md:text-6xl font-bold mb-4'>Velvet Vibes Entertainment</h1>
					<p className='mb-6'>Creating unforgettable experiences: live music events, stunning weddings, and vibrant media content.</p>

					<a
						href='#events'
						className='px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold'
					>
						Explore Events
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
