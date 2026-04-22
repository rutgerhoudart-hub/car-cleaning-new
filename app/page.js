"use client";

import { useState } from "react";

export default function Home() {

  const slides = [
    { before: "/before1.jpg", after: "/after1.jpg" },
    { before: "/before2.jpg", after: "/after2.jpg" },
    { before: "/before3.jpg", after: "/after3.jpg" },
    { before: "/before4.jpg", after: "/after4.jpg" },
  ];

  const [slide, setSlide] = useState(0);

  return (
    <div className="bg-[#0b2e59] text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-6">
        <img src="/logo.png" className="h-16" />

        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-6 py-3 rounded-full text-lg font-bold">
            WhatsApp
          </button>
        </a>
      </header>

      {/* HERO */}
      <section className="text-center py-24">
        <h1 className="text-6xl font-bold">Premium Car Detailing</h1>
        <p className="text-2xl mt-4">Binnen & buiten schoonmaak</p>
      </section>

      {/* VOOR NA */}
      <section className="text-center mb-20">
        <h2 className="text-4xl mb-8">Voor & Na</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <img src={slides[slide].before} className="rounded-xl h-[300px] object-cover w-full"/>
          <img src={slides[slide].after} className="rounded-xl h-[300px] object-cover w-full"/>
        </div>

        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="mt-6 bg-gray-700 px-6 py-3 rounded-full"
        >
          Volgende
        </button>
      </section>

      {/* INTERIEUR */}
      <section className="bg-white text-black p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#f2f2f2] p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Dieptereiniging interieur</h3>
            <p className="text-5xl font-bold my-4">€295</p>

            <ul className="space-y-2">
              <li>Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels reinigen</li>
              <li>Tapijt reinigen</li>
              <li>Kunststof behandelen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-[#f2f2f2] p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Reiniging dakhemel</h3>
            <p className="text-5xl font-bold my-4">€75</p>

            <ul>
              <li>Vlekken verwijderen</li>
              <li>Prijs afhankelijk van vervuiling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* POLIEREN */}
      <section className="bg-[#f2f2f2] text-black p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Polieren</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Light polish</h3>
            <p className="text-5xl font-bold my-4">€595</p>
            <ul>
              <li>1-staps polieren</li>
              <li>Lichte krassen verwijderen</li>
              <li>Optimale glans</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Heavy polish</h3>
            <p className="text-5xl font-bold my-4">€895</p>
            <ul>
              <li>Meertraps polieren</li>
              <li>Diepe krassen verwijderen</li>
              <li>Oxidatie verwijderen</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WASBEURT */}
      <section className="bg-white text-black p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#f2f2f2] p-8 rounded-3xl">
            <h3 className="text-xl font-bold">Premium handwas</h3>
            <p className="text-4xl font-bold my-4">€95</p>
          </div>

          <div className="bg-[#f2f2f2] p-8 rounded-3xl border-2 border-black">
            <h3 className="text-xl font-bold">Premium + interieur</h3>
            <p className="text-4xl font-bold my-4">€175</p>
          </div>

          <div className="bg-[#f2f2f2] p-8 rounded-3xl">
            <h3 className="text-xl font-bold">Decontaminatie</h3>
            <p className="text-4xl font-bold my-4">€125</p>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="bg-[#0b2e59] text-white p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Coating</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white text-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">New Car Coating</h3>
            <p className="text-5xl font-bold my-4">€995</p>
            <ul>
              <li>Grondige reiniging</li>
              <li>Polijsten</li>
              <li>2 lagen Nanolex</li>
            </ul>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl border-2 border-[#5c9ea6]">
            <h3 className="text-2xl font-bold">Coating Pakket</h3>
            <p className="text-5xl font-bold my-4">€1395</p>
            <ul>
              <li>Meertraps polijsten</li>
              <li>2 lagen Nanolex</li>
              <li>Max bescherming</li>
            </ul>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Matte Coating</h3>
            <p className="text-5xl font-bold my-4">€995</p>
            <ul>
              <li>Speciaal voor matte lak</li>
              <li>2 lagen Nanolex</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-10 py-5 rounded-full text-2xl font-bold">
            Boek Nu
          </button>
        </a>
      </section>

    </div>
  );
}