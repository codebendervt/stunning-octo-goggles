

async function postData(url = '', data = {}, statusOnly=false) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
     // mode: 'cors', // no-cors, *cors, same-origin
     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': data.token_type + ' ' + data.access_token,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    console.log(response);

    return statusOnly ? response.status : response.json()
    //investigate type of data and create a response for it 
    // let resp = await response.json() || response.status; 
    //does not work well when it comes to azure post funtions
    //return  // parses JSON response into native JavaScript objects
  }

  export default postData