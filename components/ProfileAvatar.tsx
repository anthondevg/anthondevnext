import React from "react";

export default function ProfileAvatar() {
  return (
    <a
      href="https://www.linkedin.com/in/anthondev/"
      rel="noopener"
      target="_blank"
    >
      <img
        src="/me.png"
        title="profilePicture"
        className="w-32 rounded-full hover:shadow-lg  shadow-inner border-2"
      />
    </a>
  );
}
