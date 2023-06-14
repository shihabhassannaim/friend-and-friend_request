import { useEffect, useState } from 'react';
import './App.css';
import Side from './component/Side/Side';


function App() {
  const [data, setData] = useState([]);
  const [side, setSide] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
  }, []);
  const handler = (user) =>{
    console.log(user);
    const newSide = [...side , user];
    setSide(newSide);
    console.log(newSide);
  }
  return (
    <div className="App">
     <div className='first-section'>
      <h1>Suggested friend</h1>
     {
        data.map(user => (
              <div className='total-section'>
                <div className='image'>
                <img src={user.avatar_url} alt="" />
                </div>
                <div>
                <p className='name'>{user.login}</p>
                <button onClick={() => handler(user)} className='button'>Friend request</button>
                </div>
              </div>
        ))
      }
     </div>
     <div className='second-section'>
      <h1>Requested list</h1>
      {
        side.map(name => (
          <div className='total-section and-other'>
            <div className='image'><img src={name.avatar_url} alt="" /></div>
            <div><p className='name'>{name.login}</p>
            <p className='request'>Requested</p>
            </div>
          </div>
        ))
      }
     </div>
    </div>
  );
}

export default App;
