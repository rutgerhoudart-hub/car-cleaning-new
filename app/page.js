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

  const openCalendly = () => {
    window.open("https://calendly.com/rutgerscarcleaning", "_blank");
  };

  return (
    <div className="bg-[#0b2e59] text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center p-6">
        <img src="/logo.png" className="h-16 object-contain" />

        <div className="flex gap-4">
          <button onClick={openCalendly} className="bg-white text-black px-6 py-3 rounded-full font-bold">
            Boek afspraak
          </button>

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

        <button onClick={openCalendly} className="mt-8 bg-[#5c9ea6] px-10 py-4 rounded-full text-xl font-bold">
          Boek nu
        </button>
      </section>

      {/* VOOR & NA */}
      <section className="text-center py-20">
        <h2 className="text-4xl mb-10">Voor & Na Resultaten</h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <img src={slides[slide].before} className="w-[320px] h-[300px] object-cover rounded-xl" />
          <img src={slides[slide].after} className="w-[320px] h-[300px] object-cover rounded-xl" />
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button onClick={() => setSlide((slide - 1 + 4) % 4)}>Vorige</button>
          <button onClick={() => setSlide((slide + 1) % 4)}>Volgende</button>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="bg-white text-black py-20 px-6">

        {/* PREMIUM WAS */}
        <h2 className="text-4xl mb-10 text-center">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Premium handwas</h3>
            <p className="text-3xl font-bold">€95 / Grote wagen +€15</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>

            <p className="mt-4 text-sm">
              Kan gecombineerd worden met een basis interieurreiniging
              of een interieur dieptereiniging.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl border-2 border-black">
            <p className="text-xs font-bold mb-2 text-center">
              MEEST POPULAIR
            </p>

            <h3>Premium handwas + basis interieur</h3>
            <p className="text-3xl font-bold">€175 / Grote wagen +€25</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
              <li>Interieur stofzuigen</li>
              <li>Interieur afstoffen</li>
              <li>Ramen reinigen</li>
            </ul>

            <p className="mt-4 text-sm">
              Enkel mogelijk indien de wagen zich in goede staat bevindt.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Decontaminatie handwas</h3>
            <p className="text-3xl font-bold">€125 / Grote wagen +€25</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>Teer en vliegroest verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Drogen met warme lucht</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>
          </div>

        </div>

        {/* INTERIEUR */}
        <h2 className="text-4xl mb-10 text-center">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Dieptereiniging interieur</h3>
            <p className="text-4xl font-bold">€295</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels reinigen</li>
              <li>Tapijt reinigen</li>
              <li>Kunststof behandelen</li>
              <li>Ramen streeploos schoonmaken</li>
            </ul>

            <p className="mt-4 text-sm">Gemiddelde duur: 1 dag</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Reiniging dakhemel</h3>
            <p className="text-4xl font-bold">€75</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>Vlekken verwijderen</li>
              <li>Prijs afhankelijk van vervuiling</li>
            </ul>
          </div>

        </div>

        {/* POLIJSTEN */}
        <h2 className="text-4xl mb-10 text-center">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Light polish</h3>
            <p className="text-4xl font-bold">€595</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Heavy polish</h3>
            <p className="text-4xl font-bold">€895</p>
          </div>

        </div>

        {/* COATING */}
        <h2 className="text-4xl mb-10 text-center">Auto coating prijzen</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>New Car Coating</h3>
            <p className="text-4xl font-bold">€995</p>
            <p className="mt-2 text-sm">2 lagen Nanolex coating</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Coating pakket</h3>
            <p className="text-4xl font-bold">€1395</p>
          </div>

          <div className="p-8 bg-gray-100 rounded-xl">
            <h3>Matte coating</h3>
            <p className="text-4xl font-bold">€995</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <button onClick={openCalendly} className="bg-[#5c9ea6] px-10 py-5 rounded-full text-xl font-bold">
          Boek je afspraak
        </button>
      </section>

      {/* FORM */}
      <section className="bg-[#c9c1ad] text-black py-20 px-6">
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