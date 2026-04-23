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

  // 👉 HIER kan jij zelf beschikbare dagen instellen
  const availableDates = [
    "2026-04-25",
    "2026-04-26",
    "2026-04-29",
    "2026-05-02",
  ];

  return (
    <div className="bg-[#0b2e59] text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center p-6 bg-[#0b2e59] sticky top-0 z-50">
        <img src="/logo.png" className="h-16 object-contain" />

        <div className="flex gap-4">
          <a href="#offerte">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
              Offerte
            </button>
          </a>

          <a href="https://wa.me/32498350160">
            <button className="bg-[#25D366] px-6 py-3 rounded-full font-bold">
              WhatsApp
            </button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-24">
        <h1 className="text-6xl font-bold">Premium Car Detailing</h1>
        <p className="text-2xl mt-4">
          Binnen & buiten schoonmaak op topniveau
        </p>
      </section>

      {/* VOOR & NA */}
      <section className="text-center py-20">
        <h2 className="text-4xl mb-8">Voor & Na</h2>

        <div className="flex justify-center gap-6">
          <img src={slides[slide].before} className="w-[300px] h-[300px] object-cover rounded-xl" />
          <img src={slides[slide].after} className="w-[300px] h-[300px] object-cover rounded-xl" />
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button onClick={() => setSlide((slide - 1 + 4) % 4)}>Vorige</button>
          <button onClick={() => setSlide((slide + 1) % 4)}>Volgende</button>
        </div>
      </section>

      {/* PREMIUM WASBEURT */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Premium handwas</h3>
            <p className="text-3xl font-bold">€95 / Grote wagen +€15</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl border-2 border-black">
            <p className="text-center text-xs font-bold mb-2">MEEST POPULAIR</p>
            <h3>Premium handwas + basis interieur</h3>
            <p className="text-3xl font-bold">€175 / Grote wagen +€25</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Decontaminatie handwas</h3>
            <p className="text-3xl font-bold">€125 / Grote wagen +€25</p>
          </div>

        </div>
      </section>

      {/* INTERIEUR */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Dieptereiniging interieur</h3>
            <p className="text-4xl font-bold">€295</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels reinigen (shampoo-extractie)</li>
              <li>Automatten en tapijt reinigen</li>
              <li>Kunststof behandelen (UV-bescherming)</li>
              <li>Ramen streeploos schoonmaken</li>
            </ul>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Reiniging dakhemel</h3>
            <p className="text-4xl font-bold">€75</p>
          </div>

        </div>
      </section>

      {/* POLIJSTEN */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Light polish</h3>
            <p className="text-4xl font-bold">€595</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Heavy polish</h3>
            <p className="text-4xl font-bold">€895</p>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Auto coating prijzen</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>New Car Coating Pakket</h3>
            <p className="text-4xl font-bold">€995</p>
            <p className="text-sm mt-4">
              Aanbrengen 2 lagen Nanolex coating
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Coating Pakket</h3>
            <p className="text-4xl font-bold">€1395</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Matte Coating Pakket</h3>
            <p className="text-4xl font-bold">€995</p>
          </div>

        </div>
      </section>

      {/* BOOKING */}
      <section className="py-20 text-center">
        <h2 className="text-4xl mb-6">Boek een afspraak</h2>

        <select className="text-black p-4 rounded-xl">
          {availableDates.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select>
      </section>

      {/* FORM */}
      <section id="offerte" className="bg-[#c9c1ad] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Offerte aanvragen</h2>

        <form
          action="https://formsubmit.co/rutgerscarcleaning@outlook.be"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input name="naam" placeholder="Naam" className="p-4" required />
          <input name="email" placeholder="Email" className="p-4" required />
          <textarea name="bericht" placeholder="Bericht" className="p-4" />

          <button className="bg-black text-white py-4">
            Verstuur aanvraag
          </button>
        </form>
      </section>

    </div>
  );
}