import React from 'react';
import '../styles/UserProfilePage.css';

export default function UserProfilePage() {
  const user = {
    name: 'Roxy Jahan',
    email: 'roxy@example.com',
    phone: '+880 1XXX-XXXXXX',
    address: 'Dhaka, Bangladesh',
    avatar: 'https://via.placeholder.com/150',
    orders: [
      { id: 'ORD1234', item: 'Data Communication Book', status: 'Shipped' },
      { id: 'ORD5678', item: 'Algorithms Illustrated', status: 'Delivered' },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-phone">{user.phone}</p>
        <p className="profile-address">{user.address}</p>
        <button className="edit-btn">Edit Profile</button>
        <h3 className="orders-title">Your Orders</h3>
        <ul className="orders-list">
          {user.orders.map(order => (
            <li key={order.id} className="order-item">
              <span>{order.item}</span>
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
