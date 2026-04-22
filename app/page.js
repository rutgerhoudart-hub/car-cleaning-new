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
      <header className="w-full bg-[#c9c1ad] flex justify-center">
        <img
          src="/logo.png"
          className="w-full max-w-[1200px] h-auto object-contain"
          alt="logo"
        />
      </header>

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold">Premium Car Detailing</h1>
        <p className="text-2xl mt-4">Binnen & buiten schoonmaak</p>
      </section>

      {/* VOOR & NA */}
      <section className="text-center pb-20">
        <h2 className="text-4xl mb-8">Voor & Na</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <img src={slides[slide].before} className="rounded-xl h-[250px] w-full object-cover"/>
          <img src={slides[slide].after} className="rounded-xl h-[250px] w-full object-cover"/>
        </div>

        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="mt-6 bg-gray-700 px-6 py-3 rounded-full"
        >
          Volgende
        </button>
      </section>

      {/* INTERIEUR */}
      <section className="bg-white text-black py-16 px-6">
        <h2 className="text-4xl text-center font-bold mb-10">
          Interieur reiniging
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#f5f5f5] p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Dieptereiniging interieur</h3>
            <p className="text-4xl font-bold my-4">€295</p>
            <ul className="space-y-2 text-sm">
              <li>Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels reinigen</li>
              <li>Tapijt reinigen</li>
              <li>Kunststof behandelen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Reiniging dakhemel</h3>
            <p className="text-4xl font-bold my-4">€75</p>
            <ul className="space-y-2 text-sm">
              <li>Vlekken verwijderen</li>
              <li>Prijs afhankelijk van vervuiling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* POLIEREN */}
      <section className="bg-[#f5f5f5] text-black py-16 px-6">
        <h2 className="text-4xl text-center font-bold mb-10">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Light polish</h3>
            <p className="text-4xl font-bold my-4">€595</p>
            <ul className="text-sm">
              <li>1-staps polieren</li>
              <li>Lichte krassen verwijderen</li>
              <li>Optimale glans</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">Heavy polish</h3>
            <p className="text-4xl font-bold my-4">€895</p>
            <ul className="text-sm">
              <li>Meertraps polieren</li>
              <li>Diepe krassen verwijderen</li>
              <li>Oxidatie verwijderen</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PREMIUM WASBEURT */}
<section className="bg-white text-black py-20 px-6">
  <h2 className="text-4xl text-center font-bold mb-12">
    Premium wasbeurt
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {/* 1 */}
    <div className="bg-[#f5f5f5] p-8 rounded-3xl">
      <h3 className="text-xl font-bold mb-2">Premium handwas</h3>

      <p className="text-3xl font-bold mb-6">
        €95 <span className="text-sm font-normal">/ Grote wagen +€15</span>
      </p>

      <ul className="space-y-2 text-sm">
        <li>Krasvrije wasbeurt (2 emmer methode)</li>
        <li>Reinigen deurstijlen en instaplijsten</li>
        <li>Reinigen velgen, banden en wielkasten</li>
        <li>Drogen met warme lucht en zachte microvezel</li>
        <li>Spraywax of sealant</li>
        <li>Bandendressing</li>
      </ul>

      <p className="text-sm mt-6">
        Kan gecombineerd worden met een basis interieurreiniging
        of een <span className="text-blue-500">interieur dieptereiniging</span>.
      </p>
    </div>

    {/* 2 */}
    <div className="bg-[#f5f5f5] p-8 rounded-3xl border-2 border-black relative">
      <div className="absolute top-0 left-0 right-0 bg-black text-white text-center text-xs py-2 rounded-t-3xl">
        MEEST POPULAIR
      </div>

      <h3 className="text-xl font-bold mb-2 mt-6">
        Premium handwas + basis interieur
      </h3>

      <p className="text-3xl font-bold mb-6">
        €175 <span className="text-sm font-normal">/ Grote wagen +€25</span>
      </p>

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

      <p className="text-sm mt-6">
        Enkel mogelijk indien de wagen zich in relatief goede staat bevindt.
        Voor een grondige reiniging adviseren wij onze{" "}
        <span className="text-blue-500">interieur dieptereiniging</span>.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-[#f5f5f5] p-8 rounded-3xl">
      <h3 className="text-xl font-bold mb-2">Decontaminatie handwas</h3>

      <p className="text-3xl font-bold mb-6">
        €125 <span className="text-sm font-normal">/ Grote wagen +€25</span>
      </p>

      <ul className="space-y-2 text-sm">
        <li>Krasvrije wasbeurt (2 emmer methode)</li>
        <li>Reinigen deurstijlen en instaplijsten</li>
        <li>Reinigen velgen, banden en wielkasten</li>
        <li>Teer en vliegroest verwijderen</li>
        <li>Kleibehandeling*</li>
        <li>Drogen met warme lucht en zachte microvezel</li>
        <li>Spraywax of sealant</li>
        <li>Bandendressing</li>
      </ul>

      <p className="text-sm mt-6 italic">
        *enkel indien toepasbaar of vereist.
      </p>
    </div>

  </div>
</section>

      {/* COATING */}
      <section className="bg-[#0b2e59] text-white py-16 px-6">
        <h2 className="text-4xl text-center font-bold mb-10">Coating</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white text-black p-8 rounded-3xl">
            <h3 className="font-bold">New Car Coating</h3>
            <p className="text-3xl font-bold my-4">€995</p>
            <p>Aanbrengen 2 lagen Nanolex</p>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl border-2 border-[#5c9ea6]">
            <h3 className="font-bold">Coating Pakket</h3>
            <p className="text-3xl font-bold my-4">€1395</p>
            <p>Aanbrengen 2 lagen Nanolex</p>
          </div>

          <div className="bg-white text-black p-8 rounded-3xl">
            <h3 className="font-bold">Matte Coating</h3>
            <p className="text-3xl font-bold my-4">€995</p>
            <p>Aanbrengen 2 lagen Nanolex</p>
          </div>

        </div>
      </section>

    </div>
  );
}