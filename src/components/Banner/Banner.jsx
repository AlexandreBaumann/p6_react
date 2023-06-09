import './banner.css'

const Banner = ({bannerURL, bannerAlt})  => {
    return <img className="banner" src={bannerURL} alt={bannerAlt} />;
}; 
  
export default Banner;
