
import React from 'react';
import './Home.css';
import Navbar from '../components/layout/Navbar';
import Icon1 from '../Assets/icon1.png';
import Icon2 from '../Assets/icon2.png';
import Icon3 from '../Assets/ico3.png';
import logo from '../Assets/logo.svg';
import Image1 from '../Assets/Image1.png';
import App from '../Assets/appp.png';
import Image2 from '../Assets/Image2.png';
import Image3 from '../Assets/Image3.png';
import Header from '../components/layout/Header';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import SubTitle from '../components/common/SubTitle';
import SmallMenuTap from '../components/common/SmallMenuTap';
import CenterCard from '../components/common/CenterCard';
import Button from '../components/common/Button';
import NewsCard from '../components/common/NewsCard';
import Footer from '../components/layout/Footer';
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
<NewsCard/>
<NewsCard/>
<NewsCard/>

</div>
<Button label="View more news" />
</section>
<section className='banner'>
  <div className='bannerr'>
    <h2>CIB on an international scale</h2>
    <p>Learn more about CIB's presence outside of Egypt</p>
    <Button label="Learn More" />
  </div>
</section>
<section className='topsect'>
  <SubTitle title="Apply Online" />
  <SmallMenuTap title=" Apply online now for cards and loans with ease!" />
<div className='roww'>
<div className='cardya'></div>
</div></section>
<footer className='footerr'>
  <div className='rowfo2'>
     <img src={logo} alt="Logo" />
  <div className='collll'>
  <Footer title="Learning Centers" />
    <Footer title="Fees & Charges" />
      <Footer title="Terms & Conditions" />
       
  </div>
    <div className='collll'>
      <Footer title='Local'/>
  <Footer title="Abroad" />
    <Footer title="Business" />
      <Footer title="Corporate" />
       
  </div>
    <div className='collll'>
  <Footer title="Careers" />
    <Footer title="Why CIB" />
      <Footer title="Email us" />
      <Footer title="System Status" />
       
  </div>
  <img src={App} alt="Logo" /></div>
    <div className='rowfo22'>
      <Footer title="User Agreements" />
      <Footer title="Privacy Policy" />
      <Footer title="Cookie Policy" />
      <Footer title="CBE Approvals" />

</div>
</footer>
<footer className='copyright'>
  <p>© 2024 Commercial International Bank. All rights reserved.</p>
</footer>
    </div>
  );
}
