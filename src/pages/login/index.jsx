import React from "react"
import Button from "../../components/button"

function Login(){


  
  return (
    <div className="container center">
      <h1>Seja bem vindo</h1>
      <Button 
        btnHref={`http://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/welcome&scope=user_read+user%3Aread%3Afollows`}

        btnText={'CONECTE-SE COM A TWITCH'}
      />
    </div>
  )
}

export default Login