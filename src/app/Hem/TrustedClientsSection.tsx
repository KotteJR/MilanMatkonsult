"use client";

export default function TrustedClientsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center">
        <p className="text-gray-500 text-center mb-10 text-base md:text-lg">
          Betrodd av kommuner, byggfirmor och konsulter i hela Skåne
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          <div className="flex items-center justify-center h-12 md:h-14">
            <img
              src="/clients/eslovs.png"
              alt="Eslövs Kommun"
              className="max-h-10 md:max-h-12 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 md:h-14">
            <img
              src="/clients/kavlinge.png"
              alt="Kävlinge"
              className="max-h-10 md:max-h-12 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 md:h-14">
            <img
              src="/clients/peab.png"
              alt="PEAB"
              className="max-h-10 md:max-h-12 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center h-12 md:h-14">
            <img
              src="/clients/ncc.png"
              alt="NCC"
              className="max-h-10 md:max-h-12 object-contain md:-mt-5"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
