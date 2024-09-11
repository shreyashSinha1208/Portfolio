import React, { useEffect, useRef } from "react";

export default function Progress() {
  const progressBars = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute("data-final-width");
          entry.target.style.transition = "width 2s ease";
        } else {
          entry.target.style.width = "0";
        }
      });
    }, {
      threshold: 0.5,
    });

    progressBars.current.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="progress-section" className="progress-bar pt-12 pb-32 dark:bg-gradient-to-r from-blue-950 to-blue-800 font-Inter">
      <div className="progress lg:mx-20 mx-10">
        <div className="header mb-16">
          <h1 className="text-4xl dark:text-white text-blue-950 font-bold mt-5">Proficiency.</h1>
        </div>

        {[
          { skill: "HTML", percentage: "60%" },
          { skill: "CSS", percentage: "70%" },
          { skill: "Javascript", percentage: "70%" },
          { skill: "Node.js", percentage: "40%" },
          { skill: "Java", percentage: "50%" },
          { skill: "BackEnd & Frameworks", percentage: "40%" },
          { skill: "MongoDB", percentage: "30%" },
        ].map((item, index) => (
          <div key={index}>
            <div className="mb-1 text-base font-lg dark:text-white">{item.skill}</div>
            <div className="w-full bg-blue-100 rounded-full h-4 mb-8 dark:bg-blue-700">
              <div
                className="bg-blue-950 h-4 rounded-full dark:bg-blue-50 flex items-center justify-end pr-2"
                data-final-width={item.percentage}
                ref={(el) => (progressBars.current[index] = el)}
                style={{ width: "0" }}
              >
                <span className="text-white dark:text-blue-950 text-xs">{item.percentage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
