let url;
let _params;

const getParams = (name) => {
    _params = new URLSearchParams(url.search);
    console.log('We are searching your bar 👀',_params.get(name));
    return _params.get(name)
}

const deleteParams = () => {
    _params.delete('hello')
}

let hello = function () {
    this.init = () => initialize();
    this.b = 2;
 }



const initialize = () => {
    url = window.location;
    console.log("we begin", url)
    hello.prototype.getParams = getParams;
    hello.prototype.deleteParams = deleteParams;
}

 /**
 * Manages the url api
 * @function URL
 * @param {string} getParams - this get the value of seach value
 * @param {string} deleteParams - this is to delete a param value
 */
let o = new hello();







export default o;