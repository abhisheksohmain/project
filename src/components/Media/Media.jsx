import { useState } from 'react'
import './Media.css'
export default function Media({src,alt='',className='',video=false,poster}){
  const [fail,setFail]=useState(false)
  if(video) return <div className={`media ${className}`}><video src={src} poster={poster} autoPlay muted loop playsInline onError={()=>setFail(true)} style={{display:fail?'none':'block'}}/>{fail&&<div className="ph">▶ Video placeholder<br/><small>{src}</small></div>}</div>
  return <div className={`media ${className}`}>{fail?<div className="ph">Image placeholder</div>:<img src={src} alt={alt} loading="lazy" onError={()=>setFail(true)}/>}</div>
}
