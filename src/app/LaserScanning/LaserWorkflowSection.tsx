"use client";

export default function LaserWorkflowSection() {
  const steps = [
    {
      num: "1",
      title: "Insamling av data",
      desc: "Scannern mäter in miljontals punkter för att skapa ett detaljerat underlag.",
      image: "/images/laser-step1.jpg",
    },
    {
      num: "2",
      title: "Bearbetning av data",
      desc: "Efter att en laserskanning utförts bearbetas datan i specialiserade programvaror för att skapa användbara underlag.",
      image: "/images/laser-step2.jpg",
    },
    {
      num: "3",
      title: "Slutprodukt",
      desc: "Utifrån punktmolnet skapas 2D- och 3D-modeller samt ritningar som används i byggprocessen.",
      image: "/images/laser-step3.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-[28px] md:text-[34px] font-medium text-[#010207] mb-10">
          Arbetsflöde för laserskanning
        </h2>

        <div className="space-y-10 relative">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-[#FFF8F2] rounded-xl p-8 flex flex-col md:flex-row items-center gap-8"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full md:w-1/2 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-[#D8843E] font-medium mb-1">{s.num} {s.title}</h3>
                <p className="text-[#010207] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}