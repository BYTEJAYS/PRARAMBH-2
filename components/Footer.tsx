import { business } from "@/lib/site-config";
import Link from "next/link";
import { TiltCard } from "@/components/ui/tilt-card";
import SiteImage from "./SiteImage";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-mark"><SiteImage src="/assets/logo.png" alt="PRARAMBH GROUP" sizes="160px" /><p>Real estate as craft.</p></div>
      <div className="footer-links"><p>Explore</p><div className="footer-links-row"><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/testimonials">Stories</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link></div></div>
      <div className="footer-contact">
        <p>Begin a conversation</p>
        <a href={`tel:${business.telephone}`}>{business.displayTelephone}</a>
        <a href={`mailto:${business.email}`}>{business.email}</a>
        <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }} className="group">
          <span style={{ display: "block", lineHeight: "1.6" }}>Prarambh Group,<br />Alva Road,<br />Nr. To Vadpadraka Hotel & Resort,<br />Dattpura, Waghodia Road,<br />Vadodara 391760</span>
          <TiltCard scale={1.1} effect="gravitate" className="w-10 h-10 rounded-xl bg-[#c9aa70] flex items-center justify-center shadow-md cursor-pointer border border-white/20 shrink-0 group-hover:bg-[#d7c29b] transition-colors">
            <MapPinIcon className="w-5 h-5 text-[#092a26] relative z-20 pointer-events-none" />
          </TiltCard>
        </a>
        <div className="flex gap-4">
          <a href={business.instagramUrl} aria-label="PRARAMBH GROUP on Instagram" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginBottom: 0 }}>
            <TiltCard scale={1.1} effect="gravitate" className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-md cursor-pointer border border-white/20">
              <InstagramIcon className="w-5 h-5 text-white relative z-20 pointer-events-none" />
            </TiltCard>
          </a>
          <a href={business.facebookUrl} aria-label="PRARAMBH GROUP on Facebook" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginBottom: 0 }}>
            <TiltCard scale={1.1} effect="gravitate" className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md cursor-pointer border border-white/20">
              <FacebookIcon className="w-5 h-5 text-white fill-none stroke-current relative z-20 pointer-events-none" />
            </TiltCard>
          </a>
          <a href={business.whatsappUrl} aria-label="PRARAMBH GROUP on WhatsApp" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginBottom: 0 }}>
            <TiltCard scale={1.1} effect="gravitate" className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shadow-md cursor-pointer border border-white/20">
              <WhatsAppIcon className="w-6 h-6 text-white relative z-20 pointer-events-none" />
            </TiltCard>
          </a>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 PRARAMBH GROUP</span><span>Built with intention.</span></div>
    </footer>
  );
}
