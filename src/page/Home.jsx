
import React from 'react';
import './Home.css';
import Navbar from '../components/layout/Navbar';
import Icon1 from '../Assets/icon1.png';
import Icon2 from '../Assets/icon2.png';
import Icon3 from '../Assets/ico3.png';
import logo from '../Assets/logo.svg';
import Image1 from '../Assets/Image1.png';
import Image2 from '../Assets/Image2.png';
import Image3 from '../Assets/Image3.png';
import Header from '../components/layout/Header';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import SubTitle from '../components/common/SubTitle';
import SmallMenuTap from '../components/common/SmallMenuTap';
import CenterCard from '../components/common/CenterCard';
import Button from '../components/common/Button';
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
<section className='topsect'>
  <div className='subby'>Learn more about banking and your finances</div>
  <SmallMenuTap title=" Apply online now for cards and loans with ease!" />
<div className='roww'>
<CenterCard imgSrc={Image1} title="Buying a home can be an emotional
 process, but its important to approach it logically" />
 <CenterCard imgSrc={Image2} title="So for all of you travelers, take a vacation 
without spending a fortune with these helpful tips and tricks:" />
 <CenterCard imgSrc={Image3} title="The impact of a good education can be transformative." />
</div>
<Button label="View more" />
</section>
<section className='topsect'>
 
  <SmallMenuTap title="News" />
<div className='COL'>

</div></section>
    </div>
  );
}
