import React from 'react';
import styles from '@/app/ui/styles/about.module.css'; // Importing custom styles

export default function Page() {
  return (
    <main className={`flex flex-col items-center justify-center min-h-screen p-8 ${styles.background}`}>
      <div className="text-center max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our platform! We are dedicated to bringing you the best content and experiences. Our mission is to provide valuable information and engaging content to help you stay informed and inspired. From insightful articles to innovative ideas, we strive to be your go-to source for knowledge and creativity. Join us on this journey and be a part of our community!
        </p>
        <div className="flex justify-center mt-4">
          <a href="#learn-more" className="text-purple-600 hover:underline">Learn More</a>
        </div>
      </div>
    </main>
  );
}
