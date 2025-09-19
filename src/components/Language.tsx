export const Language = () => {
    const languages = [
        {
            name: "English",
            level: "Intermediate"
        },
        {
            name: "Ukrainian", 
            level: "Native"
        },
        {
            name: "Russian",
            level: "Native"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="border-b-2 border-blue-500 pb-2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    Languages
                </h2>
            </div>
            
            <div className="space-y-3">
                {languages.map((language, index) => (
                    <div key={index} className="flex items-start space-x-2">
                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                            {language.name}:
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                            {language.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};