import {useState} from 'react';
import icons from '../icons';
import styles from 'sauveur_style'

const divStyle = (url) => ({
    color: '',
    backgroundImage: `url(${url})`,
});

export default function GenusLegacy({data}) {

    const [isEdit] = useState(false);

    const loadLinks  = (data) =>{

        try{
            return(
                data.links.map((i, k) => {
                    return (
                        <div key={k} className="flex w-full mb-4">
                            <a href={"https://" + i.link} className="p-4 border w-full text-center hover:text-black hover:bg-white">
                                {i.name}
                            </a>
    
                            {/* <div className={"w-16  border flex flex-col items-center justify-center text-white  hover:text-black hover:bg-white " + (isEdit ? " " : "hidden")}>
                                <EditLink id={i.id} user={user} />
                            </div> */}
                        </div>
                    )
    
                })
            )
        }catch{
            return "";
        }
        

    }
    return (
        <>
        <div className={styles.col_center + " flex-grow-0 animated fadeIn delay-1s"}>
                    <div className="rounded-full w-24 h-24 lg:h-32 lg:w-32 bg-grey m-2 flex items-center justify-center bg-cover bg-center lg:relative" style={divStyle(data.logo)}>


                        <a href={`/io/form/edit/?type=brand&id=${data.email}`} className={"w-12 h-12 rounded-full bg-black flex items-center justify-center " + styles.icon + (isEdit ? " " : " hidden")}>{icons.edit}</a>
                        
                    </div>
                    <div className=" m-2 text-xl lg:text-3xl font-logo uppercase">{data.name}</div>
                </div>

                <div className={styles.col + " flex-grow max-w-sm font-default-accent animated fadeIn delay-2s"}>
                    {
                    loadLinks(data)
                    }


                  


                </div>
        </>

    )
  }