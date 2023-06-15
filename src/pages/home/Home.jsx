import './Home.scss';
import Card from '../../components/card/card'
import logements from '../../mock/logements.json'

function Home() {
  return (
      <main>
        <div id='bannerHome'>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div id="loop">
          {logements.map((item) => (
          <Card key={item.id} item={item} />
          ))}            
        </div>
      </main>);
}

export default Home;
