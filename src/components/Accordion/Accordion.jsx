import { useState } from 'react'
import './Accordion.css'
export default function Accordion({items}){const [o,setO]=useState(0)
 return <div className="acc">{items.map((it,i)=><div key={it.t} className={`ai ${o===i?'on':''}`}><button onClick={()=>setO(o===i?-1:i)}><span>0{i+1}</span>{it.t}<i>+</i></button><div className="ab"><p>{it.d}</p></div></div>)}</div>}
