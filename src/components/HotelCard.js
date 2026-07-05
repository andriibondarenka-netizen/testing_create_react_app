import React from 'react';

const HotelCard = ({ hotel }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="stars">
          {i < Math.round(rating) ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-content">
        <h3 className="hotel-name">{hotel.name}</h3>
        <p className="hotel-location">📍 {hotel.location}</p>
        
        <div className="hotel-rating">
          <div>{renderStars(hotel.rating)}</div>
          <span className="reviews">({hotel.reviews} reviews)</span>
        </div>

        <div className="hotel-amenities">
          {hotel.amenities.map((amenity, index) => (
            <span key={index} className="amenity-tag">{amenity}</span>
          ))}
        </div>

        <div className="hotel-footer">
          <div className="hotel-price">${hotel.price}/night</div>
          <button className="book-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
