import PageBanner from '../components/PageBanner/PageBanner'
import ContactForm from '../components/ContactForm/ContactForm'
import Reveal from '../components/Reveal/Reveal'
import { IMG } from '../data/media'
import './Pages.css'
export default function Contact(){return <>
 <PageBanner crumb="Contact & 24/7 Support" title="Tender Inquiries, Helpdesk & Emergency Support" sub="Call Emergency Dispatch: 1800-CRAMER" img={IMG.hvac}/>
 <section className="section alt"><div className="container split" style={{alignItems:'start'}}>
  <Reveal dir="left"><div className="cinfo"><span className="eyebrow">Corporate Office & Inquiries</span><h2 className="title">Let's Talk</h2>
   <p><strong>Head Office</strong>[Street Address / Suite #, City, Country]</p><p><strong>Tender & General Inquiries</strong>info@cramergroup.com</p><p><strong>HR & Careers</strong>careers@cramergroup.com</p><p><strong>Phone</strong>+61 452 456 745 | +1 (800) CRAMER-HQ</p><p><strong>24/7 HVAC Emergency</strong>1800-CRAMER</p>
   <div className="map">📍 Google Map placeholder</div></div></Reveal>
  <Reveal dir="right"><ContactForm/></Reveal></div></section></>}
