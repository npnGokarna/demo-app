import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [names, fetchData] = useState([]);

  useEffect(() => {
    console.log(names);
  });

  function populateList() {
    (() => {
      let url = 'https://jsonplaceholder.typicode.com/users';
      fetch(url).then((res) => {
        return res.json();
      }).then((res) => {
        fetchData(res);
      }).catch((e) => {
        console.log(e);
      });
    })();
  }

  function dePopulateList() {
    fetchData([]);
  }

   
  // const names = [1,2,3];
  return (
    <div className="App">
      <header className="App-header">
        <div id="listNames">{names.map((item) => <p key={item.id}>{item.name}</p>)}</div>
        <button className="button" onClick={populateList}> populate list</button>
        <button className="button" onClick={dePopulateList}> Clear list</button>
      </header>
    </div>
  );
}

export default App;
