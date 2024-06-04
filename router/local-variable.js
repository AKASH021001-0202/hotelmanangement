// Initial Data for Rooms
let rooms = [
    {
        id: "room123",
        name: "Conference Room A",
        numberOfSeats: 100,
        amenities: ["Projector", "Whiteboard", "WiFi"],
        pricePerHour: 50,
        bookings: []
    },
    {
        id: "room124",
        name: "Conference Room B",
        numberOfSeats: 50,
        amenities: ["TV", "WiFi"],
        pricePerHour: 30,
        bookings: []
    }
];

// Initial Data for Customers
let customers = [
    {
        id: "cust123",
        name: "John Doe",
        email: "info@example.com",
        roomId:null
       
    },
    {
        id: "cust124",
        name: "Jane Smith",
        email: "enquiry@example.com",
        roomId:null
     
    }
];

// Initial Data for Bookings
let bookings = [
    {
        id: "booking123",
        customerId: null,
        roomId: null,
        date: "2024-06-15",
        startTime: "10:00",
        endTime: "12:00",
        status: "pending"
    },
    {
        id: "booking124",
        customerId: null,
        roomId: null,
        date: "2024-06-16",
        startTime: "14:00",
        endTime: "16:00",
        status: "pending"
    }
];

export { rooms, bookings, customers };
