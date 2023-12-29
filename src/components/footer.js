import React from "react";

export default function Footer() {
  return (
    <footer className="z-100  from-tertiary1 to-tertiary2 bg-gradient-to-tr py-6 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4 justify-between items-center w-full sm:w-1/2">
          
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Kwazi</h1>
            <p className="text-sm">Web Developer & Designer</p>
          </div>

          <a href="mailto:your@email.com">your@email.com</a>
          <a href="tel:+1234567890">123-456-7890</a>
        </div>

        <div className="flex items-center space-x-4">
          <p>
            &copy; {new Date().getFullYear()} Your Portfolio. All rights
            reserved.
          </p>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="mt-4">
          <p className="text-xs text-secondary">Built with ❤️ using React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
