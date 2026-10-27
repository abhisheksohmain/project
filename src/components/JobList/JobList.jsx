import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal'
import { JOBS } from '../../data/content'
import './JobList.css'
export default function JobList(){return <div>{JOBS.map(([t,m],i)=><Reveal key={t} delay={i*100} dir="right"><div className="job"><div><h4>{t}</h4><span>{m}</span></div><Link to="/contact" className="btn btn-dark">Apply →</Link></div></Reveal>)}</div>}
