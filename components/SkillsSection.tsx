import React from "react";

export default function SkillsSection() {
  return (
    <>
      <div className=" relative">
        <div className="container mx-auto skillsSection">
          <h2 className="underBorderedTitle">Skills</h2>
          <div className="flex">
            <div className="wrapperSkill html5">
              <p>HTML</p>
            </div>

            <div className="wrapperSkill css3">
              <p>CSS</p>
            </div>

            <div className="wrapperSkill js">
              <p>JavaScript</p>
            </div>

            <div className="wrapperSkill react">
              <p>React</p>
            </div>

            <div className="wrapperSkill vue">
              <p>Vue</p>
            </div>
          </div>
        </div>

        <svg
          id="bSISS"
          className="hideMobile"
          width="189"
          height="189"
          viewBox="0 0 189 189"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="94.5" cy="94.5" r="94.5" fill="#16DB65" />
        </svg>

        <svg
          className="bottomShapeLeft"
          width="262"
          height="442"
          viewBox="0 0 262 442"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M262 235.708L0 0V442H210.692L262 235.708Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="131"
              y1="0"
              x2="131"
              y2="442"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12C55B" />
              <stop offset="1" stop-color="#0D3292" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
