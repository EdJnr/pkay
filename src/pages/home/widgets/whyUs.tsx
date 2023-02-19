import { Header } from "../../../components/header"
import { cardTypes } from "../../../types/types"
import saving from '../../../accessories/saving.svg'
import timely from '../../../accessories/timely.svg'
import effective from '../../../accessories/effective.svg'


export const WhyUs = () =>{
    const cards:cardTypes[] = [
        {
            title : 'Effective solutions', 
            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore repellendus dolorem assumenda magni provident.',
            image : effective
        },
        {
            title : 'Cost Effecient', 
            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore repellendus dolorem assumenda magni provident.',
            image : saving
        },
        {
            title : 'Timely', 
            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore repellendus dolorem assumenda magni provident.',
            image : timely
        },
        
    ]

    return(
        <main style={{borderTopLeftRadius : 250, borderBottomRightRadius: 250}} className=" bg-blue-50">
            <div className="w-9/12 m-auto py-28">
                {/* header */}
                <Header title="Why Us?"/>

                {/* cards */}
                <section className="mt-8">
                    {cards.map(({title,message,image}, index:number)=>
                        <div key={index} className={index % 2 === 0 ? 'h-60 flex flex-row justify-between my-3':'my-3 h-60 flex flex-row-reverse justify-between'}>
                            {/* text */}
                            <section style={{width : '30%'}} className="h-full">
                                <img className=" w-full h-full" src= {image} alt="illustration" />
                            </section>

                            {/* illustration */}
                            <section style={{width : '65%'}} className="flex flex-col justify-center">
                                <h1 className=" text-3xl">{title}</h1>
                                <p className=" text-xl mt-2 text-gray-500">{message}</p>
                            </section>
                        </div>
                    )}
                </section>
            </div>
        </main>
    )
}