import React, { useState } from "react";

export default function LanguageSelector() {
  const [lang, setLang] = useState<"es" | "eng">("eng");
  return (
    <nav className=" absolute  bottom-0  z-50">
      <span
        className=" ml-4 z-50 cursor-pointer"
        onClick={() => {
          console.log("es");
          setLang("es");
        }}
      >
        Español
      </span>{" "}
      <span
        className=" ml-4 z-50 cursor-pointer"
        onClick={() => {
          setLang("eng");
        }}
      >
        English
      </span>
    </nav>
  );
}
