import { useParams } from 'react-router-dom';
import logements from '../../mock/logements.json';
import './prez-page.css';
import Collapse from '../../components/collapse/collapse';
import Carousel from '../../components/carousel/carousel';
import InfoGen from '../../components/infogen/infogen';

function PrezPage() {
  const { id } = useParams();
  const item = logements.find(logement => logement.id === id);


  return (
    <main>
      <Carousel pictures={item.pictures}/> 
      <InfoGen item= {item}/>
      <div className="descriptions">
        <Collapse title="Description" children={item.description}/>
        <Collapse title="Equipements" children={item.equipments}/>
      </div>
    </main>
  );
}

export default PrezPage;
