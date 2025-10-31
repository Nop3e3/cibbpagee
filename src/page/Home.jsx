
import React from 'react';
import './Home.css';
import Navbar from '../components/layout/Navbar';
import logo from '../Assets/logo.svg';
import Header from '../components/layout/Header';
import SectionTitle from '../components/common/SectionTitle';
export default function Home() {
  return (
    <div className="homee">
<nav className='thenavbar'>
  <img src={logo} alt="Logo" />
  <div className='navelementss'>
<Navbar label="About Us" />
<Navbar label=" Investor Relations " />
<Navbar label="Responsible Banking" />
<Navbar label="Newsroom" />
<Navbar label="Learning Center" />
<Navbar label="Careers" />
<Navbar label="Others" />
</div>
</nav>
<Header />
<nav className='smallnav'>
  <SectionTitle title="Apply Online" />
</nav>
    </div>
  );
}
