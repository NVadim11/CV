export const Hero = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Vadim Palagin
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">
          Frontend Developer
        </h2>
      </div>

      <div className="relative bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-lg"></div>

        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 pl-4">
          <div className="flex-shrink-0">
            <img
              src="cv_photo.jpg"
              alt="Vadim Palagin"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
            />
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base flex-grow">
            Frontend Developer with 4+ years of experience in web development.
            Started with contract projects (WordPress, JavaScript) and evolved
            into building React/Next.js applications, Web3 integrations, and
            AI-powered solutions.
            Skilled in frontend architecture, responsive UI, and modern
            development tools. Hands-on experience with cryptocurrency wallets
            (MetaMask, WalletConnect), AI APIs (OpenAI, ElevenLabs), and
            3D/animation frameworks (Three.js, GSAP).
            I focus on delivering clean, maintainable code and
            thrive in fast-paced team environments. Currently looking for remote
            opportunities or contract projects where I can contribute to
            innovative web applications.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
        <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white">
          <i className="fa-solid fa-location-dot text-[12px]"></i>
        </span>
        <span>Moldova, Chisinau (Remote/Office)</span>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-600"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
        <div className="space-y-3">
          <a
            href="https://t.me/NVadimm"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-blue-600 group-hover:scale-105">
              <i className="fa-brands fa-telegram text-[12px]"></i>
            </span>
            <span className="transition-colors">Telegram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vadim-palagin/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-blue-700 group-hover:scale-105">
              <i className="fa-brands fa-linkedin-in text-[12px]"></i>
            </span>
            <span className="transition-colors">LinkedIn</span>
          </a>
        </div>
        <div className="space-y-3">
          <a
            href="https://github.com/NVadim11"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-gray-700 group-hover:scale-105">
              <i className="fa-brands fa-github text-[12px]"></i>
            </span>
            <span className="transition-colors">GitHub</span>
          </a>

          <a
            href="mailto:palaginvad@gmail.com"
            className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-red-600 group-hover:scale-105">
              <i className="fa-solid fa-envelope text-[12px]"></i>
            </span>
            <span className="transition-colors">palaginvad@gmail.com</span>
          </a>
        </div>
        <div className="space-y-3">
          <a
            href="tel:+37369133820"
            className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-green-600 group-hover:scale-105">
              <i className="fa-solid fa-phone text-[12px]"></i>
            </span>
            <span className="transition-colors">+373 69 133 820</span>
          </a>
        </div>
      </div>
    </div>
  );
};
