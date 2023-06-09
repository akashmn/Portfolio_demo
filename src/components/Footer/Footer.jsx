import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Akash M N</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/akxxsh__?igshid=ZDdkNTZiNTM="><BsInstagram /></a>
        <a href="https://github.com/akashmn"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/akash-m-nandan-87b13a237"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copyright. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer