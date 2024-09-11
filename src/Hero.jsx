import './index.css';
import { FaDownload } from "react-icons/fa6";
import Resume from './assets/Shreyash_Sinha_Resume.pdf'
import DeveloperGif2 from './assets/Developer2.gif'


export default function Hero() {





          return (
                    <div id='hero-section' className="bg-blue-50 dark:text-white font-Inter lg:flex justify-around items-center lg:h-[90vh] h-[83vh] ">
                              <div className="hero-content flex ml-8 lg:mt-0 ">
                                        <div className="hero-text lg:mt-0 lg:pt-0  pt-32 ">
                                                  <h1 className="text-md font-black lg:block hidden lg:font-bold lg:mb-5 animate-typing overflow-hidden whitespace-nowrap ">Hey, I am Shreyash!</h1>
                                                  <h1 className="lg:mt-2 mt-20  mb-1 transition animate-typing font-bold overflow-hidden whitespace-nowrap text-[1.47rem] lg:text-4xl tracking-wide">I am a <span className="text-sky-700 dark:text-blue-500 font-black">front-End Developer</span>
                                                            <br />
                                                            and <span className="text-sky-700 dark:text-sky-500 font-black ">Software Engineer.</span></h1>
                                                  <p className="mt-0 lg:mx-0  text-sm transition animate-typing overflow-hidden whitespace-nowrap ">Experienced Frontend and Software Engineer <br className='lg:hidden'/> skilled in crafting dynamic, <br className='hidden lg-block' /> <span className='lg:block'>responsive web <br className='lg:hidden '/> applications ensuring seamless user experiences.</span> </p>
                                                  <div className="hero-buttons flex">
                                                  <button className="bg-sky-950 hover:bg-white dark:bg-blue-800 text-white hover:text-sky-950 font-bold py-2 px-4 rounded mt-5 transition duration-500 ease-out hover:ease-in mr-5">
                                                  Contact Me</button>
                                                  <button className="bg-transparent dark:bg-white hover:bg-sky-950 text-sky-950 font-semibold mt-5 hover:text-white py-2 px-4 border border-sky-950 hover:border-transparent rounded transition duration-500 ease-out hover:ease-in">
                                                                      <a target="_blank"
                                                                                href={Resume}
                                                                                download={"Shreyash_Sinha_Resume.pdf"} className=" flex items-center space-x-2">
                                                                      <span>Download CV</span> <FaDownload className='animate-bounce'/>
                                                                      </a>
                                                            </button>
                                                  </div>
                                                  
                                                  
                                        </div>
                              </div>
                              <div className="hero-image px-0 py-0 w-2/5 mt-5 ">
                                        <div className="parent-hero-image ">
                                                  <img src={DeveloperGif2} className="shadow-lg bg-white hidden lg:block rounded-full lg:ml-10 lg:h-4/5 lg:w-4/5" alt="Developer-gif"  />
                                        </div>
                              </div>
                    </div>
          )
}