import './Home.css';
import Thumb from '../../components/thumb/thumb'
import items from '../../components/items'

function Home() {
  return (
      <div>
        <h1 id='bannerHome'>Chez vous, partout et ailleurs</h1>
        <div id="loop">
          {items.map((item, index) => (
          <Thumb key={index} item={item} />
          ))}            
        </div>
      </div>);
}

export default Home;

