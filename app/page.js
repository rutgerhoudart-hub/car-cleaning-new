"use client";

import { useState } from "react";

export default function Home() {
  const slides = [
    { before: "/before1.jpg", after: "/after1.jpg" },
    { before: "/before2.jpg", after: "/after2.jpg" },
  ];

  const [slide, setSlide] = useState(0);

  return (
    <div className="min-h-screen bg-[#0b2e59] text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-5 bg-[#0b2e59]">
        <img src="/logo-rutger.svg" className="h-16" />

        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-6 py-3 rounded-full text-xl">
            WhatsApp
          </button>
        </a>
      </header>

      {/* HERO */}
      <section className="text-center py-32">
        <h1 className="text-6xl font-bold">Premium Car Detailing</h1>
        <p className="text-2xl mt-4">Binnen & buiten schoonmaak</p>
      </section>

      {/* VOOR NA */}
      <section className="text-center py-20">
        <h2 className="text-4xl mb-8">Voor & Na</h2>

        <div className="flex justify-center gap-6">
          <img src={slides[slide].before} className="w-[300px] h-[200px] object-cover" />
          <img src={slides[slide].after} className="w-[300px] h-[200px] object-cover" />
        </div>

        <div className="mt-6">
          <button onClick={() => setSlide((slide + 1) % slides.length)}>
            Volgende
          </button>
        </div>
      </section>
    </div>
  );
}