import React from "react";
import "./Portfolio.css";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Projects</h2>
      
      <div className="portfolio-gallery">
        <header>
          
          <div className="portfolio-item">

            <Link
              href="https://anand980-foodapp.netlify.app/"

            >
             <Image src='/external-link-icon.svg'width={30} height={30} alt="visit site"/> 
            </Link>
          </div>

        </header>
        <div className="body">
          <h3>Zomato</h3>
          <p>Website Design for an Online Food ordering app similar to Swiggato 😜.</p>
        </div>

        <footer>
          <ul className="tech-list">
            <li>React</li>
            <li>Javascript</li>
          </ul>
        </footer>
      </div>
      
      <div className="portfolio-gallery2">
        <header>
          
          <div className="portfolio-item">

            <Link
              href="https://vip-designs.brimble.app/"

            >
             <Image src='/external-link-icon.svg'width={30} height={30} alt="visit site"/>
            </Link>
          </div>

        </header>
        <div className="body">
          <h3>VIP DESIGNS</h3>
          <p>Website Design for an Online Furniture Store.</p>
        </div>

        <footer>
          <ul className="tech-list">
            <li>Next Js</li>
            <li>Css</li>
          </ul>
        </footer>
      </div>
      
      <div className="portfolio-gallery3">
        <header>
          
          <div className="portfolio-item">

            <Link
              href="https://vikes-logistics.brimble.app/"

            >
             <Image src='/external-link-icon.svg'width={30} height={30} alt="visit site"/>
            </Link>
          </div>

        </header>
        <div className="body">
          <h3>Vike Logistics</h3>
          <p>Website Design for logistics</p>
        </div>

        <footer>
          <ul className="tech-list">
            <li>Next Js</li>
            <li>Css</li>
          </ul>
        </footer>
      </div>
      <div className="portfolio-gallery4">
        <header>
          
          <div className="portfolio-item">

            <Link
              href="/Gallery"

            >
             <Image src='/external-link-icon.svg'width={30} height={30} alt="visit site"/>
            </Link>
          </div>

        </header>
        <div className="body">
          <h3>Photography</h3>
          <p>Portrait Photogaphy Projects</p>
        </div>

        <footer>
          <ul className="tech-list">
            <li>Photoshop</li>
            <li>Light Room</li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Portfolio;
