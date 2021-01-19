

export default function SubToolbar(props) {


    const SmallCard = () => {
        return (
            <div className=" w-1/3 lg:w-36 h-16 p-2">
                <div className="w-full h-full rounded shadow-md lg:shadow hover:shadow-none bg-gray-800 hover:bg-gray-900"></div>

            </div>
        )
    }
    return (


        <div className="w-full h-32 flex flex-row py-3 lg:p-4">
            <SmallCard />
        </div>

    )
}
