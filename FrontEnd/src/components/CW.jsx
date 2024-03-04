import React, { useState } from "react";

const CW = () => {
  
  const [workshops, setWorkshops] = useState([
    {
      id: 1,
      title: "Understanding Anxiety and Stress Management Techniques",
      date: "March 10, 2024 Sunday",
      time: "10:00 AM - 12:00 PM",
      facilitator: "Punarva",
      description: "Join us for an interactive workshop on understanding anxiety...",
    },
    {
        id: 2,
        title: "Building Resilience and Coping Skills",
        date: "March 17, 2024 Sunday",
        time: "10:00 AM - 12:00 PM",
        facilitator: "Punarva",
        description: "In this workshop, we will explore strategies for building resilience and coping skills to navigate life's challenges more effectively.",
      }
      
    
  ]);

  
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    selectedWorkshops: [],
  });

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Form submitted:", registrationData);
    
    setRegistrationData({
      name: "",
      email: "",
      selectedWorkshops: [],
    });
  };

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  
  const handleWorkshopSelect = (workshopId) => {
    const isSelected = registrationData.selectedWorkshops.includes(workshopId);
    if (isSelected) {
      
      setRegistrationData({
        ...registrationData,
        selectedWorkshops: registrationData.selectedWorkshops.filter(id => id !== workshopId),
      });
    } else {
      
      setRegistrationData({
        ...registrationData,
        selectedWorkshops: [...registrationData.selectedWorkshops, workshopId],
      });
    }
  };

  return (
    <div className="container mx-auto mt-24 bg-cyan-100 p-8 rounded-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Community Workshops</h1>
      
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Upcoming Workshops</h2>
        <div>
          {workshops.map((workshop) => (
            <div key={workshop.id} className="border border-gray-300 rounded-md p-4 mb-4">
              <h3 className="text-xl font-semibold text-black-500 mb-2">{workshop.title}</h3>
              <p><strong>Date:</strong> {workshop.date}</p>
              <p><strong>Time:</strong> {workshop.time}</p>
              <p><strong>Facilitator:</strong> {workshop.facilitator}</p>
              <p>{workshop.description}</p>
              <input
                type="checkbox"
                id={`workshop-${workshop.id}`}
                value={workshop.id}
                checked={registrationData.selectedWorkshops.includes(workshop.id)}
                onChange={() => handleWorkshopSelect(workshop.id)}
              />
              <label htmlFor={`workshop-${workshop.id}`} className="ml-2">Register for this workshop</label>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Registration Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={registrationData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registrationData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
      </form>
    </div>
  );
};

export default CW;
