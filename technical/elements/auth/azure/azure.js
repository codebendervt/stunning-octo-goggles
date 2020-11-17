import React from 'react';
import config from './config.json';


function AzureADLogin(props) {

  const getToken = () => {
    console.log("checking for token");

    let v = window.location.hash
    let replaced = v.replace("#","?")
    let params = new URLSearchParams(replaced)

    if(params.has("access_token")){
      let authData = {}
      authData.token_type = params.get("token_type");
      authData.access_token =params.get("access_token");
      sessionStorage.setItem("auth", JSON.stringify(authData))

      window.history.pushState({}, document.title, "/");
      console.log("token recived")
    }
    if(params.has("error")){
      
      window.history.pushState({}, document.title, "/error");
      console.log("login error")
    }
    //console.log(replaced);
  }

  const login = "authorize?client_id="+config.clientID+"&response_type=id_token+token&redirect_uri="+encodeURIComponent(config.redirectUri)+"&scope="+encodeURIComponent(config.scope)+"&response_mode=fragment&state=12345&nonce=678910";
  const logout = "logout?post_logout_redirect_uri="+encodeURIComponent(config.redirectUri)

  const whichButton = (isLogin) => {
    return isLogin ? login : logout

  }
  return (<>
    <a className="w-full" href={"https://login.microsoftonline.com/"+config.tenant+"/oauth2/v2.0/"+ whichButton(props.login)}>{props.login ? "Login" : "Logout"}</a>
    {getToken()}
    </>
  );
}

export default AzureADLogin;


//https://login.microsoftonline.com/{tenant}/oauth2/v2.0/logout?post_logout_redirect_uri=https://localhost/myapp/

//create logout option