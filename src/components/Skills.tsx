export const Skills = () => {
    const skillCategories = [
        {
            id: 1,
            title: "Frontend Core",
            skills: [
                "React 19", "TypeScript", "Vite", "Next.js", "Redux Toolkit", "React Router DOM", "Styled Components", "Tailwind CSS", "HTML5", "CSS3", "SCSS"
            ]
        },
        {
            id: 2,
            title: "Backend & Database",
            skills: [
                "Node.js", "Fastify", "Drizzle ORM", "Prisma", "PostgreSQL", "RESTful API", "WebSocket"
            ]
        },
        {
            id: 3,
            title: "3D & Graphics",
            skills: [
                "Three.js", "@react-three/fiber", "@react-three/drei", "GSAP", "GLSL Shaders", "Lottie React", "Rive", "AOS Animations", "CSS Animations", "Animate.css", "Swiper"
            ]
        },
        {
            id: 4,
            title: "Authentication & Security",
            skills: [
                "Keycloak", "JWT", "OAuth 2.0", "OpenID Connect", "JWKS-RSA", "Social Auth", "Secure Authentication Flows", "Telegram Mini Apps", "Telegram WebApp API"
            ]
        },
        {
            id: 5,
            title: "AI & APIs",
            skills: [
                "OpenAI API", "ElevenLabs (TTS)", "Model Context Protocol"
            ]
        },
        {
            id: 6,
            title: "DevOps & Infrastructure",
            skills: [
                "Docker", "Docker Compose", "AWS (ECR, ECS)", "Railway", "Bitbucket Pipelines", "Docker Swarm", "CI/CD"
            ]
        },
        {
            id: 7,
            title: "Tools & Analytics",
            skills: [
                "Git", "Amplify", "Prettier", "Zod", "Axios", "PostHog", "Sentry", "React Markdown", "Date-fns"
            ]
        }
    ];

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
                        className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md"
                    >
                        {/* Заголовок категории */}
                        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                            {category.title}
                        </h3>
                        
                        {/* Список навыков */}
                        <div className="space-y-2">
                            {category.skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center space-x-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};