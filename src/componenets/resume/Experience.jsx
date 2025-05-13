import React from 'react';

function Experience() {
  return (
    <div className="p-4 sm:p-6 cursor-default mt-4 overflow-y-scroll">
      <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-6 text-foreground">
      📌 Welcome to my Professional Experience Journey
      </h2>

      <div className="mb-4 p-4 sm:p-8">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
  Oriserve | 
  <span className="text-base-content
 sm:text-l md:text-xl font-semibold text-xs">
    {' '}Software Developer Intern
  </span>
</h3>
        <p className="text-xs sm:text-sm mb-2 text-muted-foreground pt-2">09-2024 to 03-2025</p>

        <p className="text-sm sm:text-base mb-2 text-foreground">
          <span className="font-semibold">Tools & Technologies: </span> JavaScript (Node.js, Express.js), MongoDB, Mongoose, Redis, Bull, Socket.io, MySQL, Postman.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-foreground">
          <li>Contributed to 5 chatbot projects across diverse sectors including FinServ, fintech, telecommunications, and real estate, delivering tailored Voice, Web, and WhatsApp bots aligned with client-specific BRD requirements.</li>
          <li>Optimized web bot performance by implementing Redis caching to reduce redundant API calls and server load, while enhancing voice bot efficiency by minimizing latency across varying message lengths for seamless real-time interactions.</li>
          <li>Developed structured prompts for GPT-4.0 and GPT-4.0 Mini to enhance model response accuracy across dynamic use cases. </li>
          <li>Automated MongoDB report generation using Node-Cron, aggregation pipelines, and Excel.js to ensure timely and accurate export-ready data.</li>
          {/* <li>Worked on prompt engineering with GPT-4o and GPT-4o mini to enhance response accuracy.</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
