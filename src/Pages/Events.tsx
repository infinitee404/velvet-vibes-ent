import React, { useMemo } from 'react'
import ImageGrid from '../Components/ImageGrid'

interface Event {
	name: string
	date: string
	location: string
}

// Dummy Event Data
const events: Event[] = [
	{ name: 'Winter Beats Night', date: '2024-01-10', location: 'Pokhara' },
	{ name: 'Monsoon Music Jam', date: '2024-07-05', location: 'Chitwan' },
	{ name: 'New Year Eve Bash', date: '2024-12-31', location: 'Butwal' },
	{ name: 'Summer Vibes Festival', date: '2025-06-22', location: 'Kathmandu' },
]

// Dummy Gallery Images
const galleryImages = [
	'https://source.unsplash.com/random/300x300?concert',
	'https://source.unsplash.com/random/300x301?party',
	'https://source.unsplash.com/random/300x302?music',
	'https://source.unsplash.com/random/300x303?festival',
	'https://source.unsplash.com/random/300x304?crowd',
	'https://source.unsplash.com/random/300x305?dj',
]

const Events: React.FC = () => {
	const today = new Date()

	// ✅ Sort events by date → oldest first (past events at top)
	const sortedEvents = useMemo(() => {
		return [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
	}, [])

	return (
		<div className='w-full min-h-screen bg-black text-white py-16 px-4'>
			<h1 className='text-4xl font-bold text-center mb-10 pb-5'>Events</h1>

			{/* ✅ Events Table */}
			<div className='max-w-5xl mx-auto overflow-x-auto'>
				<table className='w-full border-collapse'>
					<thead>
						<tr className='bg-gray-800'>
							<th className='p-3 text-left'>Event</th>
							<th className='p-3 text-left'>Date</th>
							<th className='p-3 text-left'>Location</th>
						</tr>
					</thead>
					<tbody>
						{sortedEvents.map((event, index) => {
							const isPast = new Date(event.date) < today
							return (
								<tr
									key={index}
									className={`border-b border-gray-700 ${isPast ? 'opacity-50' : ''}`}
								>
									<td className='p-3'>{event.name}</td>
									<td className='p-3'>{new Date(event.date).toLocaleDateString()}</td>
									<td className='p-3'>{event.location}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			{/* ✅ Image Gallery Section */}
			<h2 className='text-3xl font-semibold text-center mt-16 mb-6 py-10'>Highlights from Past Events</h2>
			<div className='max-w-6xl mx-auto'>
				<ImageGrid images={galleryImages} />
			</div>
		</div>
	)
}

export default Events
