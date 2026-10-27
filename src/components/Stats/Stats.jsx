import { useEffect, useRef, useState } from 'react'
import { STATS } from '../../data/content'
import './Stats.css'
function Num({to,suf}){const [v,setV]=useState(0),r=useRef()
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();let s=0;const t=setInterval(()=>{s+=Math.ceil(to/50);if(s>=to){s=to;clearInterval(t)}setV(s)},30)});o.observe(r.current)},[to])
 return <span ref={r}>{v}{suf}</span>}
export default function Stats(){return <section className="stats"><div className="container grid g4">{STATS.map(([n,s,l])=><div key={l} className="st"><h3><Num to={n} suf={s}/></h3><p>{l}</p></div>)}</div></section>}
