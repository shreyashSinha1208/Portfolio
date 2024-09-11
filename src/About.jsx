import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import AboutImage from './assets/about_me.jpg'
import AboutGif from './assets/About-Me.gif'

export default function About() {
          return (
                    <div id="about" className="bg-white  dark:bg-gradient-to-r from-blue-950 to-blue-800 font-Inter lg:flex lg:py-24 py-6 dark:text-white lg:px-20 px-10 justify-around items-center h-[90vh] ">
                               <div className="hero-image lg:block hidden px-0 py-0 w-4/5 mt-5 ">
                                        <div className="parent-hero-image ">
                                                  <img src={AboutGif} className="lg:ml-20 dark:bg-white rounded-full bg-whitedark:rounded-full lg:h-full lg:w-full" alt="About-Image" />
                                        </div>
                              </div>
                              <div className="hero-content flex lg:mt-0  ">
                                        <div className="hero-text lg:mt-0 lg:ml-60 mt-12 mb-20">
                                                  <h1 className="text-md font-black italic lg:font-bold lg:mb-5">About</h1>
                                                  <h1 className="mt-2 mb-4 transition lg:font-bold text-4xl font-bold text-blue-950 dark:text-white tracking-wide">About Me.</h1>
                                                  <p className="mt-0  dark:text-white text-gray-700 lg:mx-0 text-md font-light">I am a front-end developer who is living in Varanasi, UP, India.
                                                            I have built projects <br className="lg: hidden" />  based on various frameworks, including both front-end and back-end development.
                                                            
                                                             I love spending time with my friends, my hobby is coding and I like watching Youtube, surfing X and I like eating junk too.</p>           
                                                 
                                                  <p className="mt-5 text-gray-800 dark:text-white lg:mx-0 text-md font-light  ">Currently pursing my B.E. in Computer Science & Engineering, I had the   oppertunity to explore various other topics such as 
                                                   Operating Systems, Database Management Systems, Cryptography, Software Engineering.</p>
                                        </div>
                              </div>
                             
                    </div>
          )
};