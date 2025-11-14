const eventsData = [
	{ id: 1, title: 'Summer Music Fest 2024', image: '/images/event1.jpg' },
	{ id: 2, title: 'Winter Gala Concert', image: '/images/event2.jpg' },
	{ id: 3, title: 'City Lights Festival', image: '/images/event3.jpg' },
]

const Events = () => {
	return (
		<div className='py-12 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold mb-8'>Our Events</h2>
				<div className='grid md:grid-cols-3 gap-6'>
					{eventsData.map((event) => (
						<div
							key={event.id}
							className='border rounded-lg overflow-hidden shadow hover:shadow-lg transition'
						>
							<div className='h-48'>
								<img
									src={event.image}
									alt={event.title}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='p-4'>
								<h3 className='font-bold text-xl mb-2'>{event.title}</h3>
								<p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur.</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Events
