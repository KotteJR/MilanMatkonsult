"use client";

import { useLayoutEffect, useRef, useState, useCallback, CSSProperties } from "react";

type Pt = { x: number; y: number };

export default function LaserWorkflowSection() {
  // layout knobs
  const CARD_W = 400;
  const GAP = 450;   // equal vertical gap between cards
  const PAD = 5;     // set 8–12 if you want tiny standoff from edges

  const steps = [
    {
      num: "1",
      title: "Insamling av data",
      desc: "Scannern mäter in miljontals punkter för att skapa ett detaljerat underlag.",
      image: "/images/laser-step1.png",
    },
    {
      num: "2",
      title: "Bearbetning av data",
      desc: "Efter att en laserskanning utförts bearbetas den laserdata som finns i specialiserade programvaror för att skapa användbara underlag.",
      image: "/images/laser-step2.png",
    },
    {
      num: "3",
      title: "Slutprodukt",
      desc: "Utifrån punktmolnet skapas 2D- och 3D-modeller, samt tekniska ritningar som kan användas i byggprocessen.",
      image: "/images/laser-step3.png",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const c1Ref = useRef<HTMLDivElement | null>(null);
  const c2Ref = useRef<HTMLDivElement | null>(null);
  const c3Ref = useRef<HTMLDivElement | null>(null);

  const [paths, setPaths] = useState({
    p12_rightTop: "",
    p12_bottomLeft: "",
    p23_rightTop: "",
    p23_bottomLeft: "",
  });
  const [containerH, setContainerH] = useState<number | undefined>(undefined);

  // single-elbow helpers
  const hv = (s: Pt, e: Pt) => `M ${s.x} ${s.y} H ${e.x} V ${e.y}`; // right then down
  const vh = (s: Pt, e: Pt) => `M ${s.x} ${s.y} V ${e.y} H ${e.x}`; // down then right

  const recalc = useCallback(() => {
    const root = containerRef.current, c1 = c1Ref.current, c2 = c2Ref.current, c3 = c3Ref.current;
    if (!root || !c1 || !c2 || !c3) return;

    const rb = root.getBoundingClientRect();
    const b1 = c1.getBoundingClientRect();
    const b2 = c2.getBoundingClientRect();
    const b3 = c3.getBoundingClientRect();

    const midRight = (b: DOMRect): Pt => ({ x: b.right - rb.left + PAD, y: b.top - rb.top + b.height / 2 });
    const midBottom = (b: DOMRect): Pt => ({ x: b.left - rb.left + b.width / 2, y: b.bottom - rb.top + PAD });
    const midTop = (b: DOMRect): Pt => ({ x: b.left - rb.left + b.width / 2, y: b.top - rb.top - PAD });
    const midLeft = (b: DOMRect): Pt => ({ x: b.left - rb.left - PAD, y: b.top - rb.top + b.height / 2 });

    setPaths({
      // 1 → 2
      p12_rightTop:  hv(midRight(b1),  midTop(b2)),
      p12_bottomLeft: vh(midBottom(b1), midLeft(b2)),
      // 2 → 3
      p23_rightTop:  hv(midRight(b2),  midTop(b3)),
      p23_bottomLeft: vh(midBottom(b2), midLeft(b3)),
    });

    // Ensure the container height tightly wraps the absolutely positioned third card
    const neededHeight = Math.ceil(b3.bottom - rb.top + PAD);
    if (!containerH || Math.abs(containerH - neededHeight) > 1) {
      setContainerH(neededHeight);
    }
  }, []);

  useLayoutEffect(() => {
    requestAnimationFrame(recalc);
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  const onImgLoad = () => recalc();

  const Num = ({ n }: { n: string }) => <span className="text-[#E88026] mr-2">{n}</span>;
  const centerStyle: CSSProperties = { left: "50%", transform: "translateX(-50%)" };

  function Card({
    step,
    refEl,
    className,
    style,
  }: {
    step: (typeof steps)[number];
    refEl?: React.RefObject<HTMLDivElement | null>;
    className?: string;
    style?: CSSProperties; // ← accept style
  }) {
    return (
      <div ref={refEl} className={className} style={style}> {/* ← apply style */}
        <div
          className="bg-[#FFFCF6] rounded-xl border border-gray-200/50 shadow-[0_1px_4px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden"
          style={{ width: CARD_W }}
        >
          <div className="p-5 pb-4">
            <h3 className="text-[#010207] text-[16px] tracking-tight mb-1">
              <Num n={step.num} /> {step.title}
            </h3>
            <p className="text-[#44484f] text-[13px] leading-relaxed">{step.desc}</p>
          </div>
          <img src={step.image} alt={step.title} className="w-full object-contain" onLoad={onImgLoad} />
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-20 mt-10">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-[34px] text-[#010207] mb-10">Arbetsflöde för laserskanning</h2>

        {/* Desktop / tablet stage */}
        <div
          ref={containerRef}
          className="relative hidden md:block"
          style={{ height: containerH ?? 1200 }}
        >
          <Card step={steps[0]} refEl={c1Ref} className="absolute top-0 left-0" />
          <Card step={steps[1]} refEl={c2Ref} className="absolute" style={{ top: GAP, ...centerStyle }} />
          <Card step={steps[2]} refEl={c3Ref} className="absolute" style={{ top: GAP * 2, right: 0 }} />

          {/* Four clean right-angle dashed connectors */}
          <svg className="pointer-events-none absolute inset-0 z-0" width="100%" height="100%" aria-hidden>
            <g
              stroke="#E88026"
              strokeWidth="1.25"
              strokeDasharray="6 9"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="none"
              shapeRendering="crispEdges"
            >
              <path d={paths.p12_rightTop} vectorEffect="non-scaling-stroke" />
              <path d={paths.p12_bottomLeft} vectorEffect="non-scaling-stroke" />
              <path d={paths.p23_rightTop} vectorEffect="non-scaling-stroke" />
              <path d={paths.p23_bottomLeft} vectorEffect="non-scaling-stroke" />
            </g>
          </svg>
        </div>

        {/* Mobile: stacked with dashed dividers */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Card step={steps[0]} />
            <div className="h-16 border-l-[1.25px] border-dashed border-[#E88026] my-6" />
            <Card step={steps[1]} />
            <div className="h-16 border-l-[1.25px] border-dashed border-[#E88026] my-6" />
            <Card step={steps[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}