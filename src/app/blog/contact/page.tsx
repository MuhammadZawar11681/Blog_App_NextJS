import React from 'react';
import styles from '@/app/ui/styles/contact.module.css'; // Import custom styles

export default function Page() {
  return (
    <main className={`flex flex-col items-center justify-center min-h-screen p-8 ${styles.background}`}>
      <div className="text-center max-w-2xl bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We're here to help you with any questions or concerns. Feel free to reach out to us through the contact details below or connect with us on social media.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <span className="font-medium">Email:</span> <a href="#" className="text-purple-600 hover:underline">mzawar189@gmail.com</a>
            </li>
            
          </ul>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/MuhammadZawar11681" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.85 8.15 6.84 9.49.5.09.68-.22.68-.49v-1.7c-2.78.61-3.36-1.35-3.36-1.35-.45-1.14-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1.01.07 1.53 1.04 1.53 1.04.9 1.53 2.37 1.09 2.95.84.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.25.1-2.6 0 0 .84-.27 2.75 1.02.8-.22 1.67-.33 2.53-.34.86.01 1.73.12 2.54.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.35.1 2.6.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.58 4.94.36.31.68.92.68 1.85v2.73c0 .27.18.58.68.49C19.15 20.15 22 16.41 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/m-zawar/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452H16.36v-5.7c0-1.35-.02-3.09-1.86-3.09-1.86 0-2.14 1.45-2.14 2.97v5.81h-4.8V9.11h4.61v1.92h.06c.65-1.21 2.25-2.49 4.66-2.49 4.99 0 5.91 3.22 5.91 7.42v5.57zm-14.62-11.64c-1.61 0-2.93-1.31-2.93-2.94 0-1.63 1.32-2.94 2.93-2.94 1.62 0 2.93 1.31 2.93 2.94s-1.31 2.94-2.93 2.94zm2.47 11.64h-4.94v-8.62h4.94v8.62zm12.14-13.6c-.55 0-1 .45-1 1v11.2c0 .55.45 1 1 1s1-.45 1-1v-11.2c0-.55-.45-1-1-1zm-6.21 1.63h-1.68v-1.3h1.68v1.3z" />
            </svg>
          </a>
          <a href="mailto:contact@example.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 13.37l7.79-5.13-1.06-1.59L12 10.4 5.27 6.65 4.21 8.24 12 13.37zm0 6.63L4 14.5V6.15l8 5.23 8-5.23v8.35l-8 5.23z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
