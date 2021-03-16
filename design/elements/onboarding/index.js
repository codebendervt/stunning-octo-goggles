import { useState, useEffect } from 'components'

export default function Onboarding({ content, submitUrl }) {


    const [page, setPage] = useState(0)
    const [maxPages] = useState(content.length - 1)



    useEffect(() => {

        let timeoutID = window.setTimeout(() => {
            let _location = location.href

            if (_location.includes("#")) {
                location.href = _location.split("#")[0] + "#" + page
            } else {

                location.href = _location + "#" + page
            }
        }, 1000)



        return () => {
            window.clearTimeout(timeoutID);

        }
    }, [page])


    const handleNext = () => {
        setPage(page + 1)
    }

    const handleBack = () => {
        setPage(page - 1)
    }

    const handleSubmit = () => {
        location.href = submitUrl
    }


    const OnboardPage = ({ id, page, maxPages, children }) => {

        return (
            <div id={id} className="w-screen  h-screen bg-white text-black flex">

                <div className="w-full lg:w-1/2 p-4">
                    <div className={"w-full h-full flex flex-col justify-end "}>

                        <div className={(page == id ? " animated fadeInLeft delay-1s" : "animated fadeOut")}>
                            {children}
                        </div>


                        <div className="flex">
                            {
                                maxPages > page ? <div className="font-default-accent cursor-emoji" onClick={handleNext}>next</div> : <></>
                            }

                            {
                                maxPages <= page ? <div className="font-default-accent cursor-emoji " onClick={handleSubmit}>Launch</div> : <></>
                            }

                            {
                                page >= 1 ? <div className="font-default-accent cursor-emoji mx-4 lg:mx-2" onClick={handleBack}>back</div> : <></>
                            }


                        </div>





                    </div>

                </div>

                <div className="w-0 lg:w-1/2 h-full bg-black">
                </div>

            </div>
        )
    }

    const LoadOnboarding = ({ content, page }) => {
        return (

            content.map((i, k) => {

                return (
                    <OnboardPage key={k} page={page} maxPages={maxPages} id={k}>
                        <h1 className="font-title text-4xl my-4">{i.title}</h1>

                        <p className="font-default-regular textlg max-w-sm flex p-0 my-4 ">{i.excerpt}</p>
                    </OnboardPage>
                )
            })

        )


    }


    return (
        <div className={"w-full h-screen overflow-hidden"}>


            <LoadOnboarding page={page} content={content} />

            {/* <OnboardPage page={page} maxPages={maxPages} id={1}>
                <h1>Hello World Again</h1>
            </OnboardPage> */}





        </div>
    )
}

//if no backpack reroute
//here is where you set the link to go somewhere