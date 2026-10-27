import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home'
import Hvac from './pages/Hvac'
import Projects from './pages/Projects'
import Mentoring from './pages/Mentoring'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
export default function App(){return <><ScrollToTop/><Header/><Routes>
 <Route path="/" element={<Home/>}/><Route path="/services/hvac" element={<Hvac/>}/><Route path="/services/projects" element={<Projects/>}/>
 <Route path="/mentoring" element={<Mentoring/>}/><Route path="/about" element={<About/>}/><Route path="/careers" element={<Careers/>}/><Route path="/contact" element={<Contact/>}/>
 <Route path="*" element={<Home/>}/></Routes><Footer/></>}
