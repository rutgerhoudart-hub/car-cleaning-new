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

      {/* ✅ HEADER (FIXED LOGO) */}
      <header className="w-full bg-[#c9c1ad] flex justify-center">
        <img
          src="/logo.png"
          className="w-full max-w-[1200px] h-auto object-contain"
          alt="logo"
        />
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Premium Car Detailing
        </h1>
        <p className="text-xl md:text-2xl mt-4">
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

      {/* PREMIUM WASBEURT (MET JOUW TEKSTEN) */}
      <section className="bg-[#f5f5f5] text-black py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Premium wasbeurt
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-xl font-bold">Premium handwas</h3>
            <p className="text-3xl font-bold my-4">€95</p>

            <ul className="space-y-2 text-sm">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>

            <p className="mt-4 text-xs">
              Kan gecombineerd worden met een basis interieurreiniging of een interieur dieptereiniging.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-3xl shadow border-2 border-black">
            <h3 className="text-xl font-bold">
              Premium handwas + basis interieur
            </h3>
            <p className="text-3xl font-bold my-4">€175</p>

            <ul className="space-y-2 text-sm">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
              <li>Interieur stofzuigen</li>
              <li>Interieur afstoffen</li>
              <li>Reinigen ramen en spiegels</li>
            </ul>

            <p className="mt-4 text-xs">
              Enkel mogelijk indien de wagen zich in relatief goede staat bevindt.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="text-xl font-bold">Decontaminatie handwas</h3>
            <p className="text-3xl font-bold my-4">€125</p>

            <ul className="space-y-2 text-sm">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Teer en vliegroest verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>

            <p className="mt-4 text-xs">
              *enkel indien toepasbaar of vereist.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}