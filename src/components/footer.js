import React from "react";

export default function Footer() {
  return (
    <footer className="z-100 footer from-tertiary1 to-tertiary2 bg-gradient-to-tr py-6 text-white text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center space-x-4 mx-7">
          <p>
            &copy; {new Date().getFullYear()}   Kwazi.  All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
