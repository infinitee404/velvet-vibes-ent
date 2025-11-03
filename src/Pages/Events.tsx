import { useState, useMemo } from 'react'

interface EventType {
	title: string
	date: string // Use YYYY-MM-DD format
	location: string
	status: 'upcoming' | 'past'
}

export default function Events() {
	const [events] = useState<EventType[]>([
		{ title: 'Summer Beats', date: '2025-06-14', location: 'Chitwan', status: 'past' },
		{ title: 'Neon Dreams Party', date: '2025-03-05', location: 'Butwal', status: 'past' },
		{ title: 'Velvet Night Music Fest', date: '2025-12-20', location: 'Kathmandu', status: 'upcoming' },
		{ title: 'New Year’s Bash', date: '2026-01-01', location: 'Pokhara', status: 'upcoming' },
	])

	// ✅ Sort events: Past events first (older to newer), then upcoming (nearest date first)
	const sortedEvents = useMemo(() => {
		return [...events].sort((a, b) => {
			// Convert dates to timestamp
			const dateA = new Date(a.date).getTime()
			const dateB = new Date(b.date).getTime()

			// First, sort by status (past above upcoming)
			if (a.status !== b.status) {
				return a.status === 'past' ? -1 : 1
			}

			// Within each group, sort by date
			return dateA - dateB
		})
	}, [events])

	return (
		<div className='min-h-screen bg-gray-950 text-white px-6 py-12'>
			<h1 className='text-4xl font-bold text-center mb-10'>Events & Lineup</h1>

			<div className='max-w-4xl mx-auto overflow-y-auto max-h-[70vh] border border-gray-700 rounded-lg shadow-lg'>
				<table className='w-full'>
					<thead className='bg-gray-800 sticky top-0'>
						<tr>
							<th className='py-3 px-4 text-left'>Event Name</th>
							<th className='py-3 px-4 text-left'>Date</th>
							<th className='py-3 px-4 text-left'>Location</th>
							<th className='py-3 px-4 text-center'>Status</th>
						</tr>
					</thead>
					<tbody>
						{sortedEvents.map((event, idx) => (
							<tr
								key={idx}
								className={`transition ${event.status === 'past' ? 'opacity-50 hover:opacity-70' : 'hover:bg-gray-800'}`}
							>
								<td className='py-3 px-4 font-medium'>{event.title}</td>
								<td className='py-3 px-4'>{event.date}</td>
								<td className='py-3 px-4'>{event.location}</td>
								<td className='py-3 px-4 text-center'>
									<span
										className={`px-3 py-1 rounded-full text-sm ${event.status === 'upcoming' ? 'bg-green-600' : 'bg-gray-600'}`}
									>
										{event.status === 'upcoming' ? 'Upcoming' : 'Past'}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
