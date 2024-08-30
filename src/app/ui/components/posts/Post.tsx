import React from 'react';
import Link from 'next/link';

// Function to generate random pastel colors
function getRandomPastelColor() {
    const colors = [
        '#FFEBEE', // Pink 50
        '#E3F2FD', // Blue 50
        '#E8F5E9', // Green 50
        '#FFF3E0', // Orange 50
        '#F3E5F5', // Purple 50
        '#E0F7FA', // Cyan 50
        '#F1F8E9', // Lime 50
        '#FBE9E7', // Red 50
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default function Component({ id, title, content, date, author }: { id: string, title: string, content: string, date: string, author: string }) {
    const cardColor = getRandomPastelColor(); // Generate a random pastel color for the card

    return (
        <div
            key={id}
            className="border border-gray-200 shadow-md p-6 my-6 rounded-lg transition-all duration-300"
            style={{ backgroundColor: cardColor }}
        >
            <Link href={`/blog/post/${id}`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-gray-600 transition-colors duration-300">{title}</h2>
            </Link>
            <p className="text-sm text-gray-600 mb-2">{date}</p>
            <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>
            <p className="text-gray-800 font-semibold">Published by: <span className="text-blue-800 font-bold">{author}</span></p>        </div>
    );
}
