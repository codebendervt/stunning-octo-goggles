import { useRouter } from 'next/router'



export default function Toolbar(props) {
    const router = useRouter()


    return (


        <div className={"absolute w-full h-auto flex items-center flex-row justify-end px-2 pr-6 z-10 " + (props.reverse ? "-reverse":"")}>
            <span className="font-default-accent text-xl cursor-emoji" onClick={() => router.back()}>{props.back || 'go back'}</span>

            {props.children}
    
        </div>

    )
}


//  <p name="hello"  data-swipe-threshold="200"
// data-swipe-timeout="500"
// data-swipe-ignore="false">Direction:{direction}</p>
