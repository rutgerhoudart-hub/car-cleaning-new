export default function Home() {
  return (
    <main className="font-sans">

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <img src="/logo.png" className="h-12 object-contain" />
        <div className="flex gap-3">
          <a href="#offerte" className="bg-white text-black px-4 py-2 rounded-full">Offerte</a>
          <a href="https://wa.me/32498350160" className="bg-green-500 px-4 py-2 rounded-full">WhatsApp</a>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Premium Car Detailing</h1>
        <p className="mt-4">Binnen & buiten schoonmaak op topniveau</p>
      </section>

      {/* VOOR & NA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl mb-10">Voor & Na</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <img src="/before1.jpg" />
          <img src="/after1.jpg" />

          <img src="/before2.jpg" />
          <img src="/after2.jpg" />

          <img src="/before3.jpg" />
          <img src="/after3.jpg" />

          <img src="/before4.jpg" />
          <img src="/after4.jpg" />
        </div>
      </section>

      {/* PREMIUM WASBEURT */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl text-center mb-10">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl">
            <h3>Premium handwas</h3>
            <p className="text-3xl font-bold">€95 / Grote wagen +€15</p>

            <ul className="text-sm mt-4 space-y-1">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>

            <p className="text-sm mt-4">
              Kan gecombineerd worden met een basis interieurreiniging of interieur dieptereiniging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-black">
            <h3>Premium handwas + basis interieur</h3>
            <p className="text-3xl font-bold">€175 / Grote wagen +€25</p>

            <ul className="text-sm mt-4 space-y-1">
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
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3>Decontaminatie handwas</h3>
            <p className="text-3xl font-bold">€125 / Grote wagen +€25</p>

            <ul className="text-sm mt-4 space-y-1">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Teer en vliegroest verwijderen</li>
              <li>Kleibehandeling</li>
              <li>Drogen met warme lucht</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>
          </div>

        </div>
      </section>

      {/* INTERIEUR */}
      <section className="py-20">
        <h2 className="text-3xl text-center mb-10">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <div className="bg-white p-6 rounded-xl">
            <h3>Dieptereiniging interieur</h3>
            <p className="text-3xl font-bold">€295</p>

            <ul className="text-sm mt-4 space-y-1">
              <li>Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels reinigen</li>
              <li>Automatten en tapijt reinigen</li>
              <li>Kunststof behandelen</li>
              <li>Ramen streeploos reinigen</li>
            </ul>

            <p className="text-sm mt-4">Gemiddelde duur: 1 dag</p>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3>Reiniging dakhemel</h3>
            <p className="text-3xl font-bold">€75</p>

            <ul className="text-sm mt-4 space-y-1">
              <li>Vlekken verwijderen met specifieke producten</li>
              <li>Prijs afhankelijk van vervuiling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* POLIJSTEN */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl text-center mb-10">Polijsten</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <div className="bg-white p-6 rounded-xl">
            <h3>Light polish</h3>
            <p className="text-3xl font-bold">€595</p>

            <ul className="text-sm mt-4 space-y-1">
              <li>1-staps polieren</li>
              <li>Lichte krassen verwijderen</li>
              <li>Optimale glans</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3>Heavy polish</h3>
            <p className="text-3xl font-bold">€895</p>

            <ul className="text-sm mt-4 space-y-1">
              <li>Meertraps polieren</li>
              <li>Diepe krassen verwijderen</li>
              <li>Oxidatie verwijderen</li>
            </ul>
          </div>

        </div>
      </section>

      {/* COATING */}
      <section className="py-20">
        <h2 className="text-3xl text-center mb-10">Auto coating prijzen</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl">
            <h3>New Car Coating</h3>
            <p className="text-3xl font-bold">€995</p>
            <ul className="text-sm mt-4">
              <li>Grondige reiniging</li>
              <li>Inspectie lak</li>
              <li>2 lagen Nanolex coating</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3>Coating pakket</h3>
            <p className="text-3xl font-bold">€1395</p>
            <ul className="text-sm mt-4">
              <li>Meertraps polieren</li>
              <li>2 lagen Nanolex coating</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3>Matte coating</h3>
            <p className="text-3xl font-bold">€995</p>
            <ul className="text-sm mt-4">
              <li>Matte bescherming</li>
              <li>Nanolex coating</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BOOKING */}
      <section className="py-20 text-center">
        <h2 className="text-3xl mb-6">Boek een afspraak</h2>

        <iframe
          src="https://calendly.com/rutgerscarcleaning"
          className="w-full h-[600px]"
        ></iframe>
      </section>

      {/* OFFERTE */}
      <section id="offerte" className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl mb-6">Offerte aanvragen</h2>

        <form action="https://formsubmit.co/rutgerscarcleaning@gmail.com" method="POST" className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" name="naam" placeholder="Naam" className="p-3 border" required />
          <input type="email" name="email" placeholder="Email" className="p-3 border" required />
          <textarea name="bericht" placeholder="Bericht" className="p-3 border"></textarea>

          <button className="bg-black text-white py-3 rounded-full">
            Verstuur
          </button>
        </form>
      </section>

    </main>
  );
}