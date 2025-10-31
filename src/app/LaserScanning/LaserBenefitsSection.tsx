"use client";

export default function LaserBenefitsSection() {
  const benefits = [
    "Hög precision i alla skeden av projektet",
    "Effektiv datainsamling på kort tid",
    "Möjlighet att upptäcka potentiella problem tidigt",
  ];

  return (
    <section className="w-full bg-white py-12 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Title - Centered */}
        <h2 className="md:text-center mt-6 text-3xl md:text-4xl font-medium text-[#010207] mb-12">
          Fördelar med <br />
          laserskanning
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Left Column - Intro Text + Footer */}
          <div className="flex flex-col justify-between min-h-0 md:min-h-[250px]">
            <p className="relative pl-4 text-[#010207] text-[16px] leading-relaxed before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#E88026] before:rounded-full md:mb-0 mb-6">
              Tekniken är särskilt användbar för att snabbt och noggrant samla in data, vilket sparar både tid och resurser i byggprojekt och erbjuder följande fördelar:
            </p>
            
            {/* Footer Text - Bottom of Left Column */}
            <p className="text-[#888888] text-[14px] leading-relaxed mt-6 md:mt-10">
              Hos Milan Mätkonsult kombinerar vi avancerad teknik med erfarenhet för att leverera de bästa resultaten för ditt projekt.
            </p>
          </div>

          {/* Right Column - Benefits List */}
          <div className="justify-self-end">
            <div className="flex flex-col space-y-4 md:space-y-6 justify-start gap-3 text-left">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#010207] text-[17px] font-medium flex-shrink-0">
                    {i + 1}.
                  </span>
                  <p className="text-[#010207] text-[17px] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
