'use client'
import React from "react";
import Image from "next/image";
const Projects: React.FC = () => {
    const projects = [
       
        {
            Image: "/weater.jpg",
            name: "Weather",
            description: "Build calculator I spent time one day building this calculator and it got top.",
            tech: "HTML, Javascript, Tailwind CSS",
            link: "https://pp-weather-azure.vercel.app/"
        },
       
        {
            Image: "/menimalblok.jpg",
            name: "Menimal Blog",
            description: "Developed the back-end of a Mart Management System to handle purchases, sales, inventory, stock alerts, expiration notifications, customer loyalty points, and user role management.",
            tech: "Discord, Notion, Postman, MySQL Workbench, Git & Github, NodeJs, Prisma ORM, Cloudinary for file media storage",
            link: "https://minimal-blog-beryl.vercel.app/"
        },
        {
            Image: "/bicycle.jpg",
            name: "Bicycle",
            description: "A web application for farmers to manage their crops, track weather, and receive notifications.",
            tech: "React, Strapi, Tailwind CSS",
            link: "https://limsopheak16.github.io/Selling-Bicycle/"
        },
        {
            Image: "/library.jpg",
            name: "Library",
            description: "A web application for control a book in library that student borrow ",
            tech: "Javascript, HTML, Strapi, Tailwind CSS",
            link: "https://agro-market-mauve.vercel.app/"
        },
        {
            Image: "/fairytail.jpg",
            name: "Fairy Tale",
            description: "A web application for users to read and share fairy tales.",
            tech: "Javascript, Bootstrap, HTML, CSS",
            link: "https://fairy-tale-xi.vercel.app/index.html"
        },
        {
            Image: "/blog.png",
            name: "Blog Post",
            description: "A web application for users to read and share blog posts.",
            tech: "React Js, Tailwind CSS, Zustand",
            link: "https://blogpost-one-rho.vercel.app/"
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
                        <div key={index} className="z-10 bg-gray-800 rounded-lg p-6 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={project.Image}
                                    alt={project.name}
                                    width={500}
                                    height={500}
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
