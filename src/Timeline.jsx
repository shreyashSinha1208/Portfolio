import { FaArrowRight } from "react-icons/fa";

export default function Timeline() {

          return (
                    <div className="bg-blue-50 dark:bg-blue-950 lg:ml-0 py-10">


                              <div id="journey" className="timeline lg:ml-20 lg:px-0 px-10 lg:mr-40 font-Inter ">
                                        <h1 className="text-4xl font-bold mt-5 mb-12 dark:text-white text-blue-950">My Journey.</h1>
                                        <ol className="relative border-l-2 border-gray-200 dark:border-b-blue-950">
                                                  <li className="mb-20 ms-4 dark:text-white ">
                                                            <div className="absolute w-3 h-3 lg:bg-gray-200 bg-gray-500  rounded-full  -start-1.5 border border-white dark:border-white dark:bg-white"></div>
                                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2010 - April 2021</time>
                                                            <h3 className="text-lg dark:text-white  font-semibold text-gray-900">Completed Class XII from <span className="font-bold">St. Joseph's Convent School,</span> Varanasi. </h3>
                                                            <p className="mb-3 text-base dark:text-white font-light text-gray-500 ">Participated in various Olympiads, Quizzes and scored 94.2% in boards.</p>
                                                            <button className="bg-transparent dark:bg-white  hover:bg-sky-950 text-sky-950 font-semibold hover:text-white py-2 px-4 border border-sky-950 hover:border-transparent rounded transition duration-500 ease-out hover:ease-in">
                                                                      <a target="_blank" href="https://www.sjcsvns.org/" className=" flex items-center space-x-2">
                                                                                <span>Read More</span>
                                                                                <FaArrowRight />
                                                                      </a>
                                                            </button>
                                                  </li>
                                                  <li className="mb-20 ms-4">
                                                            <div className="absolute w-3 h-3 lg:bg-gray-200 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-white animate-ping"></div>
                                                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2022 - Present</time>
                                                            <h3 className="text-lg dark:text-white font-semibold text-gray-900 ">Started College Journey in <span className="font-bold">BMS College of Engineering</span>, Bengaluru, Karnataka.</h3>
                                                            <p className="text-base dark:text-white font-light text-gray-500 0">Participated in various events and secured 9.161 CGPA till my 3rd Semester. I have core knowledge in Java, C, Web and App Development.</p>
                                                            <button className="bg-sky-950 dark:bg-blue-500 hover:bg-white text-white hover:text-sky-950 font-bold py-2 px-4 rounded mt-2 transition duration-500 ease-out hover:ease-in inline-flex items-center">
                                                                      <a target="_blank" href="https://www.bmsce.ac.in/" className="flex items-center space-x-2">
                                                                                <span>More Details</span>
                                                                                <FaArrowRight />
                                                                      </a>
                                                            </button>
                                                  </li>
                                                  <li className="mb-2 ms-4">
                                                            <div className="absolute w-3 h-3 lg:bg-gray-200 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-white animate-ping"></div>
                                                            <time className="mb-1 text-sm font-light text-gray-400 dark:text-gray-500">March 2024 - Present</time>
                                                            <h3 className="text-lg dark:text-white font-semibold text-gray-900 ">Projects in <span className="font-bold">Web Development</span> domain.</h3>
                                                            <p className="text-base dark:text-white font-light text-gray-500 ">Created UrbanGlow and WanderLust website for college projects and personal skill Developments. I learnt ReactJS, NodeJs, Tailwind CSS, Bootstrap, ExpressJS, MongoDB and other frameworks.</p>
                                                  </li>
                                        </ol>
                              </div>
                    </div>
          );

};


