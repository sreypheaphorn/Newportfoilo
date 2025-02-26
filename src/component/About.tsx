'use client'

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

interface Skill {
    id: number;
    Title: string;
    Image: {
        url: string;
        alt?: string; // Optional field for safety
    };
}

const About: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    // Fetch skills data from API
    useEffect(() => {
        async function fetchSkills() {
            try {
                const response = await fetch("http://localhost:1337/api/skills?populate=*");
                const data = await response.json();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setSkills(data.data.map((item: any) => ({
                    id: item.id,
                    Title: item.Title,
                    Image: {
                        url: item.Image.url,
                        alt: item.Image.alternativeText || item.Title  // Use alternativeText or fallback to Title
                    }
                })));
            } catch (error) {
                console.error("Error fetching skills data:", error);
            }
        }
        fetchSkills();
    }, []);

    return (
        <section id="about" className="bg-black text-yellow-50 flex justify-center ">
            <div className="w-[70%] flex flex-col justify-between items-center px-6 pt-12">
                {/* Text Section */}
                <div className="w-[100%] flex justify-between items-center px-6 pt-12">
                    <div className="max-w-8xl">
                        <h1 className="text-3xl font-bold mb-6 text-pink-700 hover:text-white transition-all duration-300 ease-in-out">
                            <TypeAnimation
                                sequence={[
                                    'Hello I am Sreyphea',
                                    1000,
                                    'Nice to meet you',
                                    1000,

                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />                        </h1>

                        <p className="text-lg mb-8">
                            Hi, My name is Phorn Sreyphea, I specialize in creating clean, efficient, <br />
                            and user-friendly websites and applications. I&apos;m a passionate web developer <br />
                            with a strong background in building responsive and dynamic websites. <br />
                            With expertise in modern web technologies like HTML, CSS, JavaScript, React, and Next.js.
                        </p>

                        <div className="space-x-10 mt-10 flex">
                            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-700 text-white px-7 py-3 rounded-full hover:from-secondary-600 hover:to-primary-400 transition-all">
                                Hire Me
                            </button>
                            <a href="/CV.pdf" className="w-full lg:w-auto">

                                <button className="text-white border border-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all">
                                    Download CV
                                </button></a>
                        </div>
                    </div>

                    {/* Profile Picture Section */}
                    <div className="z-10 mt-10 flex justify-center  ">
                        <Image
                            src="/phornsreyphea.jpg"
                            alt="Phorn"
                            width={500}
                            height={500}
                            className="rounded-full w-[350px] h-[350px] object-cover shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 "

                        />
                    </div>
                </div>

                {/* Animated Text Section */}
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-4xl  flex justify-center">
                    About Me<br /> <br />
                </span>


                <TypeAnimation
                    sequence={[
                        'My name is Phorn Sreyphea',
                        1000,
                        'Fullstack developer',
                        1000,
                        'UI & UX Designer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />

                {/* About Me Section */}

                <section id="about" className="">
                    <div className="z-10">
                        {/* <h2 className="text-4xl font-bold text-white mb-4 flex justify-center mt-5">About Me</h2> */}
                        <p className="mb-10 text-center text-xl">
                            I&apos;m 17 year old.I&apos;m a full stack developer and designer.
                            I like technology so I want to create a website to help users in society.</p>
                        {/* <div className="max-w-7xl mx-auto px-6"> */}
                        <p className="text-lg text-gray-300 text-center mb-6">
                            As a Full-Stack Developer, I bring a comprehensive skill set in both front-end and back-end technologies.
                        </p>
                        <p className="text-lg text-gray-300 text-center mb-12">
                            With expertise in designing, developing, and maintaining applications from the ground up, I ensure seamless user experiences and robust back-end systems.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-purple-800 bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-purple-200">Frontend Development</h3>
                            <p className="text-gray-300">
                                Expertise in modern front-end frameworks like React, Vue.js, and Angular, delivering dynamic and responsive web applications.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-gray-200">Backend Development</h3>
                            <p className="text-gray-300">
                                Skilled in server-side technologies such as Node.js, Express, and Django, ensuring scalable and efficient server architectures.
                            </p>
                        </div>
                        <div className="p-6 bg-purple-800 bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-purple-200">Database Management</h3>
                            <p className="text-gray-300">
                                Experience with SQL and NoSQL databases like MySQL, MongoDB, and PostgreSQL for efficient data storage and retrieval.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-gray-200">DevOps & Deployment</h3>
                            <p className="text-gray-300">
                                Proficient in containerization (Docker), CI/CD pipelines, and cloud platforms like AWS and Azure for seamless deployment.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-4xl  flex justify-center">Building Robust Solutions</h3>
                        {/* <p className="text-lg text-gray-300 mb-4">
                                My passion lies in creating scalable, maintainable, and high-performing applications that cater to user needs and business goals.
                            </p>
                            <p className="text-lg text-gray-300">
                                With a deep understanding of both front-end and back-end development, I bridge the gap between design and functionality to build solutions that are both beautiful and powerful.
                            </p> */}
                    </div>
                    {/* </div> */}
                </section>

                {/* Skills Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-16 w-[100%]">
                    {skills.map((skill) => (
                        <div key={skill.id} className="text-white border border-white px-6 py-3 p-4 rounded-lg flex flex-col items-center">
                            <p>{skill.Title}</p>
                            <Image
                                src={`http://localhost:1337${skill.Image.url}`} // Ensure this path is correct
                                alt={"Skill Image"} // Use alt text
                                width={500}
                                height={500}
                                className="w-[70%] h-[70%] mt-5 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;






