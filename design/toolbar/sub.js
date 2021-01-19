import { useEffect } from 'react'

export default function SubToolbar({list}) {

    useEffect(() => {

        document.addEventListener('swiped-right', function (e) {
            console.log(e.target); // the element that was swiped
            console.log(e.detail.dir); // swiped direction

        });
        return () => {
            console.log('Clean up')
        }
    }, [])

    const SmallCard = () => {
        return (
            <div className=" w-1/3 lg:w-36 h-16 p-2">
                <div className="w-full h-full rounded shadow-md lg:shadow hover:shadow-none bg-gray-800 hover:bg-gray-900"></div>

            </div>
        )
    }

    return (


        <div className="w-full h-32 flex flex-row py-3 lg:p-4">
            {
                list.map((i)=> {
                    <SmallCard />
                })
            }
           
        </div>

    )
}
