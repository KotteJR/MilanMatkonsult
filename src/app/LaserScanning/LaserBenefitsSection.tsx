"use client";

export default function LaserBenefitsSection() {
  const benefits = [
    "Hög precision i alla skeden av projektet",
    "Effektiv datainsamling på kort tid",
    "Möjlighet att upptäcka potentiella problem tidigt",
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 sm:gap-60 md:gap-80 px-6 md:px-14">
        <div>
          <p className="border-l-2 border-[#D8843E] pl-3 text-[#010207] text-[16px] leading-relaxed">
            Tekniken är särskilt användbar för att snabbt och noggrant samla in data, vilket sparar tid och resurser.
          </p>
          <p className="text-[#A1A1A1] mt-8">
            Hos Milan Mätkonsult kombinerar vi avancerad teknik med erfarenhet för att leverera de bästa resultaten för ditt projekt.
          </p>
        </div>

        <div className="space-y-8 items-right">
          {benefits.map((b, i) => (
            <div key={i}>
              <p className="text-[#D8843E] font-medium">{i + 1}</p>
              <p className="text-[#010207] text-[16px] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
