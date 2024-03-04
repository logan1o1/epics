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
          {/* Added overlay for mental health awareness */}
          <div className="overlay">
            <h1 className="text-4xl text-white font-bold">
              You Are Not Alone
            </h1>
            <p className="text-lg text-white mt-2">
              Let's Talk About Mental Health
            </p>
            <div className="mental-health-symbol">
              {/* Add your animated mental health symbol here */}
            </div>
          </div>
          {/* End overlay */}
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
            <h1 className="text-4xl font-bold"></h1>
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
          <Link to="/psf">
            <button className="mt-4 bg-purple-300 text-black py-2 px-2 rounded-full border border-teal-500 focus:outline-none transform transition-transform hover:scale-105 text-lg">
              Join Peer Support Forum
            </button>
          </Link>
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
          <Link to="/cw">
            <button className="mt-4 bg-indigo-300 text-black py-2 px-2 rounded-full border border-indigo-500 focus:outline-none transform transition-transform hover:scale-105 text-lg">
              Join Our Workshops
            </button>
          </Link>
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

      {/* Section 5: Blogs */}
      <section className="flex flex-col items-center mt-8">
        <div className="w-full mb-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Helpful Blog Sources
          </h2>
        </div>

        {/* Three Blog Containers */}
        <div className="flex w-full">
          {/* Blog Container 1 */}
          <div className="w-1/3 p-4 border-r border-b border-cyan-500">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">
              <a
                href="https://mentalhealthathome.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mental Health @ Home
              </a>
            </h3>
            <p className="mb-2">
              Mental Health @ Home is written by former mental health nurse and
              pharmacist Ashley L. Peterson, who also struggles with
              treatment-resistant major depressive disorder. She uses her blog
              to showcase an honest, no-nonsense look at chronic mental illness.
            </p>
            <a
              href="https://mentalhealthathome.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700"
            >
              Read more
            </a>
          </div>

          {/* Blog Container 2 */}
          <div className="w-1/3 p-4 border-r border-b border-cyan-500">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">
              <a
                href="https://www.quora.com/q/ivegotyourback"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                I’ve Got Your Back
              </a>
            </h3>
            <p className="mb-2">
              This Quora blog by psychologist Anita Sanz is a little old, but
              the information there is still worthwhile. Her posts range from
              how to deal with the stress of the pandemic to how to handle
              anxiety in the middle of the night. She also answers questions on
              Quora from readers and even talks about why Robin Williams was
              depressed or whether or not Spongebob Squarepants is mentally ill.
            </p>
            <a
              href="https://www.quora.com/q/ivegotyourback"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700"
            >
              Read more
            </a>
          </div>

          {/* Blog Container 3 */}
          <div className="w-1/3 p-4 border-r border-b border-cyan-500">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">
              <a
                href="https://www.nami.org/Blogs/NAMI-Blog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                NAMI Blog
              </a>
            </h3>
            <p className="mb-2">
              NAMI is a national organization that provides mental health
              support and resources. They also work to educate and empower those
              living with mental illness to live fulfilling lives. NAMI’s blog
              also reflects current events and how they shape our mental health.
            </p>
            <a
              href="https://www.nami.org/Blogs/NAMI-Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700"
            >
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: What People are saying */}
      <section className="flex flex-col items-center mt-8">
        <div className="w-full mb-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            What People Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium">
              "This platform has been a lifesaver for me. I finally feel like I
              have the tools and support I need to manage my mental health."
            </p>
            <p className="text-sm font-semibold text-gray-500">
              {" "}
              - Parth A., Student
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium">
              "The workshops have been incredibly helpful in teaching me coping
              mechanisms and how to build resilience. I'm feeling much more
              empowered now."
            </p>
            <p className="text-sm font-semibold text-gray-500">
              {" "}
              - Kashyap V., Teacher
            </p>
          </div>
        </div>
      </section>

    {/* Section 7: Resource Library */}
      <section className="flex flex-col items-center mt-8">
        <div className="w-full mb-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Resource Library</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg shadow-md hover:bg-gray-100">
            <a
              href="path/to/resource.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-semibold text-cyan-600 mb-2"
            >
              Stress Management Guide
            </a>
            <p className="text-gray-500">
              Downloadable PDF with tips and strategies for managing stress.
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md hover:bg-gray-100">
            <a
              href="path/to/resource.ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-semibold text-cyan-600 mb-2"
            >
              Building Healthy Habits E-book
            </a>
            <p className="text-gray-500">
              Free E-book on establishing routines and practices for well-being.
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md hover:bg-gray-100">
            <a
              href="path/to/resource.ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-semibold text-cyan-600 mb-2"
            >
              Building Healthy Habits E-book
            </a>
            <p className="text-gray-500">
              Free E-book on establishing routines and practices for well-being.
            </p>
          </div>
        </div>

        
      </section>

      {/* Section 8: Join Our Social Media Community */}
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
