import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from '../assets/HomePage3.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-[22%]">
          
        </div>
        <img
          src={HomePage}
          alt="HomePage"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-[5%]">
          <Link to="/games">
            <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-5 rounded-3xl text-xl">
              Play
            </button>
          </Link>
        </div>
      </div>

      {/* Information Boxes */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1 bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">IoT Integrated Fitness</h2>
            <p>Experience smart workouts with connected devices.</p>
          </div>
          <div className="flex-1 bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Do Cardio Without Boredom</h2>
            <p>Keep your heart pumping with fun and engaging routines.</p>
          </div>
          <div className="flex-1 bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Gaming Fitness</h2>
            <p>Combine the thrill of gaming with an active lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
