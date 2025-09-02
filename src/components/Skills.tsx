"use client"

export const Skills = () => {
    const skillCategories = [
        {
            id: 1,
            title: "Frontend Core",
            skills: [
                "React.js", "TypeScript", "Redux", "Three.js", "HTML5", "CSS3", "SCSS"
            ],
            color: "blue"
        },
        {
            id: 2,
            title: "State Management & APIs",
            skills: [
                "Redux Toolkit Query", "RESTful API", "Component-Oriented Programming"
            ],
            color: "green"
        },
        {
            id: 3,
            title: "Animations & Interactive UI",
            skills: [
                "Three.js", "Lottie", "Rive", "CSS Animations"
            ],
            color: "purple"
        },
        {
            id: 4,
            title: "Web3 & Blockchain",
            skills: [
                "Web3.js", "Ethers.js", "MetaMask Integration", "WalletConnect", "Cryptocurrency APIs"
            ],
            color: "orange"
        },
        {
            id: 5,
            title: "Tools & Services",
            skills: [
                "Git", "AWS", "Amplify", "ClickUp", "Figma", "ESLint", "Prettier", "Postman"
            ],
            color: "indigo"
        },
        {
            id: 6,
            title: "Authentication & Security",
            skills: [
                "OAuth 2.0", "JWT", "Social Auth Integration", "Secure Authentication Flows"
            ],
            color: "red"
        },
        {
            id: 7,
            title: "CI/CD & DevOps",
            skills: [
                "GitHub Actions", "Jenkins", "Docker", "AWS CodePipeline", "Continuous Integration"
            ],
            color: "teal"
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700",
            green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700",
            purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700",
            orange: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700",
            indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700",
            red: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-200 dark:border-red-700",
            teal: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 border-teal-200 dark:border-teal-700"
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <div className="space-y-8">
            {/* Заголовок секции */}
            <div className="border-b-2 border-blue-500 pb-2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    Skills & Technologies
                </h2>
            </div>

            {/* Сетка категорий */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <div 
                        key={category.id} 
                        className={`group p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${getColorClasses(category.color)}`}
                        onClick={() => {
                            // Интерактивность: можно добавить модальное окно или анимацию
                            console.log(`Clicked on ${category.title}`);
                        }}
                    >
                        {/* Заголовок категории */}
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100 group-hover:scale-110 transition-transform duration-200">
                            {category.title}
                        </h3>
                        
                        {/* Список навыков */}
                        <div className="space-y-2">
                            {category.skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-200"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <span className="w-2 h-2 bg-current rounded-full opacity-60"></span>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Индикатор прогресса (интерактивный) */}
                        <div className="mt-4 pt-3 border-t border-current border-opacity-20">
                            <div className="flex items-center justify-between text-xs">
                                <span>Expertise Level</span>
                                <span className="font-semibold">
                                    {Math.floor(Math.random() * 30) + 70}%
                                </span>
                            </div>
                            <div className="w-full bg-current bg-opacity-20 rounded-full h-2 mt-2">
                                <div 
                                    className="bg-current h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{ 
                                        width: `${Math.floor(Math.random() * 30) + 70}%`,
                                        animationDelay: `${category.id * 100}ms`
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Дополнительная интерактивность */}
            <div className="text-center pt-6">
                <button 
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 hover:scale-105 transform"
                    onClick={() => {
                        // Можно добавить фильтрацию или сортировку навыков
                        alert('Skills filter functionality coming soon!');
                    }}
                >
                    Filter Skills
                </button>
            </div>
        </div>
    );
};