import { useNavigate } from 'react-router-dom';

function Menu () {

  const navigateTo = useNavigate();

  return (
    <div className="nav">
      <button onClick={() => navigateTo('/')}>Home</button>
      <button onClick={() => navigateTo('/about')}>About</button>
      <button onClick={() => navigateTo('/countries')}>Country Data</button>
    </div>
  )
}; // Menu()
export default Menu;