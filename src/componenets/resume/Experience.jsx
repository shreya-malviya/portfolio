import React from "react";

function Experience() {
  return (
    <div className="p-4 sm:p-6 cursor-default mt-4 overflow-y-scroll">
      <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-6 text-foreground">
        📌 Welcome to my Experience Journey
      </h2>

      <div className="mb-4 p-4 sm:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
          WiseTech Source |
          <span
            className="text-base-content
 sm:text-l md:text-xl font-semibold text-xs"
          >
            {" "}
            RPA Intern – UiPath
          </span>
        </h3>
        <p className="text-xs sm:text-sm mb-2 text-muted-foreground pt-2">
          06-2024 to 09-2024
        </p>

        <p className="text-sm sm:text-base mb-2 text-foreground">
          <span className="font-semibold">Tools & Technologies: </span> UiPath
          Studio, UiPath Orchestrator, Microsoft Excel, Outlook, Web Scraping
          (using UiPath), SQL
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-foreground">
          <li>
            Designed and developed automation bots using UiPath to streamline
            repetitive tasks such as data entry, file handling, and report
            generation.
          </li>
          <li>
            Built bots that performed web scraping to extract structured data
            from websites for business reporting and analysis purposes.
          </li>
          <li>
            Developed end-to-end RPA workflows integrating multiple tools and
            platforms, including Excel, Outlook, and internal web applications.{" "}
          </li>
          <li>
            Conducted testing, debugging, and documentation of bots to ensure
            robust performance and ease of maintenance.
          </li>
          {/* <li>Worked on prompt engineering with GPT-4o and GPT-4o mini to enhance response accuracy.</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
