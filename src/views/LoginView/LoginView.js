import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup'
import { Paper, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import base64 from 'base-64';


function Login() {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked')

    let url =  'https://najtanszapaczkaszwecja.pl/api/get';
    let login = 'shovv';
    let password = '$HOVV2020';
    
    try {
      // const loginUser = { userEmail, password};
      const loginUser = {login, password}
      const loginRes = await Axios.post('https://najtanszapaczkaszwecja.pl/api/get', {}, {
        auth: {
          username: login,
          password,
        }
      }
      )
      
      console.log(loginRes);
      // localStorage.setItem("auth-token", loginRes.data.token)
      // history.push('/');
      } catch(err) {
        err.response.data.msg && setError(err.response.data.msg)
      }

    console.log('after fetch')
  }

  return (
    <div className="loginPage">
      <div className="login-header">
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Paper style={{padding: 16}}>
            <h2>Logowanie1</h2>
            <Box margin={1}>
              <FormGroup>
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
              </FormGroup>    
            </Box>  
            <Box margin={1}>
              <FormGroup>
                <TextField id="outlined-basic" label="Hasło" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)}/>
              </FormGroup>
            </Box>
            <Button type="submit"  variant="contained" color="primary">Zaloguj</Button>
            <div className="error-msg">
              {error}
            </div>
          </Paper>
        </form>
      </div>
    </div>
  );
}

export default Login;
