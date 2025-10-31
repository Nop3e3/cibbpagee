
import React from 'react';
import './Home.css';
import Navbar from '../components/layout/Navbar';
import Icon1 from '../Assets/icon1.png';
import Icon2 from '../Assets/icon2.png';
import Icon3 from '../Assets/ico3.png';
import logo from '../Assets/logo.svg';
import Header from '../components/layout/Header';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import SubTitle from '../components/common/SubTitle';
import SmallMenuTap from '../components/common/SmallMenuTap';
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
   <SectionTitle title="News" />
      <SectionTitle title="Blog Articles" />
       <SectionTitle title="CIB International" />
        <SectionTitle title="Sustainable Finance" />
         <SectionTitle title="Awards" />

</nav>
<section className='topsect'>
  <SubTitle title="Apply Online" />
  <SmallMenuTap title=" Apply online now for cards and loans with ease!" />
<div className='roww'>
  <Card imgSrc={Icon1} title="Personal Loans Account" />
<Card imgSrc={Icon2} title="Apply for a card" />
<Card imgSrc={Icon3} title="Apply for a loan or overdraft " />
</div></section>
    </div>
  );
}
