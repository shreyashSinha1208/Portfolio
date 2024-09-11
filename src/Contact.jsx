import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Contact() {

    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the form submission, like sending data to an API
              navigate('/submitted', { state: { ...formData, isChecked } });
              
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div id="contact-me" className="lg:pt-2 lg:pb-20 pt-0 pb-16 dark:bg-blue-950 dark:text-white">
            <div className="contact-header lg:ml-0 pt-20 font-Inter text-center dark:text-white">
                <p className="font-semibold">Get in Touch</p>
                <h1 className="text-4xl mt-8 font-bold text-gray-800 dark:text-white">Contact Me.</h1>
                <p className="text-md mt-6 lg:mx-0 mx-5">Collaborate for various skill-enhancing projects and fun stuff. Period.</p>

                <form onSubmit={handleSubmit} className="lg:ml-64 ml-10 mr-10 lg:mr-64 mt-10 text-left">
                    <div className="full-name-form">
                        <div className="first-name lg:flex justify-evenly">
                            <div className="mt-2">
                                <label htmlFor="first-name" className="text-sm cursor-pointer">First name</label>
                                <div className="flex mt-1 rounded-md border-2 border-gray-200">
                                    <input
                                        id="first-name"
                                        name="firstName"
                                        type="text"
                                        placeholder="Shreyash"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="block dark:text-white cursor-pointer w-80 flex-1 dark:focus:outline-0 bg-transparent py-1.5 pl-2 focus:outline-2 text-gray-900 placeholder:text-gray-400 placeholder:dark:text-grey-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="last-name" className="text-sm cursor-pointer">Last name</label>
                                <div className="flex mt-1 rounded-md border-2 border-gray-200">
                                    <input
                                        id="last-name"
                                        name="lastName"
                                        type="text"
                                        placeholder="Sinha"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="block dark:text-white cursor-pointer w-80 flex-1 dark:focus:outline-0 bg-transparent py-1.5 pl-2 focus:outline-2 text-gray-900 placeholder:dark:text-grey-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-details-form lg:mt-3 mt-1">
                        <div className="first-name lg:flex justify-evenly">
                            <div className="mt-2">
                                <label htmlFor="email" className="text-sm cursor-pointer">Email</label>
                                <div className="flex mt-1 rounded-md border-2 border-gray-200">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="sinhashreyash@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block dark:text-white cursor-pointer w-80 flex-1 dark:focus:outline-0 bg-transparent py-1.5 pl-2 focus:outline-2 text-gray-900 placeholder:text-gray-400 placeholder:dark:text-grey-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="phone" className="text-sm cursor-pointer">Phone number</label>
                                <div className="flex mt-1 rounded-md border-2 border-gray-200">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="7394948355"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block dark:text-white cursor-pointer w-80 flex-1 dark:focus:outline-0 bg-transparent py-1.5 pl-2 focus:outline-2 text-gray-900 placeholder:dark:text-grey-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="choose-topic-form mt-3">
                        <div className="contact-details lg:mx-7">
                            <div className="mt-4">
                                <label htmlFor="topic-selection" className="cursor-pointer text-sm">Choose a Topic </label>
                                <select
                                    id="topic-selection"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                    className="bg-transparent border-2 dark:focus:outline-0 mt-1 dark:text-white border-gray-200 cursor-pointer text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                >
                                    <option className="px-6 dark:bg-blue-950 dark:text-gray-500" value="Select One">Select One...</option>
                                    <option className="px-6 dark:bg-blue-950 dark:text-white" value="Random Gossips">Random Gossips</option>
                                    <option className="px-6 dark:bg-blue-950 dark:text-white" value="Tech Talks">Tech Talks</option>
                                    <option className="px-6 dark:bg-blue-950 dark:text-white" value="Corporate Collaboration">Corporate Collaboration</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="message-form mt-3">
                        <div className="message lg:mx-7">
                            <div className="mt-4">
                                <label htmlFor="message" className="cursor-pointer text-sm">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block dark:focus:outline-0 dark:text-white cursor-pointer p-2.5 w-full text-sm border-2 mt-1 text-gray-900 bg-transparent rounded-lg border-gray-200 dark:focus:bg-transparent dark:focus:ring-transparent dark:focus:ring-white dark:focus:border-white focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Leave a Message..."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="checkbox-div mt-3">
                        <div className="checkbox lg:mx-7">
                            <div className="flex items-center mb-4">
                                <input
                                    id="checkbox-1"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4 text-blue-950 bg-gray-100 border-gray-300 rounded"
                                />
                                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-white">
                                    I agree to the <a href="#hello" className="text-blue-600 hover:underline dark:text-white">terms and conditions</a>.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="submit-btn mt-3">
                        <div className="submit lg:mx-7 flex items-center justify-center">
                            <button type="submit" className="bg-sky-950 dark:bg-white dark:text-blue-950 font-medium hover:bg-sky-100 text-white hover:text-sky-950 py-2 px-8 rounded mt-5 transition duration-500 ease-out hover:ease-in mr-5">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
