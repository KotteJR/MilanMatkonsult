"use client";

import Image from "next/image";

const team = [
  {
    name: "Petar Mitrovic",
    phone: "+46 735 13 31 65",
    email: "petar@milanmatkonsult.com",
    img: "/images/team/petar.png",
  },
  {
    name: "Filip Mitrovic",
    phone: "0703-10 50 81",
    email: "filip.m@milanmatkonsult.com",
    img: "/images/team/filip.png",
  },
  {
    name: "Åsa Fricke",
    phone: "0733-76 29 76",
    email: "asa@milanmatkonsult.com",
    img: "/images/team/asa.png",
  },
  {
    name: "David Rasmussen",
    phone: "0738-17 00 85",
    email: "david@milanmatkonsult.com",
    img: "/images/team/david.png",
  },
  {
    name: "Kenan Jasarspahic",
    phone: "0702-81 14 59",
    email: "kenan@milanmatkonsult.com",
    img: "/images/team/kenan.png",
  },
  {
    name: "Branimir Ristic",
    phone: "0761-15 03 23",
    email: "branimir@milanmatkonsult.com",
    img: "/images/team/branimir.png",
  },
  {
    name: "Hamid Delic",
    phone: "0790-68 06 00",
    email: "hamid@milanmatkonsult.com",
    img: "/images/team/hamid.png",
  },
  {
    name: "Aleksandar Djurdjulov",
    phone: "0722-65 90 46",
    email: "aleksandar@milanmatkonsult.com",
    img: "/images/team/aleksandar.png",
  },
  {
    name: "Amanda Tjäder",
    phone: "0735-25 52 70",
    email: "amanda@milanmatkonsult.com",
    img: "/images/team/amanda.png",
  },
  {
    name: "Velimir Antonijevic",
    phone: "0709-52 25 49",
    email: "velimir@milanmatkonsult.com",
    img: "/images/team/velimir.png",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="mt-6 text-3xl md:text-4xl font-medium text-[#010207] mb-12">
          Vårt team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl">
          {team.map((member, i) => (
            <div
              key={i}
              className="flex flex-col w-full space-y-4"
            >
              <div className="w-full aspect-[220/240] overflow-hidden rounded-xl border border-gray-200 md:max-w-[220px] md:mx-auto">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={240}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="text-center">
                <p className="font-medium mb-1 text-[#010207] text-lg">
                  {member.name}
                </p>
                <p className="text-md mb-1 text-[#D8843E]">{member.phone}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-md text-[#D8843E] hover:underline"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}