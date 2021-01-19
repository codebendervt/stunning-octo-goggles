import { useRouter } from 'next/router'

export default function Toolbar(props) {
    const router = useRouter()

    return (


        <div className={"w-full h-auto flex-row" + (props.reverse ? "-reverse":"")}>
            <span className="font-default-accent text-xl cursor-emoji" onClick={() => router.back()}>Back</span>

            {props.children}
        </div>

    )
}
