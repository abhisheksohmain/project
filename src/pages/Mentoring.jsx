import PageBanner from '../components/PageBanner/PageBanner'
import Media from '../components/Media/Media'
import Reveal from '../components/Reveal/Reveal'
import CTABand from '../components/CTABand/CTABand'
import { IMG } from '../data/media'
import { MENTOR } from '../data/content'
import './Pages.css'
export default function Mentoring(){return <>
 <PageBanner crumb="Mentoring & Advisory" title="We Don't Just Build Infrastructure; We Build Leaders" sub="Structured technical training, chartered mentoring and regulatory advisory for the next generation of built-environment talent." img={IMG.mentor}/>
 <section className="section"><div className="container grid g3">{MENTOR.map(([t,d],i)=><Reveal key={t} delay={i*130}><div className="card" style={{height:'100%'}}><h3 style={{marginBottom:10}}>{t}</h3><p style={{color:'var(--muted)'}}>{d}</p></div></Reveal>)}</div></section>
 <section className="section alt"><div className="container split"><Reveal dir="left"><span className="eyebrow">Technical Cadets & Workshops</span><h2 className="title">Graduate & Cadetship Pipelines</h2><ul className="ticks"><li>Direct one-on-one mentorship with principals & senior PE engineers</li><li>Standards & building code mastery</li><li>Facility operational playbook design</li><li>Support for Chartered Engineer, LEED & NABERS accreditation</li></ul></Reveal><Reveal dir="right"><Media src={IMG.team} className="tall"/></Reveal></div></section>
 <CTABand title="Inquire About Advisory & Training" text="Upskill your engineers, cadets and facility teams with Cramer mentorship." btn="Inquire Now"/></>}
