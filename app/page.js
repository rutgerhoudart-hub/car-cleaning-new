import Image from "next/image";

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
            </p>
          </div>

          <div className="bg-[#F5F7FA] p-8 rounded-2xl shadow text-left">
            <h3 className="text-xl">Decontaminatie handwas</h3>
            <p className="text-3xl font-bold my-4">€125 / Grote wagen +€25</p>

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

            <p className="text-xs mt-4">*enkel indien toepasbaar of vereist.</p>
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
              <li>Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels reinigen (shampoo-extractie)</li>
              <li>Automatten en tapijt reinigen (shampoo-extractie)</li>
              <li>Behandelen kunststof onderdelen (UV-bescherming)</li>
              <li>Ramen streeploos schoonmaken</li>
            </ul>

            <p className="mt-6 text-sm">Gemiddelde duur: 1 dag</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-left">
            <h3 className="text-xl">Reiniging dakhemel</h3>
            <p className="text-3xl font-bold my-4">€75 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Vlekken verwijderen met aangepaste reinigingsmiddelen</li>
              <li>Prijs afhankelijk van de vervuiling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* POLIJSTEN */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Auto polieren prijzen</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

          <div className="bg-[#F5F7FA] p-8 rounded-2xl shadow text-left">
            <h3>Light polish</h3>
            <p className="text-3xl font-bold my-4">€595 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>1-staps polieren</li>
              <li>Verwijderen van zeer lichte krasjes</li>
              <li>Zorgt voor optimale glans</li>
              <li>Aanbevolen voor wagens met zeer lichte gebruikssporen</li>
            </ul>
          </div>

          <div className="bg-[#F5F7FA] p-8 rounded-2xl shadow text-left">
            <h3>Heavy polish</h3>
            <p className="text-3xl font-bold my-4">€895 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Meerstaps polieren</li>
              <li>Verwijderen van medium tot diepe krassen</li>
              <li>Verwijderen van oxidatie en hologrammen</li>
              <li>Zorgt voor optimale glans</li>
            </ul>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="py-24 text-center bg-[#F5F7FA]">
        <h2 className="text-4xl font-bold mb-12">Auto coating prijzen</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-white p-8 rounded-2xl shadow text-left">
            <h3>New Car Coating</h3>
            <p className="text-3xl font-bold my-4">€995 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Grondige reiniging en veilige handwas</li>
              <li>Chemische decontaminatie</li>
              <li>Inspectie van lak</li>
              <li>Aanbrengen 2 lagen nanolex coating</li>
              <li>Infrarood uitharding</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border-2 border-[#16385B] text-left">
            <h3>Coating pakket</h3>
            <p className="text-3xl font-bold my-4">€1395 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Grondige reiniging</li>
              <li>Kleibehandeling</li>
              <li>Meerstaps polieren</li>
              <li>Aanbrengen 2 lagen nanolex coating</li>
              <li>Infrarood uitharding</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-left">
            <h3>Matte coating</h3>
            <p className="text-3xl font-bold my-4">€995 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Reiniging</li>
              <li>2 lagen nanolex coating</li>
              <li>Bescherming matte lak</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>

        <form action="https://formsubmit.co/rutgerscarcleaning@outlook.com" method="POST" className="max-w-2xl mx-auto grid gap-6">
          <input type="text" name="naam" placeholder="Naam" required className="p-4 bg-gray-200 rounded-xl"/>
          <input type="email" name="email" placeholder="Email" required className="p-4 bg-gray-200 rounded-xl"/>
          <textarea name="bericht" placeholder="Bericht" className="p-4 bg-gray-200 rounded-xl"/>

          <button className="bg-[#16385B] text-white py-4 rounded-xl font-bold">
            Verstuur aanvraag
          </button>
        </form>

        <p className="mt-10">📞 0498350160</p>
        <p>✉️ rutgerscarcleaning@outlook.com</p>

        <iframe src="https://calendly.com/rutgerscarcleaning" className="w-full h-[600px] mt-10" />
      </section>

    </main>
  );
}