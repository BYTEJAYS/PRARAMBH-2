"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/site-data";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export default function GalleryExperience() {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...Array.from(new Set(galleryImages.map(i => i.category)))];
  const visible = galleryImages.map((item, index) => ({ item, index })).filter(({ item }) => filter === "All" || item.category === filter);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (active === null) return;
      if (event.key === "ArrowRight") setActive((active + 1) % galleryImages.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [active]);
  const image = active === null ? null : galleryImages[active];
  return <>
    <div className="gallery-filters" role="group" aria-label="Gallery filters">{filters.map(item => <button type="button" className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
    <div className="gallery-exhibition">{visible.map(({ item, index }, order) => <button type="button" onClick={() => setActive(index)} className={`exhibit exhibit-${order % 4}`} key={item.src}><img src={item.src} alt={`${item.project} — ${item.category}`} loading="lazy" decoding="async" /><span><b>{item.project}</b><small>{item.category} · View</small></span></button>)}</div>
    <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
      <DialogContent className="lightbox" showCloseButton>
        {image && <><DialogTitle className="sr-only">{image.project}</DialogTitle><DialogDescription className="sr-only">{image.category}</DialogDescription><img src={image.src} alt={`${image.project} — ${image.category}`} /><footer><div><b>{image.project}</b><span>{image.category}</span></div><p>{String((active ?? 0) + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</p></footer></>}
      </DialogContent>
    </Dialog>
  </>;
}
