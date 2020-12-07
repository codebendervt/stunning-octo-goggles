

const getData = async(url,method="GET",isAPI = false) => {

  let headers = {'Content-Type': 'application/json'}
  if(isAPI){
    headers = {
      'Content-Type': 'application/json',
      "Host": "api.sauveur.cloud",
      "Ocp-Apim-Subscription-Key": "b319671d160a48e6b7efc1db27591fda",
      "Ocp-Apim-Trace": true
    }
  }

     // Default options are marked with *
     const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
       // mode: 'cors', // no-cors, *cors, same-origin
       // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json()

  };


  export default getData;