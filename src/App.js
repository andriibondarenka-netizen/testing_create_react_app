import './App.css';
import HotelCard from './components/HotelCard';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [hotels] = useState([
    {
      id: 1,
      name: 'Luxury Paradise Hotel',
      location: 'Maldives',
      rating: 4.8,
      reviews: 342,
      price: 299,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      amenities: ['Pool', 'Spa', 'Restaurant', 'Beach Access']
    },
    {
      id: 2,
      name: 'Mountain View Resort',
      location: 'Swiss Alps',
      rating: 4.6,
      reviews: 218,
      price: 249,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      amenities: ['Mountain View', 'Hiking', 'Restaurant', 'Spa']
    },
    {
      id: 3,
      name: 'Urban Boutique Hotel',
      location: 'Paris',
      rating: 4.7,
      reviews: 521,
      price: 199,
      image: 'https://images.unsplash.com/photo-1631049307038-da0ec8d70c81?w=400&h=300&fit=crop',
      amenities: ['WiFi', 'Concierge', 'Cafe', 'City Center']
    },
    {
      id: 4,
      name: 'Tropical Island Escape',
      location: 'Bali',
      rating: 4.5,
      reviews: 412,
      price: 159,
      image: 'https://images.unsplash.com/photo-1551632786-de41ec0289b9?w=400&h=300&fit=crop',
      amenities: ['Beach', 'Pool', 'Yoga', 'Restaurant']
    },
    {
      id: 5,
      name: 'Desert Luxury Oasis',
      location: 'Dubai',
      rating: 4.9,
      reviews: 628,
      price: 349,
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
      amenities: ['Pool', 'Spa', 'Fine Dining', 'Desert Safari']
    },
    {
      id: 6,
      name: 'Historic European Hotel',
      location: 'Rome',
      rating: 4.4,
      reviews: 356,
      price: 179,
      image: 'https://images.unsplash.com/photo-1564078516577-2b121d62a0ae?w=400&h=300&fit=crop',
      amenities: ['Historic', 'WiFi', 'Restaurant', 'Rooftop Bar']
    }
  ]);

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>🏨 Book Your Perfect Hotel</h1>
          <p>Discover amazing hotels at great prices</p>
        </div>
      </header>

      <SearchBar />

      <main className="hotels-container">
        <div className="hotels-grid">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Hotel Booking App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
