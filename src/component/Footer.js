import React from 'react';

export default function Footer() {
  return (
    <footer className="w-[100%]  hidden md:inline bg-[#4db5ff] text-[#1f1f32] text-[20px] py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Jaiswal Mukesh. All Rights Reserved</p>
    </footer>
  );
}
