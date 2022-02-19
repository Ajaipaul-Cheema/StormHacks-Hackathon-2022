import axios from 'axios';


function App() {
  function lol() {
    axios.post('http://localhost:5000/auth/login', {
      username: 'test',
      password: 'test'
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="App">
      <button onClick={lol}>mf</button>
    </div>
  );
}

export default App;