import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RiTailwindCssLine, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { SiGlassdoor } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Footer() {
          return (
                    <div className="bg-blue-50 dark:bg-gradient-to-r from-blue-950 to-blue-800 dark:text-white h-52 font-Inter">
                              <div className="head-footer lg:mb-12 mb-9  ">
                                        <div className="flex h-16 justify-between items-center mx-5 lg:mx-20 lg:pt-20 pt-10">
                                                  <div>
                                                            <h3 className="text-sky-950 dark:text-white font-bold text-2xl font-Inter">
                                                                      Shreyash <span className="lg:inline hidden">Sinha.</span>
                                                            </h3>
                                                  </div>

                                                  <div className="hidden md:flex justify-between items-center text-sm">

                                                            <div className=" text-sky-700">
                                                                      <a href="#hero-section">Home</a>
                                                            </div>
                                                            <div className="ml-6"> <a href="#skill-sections">Expertise</a></div>
                                                            <div className="ml-6"> <a href="#about">About</a></div>

                                                            <div className="ml-6"> <a href="#journey">Journey</a></div>
                                                            <div className="ml-6"> <a href="#contact-me">Collaborations</a></div>

                                                  </div>

                                                  <div className="md:flex flex justify-around items-center">
                                                           <div className="ml-4 text-xl"><a href="https://www.linkedin.com/in/shreyash-sinha-1a87b1247/"><FaLinkedin></FaLinkedin></a></div>
                                                           <div className="ml-4 text-xl"><a href="https://x.com/Shreyash8258603"><RiTwitterXFill></RiTwitterXFill></a></div>
                                                           <div className="ml-4 text-xl"><a href="mailto:shreyash.cs22@bmsce.ac.in"><SiGmail></SiGmail></a></div>
                                                           <div className="ml-4 text-xl"><a href="https://github.com/shreyashSinha1208"><FaGithub></FaGithub></a></div>
                                                  </div>
                                        </div> 
                              </div>

                              <hr className="border-[1px] lg:mx-20 mx-5 border-black dark:border-white" />
                              
                              <div className="bottom-footer lg:flex justify-between lg:mx-20">
                                        <div className="lg:flex h-16 justify-between items-center mx-5 lg:mx-2 ">
                                                  <p className="lg:text-left lg:mt-0 mt-10 text-center">Made with &#10084;&#65039; using <SiTailwindcss className="inline"></SiTailwindcss> </p> 
                                        </div>
                                        <div className="lg:flex hidden justify-around items-center">
                                                           <div className="ml-3 text-sm hover:underline"><a href="">Privacy Policy</a></div>
                                                           <div className="ml-3 text-sm hover:underline"><a href="">Terms of Service</a></div>
                                                           <div className="ml-3 text-sm hover:underline"><a href="">Cookies Settings</a></div>
                                         </div>
                              </div>

                              

                    </div>
          );
}