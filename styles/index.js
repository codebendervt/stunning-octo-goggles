const app_center = "w-full h-screen flex justify-center items-end p-4 lg:items-center";
const col = "w-full h-auto flex flex-col  p-4";
const row = "w-full h-auto flex flex-row  p-4";
const center = "items-center justify-center"; 

export default {
    input : "appearance-none w-full px-2 placeholder-grey bg-transparent text-2xl m-2 font-default-regular",
    input_border : "border-l-2 border-white input-border max-w-md flex items-center",
    title : "font-default-title text-5xl",
    form_button : "text-2xl font-default-accent disabled:opacity-50 disabled:text-grey appearance-none",
    form_submit:"w-full  bg-transparent text-whitek justify-center lg:justify-end flex lg:text-2xl font-default-accent  lg:px-2 cursor-emoji",
    col: col,
    col_center: `${col} ${center}`,
    row: row,
    btn: "font-default-accent text-xl lg:text-2xl cursor-emoji flex items-center justify-center",
    icon: "mx-2 font-icon text-3xl lg:text-3xl flex h-12 items-center",
    app_center: app_center,
    app_flow: "w-screen h-screen flex flex-col items-center",
    test: `${app_center} `

}