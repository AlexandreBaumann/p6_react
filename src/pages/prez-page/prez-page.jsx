import { useParams, Navigate } from "react-router-dom";
import logements from "../../mock/logements.json";
import "./prez-page.scss";
import Collapse from "../../components/collapse/collapse";
import Galerie from "../../components/galerie/galerie";
import InfoGen from "../../components/infogen/infogen";

function PrezPage() {
  const { id } = useParams();
  const item = logements.find((logement) => logement.id === id);
  if (!item) {
    return <Navigate to="/404/" />;
  } else {
    return (
      <main>
        <Galerie pictures={item.pictures} />
        <InfoGen item={item} />
        <div className="descriptions">
          <Collapse title="Description" children={item.description} />
          <Collapse title="Equipements" children={item.equipments} />
        </div>
      </main>
    );
  }
}
export default PrezPage;
