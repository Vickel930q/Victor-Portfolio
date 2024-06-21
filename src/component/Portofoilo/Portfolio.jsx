import React from "react";
import "./Portfolio.css";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      
      <div className="portfolio-gallery">
        <header>
          {/* <svg
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#23ce6b "
            strokewidth="1"
            strokelinecap="round"
            strokelinejoin="round"
          >
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg> */}
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
    </section>
  );
};

export default Portfolio;
