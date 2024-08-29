import Image from "next/image";
import styles from '@/app/ui/styles/home.module.css';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-green-50 relative overflow-hidden">
      <div className="container mx-auto p-4 relative z-20">
        <div className="bg-gradient-to-r from-white via-emerald-100 to-pink-100 border-2 border-emerald-500 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg fade-in">
          <div className="flex flex-col justify-center">
            <h1 className={`text-4xl font-bold mb-4 ${styles.text_green} fade-in`}>Welcome to the Blog Website</h1>
            <p className="text-lg text-gray-700 mb-4">
            Discover insightful articles, expert tips, and inspiring stories that will spark your curiosity and expand your knowledge. Join us on a journey of learning and growth.
            </p>
            <a href="/blog/posts" className={`outline outline-1 outline-offset-2 border-emerald-500 text-emerald-500 hover:text-white py-2 px-4 rounded hover:bg-emerald-500 md:w-auto transition duration-300 ${styles.fit_content} bounce-in pulse`}>
              Read and Post Blogs
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Image */}
            <Image
              src="/image-desktop.jpeg"
              width={1000}
              height={760}
              className="hidden rounded-lg md:block z-10 bounce-in"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/image-mobile.jpeg"
              width={560}
              height={620}
              className="block rounded-md md:hidden bounce-in"
              alt="Screenshot of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </div>
      <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-10 ${styles.bg_green} fade-in`}></div>
    </main>
  );
}
