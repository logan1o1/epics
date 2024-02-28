import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import YouTube from "react-youtube";
import "./css/Home.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
  
  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="relative">
      <NavBar navbarMargin="11" />
      {/* Section 1: Background Image */}
      <section className="relative bg-image-section mt-20">
        <div className="bg-image-container relative">
          <img src="/Images/BGI1.png" alt="Background" className="bg-image" />

          {/* CBot Button */}
          <div className="absolute bottom-12 left-8">
            <Link to="/cbot">
              {" "}
              <button className="bg-purple-300 text-black py-3 px-6 rounded-full border border-cyan-700 focus:outline-none transform transition-transform hover:scale-105">
                Chat with our Bot
              </button>
            </Link>
            <div className="bg-cyan-500 h-1 w-20 mt-3 mx-auto"></div>
          </div>
          {/* Explore Games Button */}
          <div className="absolute bottom-12 right-8">
            <Link to="/games">
            <button className="bg-indigo-300 text-black py-3 px-6 rounded-full border border-blue-700 focus:outline-none transform transition-transform hover:scale-105">
              Explore Games
            </button>
            </Link>
            <div className="bg-cyan-500 h-1 w-20 mt-3 mx-auto"></div>
          </div>

          {/* Play Quiz Button */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <Link to="/quizzes">
              <button className="bg-teal-300 text-black py-3 px-6 rounded-full border border-cyan-700 focus:outline-none transform transition-transform hover:scale-105">
                Play Quiz
              </button>
            </Link>
            <div className="bg-cyan-500 h-1 w-20 mt-3 mx-auto"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 text-center text-white mb-8">
            <h1 className="text-4xl font-bold">
              
            </h1>
          </div>
        </div>
      </section>

      {/* Three Vertical Containers */}
      <section className="flex mt-8">
        {/* Container 1: Peer Support Forum */}
        <div className="relative flex flex-col w-1/3 p-4 border-r border-b border-cyan-500">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Peer Support Forum
          </h2>
          <div className="flex-grow">
            <p>
              Welcome to our Peer Support Forum! This space is dedicated to
              adolescents who want to discuss mental health concerns, share
              experiences, and offer support to their peers. We understand the
              importance of anonymity, so feel free to express yourself openly.
              Our forum is moderated to ensure a safe and supportive environment
              for everyone.
            </p>
          </div>
          <button className="mt-4 bg-purple-300 text-black py-2 px-2 rounded-full border border-teal-500 focus:outline-none transform transition-transform hover:scale-105 text-lg">
            Join Peer Support Forum
          </button>
        </div>

        {/* Container 2: School Partnerships */}
        <div className="relative flex flex-col w-1/3 p-4 border-r border-b border-cyan-500">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            School Partnerships
          </h2>
          <div className="flex-grow">
            <p>
              We believe that mental health education should be an integral part
              of adolescents' learning experience. Collaborate with us by
              introducing our Interactive Mental Health Education Platform into
              your school's curriculum or as an extracurricular resource.
              Together, we can create a supportive environment that fosters
              awareness, understanding, and mental well-being.
            </p>
          </div>
          <button className="mt-4 bg-teal-300 text-black py-2 px-2 rounded-full border border-purple-500 focus:outline-none transform transition-transform hover:scale-105 text-lg">
            Collaborate With Us
          </button>
        </div>

        {/* Container 3: Community Workshops */}
        <div className="relative flex flex-col w-1/3 p-4 border-b border-cyan-500">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Community Workshops
          </h2>
          <div className="flex-grow">
            <p>
              Join us in our mission to spread awareness and educate communities
              about mental health. We organize workshops and awareness campaigns
              in schools and local communities. These sessions aim to introduce
              our platform and provide valuable insights to teachers, parents,
              and caregivers about the benefits of prioritizing adolescent
              mental well-being.
            </p>
          </div>
          <button className="mt-4 bg-indigo-300 text-black py-2 px-2 rounded-full border border-indigo-500 focus:outline-none transform transition-transform hover:scale-105 text-lg">
            Join Our Workshops
          </button>
        </div>
      </section>

      {/* Section 4: Videos */}
      <section className="flex flex-col items-center mt-8">
        
        <div className="w-full mb-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Helpful Videos</h2>
        </div>

        {/* Three Video Containers */}
        <div className="flex w-full">
          {/* Video Container 1 */}
          <div className="w-1/3 p-4 border-r border-b border-cyan-500">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">
              Video 1
            </h3>
            <YouTube videoId="DxIDKZHW3-E" opts={opts} />
          </div>

          {/* Video Container 2 */}
          <div className="w-1/3 p-4 border-r border-b border-cyan-500">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">
              Video 2
            </h3>
            <YouTube videoId="wr4N-SdekqY" opts={opts} />
          </div>

          {/* Video Container 3 */}
          <div className="w-1/3 p-4 border-b border-cyan-500">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">
              Video 3
            </h3>
            <YouTube videoId="1i9OktVsTWo" opts={opts} />
          </div>
        </div>
      </section>

      {/* Section 5: Join Our Social Media Community */}
      <section className="flex flex-col items-center mt-8">
        
        <div className="w-full mb-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Join Our Social Media Community
          </h2>
        </div>

        
        <div className="w-full flex justify-center space-x-4 mb-4">
          <FaLinkedin className="text-4xl text-linkedin-blue-400 hover:text-linkedin-dark cursor-pointer" />{" "}
          <FaTwitter className="text-4xl text-twitter-blue-600 hover:text-twitter-dark cursor-pointer" />
          <FaInstagram className="text-4xl text-red-500 hover:text-red-700 cursor-pointer" />
        </div>
      </section>
    </div>
  );
};

export default Home;
