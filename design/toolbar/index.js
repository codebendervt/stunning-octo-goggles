import { useRouter } from 'next/router'
import {useEffect,useState} from 'react' 


export default function Toolbar(props) {
    const router = useRouter()

    useEffect(() => {
      
        document.addEventListener('swiped-right', function(e) {
            console.log(e.target); // the element that was swiped
            console.log(e.detail.dir); // swiped direction
           
        });
        return () => {
            console.log('Clean up')
        }
    }, [])
    return (


        <div className={"w-full h-auto flex-row" + (props.reverse ? "-reverse":"")}>
            <span className="font-default-accent text-xl cursor-emoji" onClick={() => router.back()}>{props.back || 'Back'}</span>

            {props.children}
    
        </div>

    )
}


//  <p name="hello"  data-swipe-threshold="200"
// data-swipe-timeout="500"
// data-swipe-ignore="false">Direction:{direction}</p>
