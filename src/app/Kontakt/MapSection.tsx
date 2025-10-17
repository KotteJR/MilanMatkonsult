"use client";

export default function MapSection() {
  return (
    <section className="w-full h-[60vh] md:h-[50vh] overflow-hidden">
      <iframe
        title="Milan Mätkonsult Malmö"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22469.09047499929!2d12.9692683!3d55.6061358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653057fa62c86c7%3A0xf19b2cb7d08306f5!2sMalm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sse!4v1700000000000!5m2!1sen!2sse"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0 grayscale-[20%] brightness-[95%] contrast-[95%]"
      ></iframe>
    </section>
  );
}
