// 'use client'
// import React, { useEffect, useState } from "react";

// interface Skill {
//     id: number;
//     Title: string;
//     Image: {
//         url: string;
//         alt: string;
//     };
// }

// const About: React.FC = () => {
//     const [skills, setSkills] = useState<Skill[]>([]);

//     // Fetch skills data from API
//     useEffect(() => {
//         async function fetchSkills() {
//             try {
//                 const response = await fetch("http://localhost:1337/api/skills?populate=*");
//                 const data = await response.json();
//                 setSkills(data.data); // Assuming your API returns data in `data.data`
//             } catch (error) {
//                 console.error("Error fetching skills data:", error);
//             }
//         }
//         fetchSkills();
//     }, []);

//     return (
//         <section className="bg-black text-yellow-50 flex justify-center">
//             <div className="w-[70%] flex flex-col justify-between items-center px-6 pt-12">
//                 {/* Text Section */}
//                 <div className="w-[100%] flex justify-between items-center px-6 pt-12">
//                     <div className="max-w-8xl">
//                         <h1 className="text-3xl font-bold mb-6 hover:text-pink-700 transition-all duration-300 ease-in-out">
//                             Hello I am Sreyphea
//                         </h1>

//                         <p className="text-lg mb-8">
//                             Hi, My name is Phorn Sreyphea, I specialize in creating clean, efficient, <br />
//                             and user-friendly websites and applications. I'm a passionate web developer <br />
//                             with a strong background in building responsive and dynamic websites. <br />
//                             With expertise in modern web technologies like HTML, CSS, JavaScript, React, and Next.js.
//                         </p>

//                         <div className="space-x-10 mt-10 flex">
//                             <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-700 text-white px-7 py-3 rounded-full hover:from-secondary-600 hover:to-primary-400 transition-all">
//                                 Hire Me
//                             </button>
//                             <button className="text-white border border-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all">
//                                 Download CV
//                             </button>
//                         </div>
//                     </div>

//                     {/* Profile Picture Section */}
//                     <div className="mt-10 flex justify-center">
//                         <img
//                             src="photo.jpg"
//                             alt="Sreyphea Profile Picture"
//                             className="rounded-full w-[350px] h-[350px] object-cover shadow-lg"
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <h2 className="text-4xl font-bold text-white mb-4 flex justify-center mt-5">About Me</h2>
//                     <p className="mb-10">
//                         I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
//                     </p>
//                 </div>

//                 {/* Skills Section */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-16 w-[100%] ">
//                     {skills.map((skill) => (
//                         <div key={skill.id} className="text-white border border-white px-6 py-3 p-4 rounded-lg flex flex-col items-center">
//                             <p>{skill.Title}</p>
//                             <img
//                                 src={`http://localhost:1337${skill.Image.url}`} // Ensure this path is correct
//                                 alt={skill.Title}
//                                 className="w-[70%] h-[70%] mt-5"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;






'use client'

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

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
        <section className="bg-black text-yellow-50 flex justify-center">
            <div className="w-[70%] flex flex-col justify-between items-center px-6 pt-12">
                {/* Text Section */}
                <div className="w-[100%] flex justify-between items-center px-6 pt-12">
                    <div className="max-w-8xl">
                        <h1 className="text-3xl font-bold mb-6 hover:text-pink-700 transition-all duration-300 ease-in-out">
                            Hello I am Sreyphea
                        </h1>

                        <p className="text-lg mb-8">
                            Hi, My name is Phorn Sreyphea, I specialize in creating clean, efficient, <br />
                            and user-friendly websites and applications. I'm a passionate web developer <br />
                            with a strong background in building responsive and dynamic websites. <br />
                            With expertise in modern web technologies like HTML, CSS, JavaScript, React, and Next.js.
                        </p>

                        <div className="space-x-10 mt-10 flex">
                            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-700 text-white px-7 py-3 rounded-full hover:from-secondary-600 hover:to-primary-400 transition-all">
                                Hire Me
                            </button>
                            <button className="text-white border border-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all">
                                Download CV
                            </button>
                        </div>
                    </div>

                    {/* Profile Picture Section */}
                    <div className="mt-10 flex justify-center">
                        <img
                            src="photo.jpg"
                            alt="Sreyphea Profile Picture"
                            className="rounded-full w-[350px] h-[350px] object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Animated Text Section */}
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-4xl mb-4 flex justify-center">
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
                <div>
                    {/* <h2 className="text-4xl font-bold text-white mb-4 flex justify-center mt-5">About Me</h2> */}
                    <p className="mb-10 text-center text-xl">
                I’m 17 year old.I’m a full stack developer and designer.
                I like technology so I want to create a website to help users in society.</p>
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-16 w-[100%]">
                    {skills.map((skill) => (
                        <div key={skill.id} className="text-white border border-white px-6 py-3 p-4 rounded-lg flex flex-col items-center">
                            <p>{skill.Title}</p>
                            <img
                                src={`http://localhost:1337${skill.Image.url}`} // Ensure this path is correct
                                alt={skill.Image.alt} // Use alt text
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






