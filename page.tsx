"use client";

import React from "react";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-4xl md:text-6xl font-bold text-center mb-12 tracking-wide"
      style={{
        fontFamily: "cursive",
        background:
          "linear-gradient(90deg,#7c9a6d,#d4a373,#e5989b,#a8dadc,#bdb2ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-[30px] p-7 shadow-xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#fefae0,#f1f5f9,#ecfccb)",
      }}
    >
      {/* ročno narisan okvir */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[30px] border border-black/10"
        style={{ transform: "rotate(-0.5deg)" }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full p-2 rounded-xl border border-black/10 bg-white/70"
    />
  );
}

function Logo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 220 120" className="w-24 h-16">
        <defs>
          <linearGradient id="rainbowSoft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="25%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#86efac" />
            <stop offset="75%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
        <path
          d="M10 80 Q60 10 110 40 Q160 70 210 30"
          stroke="url(#rainbowSoft)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="text-center">
        <div
          className="text-2xl md:text-3xl font-bold"
          style={{
            fontFamily: "cursive",
            background:
              "linear-gradient(90deg,#8fae7a,#e0b27f,#f1a7b5,#9edee6,#c7c2ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MATMAR
        </div>
        <div className="text-xs text-green-800">center naravnega otroštva</div>
      </div>
    </div>
  );
}

function FoodBadges() {
  return (
    <div className="flex gap-4 mt-4 justify-center flex-wrap">
      <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full shadow text-sm font-semibold text-green-800">
        🟢 EKO
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full shadow text-sm font-semibold text-yellow-800">
        🟡 DEMETER
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full shadow text-sm font-semibold text-emerald-800">
        🌿 LASTNA PRIDELAVA
      </div>

      {/* PREMIUM BIO PEČAT */}
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-200 text-green-900 font-bold text-xs shadow-xl border-4 border-green-300 text-center">
        BIO
        <br />
        CERT
      </div>
    </div>
  );
}

export default function Website() {
  const buildMailto = (type: string, fields: Record<string, string>) => {
    const subject = encodeURIComponent(`Prijava - ${type}`);
    const body = encodeURIComponent(
      Object.entries(fields)
        .map(([k, v]) => `${k}: ${v || ""}`)
        .join("\n")
    );
    return `mailto:matmarinfo11@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50">
      {/* WATERMARK MATMAR - OZADJE CELOTNE STRANI */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div
          className="text-[160px] md:text-[240px] lg:text-[300px] font-bold tracking-widest select-none"
          style={{
            fontFamily: "cursive",
            background:
              "linear-gradient(90deg,#7c9a6d,#d4a373,#e5989b,#a8dadc,#bdb2ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 0.18,
            transform: "rotate(-8deg)",
            filter: "blur(0.5px)",
            textShadow: "0 0 20px rgba(0,0,0,0.08)",
          }}
        >
          MATMAR
        </div>
      </div>

      {/* DODATNI UMETNIŠKI WATERMARK (ponovitev) */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end pr-10 pb-10 z-0">
        <div
          className="text-[80px] md:text-[120px] font-bold select-none"
          style={{
            fontFamily: "cursive",
            color: "rgba(120,140,120,0.12)",
            transform: "rotate(-12deg)",
          }}
        >
          MATMAR
        </div>
      </div>

      {/* WATERMARK VZOREC PO CELEM + ZGORAJ */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="text-[60px] md:text-[90px] font-bold select-none text-center"
              style={{
                fontFamily: "cursive",
                color: "rgba(120,140,120,0.25)",
                transform: i % 2 === 0 ? "rotate(-8deg)" : "rotate(8deg)",
              }}
            >
              MATMAR
            </div>
          ))}
        </div>
      </div>

      {/* EU FINANCING BAR */}
      <div
        className="w-full relative z-10 border-b border-blue-300"
        style={{ background: "#1e3a8a" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 py-3 px-4">
          {/* EU LOGO */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
            alt="EU logo"
            className="w-10 h-7 object-contain"
          />

          <div className="text-white font-semibold tracking-wide text-sm md:text-base">
            Projekt sofinancira Evropska unija – Erasmus+
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="p-4 flex justify-between items-center relative z-10">
        <Logo />
        <div className="text-sm text-green-800">Erasmus+</div>
      </div>

      {/* HERO */}
      <section className="text-center px-6 py-20 relative z-10">
        {/* ROČNA MAVRICA ZA NASLOVOM */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 opacity-30 z-0">
          <svg viewBox="0 0 700 220" className="w-[90vw] max-w-4xl">
            <path
              d="M20 200 Q350 -40 680 200"
              stroke="#fca5a5"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 200 Q350 -10 640 200"
              stroke="#fde68a"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M100 200 Q350 20 600 200"
              stroke="#86efac"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M140 200 Q350 50 560 200"
              stroke="#a5f3fc"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M180 200 Q350 80 520 200"
              stroke="#c4b5fd"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <img
            src="https://www.biolosko.si/logo-cnod.png"
            alt="CENTER ZA NARAVNO OTROŠTVO"
            w-[360px] md:w-[480px] lg:w-[560px]
          />

          <h1
            className="mt-8 text-center leading-tight font-medium tracking-wide"
            style={{
              fontFamily: "cursive",
              background:
                "linear-gradient(90deg,#7c9a6d,#d4a373,#e5989b,#a8dadc,#bdb2ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl>
              CENTER ZA NARAVNO OTROŠTVO, DRUŽINO TER
            </span>
            <span className="block mt-2 text-5xl md:text-6xl lg:text-7xl>
              CELOSTNO IZOBRAŽEVANJE IN SVETOVANJE
            </span>
          </h1>

          <p
            className="mt-7 text-lg md:text-xl lg:text-2xl font-semibold text-green-700"
          >
            Z elementi waldorfske pedagogike, biodinamike in gozdne pedagogike.
          </p>
        </div>
      </section>

      {/* PROGRAMI */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <SectionTitle>🌿 PROGRAMI</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {/* VARSTVO */}
          <Card>
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
                alt="Varstvo otrok"
                className="w-full h-40 object-cover rounded-2xl"
                style={{
                  filter: "sepia(20%) saturate(90%) brightness(0.95)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,0.2),rgba(236,252,203,0.35))",
                }}
              />
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold text-green-800"
              style={{ fontFamily: "cursive" }}
            >
              🌿 Varstvo otrok
            </h3>
            <p className="mt-3 text-lg md:text-xl text-green-900">
              Toplo, ritmično okolje, kjer otrok raste v varnosti, odnosu in
              naravi.
            </p>
            <p className="mt-2 italic text-green-800">
              {'"V ritmu dneva otrok najde varnost in zaupanje."'}
            </p>
            <ul className="mt-4 text-lg text-green-900 space-y-2">
              <li>🌳 stik z naravo in gozdni dnevi</li>
              <li>🎨 učenje skozi igro</li>
              <li>🌞 dnevni in letni ritem</li>
              <li>🤲 občutek varnosti</li>
            </ul>
          </Card>

          {/* DELAVNICE */}
          <Card>
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f"
                alt="Delavnice"
                className="w-full h-40 object-cover rounded-2xl"
                style={{
                  filter: "sepia(25%) saturate(85%) brightness(0.96)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,0.25),rgba(253,230,138,0.25))",
                }}
              />
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold text-amber-700"
              style={{ fontFamily: "cursive" }}
            >
              🎨 Delavnice
            </h3>
            <p className="mt-3 text-lg md:text-xl text-amber-900">
              Umetniške in ustvarjalne delavnice, ki razvijajo domišljijo in
              notranji svet.
            </p>
            <p className="mt-2 italic text-amber-800">
              {'"Skozi umetnost otrok izraža svojo notranjo resnico."'}
            </p>
            <ul className="mt-4 text-lg text-amber-900 space-y-2">
              <li>🎨 likovno ustvarjanje</li>
              <li>🎶 glasba in ritem</li>
              <li>🌿 naravni materiali</li>
              <li>✨ notranji razvoj</li>
            </ul>
          </Card>

          {/* IZOBRAŽEVANJE */}
          <Card>
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt="Izobraževanje"
                className="w-full h-40 object-cover rounded-2xl"
                style={{
                  filter: "sepia(20%) saturate(90%) brightness(0.96)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,0.25),rgba(168,218,220,0.25))",
                }}
              />
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold text-indigo-700"
              style={{ fontFamily: "cursive" }}
            >
              📚 Izobraževanje
            </h3>
            <p className="mt-3 text-lg md:text-xl text-indigo-900">
              Celostno učenje skozi glavo, srce in roke v skladu z razvojem
              otroka.
            </p>
            <p className="mt-2 italic text-indigo-800">
              {'"Vzgoja naj podpira svobodno in celostno rast človeka."'}
            </p>
            <ul className="mt-4 text-lg text-indigo-900 space-y-2">
              <li>🧠 mišljenje, čutenje, volja</li>
              <li>🎨 umetniško učenje</li>
              <li>🌿 izkustvo v naravi</li>
              <li>🤝 socialni razvoj</li>
            </ul>
          </Card>

          {/* BIODINAMIKA */}
          <Card>
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                alt="Biodinamika"
                className="w-full h-40 object-cover rounded-2xl"
                style={{
                  filter: "sepia(25%) saturate(85%) brightness(0.95)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,0.25),rgba(134,239,172,0.25))",
                }}
              />
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold text-emerald-700"
              style={{ fontFamily: "cursive" }}
            >
              🌱 Biodinamika
            </h3>
            <p className="mt-3 text-lg md:text-xl text-emerald-900">
              Povezava človeka z zemljo, naravnimi ritmi in celostnim življenjem.
            </p>
            <p className="mt-2 italic text-emerald-800">
              {'"V ravnovesju z naravo se rojeva prihodnost."'}
            </p>
            <ul className="mt-4 text-lg text-emerald-900 space-y-2">
              <li>🌙 naravni in kozmični ritmi</li>
              <li>🌿 pridelava hrane</li>
              <li>🧑‍🌾 stik z zemljo</li>
              <li>✨ celostni pristop</li>
            </ul>
          </Card>
        </div>

        {/* PREHRANA LOČENO */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card>
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="Prehrana"
                className="w-full h-52 object-cover rounded-2xl"
                style={{
                  filter: "sepia(30%) saturate(85%) brightness(0.95)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,0.3),rgba(254,250,224,0.35))",
                }}
              />
            </div>

            <h3
              className="text-3xl md:text-4xl font-bold text-green-900 text-center"
              style={{ fontFamily: "cursive" }}
            >
              🌾 Prehrana • DOMAČE BIO
            </h3>
            <p className="mt-3 text-lg md:text-xl text-green-900 text-center">
              Ekološka, biodinamična in lastna pridelava hrane za zdrav razvoj.
            </p>
            <p className="mt-2 italic text-green-800 text-center">
              {'"Hrana naj nosi življenje, sonce in skrb človeka."'}
            </p>

            <ul className="mt-4 text-lg text-green-900 space-y-2 text-center">
              <li>🌿 biološka sezonska prehrana</li>
              <li>🟢 eko certificirane jedi</li>
              <li>🏷️ lastna blagovna znamka DOMAČE BIO</li>
              <li>🌱 eko certificirano območje</li>
            </ul>

            <FoodBadges />

            {/* BIOLOSKO LOGO + LINK */}
            <div className="flex flex-col items-center gap-3 mt-6">
              <div className="px-6 py-2 rounded-full bg-green-800 text-white font-bold tracking-wide shadow">
                BIOLOŠKO.SI
              </div>

              <a
                href="https://www.biolosko.si"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline font-semibold"
              >
                Obišči www.biolosko.si
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* ERASMUS+ */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <SectionTitle>🌍 ERASMUS+</SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <h3
              className="text-2xl md:text-3xl font-bold text-blue-700"
              style={{ fontFamily: "cursive" }}
            >
              ✈️ Mobilnost
            </h3>
            <p className="mt-3 text-lg text-blue-900">
              Mednarodne mobilnosti omogočajo izmenjavo znanja, izkušenj in
              waldorfskih praks med državami.
            </p>
            <ul className="mt-4 text-lg text-blue-900 space-y-2">
              <li>🌍 izmenjave po Evropi</li>
              <li>📚 novi pedagoški pristopi</li>
              <li>🤝 mreženje strokovnjakov</li>
              <li>✨ osebna in strokovna rast</li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.target as HTMLFormElement;
                window.location.href = buildMailto("Mobilnost", {
                  Ime: (f.elements.namedItem("ime") as HTMLInputElement).value,
                  Email: (f.elements.namedItem("email") as HTMLInputElement)
                    .value,
                });
              }}
              className="mt-4 space-y-2"
            >
              <Input name="ime" placeholder="Ime in priimek" required />
              <Input name="email" type="email" placeholder="Email" required />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-xl"
              >
                Prijava
              </button>
            </form>
          </Card>

          <Card>
            <h3
              className="text-2xl md:text-3xl font-bold text-indigo-700"
              style={{ fontFamily: "cursive" }}
            >
              👀 Hospitacije
            </h3>
            <p className="mt-3 text-lg text-indigo-900">
              Hospitacije omogočajo vpogled v delo waldorfskih ustanov in
              učenje skozi opazovanje v praksi.
            </p>
            <ul className="mt-4 text-lg text-indigo-900 space-y-2">
              <li>🏫 obiski vrtcev in šol</li>
              <li>🧑‍🏫 spremljanje pouka</li>
              <li>🌿 učenje skozi opazovanje</li>
              <li>📖 prenos dobrih praks</li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.target as HTMLFormElement;
                window.location.href = buildMailto("Hospitacije", {
                  Ime: (f.elements.namedItem("ime") as HTMLInputElement).value,
                  Email: (f.elements.namedItem("email") as HTMLInputElement)
                    .value,
                });
              }}
              className="mt-4 space-y-2"
            >
              <Input name="ime" placeholder="Ime in priimek" required />
              <Input name="email" type="email" placeholder="Email" required />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-xl"
              >
                Prijava
              </button>
            </form>
          </Card>

          <Card>
            <h3
              className="text-2xl md:text-3xl font-bold text-emerald-700"
              style={{ fontFamily: "cursive" }}
            >
              🌐 Partnerji
            </h3>
            <p className="mt-3 text-lg text-emerald-900">
              Sodelujemo z organizacijami iz različnih držav.
            </p>
            <ul className="mt-4 text-lg text-emerald-900 space-y-2">
              <li>🇦🇹 Avstrija</li>
              <li>🇩🇪 Nemčija</li>
              <li>🇮🇹 Italija</li>
              <li>🇳🇱 Nizozemska</li>
              <li>🇭🇷 Hrvaška</li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.target as HTMLFormElement;
                window.location.href = buildMailto("Partnerstvo", {
                  Organizacija: (
                    f.elements.namedItem("organizacija") as HTMLInputElement
                  ).value,
                  Email: (f.elements.namedItem("email") as HTMLInputElement)
                    .value,
                });
              }}
              className="mt-4 space-y-2"
            >
              <Input name="organizacija" placeholder="Organizacija" required />
              <Input name="email" type="email" placeholder="Email" required />
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded-xl"
              >
                Postani partner
              </button>
            </form>
          </Card>
        </div>

        {/* LOČENE PRIJAVE PROGRAMOV */}
        <SectionTitle>📩 PRIJAVE</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card>
            <h3
              className="text-2xl font-bold text-green-800"
              style={{ fontFamily: "cursive" }}
            >
              🌿 Varstvo otrok
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.target as HTMLFormElement;
                window.location.href = buildMailto("Varstvo", {
                  Ime: (f.elements.namedItem("ime") as HTMLInputElement).value,
                  Email: (f.elements.namedItem("email") as HTMLInputElement)
                    .value,
                });
              }}
              className="mt-3 space-y-2"
            >
              <Input name="ime" placeholder="Ime otroka" required />
              <Input name="email" type="email" placeholder="Email" required />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-xl"
              >
                Prijava
              </button>
            </form>
          </Card>

          <Card>
            <h3
              className="text-2xl font-bold text-amber-700"
              style={{ fontFamily: "cursive" }}
            >
              🎨 Delavnice
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.target as HTMLFormElement;
                window.location.href = buildMailto("Delavnice", {
                  Ime: (f.elements.namedItem("ime") as HTMLInputElement).value,
                  Email: (f.elements.namedItem("email") as HTMLInputElement)
                    .value,
                });
              }}
              className="mt-3 space-y-2"
            >
              <Input name="ime" placeholder="Ime otroka" required />
              <Input name="email" type="email" placeholder="Email" required />
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-2 rounded-xl"
              >
                Prijava
              </button>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 py-10 border-t border-black/10 text-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          <Logo />
          <div className="text-green-900 text-lg font-semibold">
            Center naravnega otroštva
          </div>
          <div className="text-green-800">📧 matmarinfo11@gmail.com</div>
          <a
            href="https://www.biolosko.si"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 underline font-semibold"
          >
            www.biolosko.si
          </a>
          <div className="text-sm text-green-700 mt-2">
            © {new Date().getFullYear()} MATMAR
          </div>
        </div>
      </footer>
    </div>
  );
}
