$(document).ready(function() {
			$('#calendar').evoCalendar({
				theme: 'Midnight Blue',
					calendarEvents: [
					  {
						id: 'Restaurant 1', // Event's ID (required)
						name: "Dakshin", // Event name (required)
						date: "May/18/2024", // Event date (required)
						description: "Visting With Family",
						type: "event", // Event type (required)
						
					  },
					  {
						id:'Restaurant 2',
						name: "Feast India",
						badge: "05/20", // Event badge (optional)
						date: "May/21/2024",
						description: "Visting with Friends for a celebration", // Event description (optional)
						type: "event",
						color: "#63d867" // Event custom color (optional)
					  }
					]
			
			})
		})