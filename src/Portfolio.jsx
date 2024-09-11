import UrbanGlow from './assets/UrbanGlow.png';
import WanderLust from './assets/WanderLust.png';
import WeatherApp from './assets/WeatherApp.png';




export default function Portfolio() {
          return (
                    <div>


                              <div className="portfolio-section lg:mx-20 mx-10 font-Inter">
                                        <div className="portfolio-header pt-36 pb-20">
                                                  <h1 className="text-lg font-bold italic">Portfolio</h1>
                                                  <h1 className="text-4xl dark:text-white text-blue-950 font-bold mt-5">My Projects.</h1>
                                        </div>

                                        <div class="p-0">
                                                  <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
                                                            <div class="rounded overflow-hidden shadow-lg">

                                                                      <a href="#"></a>
                                                                      <div class="relative">
                                                                                <a href="#">
                                                                                          <img class="w-full"
                                                                                                    src={WanderLust}
                                                                                                    alt="WanderLust-png"></img>
                                                                                          <div
                                                                                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                                                                          </div>
                                                                                </a>


                                                                      </div>
                                                                      <div class="px-6 py-4">

                                                                                <a href="#"
                                                                                          class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                                                                                          View in Newyork City</a>
                                                                                <p class="text-gray-500 text-sm">
                                                                                          The city that never sleeps
                                                                                </p>
                                                                      </div>
                                                                      <div class="px-6 py-4 flex flex-row items-center">
                                                                                <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                                                                          <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                                                                                    xml:space="preserve">
                                                                                                    <g>
                                                                                                              <g>
                                                                                                                        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                                                                                                              </g>
                                                                                                    </g>
                                                                                          </svg>
                                                                                          <span class="ml-1">6 mins ago</span></span>
                                                                      </div>
                                                            </div>
                                                            <div class="rounded overflow-hidden shadow-lg">
                                                                      <a href="#"></a>
                                                                      <div class="relative">
                                                                                <a href="#">
                                                                                          <img class="w-full"
                                                                                                    src={WeatherApp}
                                                                                                    alt="WeatherApp-png"
                                                                                                    className='w-full h-80'>
                                                                                                    
                                                                                                    </img>
                                                                                          <div
                                                                                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                                                                          </div>
                                                                                </a>



                                                                      </div>
                                                                      <div class="px-6 py-4">

                                                                                <a href="#"
                                                                                          class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                                                                                          Pizza in Town</a>
                                                                                <p class="text-gray-500 text-sm">
                                                                                          The collection of best pizza images in Newyork city
                                                                                </p>
                                                                      </div>
                                                                      <div class="px-6 py-4 flex flex-row items-center">
                                                                                <span href="#"
                                                                                          class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                                                                                          <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                                                                                    xml:space="preserve">
                                                                                                    <g>
                                                                                                              <g>
                                                                                                                        <path
                                                                                                                                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                                                                                        </path>
                                                                                                              </g>
                                                                                                    </g>
                                                                                          </svg>
                                                                                          <span class="ml-1">3 mins read</span></span>
                                                                      </div>
                                                            </div>
                                                            <div class="rounded overflow-hidden shadow-lg">

                                                                      <a href="#"></a>
                                                                      <div class="relative">
                                                                                <a href="#">
                                                                                          <img class="w-full"
                                                                                                       src={UrbanGlow}
                                                                                                    alt="UrbanGlow-png"
                                                                                                    className='w-full h-full'
                                                                                          ></img>
                                                                                          <div
                                                                                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                                                                          </div>
                                                                                </a>

                                                                      </div>
                                                                      <div class="px-6 py-4">

                                                                                <a href="#"
                                                                                          class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                                                                                          Salad Images ever</a>
                                                                                <p class="text-gray-500 text-sm">
                                                                                          The collection of best salads of town in pictures
                                                                                </p>
                                                                      </div>
                                                                      <div class="px-6 py-4 flex flex-row items-center">
                                                                                <span href="#"
                                                                                          class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                                                                                          <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                                                                                    xml:space="preserve">
                                                                                                    <g>
                                                                                                              <g>
                                                                                                                        <path
                                                                                                                                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                                                                                        </path>
                                                                                                              </g>
                                                                                                    </g>
                                                                                          </svg>
                                                                                          <span class="ml-1">6 mins read</span></span>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>






                              </div>
                    </div>
          )
};