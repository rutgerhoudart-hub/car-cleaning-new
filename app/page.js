"use client";

export default function Home() {
  return (
    <div className="bg-[#0b2e59] text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#0b2e59] sticky top-0 z-50 border-b border-white/10">
        
        {/* LOGO LINKS */}
        <img
          src="/logo.png"
          className="h-16 md:h-20 object-contain"
          alt="logo"
        />

        {/* CTA RECHTS */}
        <div className="flex gap-4">
          <a href="#contact">
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold">
              Offerte
            </button>
          </a>

          <a href="https://wa.me/32498350160">
            <button className="bg-[#25D366] px-5 py-2 rounded-full font-bold">
              WhatsApp
            </button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Premium Car Detailing
        </h1>
        <p className="text-xl md:text-2xl mt-4">
          Binnen & buiten schoonmaak op topniveau
        </p>
      </section>

      {/* VOOR & NA */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-10">Voor & Na</h2>

        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col md:flex-row justify-center gap-6 mb-8 px-6">
            <img src={`/before${i}.jpg`} className="w-full md:w-[420px] h-[250px] object-cover rounded-2xl"/>
            <img src={`/after${i}.jpg`} className="w-full md:w-[420px] h-[250px] object-cover rounded-2xl"/>
          </div>
        ))}
      </section>

      {/* ================= PREMIUM WASBEURT ================= */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="font-bold text-xl">Premium handwas</h3>
            <p className="text-3xl font-bold my-4">€95 / Grote wagen +€15</p>
            <ul className="text-sm space-y-2">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl border-2 border-black">
            <h3 className="font-bold text-xl">Premium handwas + basis interieur</h3>
            <p className="text-3xl font-bold my-4">€175 / Grote wagen +€25</p>
            <ul className="text-sm space-y-2">
              <li>Krasvrije wasbeurt</li>
              <li>Velgen + banden reinigen</li>
              <li>Interieur stofzuigen</li>
              <li>Interieur afstoffen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="font-bold text-xl">Decontaminatie handwas</h3>
            <p className="text-3xl font-bold my-4">€125 / Grote wagen +€25</p>
            <ul className="text-sm space-y-2">
              <li>Teer en vliegroest verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Spraywax</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= INTERIEUR ================= */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Dieptereiniging interieur</h3>
            <p className="text-3xl font-bold my-4">€295 incl. BTW</p>
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

      {/* ================= POLIJSTEN ================= */}
      <section className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Light polish</h3>
            <p className="text-3xl font-bold my-4">€595</p>
            <ul className="text-sm space-y-2">
              <li>1-staps polieren</li>
              <li>Lichte krassen verwijderen</li>
              <li>Optimale glans</li>
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

      {/* ================= COATING ================= */}
      <section className="bg-[#f5f5f5] text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Coating</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-2xl">
            <h3>New Car Coating</h3>
            <p className="text-3xl font-bold my-4">€995</p>
            <ul className="text-sm">
              <li>Grondige reiniging</li>
              <li>Aanbrengen 2 lagen Nanolex</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl">
            <h3>Coating Pakket</h3>
            <p className="text-3xl font-bold my-4">€1395</p>
            <ul className="text-sm">
              <li>Meertraps polieren</li>
              <li>Nanolex coating</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl">
            <h3>Matte Coating</h3>
            <p className="text-3xl font-bold my-4">€995</p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-white text-black py-20 px-6">
        <h2 className="text-4xl text-center mb-10">Vraag offerte aan</h2>

        <form
          action="https://formsubmit.co/jouwemail@gmail.com"
          method="POST"
          className="max-w-xl mx-auto grid gap-4"
        >
          <input type="text" name="naam" placeholder="Naam" className="p-4 rounded"/>
          <input type="email" name="email" placeholder="Email" className="p-4 rounded"/>
          <textarea name="bericht" placeholder="Wat wil je laten doen?" className="p-4 rounded"/>
          <button className="bg-[#0b2e59] text-white py-3 rounded">
            Verstuur
          </button>
        </form>
      </section>

    </div>
  );
}