

const getData = async(url,method="GET") => {

     // Default options are marked with *
     const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
       // mode: 'cors', // no-cors, *cors, same-origin
       // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': data.token_type + ' ' + data.access_token,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json()

  };


  export default getData;