// This is to aggregate all of the other components.


import Navbar from "../components/Navbar"
import Main from "../components/Main";
import Footer from "../components/Footer";
import RandomComponent from "../components/random";

export default function App() {
  return (
    <>
      <Navbar/>    
      <Main 
        img={{
    src: "https://scrimba.com/links/travel-journal-japan-image-url",
    alt: "Mount Fuji"
}}
        country = "Japan"
        place = "Mount Fuji"
        maps = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        details = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Main 
        img={{
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHqC3pVp1hunDjqE1ehNYEDxrLWMIKXJwL1sIT96HQt0y7LdXxcIRNZmD&s=10",
          alt: "Olosunta Rock Image"
}}
        country = "Nigeria"
        place = "Olosunta"
        maps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.720209600649!2d5.2239024999999994!3d7.496111099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047f1ff07205731%3A0x3954e41037501afc!2sOlosunta%20Rock!5e0!3m2!1sen!2sng!4v1789922090989!5m2!1sen!2sng"
        details = "Olosunta Rock, also known as Olosunta Hill, is a massive volcanic granite inselberg located in the ancient town of Ikere-Ekiti, Ekiti State, Nigeria. Revered as a sacred guardian and protector deity by the local people, the rock forms a core part of Ikere's history, spirituality, and cultural identity."
      />
      <Footer />
      {/* <RandomComponent/> */}
    </>
  );
}