import { ReactComponent as Logo1K } from '../../img/Logo1K.svg';
import { ReactComponent as Logo2A } from '../../img/Logo2A.svg';
import { ReactComponent as Logo3S } from '../../img/Logo3S.svg';
import { ReactComponent as Logo4A } from '../../img/Logo4A.svg';
import './logo.css';

function Logo () {
  return (
    <div className="logo">
      <Logo1K className="svg-logo" />
      <Logo2A className="svg-logo" />
      <Logo3S className="svg-logo" />
      <Logo4A className="svg-logo" />
    </div>
  );
};

export default Logo;
 