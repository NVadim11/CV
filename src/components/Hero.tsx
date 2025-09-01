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

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base pl-4">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
        {/* Левая колонка */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              📍
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              Ukraine, Odesa (Remote/Office)
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              ✈️
            </div>
            <span className="text-gray-700 dark:text-gray-300">Telegram</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              💼
            </div>
            <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
              🐙
            </div>
            <span className="text-gray-700 dark:text-gray-300">GitHub</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              ✉️
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              palaginvad@gmail.com
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              📞
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              +380 68 263 7043
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              📞
            </div>
            <span className="text-gray-700 dark:text-gray-300">
              +380 68 263 7043
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
