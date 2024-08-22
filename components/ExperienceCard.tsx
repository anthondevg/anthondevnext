import React from "react";

export default function ExperienceCard({
  company,
  position,
  description,
}: {
  company: string;
  position: string;
  description: string;
}) {
  return (
    <article>
      <div className=" py-8 rounded-lg p-0">
        <div className="flex gap-4 items-center">
          <p className="text-2xl font-bold">{company}</p>
          <span className="text-sm"> • Feb 2024 - Present</span>
        </div>

        <p className="text-white">{position}</p>

        <p>{description}</p>

        {/* <ul className="flex gap-1 my-2">
          <li className="skill">React.js</li>
          <li className="skill">Next.js</li>
          <li className="skill">Frontend</li>
          <li className="skill">Backend</li>
          <li className="skill">GIT</li>
          <li className="skill">Laravel</li>
        </ul> */}
      </div>
    </article>
  );
}
