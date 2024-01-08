import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  const getEmailAlias = () => {
    if (user) {
      const atIndex = user.email.indexOf('@');
      return atIndex !== -1 ? user.email.substring(0, atIndex) : user.email;
    }
    return '';
  };

  return (
    <header>
      <div className="container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: '10px', fontSize: '1.5rem' }} />
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>My Workout Tracker</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span title={user.email}>{getEmailAlias()}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div className="lnks">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
