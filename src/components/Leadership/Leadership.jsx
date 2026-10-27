import Reveal from '../Reveal/Reveal'
import { LEADERS } from '../../data/content'
import './Leadership.css'
export default function Leadership(){return <section id="leadership" className="section"><div className="container"><Reveal><div className="center"><span className="eyebrow">Executive Leadership & Divisions</span><h2 className="title">The Team Behind Every Project</h2></div></Reveal>
 <div className="grid g3 lg">{LEADERS.map(([r,d,t],i)=><Reveal key={r} delay={(i%3)*120}><div className="card ld"><small>{d}</small><h3>{r}</h3><p>{t}</p></div></Reveal>)}</div></div></section>}
