import React from "react";
import Navbar from "./Navbar";
import SearchCard from "./SearchCard";
import UniversityCard from "./UniversityCard";
import './css/Main.css';
import Image1 from './img/Boston-University.jpg';
import Image2 from './img/Cardiff-University.jpg';
import Image3 from './img/Carneige-Melon-U.jpg';
import Image4 from './img/Columbia-University.jpg';
import Image5 from './img/Cornell-U.jpg';
import Image6 from './img/Duke-U.jpg';
import Image7 from './img/Harvard-University.jpg';
import Image8 from './img/John-Hopkins.jpg';
import Image9 from './img/U-of-Toronto.jpg';
import Image10 from './img/New-York-University.jpg';
import Image11 from './img/Princeton-U.jpg';
import Image12 from './img/Stanford-U.jpg';
import Image13 from './img/U-of-California-LA.jpg';
import Image14 from './img/U-of-California.jpg';
import Image15 from './img/U-of-Illinois-Urbana,Champaign.jpg';
import Image16 from './img/U-of-Newcastle.jpg';
import Image17 from './img/U-of-Pennsylvania.jpg';
import Image18 from './img/U-of-San-Deigo.jpg';
const MainComponent = () => {
  return (
    <div>
      <Navbar />
      <SearchCard />
      <div className="container">
        <div className="row">
          <div className="column" >
            <UniversityCard img={Image1} text={"Boston University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image2} text={"Cardiff University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image3} text={"Carneige Melon University"} />
          </div>
          <div className="column" >
            <UniversityCard img={Image4} text={"Columbia University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image5} text={"Cornell University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image6} text={"Duke University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image7} text={"Harvard University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image8} text={"John Hopkins University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image9} text={"University of Toronto"} />
          </div>
          <div className="column">
            <UniversityCard img={Image10} text={"Princeton University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image11} text={"Stanford University"} />
          </div>
          <div className="column">
            <UniversityCard img={Image12} text={"University of California-LA"} />
          </div>
          <div className="column">
            <UniversityCard img={Image13} text={"University of California"} />
          </div>
          <div className="column">
            <UniversityCard img={Image14} text={"University of California"} />
          </div>
          <div className="column">
            <UniversityCard img={Image15} text={"University of Illinois"} />
          </div>
          <div className="column">
            <UniversityCard img={Image16} text={"University of Newcastle"} />
          </div>
          <div className="column">
            <UniversityCard img={Image17} text={"Universoty of Pennsylvania"} />
          </div>
          <div className="column">
            <UniversityCard img={Image18} text={"University of San Deigo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
