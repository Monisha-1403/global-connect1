// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const dashboardItems = [
    {
      to: '/feed',
      icon: 'fas fa-newspaper',
      title: 'View Feed',
      description: 'See what\'s new from your connections.',
      color: 'blue'
    },
    {
      to: '/jobs',
      icon: 'fas fa-briefcase',
      title: 'Find Jobs',
      description: 'Explore new career opportunities.',
      color: 'green'
    },
    {
      to: '/profile',
      icon: 'fas fa-user-circle',
      title: 'My Profile',
      description: 'Manage your professional identity.',
      color: 'purple'
    },
    {
      to: '/connections',
      icon: 'fas fa-users',
      title: 'My Network',
      description: 'Connect with other professionals.',
      color: 'yellow'
    },
    {
      to: '/chat',
      icon: 'fas fa-comments',
      title: 'Messages',
      description: 'Chat with your connections.',
      color: 'indigo'
    },
    {
      to: '/create-post',
      icon: 'fas fa-feather-alt',
      title: 'Create Post',
      description: 'Share your thoughts and updates.',
      color: 'red'
    }
  ];

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-hero">
        <h2>Welcome to Global Connect!</h2>
        <p>Your professional network and career hub where opportunities meet talent.</p>
      </div>
      
      <div className="dashboard-grid">
        {dashboardItems.map((item, index) => (
          <Link 
            key={item.to}
            to={item.to} 
            className="dashboard-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="dashboard-card-icon">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>

      <div className="dashboard-footer">
        <p>Global Connect - Connecting professionals, empowering careers.</p>
      </div>
    </div>
  );
}