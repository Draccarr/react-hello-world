import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import './index.css';
import './github-user-info.css';
import reportWebVitals from './reportWebVitals';

const useStyles = makeStyles( 
  (_theme) => ({
    button: {
      margin: _theme.spacing(1)
    }
  })
);

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
      <section className="github-user-card">
        <h2 style={{marginRight: '2rem'}}><a href={data.blog}>{data.login}</a></h2>
        <img src={data.avatar_url} width='100'/>
      </section>
  }
  return elementToReturn;
}//end GitHubUser Component

function GitHubForm(_properties) {
  const classes = useStyles();
  return (
    //This is a fragment
    <>
    <section className="git-hub-form">
      <h2>Info</h2>
      <TextField id="standard-basic" label="Standard" />
    </section>
    <Button variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>} onClick={() => {console.log(";)")}}>Send</Button>
    </>
  );
}//end GitHubForm Component

function App() {
  return (
    <>
      <GitHubUserCard username="draccarr"/>
      <GitHubForm />
    </>
  );
}//end App Component

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
