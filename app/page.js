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

          <h2 className="text-5xl font-black text-center mb-16">
            Onze Diensten
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* PREMIUM HANDWAS */}
            <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold mb-4">Premium handwas</h3>

              <p className="text-5xl font-black text-[#16385B] mb-6">
                €95
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Krasvrije wasbeurt (2 emmer methode)</li>
                <li>✔ Reinigen velgen & banden</li>
                <li>✔ Spraywax of sealant</li>
                <li>✔ Drogen met warme lucht</li>
                <li>✔ Bandendressing</li>
              </ul>
            </div>

            {/* POLIJSTEN */}
            <div className="bg-[#16385B] text-white p-10 rounded-3xl shadow-2xl scale-105">
              <p className="uppercase text-sm tracking-widest mb-3 opacity-70">
                Meest gekozen
              </p>

              <h3 className="text-3xl font-bold mb-4">Polijsten</h3>

              <p className="text-5xl font-black mb-6">
                €595+
              </p>

              <ul className="space-y-3">
                <li>✔ Light polish</li>
                <li>✔ Heavy polish</li>
                <li>✔ Meertraps correctie</li>
                <li>✔ Verwijderen krassen</li>
                <li>✔ Maximale glans</li>
              </ul>
            </div>

            {/* COATING */}
            <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold mb-4">Coating</h3>

              <p className="text-5xl font-black text-[#16385B] mb-6">
                €995+
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>✔ 2 lagen Nanolex coating</li>
                <li>✔ Langdurige bescherming</li>
                <li>✔ Extreme glans</li>
                <li>✔ Waterafstotend effect</li>
                <li>✔ Premium afwerking</li>
              </ul>
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