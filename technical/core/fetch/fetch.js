

const getData = async (url, method = "GET", isAPI = false, data = null, key = null, options = null) => {

  let isCustom = false;
  if (options == null) {
    isCustom = true;
    let headers = { 'Content-Type': 'application/json' }

    if (key) {
      headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      }
    }

    options = {
      method: method,
      headers: headers
    }

    if (method == "POST") {

      let body = JSON.stringify(data)
      options.body = body
    }

    if (method == "PUT") {
      let body = JSON.stringify(data)
      options.body = body
    }

    if (method == "DELETE") {
      let body = JSON.stringify(data)
      options.body = body
    }

    if (method == "GET") {
      if (data != null) {
        url = url + "?id=" +data.id
      }

    }

    if (method == "All") {

    }


    if (isAPI) {

      headers = {
        'Content-Type': 'application/json',
        "Host": "api.sauveur.cloud",
        "Ocp-Apim-Subscription-Key": "b319671d160a48e6b7efc1db27591fda",
        "Ocp-Apim-Trace": true
      }

      options.headers = headers

    }
  }

  //console.log('the options your posting to ',options)
  // Default options are marked with *
  const response = await fetch(url, options
    //   {
    //   method: method, // *GET, POST, PUT, DELETE, etc.
    //   // mode: 'cors', // no-cors, *cors, same-origin
    //   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   //credentials: 'same-origin', // include, *same-origin, omit
    //   headers: headers,
    //   //redirect: 'follow', // manual, *follow, error
    //   //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   //body: JSON.stringify(data) // body data type must match "Content-Type" header
    // }
  );
  if (isCustom) {
    //console.log(response)
    return response.json()
  } else {
    //console.log(response)
    return response.statusText
  }



};


export default getData;