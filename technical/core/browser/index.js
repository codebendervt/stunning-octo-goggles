// import url from './url'


// var Firefox = "Firefox"

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     checkBrowser();
// });


// const hello = () =>{
//     console.log('hello from the old guard ❤️')
// }

// function checkBrowser(){
//     if (navigator.userAgent.indexOf(Firefox) !== -1) {
//         console.log('congratutlations on being safe')
//         let version  =  parseInt(process.env.REACT_APP_BROWSER);
//         let current = parseInt(navigator.userAgent.split('/')[3]);
       
//         console.log(current >= version )

//     } else {
//         console.log('why you not being safe')
//     }
// }

// switch (document.readyState) {
//     case "loading":
//         console.log('I am still loading')
//         break;
//     case "interactive":
//         // The document has finished loading. We can now access the DOM elements.
//         // But sub-resources such as images, stylesheets and frames are still loading.
//        console.log('let us be intereactive')
//         break;
//     case "complete":
//         // The page is fully loaded.
//        checkBrowser()
//         break;
// }


// export {url,hello};