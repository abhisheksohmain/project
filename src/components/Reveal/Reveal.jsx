import { useEffect, useRef } from 'react'
import './Reveal.css'
export default function Reveal({children,delay=0,dir='up',className=''}){
  const r=useRef()
  useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){e.target.classList.add('in');o.disconnect()}},{threshold:.15});o.observe(r.current);return()=>o.disconnect()},[])
  return <div ref={r} className={`reveal ${dir} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>
}
