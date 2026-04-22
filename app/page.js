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
      <header className="w-full">
        <img
          src="/logo.png"
          className="w-full h-[140px] object-cover"
          alt="logo"
        />
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Premium Car Detailing
        </h1>
        <p className="text-xl md:text-2xl mt-4 opacity-90">
          Binnen & buiten schoonmaak
        </p>
      </section>

      {/* VOOR & NA */}
      <section className="text-center pb-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Voor & Na</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <img src={slides[slide].before} className="rounded-2xl h-[300px] w-full object-cover"/>
          <img src={slides[slide].after} className="rounded-2xl h-[300px] w-full object-cover"/>
        </div>

        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="mt-6 bg-gray-700 px-6 py-3 rounded-full text-lg"
        >
          Volgende
        </button>
      </section>

      {/* INTERIEUR */}
      <section className="bg-[#f5f5f5] text-black py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Interieur reiniging
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-3xl font-bold">Dieptereiniging interieur</h3>
            <p className="text-5xl font-bold my-4">€295</p>

            <ul className="space-y-2 text-lg">
              <li>• Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>• Lederen zetels reinigen en voeden</li>
              <li>• Stoffen zetels reinigen (shampoo-extractie)</li>
              <li>• Automatten en tapijt reinigen</li>
              <li>• Kunststof behandelen (UV-bescherming)</li>
              <li>• Ramen streeploos schoonmaken</li>
            </ul>

            <p className="mt-4 text-sm">Gemiddelde duur: 1 dag</p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
              MAAK EEN AFSPRAAK
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-3xl font-bold">Reiniging dakhemel</h3>
            <p className="text-5xl font-bold my-4">€75</p>

            <ul className="space-y-2 text-lg">
              <li>• Vlekken verwijderen met specifieke middelen</li>
              <li>• Prijs afhankelijk van vervuiling</li>
            </ul>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
              VRAAG EEN OFFERTE AAN
            </button>
          </div>

        </div>
      </section>

      {/* POLIEREN */}
      <section className="bg-white text-black py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Polieren</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#f5f5f5] p-8 rounded-3xl">
            <h3 className="text-3xl font-bold">Light polish</h3>
            <p className="text-5xl font-bold my-4">€595</p>

            <ul className="text-lg space-y-2">
              <li>• 1-staps polieren</li>
              <li>• Lichte krassen verwijderen</li>
              <li>• Optimale glans</li>
            </ul>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded-3xl">
            <h3 className="text-3xl font-bold">Heavy polish</h3>
            <p className="text-5xl font-bold my-4">€895</p>

            <ul className="text-lg space-y-2">
              <li>• Meertraps polieren</li>
              <li>• Diepe krassen verwijderen</li>
              <li>• Oxidatie en hologrammen verwijderen</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WASBEURT */}
      <section className="bg-[#f5f5f5] text-black py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Premium wasbeurt
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-xl font-bold">Premium handwas</h3>
            <p className="text-4xl font-bold my-4">€95</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-black">
            <h3 className="text-xl font-bold">
              Premium handwas + basis interieur
            </h3>
            <p className="text-4xl font-bold my-4">€175</p>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-xl font-bold">Decontaminatie handwas</h3>
            <p className="text-4xl font-bold my-4">€125</p>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="bg-[#0b2e59] text-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Coating</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white text-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">New Car Coating</h3>
            <p className="text-5xl font-bold my-4">€995</p>
            <ul>
              <li>• Grondige reiniging</li>
              <li>• Polijsten</li>
              <li>• Aanbrengen 2 lagen Nanolex</li>
            </ul>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl border-2 border-[#5c9ea6]">
            <h3 className="text-2xl font-bold">Coating Pakket</h3>
            <p className="text-5xl font-bold my-4">€1395</p>
            <ul>
              <li>• Meertraps polijsten</li>
              <li>• Aanbrengen 2 lagen Nanolex</li>
              <li>• Maximale bescherming</li>
            </ul>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Matte Coating</h3>
            <p className="text-5xl font-bold my-4">€995</p>
            <ul>
              <li>• Speciaal voor matte lak</li>
              <li>• Aanbrengen 2 lagen Nanolex</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}