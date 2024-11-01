import { useState, useEffect } from 'react';
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
        <div className ="searchbar">Search Bar</div>
        <div style={style1}>
          <div style={{cursor: "pointer"}}>Home</div>
          <div style={{cursor: "pointer", marginLeft: "20px", marginRight: "20px"}}>Friends</div>
        </div>
      </nav>
  );
}

const SUGGESTEDFRIENDSINFO = [
  {
    username: "Person A",
    shared: 2,
  },
  {
    username: "Person B",
    shared: 1,
  },
  {
    username: "Person C",
    shared: 3,
  },
  {
    username: "Person D",
    shared: 5,
  },
  {
    username: "Person E",
    shared: 1,
  }
]

function SuggestedFriend(props) {
  return (
    <div className ="suggested-friend">
        <img src = {require('./small-default-avatar.png')} alt="default avatar" className ="small-avatar"/>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{fontWeight: "bold"}}>{props.username}</div>
          <div style={{fontSize: "12px"}}>{props.shared} Shared Interests</div>
        </div>
    </div>
  );
}

function SideBar() {
  const [suggested, setSuggested] = useState(SUGGESTEDFRIENDSINFO);

  return (
    <div className = "sidebar">
      <div style={{fontWeight: "bold"}}>Suggested Friends</div>
      <ul>
        {suggested.map((suggestedF) => {
          return (
            <SuggestedFriend username={suggestedF.username} shared={suggestedF.shared}/>
          )
        })}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <div className ="friendpageheader">Friends</div>
      <div style={{display: "flex", gap: "25px"}}>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
