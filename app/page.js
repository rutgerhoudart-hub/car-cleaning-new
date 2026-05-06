import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main className="font-sans bg-[#F5F7FA] text-black overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="w-full flex justify-between items-center px-8 lg:px-16 py-4">

          {/* LOGO LINKS */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Auto Prestige"
              className="h-14 object-contain"
            />
          </div>

          {/* BUTTONS RECHTS */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#16385B] text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Offerte
            </a>

            <a
              href="https://wa.me/32498350160"
              target="_blank"
              className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        {/* ACHTERGROND */}
        <div className="absolute inset-0 bg-[#16385B]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#16385B] via-[#214E7A] to-[#F5F7FA]" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto pt-32">

          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Auto Prestige"
              className="h-32 md:h-40 object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            Premium Car Detailing
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Binnen & buiten detailing op het hoogste niveau.
            Professionele behandelingen voor een wagen die opnieuw als nieuw aanvoelt.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <a
              href="#booking"
              className="px-8 py-4 rounded-full bg-white text-[#16385B] font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl"
            >
              Boek afspraak
            </a>

            <a
              href="#diensten"
              className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[#16385B] transition duration-300"
            >
              Bekijk diensten
            </a>

          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            Waarom kiezen voor Auto Prestige?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Professionele detailing producten",
              "Veilige krasvrije technieken",
              "Flexibele planning",
              "Resultaat tot in detail",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F5F7FA] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl mb-4">✔</div>
                <p className="font-semibold text-lg">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* VOOR & NA */}
      <section className="py-24 text-center bg-[#F5F7FA]">
        <h2 className="text-5xl font-black mb-16">
          Voor & Na Resultaten
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">

          {["1","2","3","4"].map((i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-4 bg-white p-4 rounded-3xl shadow-xl"
            >
              <div>
                <p className="font-bold mb-3 text-gray-500">VOOR</p>

                <Image
                  src={`/before${i}.jpg`}
                  width={800}
                  height={600}
                  alt={`Before ${i}`}
                  className="rounded-2xl object-cover h-full"
                />
              </div>

              <div>
                <p className="font-bold mb-3 text-[#16385B]">NA</p>

                <Image
                  src={`/after${i}.jpg`}
                  width={800}
                  height={600}
                  alt={`After ${i}`}
                  className="rounded-2xl object-cover h-full"
                />
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* DIENSTEN */}
<section
  id="diensten"
  className="py-24 bg-white"
>
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-black text-center mb-20">
      Onze Diensten
    </h2>

    {/* PREMIUM WASBEURTEN */}
    <div className="mb-28">

      <h3 className="text-4xl font-bold text-[#16385B] mb-12">
        Premium Wasbeurten
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* PREMIUM HANDWAS */}
        <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">

          <h4 className="text-3xl font-bold mb-4">
            Premium handwas
          </h4>

          <p className="text-5xl font-black text-[#16385B] mb-6">
            €95
          </p>

          <p className="font-semibold mb-6">
            Grote wagen +€15
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Krasvrije wasbeurt (2 emmer methode)</li>
            <li>✔ Reinigen deurstijlen en instaplijsten</li>
            <li>✔ Reinigen velgen, banden en wielkasten</li>
            <li>✔ Drogen met warme lucht en zachte microvezel</li>
            <li>✔ Spraywax of sealant</li>
            <li>✔ Bandendressing</li>
          </ul>

          <p className="mt-8 text-sm text-gray-600">
            Kan gecombineerd worden met een basis interieurreiniging of een interieur dieptereiniging.
          </p>

        </div>

        {/* PREMIUM + INTERIEUR */}
        <div className="bg-[#16385B] text-white p-10 rounded-3xl shadow-2xl scale-105">

          <p className="uppercase tracking-widest text-sm opacity-70 mb-3">
            Meest gekozen
          </p>

          <h4 className="text-3xl font-bold mb-4">
            Premium handwas + basis interieur
          </h4>

          <p className="text-5xl font-black mb-6">
            €175
          </p>

          <p className="font-semibold mb-6">
            Grote wagen +€25
          </p>

          <ul className="space-y-3">
            <li>✔ Krasvrije wasbeurt (2 emmer methode)</li>
            <li>✔ Reinigen deurstijlen en instaplijsten</li>
            <li>✔ Reinigen velgen, banden en wielkasten</li>
            <li>✔ Drogen met warme lucht en zachte microvezel</li>
            <li>✔ Spraywax of sealant</li>
            <li>✔ Bandendressing</li>
            <li>✔ Interieur stofzuigen</li>
            <li>✔ Interieur afstoffen</li>
            <li>✔ Reinigen ramen en spiegels</li>
          </ul>

          <p className="mt-8 text-sm opacity-80">
            Enkel mogelijk indien de wagen zich in relatief goede staat bevindt.
          </p>

        </div>

        {/* DECONTAMINATIE */}
        <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">

          <h4 className="text-3xl font-bold mb-4">
            Decontaminatie handwas
          </h4>

          <p className="text-5xl font-black text-[#16385B] mb-6">
            €125
          </p>

          <p className="font-semibold mb-6">
            Grote wagen +€25
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Krasvrije wasbeurt (2 emmer methode)</li>
            <li>✔ Reinigen deurstijlen en instaplijsten</li>
            <li>✔ Reinigen velgen, banden en wielkasten</li>
            <li>✔ Teer en vliegroest verwijderen</li>
            <li>✔ Kleibehandeling</li>
            <li>✔ Drogen met warme lucht en zachte microvezel</li>
            <li>✔ Spraywax of sealant</li>
            <li>✔ Bandendressing</li>
          </ul>

          <p className="mt-8 text-sm text-gray-600">
            Kleibehandeling enkel indien toepasbaar of vereist.
          </p>

        </div>

      </div>

    </div>

    {/* INTERIEUR */}
    <div className="mb-28">

      <h3 className="text-4xl font-bold text-[#16385B] mb-12">
        Interieur Reiniging
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        {/* DIEPTEREINIGING */}
        <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl">

          <h4 className="text-3xl font-bold mb-4">
            Dieptereiniging interieur
          </h4>

          <p className="text-5xl font-black text-[#16385B] mb-8">
            €295
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Dashboard, middenconsole en deurpanelen reinigen</li>
            <li>✔ Lederen zetels reinigen en voeden</li>
            <li>✔ Stoffen zetels reinigen (shampoo extractie)</li>
            <li>✔ Automatten en tapijt reinigen</li>
            <li>✔ Kunststof onderdelen behandelen</li>
            <li>✔ Ramen streeploos reinigen</li>
          </ul>

          <p className="mt-8 text-sm text-gray-600">
            Gemiddelde duur: 1 volledige werkdag.
          </p>

        </div>

        {/* DAKHEMEL */}
        <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl">

          <h4 className="text-3xl font-bold mb-4">
            Reiniging dakhemel
          </h4>

          <p className="text-5xl font-black text-[#16385B] mb-8">
            €75
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Vlekken verwijderen</li>
            <li>✔ Professionele veilige reiniging</li>
            <li>✔ Aangepaste producten per materiaal</li>
          </ul>

        </div>

      </div>

    </div>

    {/* POLIJSTEN */}
    <div className="mb-28">

      <h3 className="text-4xl font-bold text-[#16385B] mb-12">
        Auto Polieren
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LIGHT */}
        <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl">

          <h4 className="text-3xl font-bold mb-4">
            Light polish
          </h4>

          <p className="text-5xl font-black text-[#16385B] mb-8">
            €595
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ 1-staps polieren</li>
            <li>✔ Verwijderen van zeer lichte krasjes</li>
            <li>✔ Zorgt voor optimale glans</li>
            <li>✔ Aanbevolen voor lichte gebruikssporen</li>
          </ul>

        </div>

        {/* HEAVY */}
        <div className="bg-[#16385B] text-white p-10 rounded-3xl shadow-2xl">

          <h4 className="text-3xl font-bold mb-4">
            Heavy polish
          </h4>

          <p className="text-5xl font-black mb-8">
            €895
          </p>

          <ul className="space-y-3">
            <li>✔ Meertraps polieren</li>
            <li>✔ Verwijderen van medium tot diepe krassen</li>
            <li>✔ Verwijderen van oxidatie en hologrammen</li>
            <li>✔ Zorgt voor maximale glans</li>
          </ul>

        </div>

      </div>

    </div>

    {/* COATINGS */}
    <div>

      <h3 className="text-4xl font-bold text-[#16385B] mb-12">
        Coating Pakketten
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* NEW CAR */}
        <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl">

          <h4 className="text-3xl font-bold mb-4">
            New Car Coating
          </h4>

          <p className="text-5xl font-black text-[#16385B] mb-8">
            €995
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Grondige reiniging en veilige handwas</li>
            <li>✔ Chemische decontaminatie</li>
            <li>✔ Inspectie van het lakwerk</li>
            <li>✔ Aanbrengen 2 lagen Nanolex coating</li>
            <li>✔ Infrarood uitharding van coating</li>
          </ul>

        </div>

        {/* COATING PAKKET */}
        <div className="bg-[#16385B] text-white p-10 rounded-3xl shadow-2xl scale-105">

          <p className="uppercase tracking-widest text-sm opacity-70 mb-3">
            Premium
          </p>

          <h4 className="text-3xl font-bold mb-4">
            Coating pakket
          </h4>

          <p className="text-5xl font-black mb-8">
            €1395
          </p>

          <ul className="space-y-3">
            <li>✔ Grondige reiniging</li>
            <li>✔ Kleibehandeling en decontaminatie</li>
            <li>✔ Meerstaps polieren</li>
            <li>✔ Aanbrengen 2 lagen Nanolex coating</li>
            <li>✔ Infrarood uitharding</li>
          </ul>

        </div>

        {/* MATTE */}
        <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl">

          <h4 className="text-3xl font-bold mb-4">
            Matte coating
          </h4>

          <p className="text-5xl font-black text-[#16385B] mb-8">
            €995
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Matte lak bescherming</li>
            <li>✔ Aanbrengen 2 lagen Nanolex coating</li>
            <li>✔ Professionele afwerking</li>
          </ul>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* REVIEWS */}
      <section className="py-24 bg-[#16385B] text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            Klantenervaringen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Kevin",
                text: "Mijn wagen zag er beter uit dan nieuw. Topservice.",
              },
              {
                name: "Jonas",
                text: "Perfect resultaat en super vriendelijke service.",
              },
              {
                name: "Matthias",
                text: "Eindelijk een detailer die echt kwaliteit levert.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur p-8 rounded-3xl border border-white/10"
              >
                <div className="text-yellow-400 text-2xl mb-4">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  "{review.text}"
                </p>

                <p className="font-bold">
                  — {review.name}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="py-24 bg-white text-center"
      >
        <h2 className="text-5xl font-black mb-6">
          Boek jouw afspraak
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Kies eenvoudig een moment dat voor jou past.
          Wij nemen nadien contact op voor bevestiging en verdere details.
        </p>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/rutgerscarcleaning"
            style={{ minWidth: "320px", height: "750px" }}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-[#F5F7FA]"
      >
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-6">
            Contacteer ons
          </h2>

          <p className="text-center text-gray-600 mb-16 text-lg">
            Vraag vrijblijvend jouw offerte aan of stel jouw vraag.
          </p>

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <form
              action="https://formsubmit.co/rutgerscarcleaning@outlook.com"
              method="POST"
              className="grid gap-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="naam"
                placeholder="Naam"
                required
                className="p-5 bg-[#F5F7FA] rounded-2xl outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="p-5 bg-[#F5F7FA] rounded-2xl outline-none"
              />

              <textarea
                name="bericht"
                placeholder="Bericht"
                rows={6}
                className="p-5 bg-[#F5F7FA] rounded-2xl outline-none"
              />

              <button className="bg-[#16385B] hover:scale-[1.02] transition text-white py-5 rounded-2xl font-bold text-lg shadow-xl">
                Verstuur aanvraag
              </button>
            </form>

            <div className="mt-12 text-center space-y-3 text-lg">
              <p>📞 0498350160</p>
              <p>✉️ rutgerscarcleaning@outlook.com</p>
              <p>📍 Keerbergen, België</p>
            </div>

          </div>

        </div>
      </section>

      {/* STICKY WHATSAPP */}
      <a
        href="https://wa.me/32498350160"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:scale-110 transition text-white p-5 rounded-full shadow-2xl"
      >
        💬
      </a>

    </main>
  );
}