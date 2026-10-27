import { Link } from 'react-router-dom'
import Media from '../Media/Media'
import { IMG } from '../../data/media'
import './CTABand.css'
export default function CTABand({title='Ready to Engineer Your Next Project?',text='Talk to our engineers about your tender, retrofit or mentoring requirement.',btn='Request Consultation',to='/contact'}){
 return <section className="cta"><Media src={IMG.tower} className="cm"/><div className="co"/><div className="container cc"><h2>{title}</h2><p>{text}</p><Link to={to} className="btn btn-primary">{btn} →</Link></div></section>}
