import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../../components/header"
import { cardTypes } from "../../../types/types"

interface stateTypes{
    viewAllCards : boolean,
    buttonProps : {text:'Show all' | 'Show less',icon : string}
}

export const Services = () =>{
    // component states
    const[states,setState] = useState<stateTypes>({
        viewAllCards : false,
        buttonProps : {text:'Show all', icon : ''}
    })
    //set state
    const handleStateChange=(stateKey:string,value:any)=>{
        setState({...states,[stateKey]:value})
    }

    // button states
    const {text:buttonText,icon:buttonIcon} = states.buttonProps

    //handle cards show  all
    const showAllCardsHandler = () =>{
        // set show all states
        const stateSets = [
            // {state: 'buttonProps',value : buttonText === 'Show all' ? {text:'Show less', icon : ''} : {text:'Show all', icon : ''}},
            {state: 'viewAllCards',value : !states.viewAllCards},
        ]

        for(let instance of stateSets) handleStateChange(instance.state,instance.value)
    }

    // cards data
    const cards:cardTypes[] = [
        {
            id: 0,
            title : 'Websites/Applications design & development',
            message : 'Scalable websites and applications with amazing user experince',
            image : '',
            path : ''
        },
        {
            id: 1,
            title : 'Websites/Applications design & development',
            message : 'Scalable websites and applications with amazing user experince',
            image : '',
            path : ''
        },
        {
            id: 2,
            title : 'Websites/Applications design & development',
            message : 'Scalable websites and applications with amazing user experince',
            image : '',
            path : ''
        },
        {
            id: 3,
            title : 'Websites/Applications design & development',
            message : 'Scalable websites and applications with amazing user experince',
            image : '',
            path : ''
        },
    ]
    return(
        <main className="w-9/12 m-auto py-28">
            {/* header */}
            <Header title="Our Services"/>

            {/* cards */}
            <div className="service-cards flex flex-wrap flex-row justify-between">
                {
                    cards.slice(0,states.viewAllCards?cards.length:3).map(({id,title,message,image,path})=>
                        // card item
                        <div style={{width : '32%'}} className=" mt-10 shadow-xl rounded-xl" key={id}>
                            <section className="img h-56 rounded-t-3xl bg-blue-50">
                                <img className=" w-full h-full" src={image} alt="pexel image" />
                            </section>

                            <section className="texts my-10 px-6">
                                <h1 className=" text-2xl mb-2">{title}</h1>
                                <p className="mb-4 text-xl text-gray-500 py-4">{message}</p>
                                {/* <Link className=" shadow-lg shadow-blue-50 border-gray-200 text-xl font-semibold border-2 rounded-lg px-4 py-3 text-blue-700" to={path!}>Learn more</Link> */}
                            </section>
                        </div>
                    )
                }
            </div>

            {/* show all button */}
            <div className=" mt-12">
                <button 
                onClick={showAllCardsHandler} 
                className=" bg-blue-700 w-40 h-14 shadow-3xl shadow-blue-200 text-lg text-white rounded-full"
                >
                {states.viewAllCards?'Show less':'Show all'}
                </button>
            </div>
        </main>
    )
}