import './about.css';
import Banner from '../../components/banner/banner'
import bannerImage from '../../img/banAbout.webp';
import Collapse from '../../components/collapse/collapse';

const faq = [
  {
    title:"Fiabilité",
    content:""
  },
  {
    title:"Respect",
    content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title:"Service",
    content:""
  },
  {
    title:"Sécurité",
    content:""
  },
]

function About() {
  return (
      <main>
        <Banner bannerURL={bannerImage} bannerAlt="Description de l'image" />
        <div className='aboutCollapses'>
        {faq.map((item, index) => (
            <Collapse key={index} title={item.title} children={item.content}/>
        ))}
        </div>
      </main>);
}

export default About;
