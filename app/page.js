import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main className="font-sans bg-[#F5F7FA] text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <img src="/logo.png" className="h-12" />

          <div className="flex gap-4">
            <a href="#contact" className="px-5 py-2 rounded-full bg-[#16385B] text-white">
              Offerte
            </a>
            <a href="https://wa.me/32498350160" className="px-5 py-2 rounded-full bg-green-500 text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-[#16385B] text-white">
        <h1 className="text-6xl font-bold mb-6">Premium Car Detailing</h1>
        <p className="opacity-80 max-w-xl">
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
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-[#F5F7FA] p-8 rounded-2xl shadow text-left">
            <h3 className="text-xl">Premium handwas</h3>
            <p className="text-3xl font-bold my-4">€95 / Grote wagen +€15</p>

            <ul className="space-y-2 text-sm">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>

            <p className="text-sm mt-6">
              Kan gecombineerd worden met een basis interieurreiniging of een interieur dieptereiniging.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border-2 border-[#16385B] text-left">
            <p className="text-xs mb-2 text-center font-bold text-[#16385B]">MEEST POPULAIR</p>

            <h3 className="text-xl">Premium handwas + basis interieur</h3>
            <p className="text-3xl font-bold my-4">€175 / Grote wagen +€25</p>

            <ul className="space-y-2 text-sm">
              <li>Krasvrije wasbeurt</li>
              <li>Velgen + banden reinigen</li>
              <li>Interieur stofzuigen</li>
              <li>Dashboard reinigen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-[#F5F7FA] p-8 rounded-2xl shadow text-left">
            <h3 className="text-xl">Decontaminatie handwas</h3>
            <p className="text-3xl font-bold my-4">€125 / Grote wagen +€25</p>

            <ul className="space-y-2 text-sm">
              <li>Teer en vliegroest verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Bescherming lak</li>
            </ul>
          </div>

        </div>
      </section>

      {/* INTERIEUR */}
      <section className="py-24 text-center bg-[#F5F7FA]">
        <h2 className="text-4xl font-bold mb-12">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

          <div className="bg-white p-8 rounded-2xl shadow text-left">
            <h3 className="text-xl">Dieptereiniging interieur</h3>
            <p className="text-3xl font-bold my-4">€295 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Zetels reinigen</li>
              <li>Tapijten reinigen</li>
              <li>Dashboard detailen</li>
              <li>Ramen reinigen</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-left">
            <h3 className="text-xl">Dakhemel</h3>
            <p className="text-3xl font-bold my-4">€75</p>
          </div>

        </div>
      </section>

      {/* BOOKING PRO */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Boek direct jouw afspraak</h2>
        <p className="mb-6 text-gray-600">
          Kies zelf een moment dat voor jou past. Wij werken flexibel.
        </p>

        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden shadow-xl"
          data-url="https://calendly.com/rutgerscarcleaning"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>

        <form
          action="https://formsubmit.co/rutgerscarcleaning@outlook.com"
          method="POST"
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input type="text" name="naam" placeholder="Naam" required className="p-4 bg-gray-200 rounded-xl"/>
          <input type="email" name="email" placeholder="Email" required className="p-4 bg-gray-200 rounded-xl"/>
          <textarea name="bericht" placeholder="Bericht" className="p-4 bg-gray-200 rounded-xl"/>

          <button className="bg-[#16385B] text-white py-4 rounded-xl font-bold">
            Verstuur aanvraag
          </button>
        </form>

        <p className="mt-10">📞 0498350160</p>
        <p>✉️ rutgerscarcleaning@outlook.com</p>
      </section>

    </main>
  );
}