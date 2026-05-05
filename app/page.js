import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans bg-[#0b0b0b] text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <img src="/logo.png" className="h-12" />

          <div className="flex gap-4">
            <a href="#contact" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
              Offerte
            </a>
            <a href="https://wa.me/32498350160" className="px-5 py-2 rounded-full bg-green-500 hover:scale-105 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h1 className="text-6xl font-bold mb-6">Premium Car Detailing</h1>
        <p className="opacity-70 max-w-xl">
          Binnen & buiten detailing op het hoogste niveau. Jouw wagen opnieuw als nieuw.
        </p>
      </section>

      {/* VOOR & NA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-12">Voor & Na Resultaten</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {["1","2","3","4"].map(i => (
            <>
              <Image key={"b"+i} src={`/before${i}.jpg`} width={800} height={500} alt="" className="rounded-xl"/>
              <Image key={"a"+i} src={`/after${i}.jpg`} width={800} height={500} alt="" className="rounded-xl"/>
            </>
          ))}
        </div>
      </section>

      {/* PREMIUM WASBEURT */}
      <section className="py-24 bg-[#111] text-center">
        <h2 className="text-4xl font-bold mb-12">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3 className="text-xl">Premium handwas</h3>
            <p className="text-3xl font-bold my-4">€95 / +€15</p>
            <ul className="space-y-2 text-sm">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl border border-white text-left">
            <p className="text-xs mb-2 text-center">MEEST POPULAIR</p>
            <h3 className="text-xl">Premium + interieur</h3>
            <p className="text-3xl font-bold my-4">€175 / +€25</p>
            <ul className="space-y-2 text-sm">
              <li>Volledige handwas</li>
              <li>Interieur stofzuigen</li>
              <li>Dashboard reinigen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3 className="text-xl">Decontaminatie</h3>
            <p className="text-3xl font-bold my-4">€125</p>
            <ul className="space-y-2 text-sm">
              <li>Teer verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Bescherming lak</li>
            </ul>
          </div>

        </div>
      </section>

      {/* INTERIEUR */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-12">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3 className="text-xl">Dieptereiniging</h3>
            <p className="text-3xl font-bold my-4">€295</p>
            <ul className="space-y-2 text-sm">
              <li>Zetels reinigen</li>
              <li>Tapijten reinigen</li>
              <li>Dashboard detailen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3 className="text-xl">Dakhemel</h3>
            <p className="text-3xl font-bold my-4">€75</p>
          </div>

        </div>
      </section>

      {/* POLIJSTEN */}
      <section className="py-24 bg-[#111] text-center">
        <h2 className="text-4xl font-bold mb-12">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3>Light polish</h3>
            <p className="text-3xl font-bold my-4">€595</p>
            <ul className="text-sm">
              <li>Lichte krassen verwijderen</li>
              <li>Glans herstellen</li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3>Heavy polish</h3>
            <p className="text-3xl font-bold my-4">€895</p>
            <ul className="text-sm">
              <li>Diepe correctie</li>
              <li>Meertraps polieren</li>
            </ul>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-12">Coating</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3>New Car</h3>
            <p className="text-3xl font-bold my-4">€995</p>
            <p className="text-sm">2 lagen Nanolex coating</p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl border border-white text-left">
            <h3>Coating pakket</h3>
            <p className="text-3xl font-bold my-4">€1395</p>
            <p className="text-sm">Polijsten + Nanolex coating</p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3>Matte coating</h3>
            <p className="text-3xl font-bold my-4">€995</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>

        <form
          action="https://formsubmit.co/rutgerscarcleaning@outlook.be"
          method="POST"
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input type="text" name="naam" placeholder="Naam" required className="p-4 bg-white/10 rounded-xl"/>
          <input type="email" name="email" placeholder="Email" required className="p-4 bg-white/10 rounded-xl"/>
          <textarea name="bericht" placeholder="Bericht" className="p-4 bg-white/10 rounded-xl"/>

          <button className="bg-white text-black py-4 rounded-xl font-bold hover:scale-105 transition">
            Verstuur aanvraag
          </button>
        </form>

        <p className="mt-10">📞 0498350160</p>
        <p>✉️ rutgerscarcleaning@outlook.com</p>

        <iframe
          src="https://calendly.com/rutgerscarcleaning"
          className="w-full h-[600px] mt-10"
        />
      </section>

    </main>
  );
}