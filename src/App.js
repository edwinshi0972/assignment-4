import logo from './logo.svg';
import './App.css';

function NavBar() {
  const style1 = {
    marginLeft: "auto",
    display: "flex", 
    paddingRight: "20px"
  }

  return (
      <nav className ="nav">
        <div style={{fontWeight: "bold"}}>FindFriendsNU</div>
        <div className ="searchbar">
          Search Bar
        </div>
        <div style={style1}>
          <div style={{cursor: "pointer"}}>Home</div>
          <div style={{cursor: "pointer", marginLeft: "10px"}}>Friends</div>
        </div>
      </nav>
  );
}

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
