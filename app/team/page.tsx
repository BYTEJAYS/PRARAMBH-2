import PageFrame from "@/components/PageFrame";
import { TiltCard } from "@/components/ui/tilt-card";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/team");

export default function TeamPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero team-hero"><Breadcrumbs items={[{ name: "Team", href: "/team" }]} /><h1>Human judgment.<br /><em>Shared purpose.</em></h1><span>Meet the people behind PRARAMBH GROUP.</span></section>
    <section className="section-pad">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto px-4">
        <div className="flex justify-center">
          <TiltCard className="w-full max-w-[260px] aspect-[3/4] border border-[var(--gold)]/30 bg-[var(--deep)]/5 rounded-xl flex flex-col overflow-hidden" effect="gravitate" tiltLimit={10} scale={1.03}>
            <div className="w-full h-[75%] bg-white pt-2 flex items-end justify-center overflow-hidden relative z-20">
              <img src="/assets/vivek-singh.jpg" alt="Vivek Singh" loading="lazy" decoding="async" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            <div className="w-full h-[25%] flex flex-col items-center justify-center p-3 text-center bg-white/40 backdrop-blur-sm relative z-20 pointer-events-none">
              <h3 className="font-serif text-[var(--ink)] text-lg m-0 leading-tight">Vivek Singh</h3>
              <p className="text-[var(--gold)] tracking-widest uppercase text-[10px] font-semibold mt-1">Founder</p>
            </div>
          </TiltCard>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {[
            { name: "Vanraj Sinh Gadhvi", role: "Partner", image: "/assets/vanraj-sinh.jpg", pos: "50% 15%" },
            { name: "Chirayu Patel", role: "Partner", image: "/assets/chirayu-patel.jpg", pos: "50% 10%" },
            { name: "Shaival Pandya", role: "Partner", image: "/assets/shaival-pandya.jpg", pos: "50% 20%" },
            { name: "Ketan Walimbe", role: "Partner", image: "/assets/ketan-walimbe.jpg", pos: "50% 15%" }
          ].map((person, i) => (
            <TiltCard key={`mid-${i}`} className="w-full aspect-[3/4] border border-[var(--gold)]/30 bg-[var(--deep)]/5 rounded-xl flex flex-col overflow-hidden" effect="gravitate" tiltLimit={10} scale={1.03}>
              <div className="w-full h-[75%] bg-white flex items-start justify-center overflow-hidden relative z-20">
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" className="w-full h-full object-cover pointer-events-none" style={{ objectPosition: person.pos }} />
              </div>
              <div className="w-full h-[25%] flex flex-col items-center justify-center p-2 sm:p-3 text-center bg-white/40 backdrop-blur-sm relative z-20 pointer-events-none">
                <h3 className="font-serif text-[var(--ink)] text-sm sm:text-base m-0 leading-tight">{person.name}</h3>
                <p className="text-[var(--gold)] tracking-widest uppercase text-[9px] sm:text-[10px] font-semibold mt-1">{person.role}</p>
              </div>
            </TiltCard>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {[
            { name: "Soniya", role: "Sales Head", image: "/assets/soniya.jpg", pos: "50% 10%" },
            { name: "Vikash Singh", role: "Engineer", image: "/assets/vikash-singh.jpg", pos: "50% 15%" },
            { name: "Pooja Sharma", role: "HR (Admin)", image: "/assets/pooja-sharma.jpg", pos: "50% 10%" },
            { name: "Sunil Pathade", role: "Site Supervisor", image: "/assets/sunil-pathade.jpg", pos: "50% 15%" }
          ].map((person, i) => (
            <TiltCard key={`bot-${i}`} className="w-full aspect-[3/4] border border-[var(--gold)]/30 bg-[var(--deep)]/5 rounded-xl flex flex-col overflow-hidden" effect="gravitate" tiltLimit={10} scale={1.03}>
              <div className="w-full h-[75%] bg-white flex items-start justify-center overflow-hidden relative z-20">
                <img src={person.image} alt={person.name} loading="lazy" decoding="async" className="w-full h-full object-cover pointer-events-none" style={{ objectPosition: person.pos }} />
              </div>
              <div className="w-full h-[25%] flex flex-col items-center justify-center p-2 sm:p-3 text-center bg-white/40 backdrop-blur-sm relative z-20 pointer-events-none">
                <h3 className="font-serif text-[var(--ink)] text-sm sm:text-base m-0 leading-tight">{person.name}</h3>
                <p className="text-[var(--gold)] tracking-widest uppercase text-[9px] sm:text-[10px] font-semibold mt-1">{person.role}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  </main></PageFrame>;
}
