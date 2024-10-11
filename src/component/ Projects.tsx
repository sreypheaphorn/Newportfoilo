

// 'use client';
// import React, { useEffect, useState } from "react";

// interface Project {
//     id: number;
//     Title: string;
//     Description: string;
//     Image: {
//         url: string;
//     };
// }

// const Projects: React.FC = () => {
//     const [projects, setProjects] = useState<Project[]>([]);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const res = await fetch("http://localhost:1337/api/projects?populate=*");
//                 const data = await res.json();
//                 // Map API response to the desired format
//                 const fetchedProjects = data.data.map((item: any) => ({
//                     id: item.id,
//                     Title: item.Title,
//                     Description: item.Description,
//                     Image: {
//                         url: item.Image.url
//                     }
//                 }));

//                 setProjects(fetchedProjects);
//             } catch (error) {
//                 console.error("Error fetching projects:", error);
//             }
//         };

//         fetchProjects();
//     }, []); // Empty dependency array ensures this runs only once after the component mounts.

//     return (
//         <section className="bg-black text-white py-20">
//             <div className="max-w-7xl mx-auto px-6 text-center">
//                 <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 text-4xl mb-4">
//                     Projects:
//                 </h2>
//                 <p className="mb-10">
//                     I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.
//                 </p>

//                 {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {projects.map((project) => (
//             <div key={project.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
//               <div className="flex justify-center mb-4">
//                 <img src={project.Image.url} alt={project.Title} className="" />
//               </div>
//               <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.Title}</h3>
//               <p className="mb-4">{project.Description}</p>
//             </div>
//           ))}
//         </div> */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                     {projects.map((project) => (
//                         <div key={project.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
//                             <div className="flex justify-center mb-4">
//                                 {/* Display the image with the full URL */}
//                                 <img
//                                     src={`http://localhost:1337${project.Image.url}`}  // Append the base URL
//                                     alt={project.Title}
//                                     className="w-full h-auto object-cover rounded-md"  // Added styling for better image rendering
//                                 />
//                             </div>
//                             <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.Title}</h3>
//                             <p className="mb-4">{project.Description}</p>
//                         </div>
//                     ))}
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default Projects;



'use client';
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface Project {
    id: number;
    Title: string;
    Description: string;
    Image: {
        url: string;
    };
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("http://localhost:1337/api/projects?populate=*");
                const data = await res.json();
                // Map API response to the desired format
                const fetchedProjects = data.data.map((item: any) => ({
                    id: item.id,
                    Title: item.Title,
                    Description: item.Description,
                    Image: {
                        url: item.Image.url
                    }
                }));

                setProjects(fetchedProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []); // Empty dependency array ensures this runs only once after the component mounts.

    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 text-4xl mb-4">
                    Projects:
                </h2>
                <TypeAnimation
                    sequence={[
                        'This is My Projects',
                        1000,
                        'Fullstack developer',
                        1000,
                        'UI & UX Designer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}  // Fixed the repeat value to ensure it keeps looping
                />
                <p className="mb-10">
                    I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <div className="flex justify-center mb-4">
                                {/* Display the image with the full URL */}
                                <img
                                    src={`http://localhost:1337${project.Image.url}`}  // Append the base URL
                                    alt={project.Title}
                                    className="w-full h-auto object-cover rounded-md"  // Added styling for better image rendering
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.Title}</h3>
                            <p className="mb-4">{project.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

