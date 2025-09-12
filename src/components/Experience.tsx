export const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "SINT",
            employmentType: "Full-time",
            startDate: "Nov 2023",
            endDate: "Present",
            location: "Remote",
            workType: "Remote",
            responsibilities: [
                "Developed Web3 platforms with cryptocurrency wallet integrations (MetaMask, WalletConnect).",
                "Created animated websites with Three.js and Telegram mini app.",
                "Integrated AI services including OpenAI API, ElevenLabs TTS, and Model Context Protocol.",
                "Frontend architecture, design system, and API integrations.",
                "Backend collaboration (Node.js), authentication, and integrations.",
                "Team collaboration, fast releases, and CI/CD implementation."
            ],
            technologies: [
                "React", "Next.js", "Redux Toolkit", "TypeScript", "Web3.js", 
                "MetaMask", "WalletConnect", "Three.js", "Styled Components", 
                "OpenAI API", "ElevenLabs", "Model Context Protocol", "Node.js", "Docker", "AWS"
            ]
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Portal Project",
            employmentType: "Full-time",
            startDate: "Jan 2022",
            endDate: "Oct 2023",
            location: "Remote",
            workType: "Remote",
            responsibilities: [
                "Developed portal using JavaScript with client-side logic and DOM manipulations.",
                "API integration and data handling.",
                "UX optimization and application performance improvements.",
                "Created responsive interfaces and enhanced user experience."
            ],
            technologies: [
                "JavaScript", "HTML5", "CSS3", "REST API", "DOM", "Git"
            ]
        },
        {
            id: 3,
            title: "Frontend Developer",
            company: "Self-employed",
            employmentType: "Part-time",
            startDate: "Jan 2021",
            endDate: "Dec 2022",
            location: "Remote",
            workType: "Remote",
            responsibilities: [
                "Developed websites and landing pages for small businesses.",
                "Created WordPress stores and theme customization.",
                "Built interactive features using vanilla JavaScript.",
                "This experience became the foundation for further specialization in frontend development."
            ],
            technologies: [
                "WordPress", "JavaScript", "HTML5", "CSS3", "SCSS", "PHP", "MySQL"
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
                    <div key={exp.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
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

                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-calendar text-blue-500"></i>
                                <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className="fas fa-map-marker-alt text-red-500"></i>
                                <span>{exp.location}</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-2">
                                {exp.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full"></span>
                                        <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {resp}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
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