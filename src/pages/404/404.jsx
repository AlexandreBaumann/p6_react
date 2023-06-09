import './404.css';


function Error404() {
    return (
        <div id='err404'>
          <h1> 404</h1>
          <p id="errMess"> Oups ! La page que vous demandez n'existe pas. </p>
          <p id="retour-accueil"><a href='/'> Retourner sur la page d'accueil</a></p>
        </div>);
  }

  export default Error404;