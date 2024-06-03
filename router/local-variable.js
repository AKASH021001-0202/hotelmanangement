// Local variable for storing room data
let rooms = [
    {
        "id": 1,
        "name": "Conference Room A",
        "seats": 50,
        "amenities": ["Projector", "Whiteboard"],
        "pricePerHour": 100
    },
    {
        "id": 2,
        "name": "Conference Room B",
        "seats": 20,
        "amenities": ["Projector"],
        "pricePerHour": 50
    }
];

// Local variable for storing booking data
let bookings = [
    {
        "id": 1,
        "customerName": "John Doe",
        "date": "2024-06-03",
        "startTime": "10:00",
        "endTime": "12:00",
        "roomId": 1
    },
    {
        "id": 2,
        "customerName": "Jane Smith",
        "date": "2024-06-03",
        "startTime": "14:00",
        "endTime": "16:00",
        "roomId": 2
    }
];

// Local variable for storing customer data
let customers = [
    {
        "id": 1,
        "name": "John Doe",
        "bookings": [
            {
                "bookingId": 1,
                "roomId": 1,
                "roomName": "Conference Room A",
                "date": "2024-06-03",
                "startTime": "10:00",
                "endTime": "12:00"
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "bookings": [
            {
                "bookingId": 2,
                "roomId": 2,
                "roomName": "Conference Room B",
                "date": "2024-06-03",
                "startTime": "14:00",
                "endTime": "16:00"
            }
        ]
    }
];

export  {rooms,  bookings, customers};
