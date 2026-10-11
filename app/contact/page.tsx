import PageFrame from "@/components/PageFrame";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/lib/site-data";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return <PageFrame><main className="inner-page contact-page">
    <section className="contact-intro"><Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} /><h1>Let’s talk about<br /><em>your next space.</em></h1><p>Enquire about PRARAMBH GROUP’s homes and mixed-use properties in Waghodia, Vadodara, or arrange a project site visit.</p></section>
    <section className="contact-grid section-pad">
      <form className="contact-form" action="mailto:inframr02@gmail.com" method="post" encType="text/plain">
        <label><span>01</span>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label><span>02</span>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required /></label>
        <label><span>03</span>Email<input name="email" type="email" autoComplete="email" placeholder="Your email address" /></label>
        <label><span>04</span>Interested project<select name="project" defaultValue=""><option value="" disabled>Select a project</option>{projects.map((project) => <option key={project.slug}>{project.name}</option>)}</select></label>
        <label><span>05</span>Message<textarea name="message" placeholder="Tell us what you are looking for" rows={4} /></label>
        <button className="solid-button" type="submit">Start a conversation <b>↗</b></button>
      </form>
      <aside className="contact-details"><div><p>Call</p><a href="tel:+919978948105">+91 99789 48105</a><a href="tel:+919512061100">+91 95120 61100</a></div><div><p>Email</p><a href="mailto:inframr02@gmail.com">inframr02@gmail.com</a></div><div><p>Visit</p><span>Waghodia Road<br />Vadodara, Gujarat</span></div><div className="contact-monogram">P<span>G</span></div></aside>
    </section>
  </main></PageFrame>;
}
