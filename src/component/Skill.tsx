
'use client'
import React from "react";

import Image from "next/image";
export const Skill = () => {
  return (
    <>

    <div id="skill" className="w-[100%] h-[100%] bg-black">
      <span className="text-[50px] flex justify-center font-bold mb-[50px]  bg-gradient-to-r from-blue-800  to-purple-500 bg-clip-text text-transparent bg-black">
        Skills
      </span>

      {/* <div className="flex gap-10 justify-center flex-wrap width-[50%]  max-w-[1200px] "> */}
      <div className="flex gap-10 justify-center flex-wrap w-[80%] max-w-[1200px] mx-auto z-10">


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/html.png"
              alt="HTML"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">HTML</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/css.webp"
              alt="CSS"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">CSS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/javascript.webp"
              alt="javascript"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Javascript</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/React.webp"
              alt="React.js"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">React.JS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/nextjs-icon-dark-background.png"
              alt="next.js"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Next.JS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div><div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/Strapi.png"
              alt="HTML"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Strapi</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>



        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/postman.webp"
              alt="HTML"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Postman</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>



        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/Postgresql_elephant.svg.png"
              alt="HTML"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">PostgreSQL</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/mongcompas.jpg"
              alt="HTML"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">MongoDB</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/github.jpg"
              alt="github"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">GitHub</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/docker.jpg"
              alt="docker"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Docker</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/bootstrap.jpg"
              alt="HTML"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Bootstrap</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/figma.jpg"
              alt="Figma"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Figma</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/tailwind.jpg"
              alt="taiwind"
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>
          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Tailwind</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <Image
              width={500}
              height={500}
              
              src="/all.jpg"
              alt="exspress"
              
              className="w-full h-full object-cover bg-slate-600"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">Express</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg">
              MEDIUM
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[200px]">
        <div className="w-[70%] border-b-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:100%_4px] bg-bottom"></div>
      </div>
      </div>
    </>
  );
};

export default Skill;