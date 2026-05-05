import Image from "next/image"

export default function Home() {
  return (
    <main className="font-sans text-black">

      {/* NAVBAR */}
      <div className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <img src="/logo.png" className="h-12 object-contain" />

          <div className="flex gap-3">
            <a href="#contact" className="bg-black text-white px-5 py-2 rounded-full">
              Offerte
            </a>
            <a href="https://wa.me/32498350160" className="bg-green-500 text-white px-5 py-2 rounded-full">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="h-screen bg-[#16385B] text-white flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-5xl font-bold mb-4">Premium Car Detailing</h1>
        <p className="text-lg">Binnen & buiten schoonmaak op topniveau</p>
      </section>

      {/* VOOR NA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl mb-10">Voor & Na</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Image src="/before1.jpg" width={600} height={400} alt="" />
          <Image src="/after1.jpg" width={600} height={400} alt="" />
          <Image src="/before2.jpg" width={600} height={400} alt="" />
          <Image src="/after2.jpg" width={600} height={400} alt="" />
        </div>
      </section>

      {/* PREMIUM WASBEURT */}
      <section className="py-20 bg-[#f5f5f5] text-center">
        <h2 className="text-4xl font-bold mb-12">Premium wasbeurt</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl text-left shadow">
            <h3 className="font-semibold">Premium handwas</h3>
            <p className="text-4xl font-bold my-4">€ 95 / Grote wagen +€15</p>

            <ul className="space-y-2 text-sm">
              <li>Krasvrije wasbeurt (2 emmer methode)</li>
              <li>Reinigen deurstijlen en instaplijsten</li>
              <li>Reinigen velgen, banden en wielkasten</li>
              <li>Drogen met warme lucht en zachte microvezel</li>
              <li>Spraywax of sealant</li>
              <li>Bandendressing</li>
            </ul>

            <p className="text-sm mt-6">
              Kan gecombineerd worden met een basis interieurreiniging (zie kolom 2) of een interieur dieptereiniging.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl text-left shadow border-2 border-black relative">
            <div className="absolute top-0 left-0 right-0 bg-black text-white text-xs py-1 text-center">
              MEEST POPULAIR
            </div>

            <h3 className="font-semibold mt-6">Premium handwas + basis interieur</h3>
            <p className="text-4xl font-bold my-4">€ 175 / Grote wagen +€25</p>

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
              Enkel mogelijk indien de wagen zich in relatief goede staat bevindt. Voor een grondige, meer gedetailleerde reiniging adviseren wij onze interieur dieptereiniging.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl text-left shadow">
            <h3 className="font-semibold">Decontaminatie handwas</h3>
            <p className="text-4xl font-bold my-4">€ 125 / Grote wagen +€25</p>

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
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Interieur reiniging</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl text-left shadow">
            <h3 className="text-2xl">Dieptereiniging interieur</h3>
            <p className="text-5xl font-bold my-4">€ 295 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Dashboard, middenconsole en deurpanelen reinigen</li>
              <li>Lederen zetels reinigen en voeden</li>
              <li>Stoffen zetels reinigen (shampoo-extractie)</li>
              <li>Automatten en tapijt reinigen (shampoo-extractie)</li>
              <li>Behandelen kunststof onderdelen (UV-bescherming, nieuwe uitstraling)</li>
              <li>Ramen streeploos schoonmaken</li>
            </ul>

            <p className="mt-6 text-sm">Gemiddelde duur: 1 dag</p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-left shadow">
            <h3 className="text-2xl">Reiniging dakhemel</h3>
            <p className="text-5xl font-bold my-4">€ 75 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Vlekken of vuil verwijderen met specifiek ontworpen reinigingsmiddelen</li>
              <li>Prijs afhankelijk van de vervuiling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* POLIJSTEN */}
      <section className="py-20 bg-[#f5f5f5] text-center">
        <h2 className="text-4xl font-bold mb-12">AUTO POLIEREN PRIJZEN</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl text-left shadow">
            <h3 className="text-2xl">Light polish</h3>
            <p className="text-5xl font-bold my-4">€ 595 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>1-staps polieren</li>
              <li>Verwijderen van zeer lichte krasjes</li>
              <li>Zorgt voor optimale glans</li>
              <li>Aanbevolen voor wagens met zeer lichte gebruikssporen of nieuwe wagens</li>
            </ul>

            <p className="mt-6 text-sm">
              Sedan/station vanaf +€95<br/>
              Jeep/SUV vanaf +€145<br/>
              Oversize enkel op aanvraag
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-left shadow">
            <h3 className="text-2xl">Heavy polish</h3>
            <p className="text-5xl font-bold my-4">€ 895 incl. BTW</p>

            <ul className="space-y-2 text-sm">
              <li>Meerstaps polieren</li>
              <li>Verwijderen van medium tot diepe (was)krassen</li>
              <li>Verwijderen van oxidatie, vegen, hologrammen,...</li>
              <li>Zorgt voor optimale glans</li>
              <li>Aanbevolen voor wagens met veel gebruikssporen</li>
            </ul>

            <p className="mt-6 text-sm">
              Sedan/station vanaf +€95<br/>
              Jeep/SUV vanaf +€195<br/>
              Oversize enkel op aanvraag
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl mb-6">Contact</h2>

        <p>📞 0498350160</p>
        <p>✉️ rutgerscarcleaning@outlook.com</p>

        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:rutgerscarcleaning@outlook.com" className="bg-black text-white px-6 py-3 rounded-full">
            Email
          </a>

          <a href="https://wa.me/32498350160" className="bg-green-500 text-white px-6 py-3 rounded-full">
            WhatsApp
          </a>
        </div>

        <iframe
          src="https://calendly.com/rutgerscarcleaning"
          className="w-full h-[700px] mt-10"
        />
      </section>

    </main>
  )
}