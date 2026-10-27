import Reveal from '../Reveal/Reveal'
import { VALUES } from '../../data/content'
import './Values.css'
export default function Values(){return <section id="values" className="section dark"><div className="container"><Reveal><div className="center"><span className="eyebrow">Core Values</span><h2 className="title">What Drives Us</h2></div></Reveal>
 <div className="grid g4 vg">{VALUES.map(([t,d],i)=><Reveal key={t} delay={i*120}><div className="val"><div className="vi">{i+1}</div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div></section>}
