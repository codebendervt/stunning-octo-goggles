import { useState } from 'react';



export default function Overlay() {

    const [state, setState] = useState(false)

    return (
        <div className={"flex items-center justify-center text-white lg:bg-black lg:z-50 lg:w-screen lg:h-screen lg:absolute " + (state ? "animated slideOutUp" : "")}>

            <div className="flex-wrap text-center">
                <h1 className="text-3xl font-default-title text-center ">User Exprience</h1>
                <p className="font-default-paragraph my-2">For the best exprience please use a mobile device</p>
                <button className=" p-2 cursor-emoji capitalize font-default-accent" onClick={() => setState(!state)}>continue to site</button>
            </div>

        </div>
    )
}
