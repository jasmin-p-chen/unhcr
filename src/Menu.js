import { useNavigate } from 'react-router-dom';

function Menu () {

  const navigateTo = useNavigate();

  return (
    <div className="nav">
      <button onClick={() => navigateTo('/')}>Home</button>
      <button onClick={() => navigateTo('/about')}>About this Data</button>
      {/* <button onClick={() => navigateTo('/Australian-data')}>Australian Data</button> */}
      <button onClick={() => navigateTo('/countries')}>Other Country Data</button>
    </div>
  )
}; // Menu()
export default Menu;