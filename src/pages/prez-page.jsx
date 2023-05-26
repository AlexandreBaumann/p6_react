import '../styles/prez-page.css'
import tagList from './components/tag.js'

function prezPage() {
    return (
        <div>
          <div className='bannePrez'></div>
          <div className="infoGen">
            <div>
                <h1></h1>
                <p class="subTitle"></p>
                <div class="tags">
                    {items.map((item, index) => (
                    <tagList key={index} item={item} />
                    ))}   
                </div>
            </div>
            <div>
                
            </div>
          </div>
          <div className="descriptions">
            <collapse />
            <collapse />
          </div>
        </div>);
  }

