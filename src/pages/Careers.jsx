import PageBanner from '../components/PageBanner/PageBanner'
import JobList from '../components/JobList/JobList'
import Reveal from '../components/Reveal/Reveal'
import { IMG } from '../data/media'
export default function Careers(){return <>
 <PageBanner crumb="Careers & People" title="Join Cramer Group: Grow Your Career in Built Environment Engineering" sub={`"We don't just build infrastructure; we build leaders." Mentoring is a core pillar of our identity.`} img={IMG.mentor}/>
 <section className="section alt"><div className="container split" style={{alignItems:'start'}}>
  <Reveal dir="left"><span className="eyebrow">Why Build Your Career With Us?</span><h2 className="title">Clear Progression. Real Mentorship.</h2><ul className="ticks"><li>Structured engineering cadetship & trade apprenticeship programs</li><li>Direct one-on-one mentorship with industry principals and senior PE engineers</li><li>Support for continuous accreditation (Chartered Engineer, LEED, NABERS)</li><li>Hands-on site exposure & chartered professional pathways</li></ul></Reveal>
  <div><span className="eyebrow">Current Job Openings (HR Portal)</span><br/><br/><JobList/></div></div></section></>}
