import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function SubToolbar({list,landing}) {
    const router = useRouter();
    const [count, setCount] = useState(0)

    useEffect(() => {

        document.addEventListener('swiped-right', function (e) {
            // setCount(count + 1)
            // handleClick(list[count])

        });

        document.addEventListener('swiped-left', function (e) {
            // console.log(e.target); // the element that was swiped
            // console.log(e.detail.dir); // swiped direction
            // handleClick(list[count])
            // setCount(count - 1)
        });
        return () => {
            console.log('Clean up')
        }
    }, [])

    const handleClick = (active) => {

        router.push(`${landing}/${active}?active=${active}`)
      }


    const SmallCard = ({name}) => {
        return (
            <div onClick={() => handleClick(name)} className=" w-1/3 lg:w-36 h-16 p-2">
                <div className="w-full h-full rounded shadow-md lg:shadow hover:shadow-none bg-gray-800 hover:bg-gray-900 text-center items-center flex justify-center text-xl font-default-title cursor-emoji capitalize ">
                  {name}
                </div>

            </div>
        )
    }

    return (


        <div className="w-full h-32 flex flex-row py-3 lg:p-4">
            {
                list.map((i,k) => <SmallCard key={k} name={i}  />)
            }
           
        </div>

    )
}
