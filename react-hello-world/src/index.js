import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const userCardStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: '#ccc',
  backgroundColor: '#141414',
  borderRadius: '1rem',
  margin: '2rem',
  padding: '.5rem 1rem',
};

function GitHubUserCard({username}) {
  const [data, setData] = useState(null);
  let elementToReturn = null;
  useEffect(() => {
    fetch('https://api.github.com/users/' + username)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);

  if (data) {
    elementToReturn = 
      <section className="user-card" style={userCardStyle}>
        <h2 style={{marginRight: '2rem'}}><a href={data.blog}>{data.login}</a></h2>
        <img src={data.avatar_url} width='100'/>
      </section>
  }
  return elementToReturn;
}//end GitHubUser Component

function App() {
  return <GitHubUserCard username="draccarr"/>
}//end App Component

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
