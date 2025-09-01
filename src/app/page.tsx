import { Hero, Experience, Skills, Education, Language } from '../components';


export default function Home() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900 flex justify-center">
      <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl  2xl:max-w-7xl px-4 sm:px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg shadow-md py-8 px-6">
          <Hero />
          <Experience />
          <Skills />
          <Education />
          <Language />
        </div>
      </div>
    </div>
  );
}
