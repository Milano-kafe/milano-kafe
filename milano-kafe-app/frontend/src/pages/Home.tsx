import React from 'react';
import { Link } from 'react-router-dom';
import NewsList from '../components/News/NewsList';
import MenuList from '../components/Menu/MenuList';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Milano Kafe</h1>
                <p>Your favorite place for delicious food and drinks!</p>
                <Link to="/menu" className="btn">View Menu</Link>
            </header>
            <section className="home-news">
                <h2>Latest News</h2>
                <NewsList />
            </section>
            <section className="home-menu">
                <h2>Featured Menu Items</h2>
                <MenuList />
            </section>
        </div>
    );
};

export default Home;