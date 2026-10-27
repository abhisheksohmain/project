import Media from '../Media/Media'
import './PageBanner.css'
export default function PageBanner({title,sub,img,crumb}){return <section className="pb"><Media src={img} className="pbm"/><div className="pbo"/>
 <div className="container pbc"><span className="eyebrow">{crumb}</span><h1>{title}</h1><p>{sub}</p></div></section>}
