import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        About This App
      </h1>

      <div className="rounded-lg shadow-lg p-6 space-y-6 bg-overlay">
        <section>
          <h2 className="text-2xl font-bold text-white mb-3 text-center">
            This Weather App
          </h2>
          <p className="text-white">
            Helps to provide fast and reliable weather information of your
            desirable location with one simple click. The weather information is
            accurate as it is extracted from the OpenWeather API. The app is
            built using modern web technologies including React and Tailwind
            CSS, to provide the best user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Real-time weather updates</li>
            <li>Multiple city support</li>
            <li>User preference saving</li>
            <li>Responsive design</li>
            <li>Detailed weather information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Tech Stack</h2>
          <p className="text-white">
            This application is built using modern web technologies including
            React, Tailwind CSS, and various weather APIs to provide the best
            user experience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
