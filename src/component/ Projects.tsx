'use client';
import React from "react";

const Projects: React.FC = () => {
    const projects = [
       
        {
            image: "https://raw.githubusercontent.com/FabianCruz-0/Calculator-JS-Web-Design/main/goal-design/desktop.jpg",
            name: "Calculator",
            description: "Build calculator I spent time one day building this calculator and it got top.",
            tech: "HTML, Javascript, Tailwind CSS",
            link: "https://hackthon-g7-tbtn.vercel.app/"
        },
       
        {
            image: "https://simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2Fcleanshot-2023-10-31-at-22-50-22-at-2x-67735a035af98024505064.png&w=1280&q=75",
            name: "E-commerce",
            description: "Developed the back-end of a Mart Management System to handle purchases, sales, inventory, stock alerts, expiration notifications, customer loyalty points, and user role management.",
            tech: "Discord, Notion, Postman, MySQL Workbench, Git & Github, NodeJs, Prisma ORM, Cloudinary for file media storage",
            link: "https://laiheang.jetdev.life/login"
        },
        {
            image: "https://www.ui-themes.com/content/images/size/w600/2022/08/argon-dashboard-tailwind-thumb-min.jpg",
            name: "Agro Admin",
            description: "A web application for farmers to manage their crops, track weather, and receive notifications.",
            tech: "React, Strapi, Tailwind CSS",
            link: "https://admin-agro-frondend.vercel.app/"
        },
        {
            image: "https://i2.wp.com/blog.contactpigeon.com/wp-content/uploads/2023/02/argos-omnichannel-strategy-home-page.png?w=821&ssl=1",
            name: "Agro Market",
            description: "A web application for farmers to sell their products, manage orders, and track sales.",
            tech: "Javascript, HTML, Strapi, Tailwind CSS",
            link: "https://agro-market-mauve.vercel.app/"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8RXnWUT60pMI98A8LUd6rrhRUwHmkV_4dw&s",
            name: "Fairy Tale",
            description: "A web application for users to read and share fairy tales.",
            tech: "Javascript, Bootstrap, HTML, CSS",
            link: "https://fairy-tale-xi.vercel.app/index.html"
        },
        {
            image: "https://images01.nicepagecdn.com/page/87/29/website-template-preview-87293.jpg",
            name: "Blog Post",
            description: "A web application for users to read and share blog posts.",
            tech: "React Js, Tailwind CSS, Zustand",
            link: "https://blog-post-laihieng.vercel.app/"
        }
    ];

    return (
        <section id="project" className="bg-black text-white py-5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-4xl  flex justify-center">
                    Projects<br /><br />
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.name}</h3>
                            <p className="mb-4">{project.description}</p>
                            <p className="text-sm text-gray-400">{project.tech}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-4 block">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

// 'use client';
// import React, { useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";

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
//                 {/* <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700 text-4xl mb-4">
//                     Projects:
//                 </h2> */}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-4xl  flex justify-center">
//                     Projects<br /><br />
//                 </span>


//                 <TypeAnimation
//                     sequence={[
//                         'This is My Projects',
//                         1000,
//                         'I use learned tools',
//                         1000,
//                         'A bout the Web site',
//                         1000,
//                     ]}
//                     wrapper="span"
//                     speed={50}
//                     style={{ fontSize: '2em', display: 'inline-block' }}
//                     repeat={Infinity}  // Fixed the repeat value to ensure it keeps looping
//                 />
//                 <p className="mb-10">
//                     I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects.
//                 </p>

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

