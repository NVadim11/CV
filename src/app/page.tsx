import { Hero, Experience, Skills, Education, Language } from '../components';

export default function Home() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900 flex justify-center">
      <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl  2xl:max-w-7xl px-4 sm:px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg shadow-md py-8 px-6">
          <div className="avoid-break">
            <Hero />
          </div>
          
          <div className="border-t-2 border-gray-300 dark:border-gray-500 my-10"></div>
          
          <div className="avoid-break">
            <Experience />
          </div>
          
          <div className="border-t-2 border-gray-300 dark:border-gray-500 my-10 page-break"></div>
          
          <div className="avoid-break">
            <Skills />
          </div>
          
          <div className="border-t-2 border-gray-300 dark:border-gray-500 my-10"></div>
          
          <div className="avoid-break">
            <Education />
          </div>
          
          <div className="border-t-2 border-gray-300 dark:border-gray-500 my-10 page-break"></div>
          
          <div className="avoid-break">
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
}