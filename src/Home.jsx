import './Home.css';
import Thumb from './components/thumb.js'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7']; 

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