import { useState } from 'react'
import './ContactForm.css'
export default function ContactForm(){const [done,setDone]=useState(false)
 const sub=e=>{e.preventDefault();/* TODO: connect to your backend / EmailJS */setDone(true)}
 if(done) return <div className="cf ok"><h3>✅ Thank you!</h3><p>Our team will contact you shortly. For emergencies call 1800-CRAMER.</p></div>
 return <form className="cf" onSubmit={sub}><h3>Send an Inquiry</h3>
  <div className="r"><label>Full Name<input required placeholder="John Smith"/></label><label>Email<input type="email" required placeholder="you@company.com"/></label></div>
  <div className="r"><label>Phone<input placeholder="+61 ..."/></label><label>Inquiry Type<select><option>Tender/Bid</option><option>HVAC Maintenance</option><option>Mentoring</option><option>Careers</option></select></label></div>
  <div className="r"><label>Project Location & Scope<select><option>Commercial</option><option>Industrial</option><option>Health</option><option>Residential</option></select></label><label>Priority Level<select><option>General Business Inquiry</option><option>24/7 HVAC Breakdown</option></select></label></div>
  <label>Message<textarea rows="4" placeholder="Tell us about your project..."/></label>
  <label>Upload Tender Drawings (PDF/DWG)<input type="file" accept=".pdf,.dwg"/></label>
  <button className="btn btn-primary">Submit Inquiry →</button></form>}
