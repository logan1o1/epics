// AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-24 bg-cyan-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-cyan-800">About Us</h2>
      <p className="text-black font-bold">
        Welcome to "Behind the Smile," an Interactive Mental Health Education Platform designed to address the lack of awareness and education about mental health issues among adolescents.
      </p>
      
      <p className="text-black font-bold">
        Our mission is to empower young individuals with the knowledge and resources they need to prioritize their mental well-being and seek help when necessary.
      </p>

      <h4 className="text-2xl font-bold mt-6 mb-2 text-cyan-800">Our Solution</h4>
      <p className= "text-black font-bold">
        We have developed an engaging and user-friendly website and mobile app as a central platform for mental health education. Our platform includes interactive content such as videos, quizzes, games, a peer support forum, and a chatbot to provide immediate responses to common mental health queries.
      </p>

      <h4 className="text-2xl font-bold mt-6 mb-2 text-cyan-800">How It Works</h4>
      <p className="text-black font-bold">
        Adolescents can explore our youth-friendly interface, access evidence-based information, and participate in interactive activities to enhance their understanding of mental health. The anonymous support forum and chatbot offer a safe space for seeking guidance and support without fear of stigma or judgment.
      </p>

      <h4 className="text-2xl font-bold mt-6 mb-2 text-cyan-800">Real-World Impact</h4>
      <p className="text-black font-bold">
        In addition to our online platform, we collaborate with schools to introduce mental health education into the curriculum. We also organize workshops and awareness campaigns in schools and communities to spread awareness about the benefits of our platform among teachers, parents, and caregivers.
      </p>

      <h4 className="text-2xl font-bold mt-6 mb-2 text-cyan-800">Join Us in Making a Difference</h4>
      <p className="text-black font-bold">
        Together, we can make a positive impact on adolescent mental health. Join us in our mission to reduce the stigma associated with mental health issues, promote early recognition, and build a supportive community.
      </p>

      <div className="mt-8">
        <Link to="/contact" className="text-cyan-500 hover:underline">Contact us</Link> for more information or <Link to="/get-involved" className="text-cyan-500 hover:underline">get involved</Link> to support our cause.
      </div>
    </div>
  );
};

export default AboutUs;
