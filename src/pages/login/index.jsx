import { useEffect } from "react"

function Login(){

  useEffect(() => {

  });
  
  return (
    <div className="container center">
      <h1>Seja bem vindo</h1>
      <div className="btn-div">
        <a className="btn-large btn-twitch" href={`http://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/home&scope=user_read+user%3Aread%3Afollows`}>Conecte-se com a Twitch</a>
      </div>
    </div>
  )
}

export default Login