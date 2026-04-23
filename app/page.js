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
        <img src="/logo.svg" className="h-16 md:h-20" />

        <a href="https://wa.me/32498350160">
          <button className="bg-[#5c9ea6] px-6 py-3 rounded-full text-lg">
            WhatsApp
          </button>
        </a>
      </header>

      {/* HERO */}
      <section className="text-center py-24">
        <h1 className="text-6xl md:text-8xl font-bold">
          Premium Car Detailing
        </h1>

        <p className="text-2xl mt-4">
          Binnen & buiten schoonmaak
        </p>
      </section>

      {/* VOOR NA */}
      <section className="text-center py-16">
        <h2 className="text-4xl mb-8">Voor & Na</h2>

        <div className="flex justify-center gap-6">
          <img src={slides[slide].before} className="w-64 h-48 object-cover" />
          <img src={slides[slide].after} className="w-64 h-48 object-cover" />
        </div>

        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="mt-6"
        >
          Volgende
        </button>
      </section>

      {/* PREMIUM WASBEURT */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Premium handwas</h3>
            <p className="text-3xl font-bold my-4">€95</p>

            <ul className="text-sm space-y-2">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl border-2 border-black">
            <h3 className="text-xl font-bold">
              Premium handwas + basis interieur
            </h3>

            <p className="text-3xl font-bold my-4">€175</p>

            <ul className="text-sm space-y-2">
              <li>Krasvrije wasbeurt</li>
              <li>Velgen + banden reinigen</li>
              <li>Interieur stofzuigen</li>
              <li>Interieur afstoffen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold">
              Decontaminatie handwas
            </h3>

            <p className="text-3xl font-bold my-4">€125</p>

            <ul className="text-sm space-y-2">
              <li>Teer en vliegroest verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Spraywax</li>
            </ul>
          </div>

        </div>
      </section>

      {/* INTERIEUR */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">
          Interieur reiniging
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Dieptereiniging interieur</h3>
            <p className="text-3xl font-bold my-4">€295</p>

            <ul className="text-sm space-y-2">
              <li>Dashboard reinigen</li>
              <li>Lederen zetels reinigen</li>
              <li>Tapijt shampoo extractie</li>
              <li>Kunststof behandelen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Reiniging dakhemel</h3>
            <p className="text-3xl font-bold my-4">€75</p>

            <ul className="text-sm space-y-2">
              <li>Vlekken verwijderen</li>
              <li>Prijs afhankelijk van vervuiling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* POLIJSTEN */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Light polish</h3>
            <p className="text-3xl font-bold my-4">€595</p>

            <ul className="text-sm space-y-2">
              <li>1-staps polieren</li>
              <li>Lichte krassen verwijderen</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Heavy polish</h3>
            <p className="text-3xl font-bold my-4">€895</p>

            <ul className="text-sm space-y-2">
              <li>Meertraps polieren</li>
              <li>Diepe krassen verwijderen</li>
            </ul>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Coating</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-2xl">
            <h3 className="font-bold">New Car Coating</h3>
            <p className="text-3xl font-bold my-4">€995</p>

            <ul className="text-sm">
              <li>Reiniging + inspectie</li>
              <li>Aanbrengen 2 lagen nanolex</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-black">
            <h3 className="font-bold">Coating Pakket</h3>
            <p className="text-3xl font-bold my-4">€1395</p>

            <ul className="text-sm">
              <li>Meertraps polieren</li>
              <li>Nanolex coating</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl">
            <h3 className="font-bold">Matte Coating</h3>
            <p className="text-3xl font-bold my-4">€995</p>

            <ul className="text-sm">
              <li>Matte lak bescherming</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}