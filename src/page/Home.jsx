
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
import icon4 from '../Assets/icon4.png';
import icon7 from '../Assets/icon7.png';
import icon8 from '../Assets/icon8.png';
import icon9 from '../Assets/icon9.png';
import icon5 from '../Assets/icon5.png';
import icon6 from '../Assets/icon6.png';
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
import brand1 from '../Assets/brand1.png';
import brand2 from '../Assets/brand2.png';
import brand3 from '../Assets/brand3.png';
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
</section><section className='topsect'>
  <SubTitle title="Sustainable finance" />
  <SmallMenuTap title=" Sustainability is an integral part of the way we work" />
<div className='roww'>
<div className='cardya'>
      <img src={brand1} alt="brand1" />
      S&P/EGX ESG Index
</div>
<div className='cardya'>
      <img src={brand2} alt="brand2" />
      Bloomberg Gender Equality Index
</div>
<div className='cardya'>
      <img src={brand3} alt="brand3" />
      FTSE4Good Index
</div>
</div>
<Button label="Learn More" /></section>
<section className='topsect'>
  <SubTitle title="Awards" />
  <SmallMenuTap title="CIB's integrity and quality are recognized internationally" />
<div className='roww'>
<div className='cardya'>
      <img src={icon4} alt="icon4" />
      Best Private Bank in Egypt
         <p  className='thin'>Global Finance - 2023</p>
</div>
<div className='cardya'>
      <img src={icon5} alt="icon5" />
      Best Mergers & Acquisitions Deal in MENA
      <p  className='thin'>EMEA Finance - 2023</p>
</div>
<div className='cardya'>
      <img src={icon6} alt="icon6" />
      Best Bank in Egypt
       <p className='thin'>Euromoney - 2023</p>
</div>
</div>
<Button label="See all our awards" /></section>
<section className='topsect'>
  <SubTitle title="We care" />
  <SmallMenuTap title=" Our dedicated team is committed to meeting your needs" />
<div className='roww'>
<div className='cardyaaa'>
      <img src={icon7} alt="icon4" />

<div className='alabaad'>
  <h1>Online</h1>
  <p>Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media.</p>
</div>

</div>
<div className='cardyaaa'>
      <img src={icon8} alt="icon4" />

<div className='alabaad'>
  <h1>On the phone</h1>
  <p>For support, including emergencies such as cards closure or immediate critical feedback.</p>
</div>

</div>
<div className='cardyaaa'>
      <img src={icon9} alt="icon4" />

<div className='alabaad'>
  <h1>In branch</h1>
  <p>Our trained team of tellers and relationship managers are here to help you get the service you need.</p>
</div>

</div>

</div>
</section>
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
