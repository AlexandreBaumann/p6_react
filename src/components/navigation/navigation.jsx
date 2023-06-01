import './navigation.css';

const Navigation = ({ item }) => {
  return (
    <header>
      <img src="" alt="logo kasaa"></img>
      <nav>
        <ul>
          <li><a href={'/'}>Accueil</a></li>
          <li> <a href={'/a-propos/'}>A propos </a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;


