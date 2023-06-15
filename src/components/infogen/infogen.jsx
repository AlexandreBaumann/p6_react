
import TagList from '../../components/tag/tag';
import './infogen.scss';


function InfoGen({item}) {
    return (

<div className="infoGen">
    <div>
    <h1>{item.title}</h1>
    <p className="subTitle">{item.location}</p>
    <TagList tags={item.tags} />
    </div>
    <div>
        <div className="author">
            <p>{item.host.name.split(' ')[0]}<br/>{item.host.name.split(' ')[1]}</p>
            <img src={item.host.picture} alt="host picture"/>
        </div>
        <div data-rating={item.rating}> 
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
    </div>
</div>)
}

export default InfoGen;
