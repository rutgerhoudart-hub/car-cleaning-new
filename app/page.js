"use client";

import { useState } from "react";

export default function Home() {
  const slides = [
    { before: "/before.jpg", after: "/after.jpg" },
    { before: "/before2.jpg", after: "/after2.jpg" },
    { before: "/before3.jpg", after: "/after3.jpg" },
    { before: "/before4.jpg", after: "/after4.jpg" },
  ];

  const [slide, setSlide] = useState(0);

  return (
    <div className="bg-[#0b2e59] text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#0b2e59] sticky top-0 z-50">
        <img src="/logo-rutger.svg.png" className="h-20 object-contain" />

        <div className="flex gap-4">
          <a href="#contact">
            <button className="bg-[#5c9ea6] px-6 py-3 rounded-full font-bold">
              Contact
            </button>
          </a>

          <a href="https://wa.me/32498350160">
            <button className="bg-green-500 px-6 py-3 rounded-full font-bold">
              WhatsApp
            </button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold">
          Premium Car Detailing
        </h1>
        <p className="text-xl mt-4">
          Binnen & buiten schoonmaak op topniveau
        </p>
      </section>

      {/* VOOR & NA */}
      <section className="text-center py-16">
        <h2 className="text-4xl mb-10">Voor & Na</h2>

        <div className="flex justify-center gap-6">
          <img src={slides[slide].before} className="w-80 rounded-xl" />
          <img src={slides[slide].after} className="w-80 rounded-xl" />
        </div>

        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="mt-6 underline"
        >
          Volgende
        </button>
      </section>

      {/* PREMIUM WASBEURT */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold">Premium handwas</h3>
            <p className="text-3xl font-bold mt-2">€95 / Grote wagen +€15</p>

            <ul className="mt-4 text-sm space-y-1">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>

            <p className="text-xs mt-4">
              Kan gecombineerd worden met interieur reiniging
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border-2 border-black">
            <h3 className="text-xl font-bold">Premium handwas + basis interieur</h3>
            <p className="text-3xl font-bold mt-2">€175 / Grote wagen +€25</p>

            <ul className="mt-4 text-sm space-y-1">
              <li>Krasvrije wasbeurt</li>
              <li>Velgen + banden reinigen</li>
              <li>Interieur stofzuigen</li>
              <li>Interieur afstoffen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold">Decontaminatie handwas</h3>
            <p className="text-3xl font-bold mt-2">€125 / Grote wagen +€25</p>

            <ul className="mt-4 text-sm space-y-1">
              <li>Teer en vliegroest verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Spraywax</li>
            </ul>
          </div>

        </div>
      </section>

      {/* INTERIEUR */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold">Dieptereiniging interieur</h3>
            <p className="text-4xl font-bold mt-2">€295</p>

            <ul className="mt-4 text-sm space-y-1">
              <li>Dashboard en panelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels shampoo</li>
              <li>Tapijten reinigen</li>
              <li>Kunststof beschermen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold">Reiniging dakhemel</h3>
            <p className="text-4xl font-bold mt-2">€75</p>

            <ul className="mt-4 text-sm space-y-1">
              <li>Vlekken verwijderen</li>
              <li>Prijs afhankelijk van vervuiling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* POLIJSTEN */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold">Light polish</h3>
            <p className="text-4xl font-bold mt-2">€595</p>

            <ul className="mt-4 text-sm space-y-1">
              <li>1-staps polieren</li>
              <li>Lichte krassen verwijderen</li>
              <li>Optimale glans</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-xl font-bold">Heavy polish</h3>
            <p className="text-4xl font-bold mt-2">€895</p>

            <ul className="mt-4 text-sm space-y-1">
              <li>Meertraps polieren</li>
              <li>Diepe krassen verwijderen</li>
              <li>Oxidatie verwijderen</li>
            </ul>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Coating</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-xl">
            <h3>New Car Coating</h3>
            <p className="text-4xl font-bold">€995</p>
            <ul className="text-sm mt-3">
              <li>Reiniging + inspectie</li>
              <li>Aanbrengen 2 lagen NANOLEX</li>
              <li>Uitharding + advies</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3>Coating Pakket</h3>
            <p className="text-4xl font-bold">€1395</p>
            <ul className="text-sm mt-3">
              <li>Meertraps polieren</li>
              <li>Aanbrengen 2 lagen NANOLEX</li>
              <li>Volledige bescherming</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3>Matte Coating</h3>
            <p className="text-4xl font-bold">€995</p>
            <ul className="text-sm mt-3">
              <li>Speciale matte bescherming</li>
              <li>Aanbrengen 2 lagen NANOLEX</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#c9c1ad] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Contact</h2>

        <form
          action="https://formsubmit.co/rutgerscarcleaning@outlook.be"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input type="text" placeholder="Naam" className="p-4" required />
          <input type="email" placeholder="Email" className="p-4" required />
          <textarea placeholder="Bericht" className="p-4" />

          <button className="bg-black text-white py-4">
            Verstuur
          </button>
        </form>
      </section>

    </div>
  );
}