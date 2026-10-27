import PageBanner from '../components/PageBanner/PageBanner'
import Accordion from '../components/Accordion/Accordion'
import Media from '../components/Media/Media'
import Reveal from '../components/Reveal/Reveal'
import CTABand from '../components/CTABand/CTABand'
import { IMG } from '../data/media'
import { PROJ, PROJSTEPS } from '../data/content'
import './Pages.css'
export default function Projects(){return <>
 <PageBanner crumb="Services / Projects" title="Project Delivery & MEP Management" sub="From preliminary feasibility studies to final air balancing, we deliver multidisciplinary projects on time, within budget, and to the highest quality benchmarks." img={IMG.site}/>
 <section className="section"><div className="container split"><Reveal dir="left"><Media src={IMG.bim} className="tall"/></Reveal><Reveal dir="right"><span className="eyebrow">What We Deliver</span><h2 className="title">Single-Point Responsibility</h2><Accordion items={PROJ}/></Reveal></div></section>
 <section className="section alt"><div className="container"><Reveal><div className="center"><span className="eyebrow">Delivery Lifecycle</span><h2 className="title">Concept to Handover</h2></div></Reveal>
  <div className="grid g3" style={{marginTop:44}}>{PROJSTEPS.map(([t,d],i)=><Reveal key={t} delay={(i%3)*120}><div className="card"><b style={{color:'var(--blue)',fontSize:'1.6rem'}}>0{i+1}</b><h3 style={{margin:'8px 0'}}>{t}</h3><p style={{color:'var(--muted)'}}>{d}</p></div></Reveal>)}</div></div></section>
 <section className="section"><div className="container"><Reveal><div className="center"><span className="eyebrow">Featured Projects & Case Studies</span><h2 className="title">Selected Work</h2></div></Reveal>
  <div className="grid g3" style={{marginTop:40}}>{[['hospital','Hospital HVAC Retrofit'],['tower','Commercial Tower MEP'],['office','Data Centre Cooling']].map(([k,t],i)=><Reveal key={k} delay={i*120}><div className="case"><Media src={IMG[k]} className="cimg"/><div className="cap"><h4>{t}</h4><span>View case study →</span></div></div></Reveal>)}</div></div></section>
 <CTABand title="View Featured Projects & Case Studies" text="See how we deliver complex MEP projects seamlessly." btn="Discuss Your Project"/></>}
