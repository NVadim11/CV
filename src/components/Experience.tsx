export const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "SINT",
            employmentType: "Full-time",
            startDate: "Nov 2024",
            endDate: "Present",
            location: "Odessa, Ukraine",
            workType: "Remote",
            responsibilities: [
                "Developed Web3 platforms with cryptocurrency wallet integrations (MetaMask, WalletConnect).",
                "Contributed to a high-performing front-end team that delivered a smooth, animated website with Three.js and a Telegram mini app.",
                "Ensured seamless user interactions and efficient state management using latest React/Redux practices.",
                "Followed the Feature-Sliced Design project structure with Styled Components.",
                "Implemented CI/CD pipelines using GitHub Actions for automated linting, and deployment to AWS."
            ],
            technologies: [
                "React.js", "Redux", "TypeScript", "Web3.js", "MetaMask", 
                "WalletConnect", "OAuth 2.0", "Three.js", "Styled Components", 
                "Feature-Sliced Design", "GitHub Actions", "AWS"
            ]
        },
        {
            id: 2,
            title: "Junior Frontend Developer",
            company: "TechCorp",
            employmentType: "Full-time",
            startDate: "Mar 2024",
            endDate: "Oct 2024",
            location: "Kyiv, Ukraine",
            workType: "Hybrid",
            responsibilities: [
                "Built responsive web applications using React and modern JavaScript.",
                "Collaborated with designers to implement pixel-perfect UI components.",
                "Optimized application performance and improved loading times.",
                "Participated in code reviews and team meetings."
            ],
            technologies: [
                "React", "JavaScript", "CSS3", "HTML5", "Git", "Figma"
            ]
        }
    ];

    return (
        <div className="space-y-8">
            <div className="border-b-2 border-blue-500 pb-2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    Professional Experience
                </h2>
            </div>

            <div className="space-y-6">
                {experiences.map((exp) => (
                    <div key={exp.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                        {/* Заголовок и компания */}
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {exp.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-2">
                                <span className="font-medium">{exp.company}</span>
                                <span>•</span>
                                <span>{exp.employmentType}</span>
                            </div>
                        </div>

                        {/* Время работы и локация */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-calendar text-blue-500"></i>
                                <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-map-marker-alt text-red-500"></i>
                                <span>{exp.location}</span>
                                <span>•</span>
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                                    {exp.workType}
                                </span>
                            </div>
                        </div>

                        {/* Обязанности */}
                        <div className="mb-4">
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-2">
                                {exp.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {resp}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Технологии */}
                        <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};