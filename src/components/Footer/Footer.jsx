import React from 'react';
import './Footer.scss';
import { Row, Container } from 'react-bootstrap';
import SmallText from '../../ui/SmallText/SmallText';
import Logo from '../../ui/Logo/Logo';
import StopClimateChange from '../StopClimateChange/StopClimateChange';
import { Link } from 'react-router-dom';

const Footer = () => {
  const followUsData = [
    { title: 'Facebook', href: 'https://facebook.com/' },
    { title: 'Twitter.com', href: 'https://twitter.com/' },
    { title: 'Instagram', href: 'https://instagram.com/' },
    { title: 'Medium', href: 'https://medium.com/' },
  ];

  const learnMoreData = [
    { title: 'The issue', href: '/Stop-climate-change/' },
    { title: 'How we help', href: '/Stop-climate-change/aboutUs' },
    { title: 'Get involved', href: '/Stop-climate-change/donate' },
    { title: 'Latest news', href: '/Stop-climate-change/news' },
  ];

  const renderFolowUsList = followUsData.map(({ title, href }, index) => (
    <li key={index}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {title}
      </a>
    </li>
  ));

  const renderLearnMoreList = learnMoreData.map(({ title, href }, index) => (
    <li key={index}>
      <Link to={href}>
        {title}
      </Link>
    </li>
  ));

  return (
    <footer className='Footer'>
      <Container>
        <Row className='justify-content-between flex-nowrap row1'>
          <Logo />
          <section className='contactUs'>
            <SmallText text='CONTACT US' marginBottom='11px' />
            <p className='contacts'>
              123 Anywhere St. Cityname, NY 11206
              <a className='tel' href='tel:1234567890'>
                1-562-867-5309
              </a>
              <a
                className='link'
                href='https://www.savetheearth.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                savetheearth.org
              </a>
            </p>
          </section>
        </Row>

        <Row className='justify-content-between flex-nowrap row2'>
          <ul>
            <SmallText text='FOLLOW US' marginBottom='11px' />
            {renderFolowUsList}
          </ul>

          <ul>
            <SmallText text='LEARN MORE' marginBottom='11px' />
            {renderLearnMoreList}
          </ul>
        </Row>

        <StopClimateChange />
      </Container>
    </footer>
  );
};

export default Footer;
