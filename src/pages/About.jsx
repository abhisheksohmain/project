import PageBanner from '../components/PageBanner/PageBanner'
import Media from '../components/Media/Media'
import Reveal from '../components/Reveal/Reveal'
import Values from '../components/Values/Values'
import Leadership from '../components/Leadership/Leadership'
import CTABand from '../components/CTABand/CTABand'
import { IMG } from '../data/media'
import './Pages.css'
export default function About(){return <>
 <PageBanner crumb="About" title="Corporate Profile" sub="An integrated multidisciplinary consulting and contracting firm specializing in Engineering, Project Delivery, and Professional Mentoring & Advisory." img={IMG.office}/>
 <section className="section"><div className="container split"><Reveal dir="left"><span className="eyebrow">Our Mission</span><h2 className="title">Engineering | Projects | Mentoring</h2><p className="lead">To engineer high-performance, energy-efficient environments and deliver complex projects seamlessly while empowering teams and industry talent through dedicated mentorship and technical leadership.</p></Reveal><Reveal dir="right"><Media src={IMG.team} className="tall"/></Reveal></div></section>
 <Values/><Leadership/><CTABand title="Join Our Engineering Team" text="Grow your career with a firm that builds leaders." btn="View Open Roles" to="/careers"/></>}
