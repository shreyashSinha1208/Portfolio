import { FaReact } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export default function Skills() {
          return (
                    <div id="skill-sections" className="skills-sections dark:text-white scroll-smooth dark:bg-blue-950">
                              <div className="skills lg:mx-20 mx-10  py-36">
                                        <h1 className="text-lg font-bold italic">My Skills</h1>
                                        <h1 className="text-4xl dark:text-white text-blue-950 font-bold mt-5">My Expertise.</h1>
                                        <div className="skill-card grid grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
                                                  <div className="h-64 w-60 lg:w-64 mx-auto rounded-lg bg-blue-100 dark:bg-blue-400 font-Inter border-b-4 border-b-slate-900 dark:border-white transition-transform cursor-pointer duration-500 hover:scale-105">
                                                            <div className="individual-skill dark:bg-bl lg:py-0 py-6 lg:mt-5 ml-5">
                                                                      <div className="skill-img bg-white w-12 dark:text-blue-950 h-12 rounded-lg flex items-center justify-center shadow-md">
                                                                                <FaReact className="h-8 w-8 animate-spin" />
                                                                      </div>
                                                                      <div className="skill-desc dark:text-blue-950">
                                                                                <h1 className="text-lg font-bold mt-6 mb-3">App Development</h1>
                                                                                <p className="text-[0.8rem] mr-8 mt-8">React Native enables cross-platform mobile app development using JavaScript and React.</p>
                                                                      </div>
                                                            </div>
                                                  </div>

                                                  <div className="h-64 w-60 lg:w-64 mx-auto rounded-lg bg-blue-100 dark:bg-blue-400 font-Inter transition-transform duration-500 hover:scale-105 cursor-pointer">
                                                            <div className="individual-skill mt-5 ml-5 lg:py-0 py-2">
                                                                      <div className="skill-img bg-white w-12 h-12 dark:text-blue-950 rounded-lg flex items-center justify-center shadow-md">
                                                                                <FaJava className="h-8 w-8 animate-pulse" />
                                                                      </div>
                                                                      <div className="skill-desc dark:text-blue-950">
                                                                                <h1 className="text-lg font-bold mt-6 mb-3">Java & DSA</h1>
                                                                                <p className="text-[0.8rem] mr-8 mt-8">Data Structures & Algorithms using Java to solve real world problems and gain expertise.</p>
                                                                      </div>
                                                            </div>
                                                  </div>

                                                  <div className="h-64 w-60 lg:w-64 mx-auto rounded-lg bg-blue-100 dark:bg-blue-400 font-Inter transition-transform duration-500 hover:scale-105 cursor-pointer">
                                                            <div className="individual-skill mt-5 ml-5 lg:py-0 py-2">
                                                                      <div className="skill-img bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                                                                                <GrUserExpert className="h-8 w-8 animate-bounce dark:text-blue-950" />
                                                                      </div>
                                                                      <div className="skill-desc dark:text-blue-950">
                                                                                <h1 className="text-lg font-bold mt-6 mb-3">UI & UX Design</h1>
                                                                                <p className="text-[0.8rem] mr-8 mt-8">UI and UX design enhance user interaction, ensuring intuitive, enjoyable, and efficient digital experiences.</p>
                                                                      </div>
                                                            </div>
                                                  </div>

                                                  <div className="h-64 w-60 lg:w-64 mx-auto rounded-lg bg-blue-100 dark:bg-blue-400 font-Inter transition-transform duration-500 hover:scale-105 cursor-pointer">
                                                            <div className="individual-skill mt-5 ml-5 lg:py-0 py-2">
                                                                      <div className="skill-img dark:text-blue-950 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                                                                                <FaCode className="h-8 w-8 animate-spin" />
                                                                      </div>
                                                                      <div className="skill-desc dark:text-blue-950">
                                                                                <h1 className="text-lg font-bold mt-6 mb-3">Web Development</h1>
                                                                                <p className="text-[0.8rem] mr-8 mt-8">Webflow design simplifies website creation enabling dynamic web experiences effortlessly.</p>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
}
