import Hero from '../Components/Hero'
import parallaxImg from '../assets/parallax.jpg'

const Home = () => {
	return (
		<div>
			<Hero />

			{/* ABOUT  */}
			<section className='py-12 bg-white'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl font-semibold mb-4 text-gray-800'>About Velvet Vibes</h2>
					<p className='mb-6 text-gray-600 max-w-3xl'>
						Velvet Vibes Entertainment is a full-service event production company specializing in concerts, weddings, and media
						production. Our team brings creativity and professionalism to every project, ensuring unforgettable experiences for clients
						and audiences.
					</p>

					{/* SERVICES */}
					<div className='grid md:grid-cols-3 gap-6 w-full'>
						<div className='border rounded-lg p-6 hover:shadow-lg transition'>
							<h3 className='font-semibold text-lg mb-2'>Live Events</h3>
							<p className='text-gray-600'>High-energy concerts and event production, including stage design, lighting, and sound.</p>
						</div>

						<div className='border rounded-lg p-6 hover:shadow-lg transition'>
							<h3 className='font-semibold text-lg mb-2'>Photography & Video</h3>
							<p className='text-gray-600'>Professional wedding and event photography/videography services capturing every moment.</p>
						</div>

						<div className='border rounded-lg p-6 hover:shadow-lg transition'>
							<h3 className='font-semibold text-lg mb-2'>Media & Entertainment</h3>
							<p className='text-gray-600'>Music videos, short films, and media content creation to bring stories to life.</p>
						</div>
					</div>
				</div>
			</section>

			{/* PARALLAX */}
			<section
				className='h-[50vh] flex items-center justify-center bg-fixed bg-center bg-cover'
				style={{
					backgroundImage: `url(${parallaxImg})`,
				}}
			>
				<div className='bg-black bg-opacity-40 px-8 py-6 rounded-xl'>
					<h2 className='text-3xl md:text-4xl font-bold text-white text-center'>Experience Entertainment Like Never Before</h2>
				</div>
			</section>

			{/* ================= EXTRA REUSABLE SECTION ================= */}
			<section className='py-12 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl font-semibold mb-4 text-gray-800'>Additional Section</h2>
					<p className='text-gray-600'>
						This is a flexible section you can repurpose for testimonials, featured work, partners, announcements, or anything else you
						want to showcase later.
					</p>
				</div>
			</section>
		</div>
	)
}

export default Home
