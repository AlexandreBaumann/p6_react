import './prez-page.css';
import TagList from '../../components/tag/tag';
import Collapse from '../../components/collapse/collapse';
import items from '../../components/items';
//composant auteur
//composant note

function PrezPage() {
    const item = items[0];

    return (
        <div>
          <div className='bannePrez'>

          </div>
          <div className="infoGen">
            <div>
              <h1>{item.name}</h1>
              <div className="author">
                <div className="autName">
                    <p>{item.autFor}</p>
                    <p>{item.autLast}</p>
                </div>
                <img></img>
              </div>
            </div>
            <p className="subTitle">{item.loc}</p>
            <div>
              <TagList tags={item.tags} />
              <div> 
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>


            <div className='leftInfoGen'>
                <h1>{item.name}</h1>
                <p className="subTitle">{item.loc}</p>
                <div className="tags">
                  <TagList tags={item.tags} />
                </div>
            </div>
            <div className='rightInfoGen'>
              <div className="author">
                <div className="autName">
                    <p>{item.autFor}</p>
                    <p>{item.autLast}</p>
                </div>
                <img></img>
              </div>
              <div> 
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
              </div>
            </div>

          </div>
          <div className="descriptions">
            <Collapse title="Description"/>
            <Collapse title="Equipements"/>
          </div>
        </div>);
}

export default PrezPage;
