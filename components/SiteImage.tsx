import Image, { type ImageProps } from "next/image";

const dimensions: Record<string, [number, number]> = {
  "/assets/logo.png": [500, 360],
  "/assets/homepage.jpeg": [1024, 553],
  "/assets/temple_pool.jpg": [1024, 570],
  "/assets/gallery1.png": [1024, 419],
  "/assets/gallery2.png": [1024, 394],
  "/assets/gallery3.jpg": [1024, 549],
  "/assets/gallery4.png": [1024, 336],
  "/assets/gallery5.jpg": [1024, 547],
  "/assets/asha-enclave.png": [729, 730],
  "/assets/shree-hari-complex.png": [543, 428],
  "/assets/amadius-elite.png": [554, 440],
  "/assets/swastik-residency.png": [662, 644],
  "/assets/vinayak-residency.png": [540, 428],
  "/assets/vivek-singh.jpg": [1024, 1024],
  "/assets/vanraj-sinh.jpg": [792, 1024],
  "/assets/chirayu-patel.jpg": [413, 531],
  "/assets/shaival-pandya.jpg": [784, 1024],
  "/assets/ketan-walimbe.jpg": [768, 1024],
  "/assets/soniya.jpg": [766, 1024],
  "/assets/vikash-singh.jpg": [819, 1024],
  "/assets/pooja-sharma.jpg": [852, 1024],
  "/assets/sunil-pathade.jpg": [783, 1024],
  "/assets/flower_left.png": [512, 724],
  "/assets/flower_right.png": [512, 724],
  "/assets/build1.png": [1846, 852],
  "/assets/build2.png": [1931, 814],
  "/assets/build3.png": [1706, 922],
  "/assets/build4.png": [1653, 952],
  "/assets/buildsquare1.jpeg": [1024, 1024],
  "/assets/buildsquare2.jpeg": [1600, 1600],
  "/assets/buildsquare4.jpeg": [1600, 1600],
  "/assets/prarambh-pragati-homes.jpg": [1360, 720],
  "/assets/prarambh-pragati-amenities.jpg": [1000, 864],
  "/old-assets/build1.jpg": [1846, 852],
  "/old-assets/build2.jpg": [1931, 814],
  "/old-assets/build4.jpg": [1653, 952],
  "/old-assets/prarambh_pragati.jpeg": [1421, 752],
  "/old-assets/logo1.png": [749, 745],
  "/old-assets/logo2_3.png": [892, 892],
  "/old-assets/logo4.png": [765, 740],
};

export default function SiteImage({ src, alt, ...props }: Omit<ImageProps, "src"> & { src: string }) {
  const size = dimensions[src];
  return <Image src={src} alt={alt} {...(!props.fill && size ? { width: size[0], height: size[1] } : {})} {...props} />;
}
