import { Dropdown, MenuProps, Space } from "antd"
import { useState } from "react"
import coverIllustration from '../../../accessories/tech.png'
import { cardTypes, linkTypes } from "../../../types/types"
import { DownOutlined } from '@ant-design/icons';
import effective from '../../../accessories/effective.png';
import timely from '../../../accessories/timely.png';
import money from '../../../accessories/money.png';


interface stateTypes{
    CoverTitle : string
    coverMessage : string
    welcomeText : string
    navbrand : string
}
export const Cover = () =>{
    // states
    const [states,setStates] = useState<stateTypes>({
        coverMessage : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam expedita explicabo ducimus fugit corrupti?',
        CoverTitle : 'Improve you business with our digital marketing solutions',
        welcomeText : 'Welcome to Pkay Marketing Consultancy',
        navbrand : 'Pkay Marketing Consultancy'
    })
    //navbar links
    const links:linkTypes[] = [
        {id : 0, name : 'Home'},
        {id : 1, name : 'About'},
        {id : 0, name : 'Contact'},
    ]
    // dropdown list items
    const items:MenuProps['items']  = [
        {key : 0,label : <a className=" text-lg" href="/">Website/Web Applications Design & development</a>},
        {type : 'divider'},
        {key : 0,label : <a href="/">Digital Marketing and consultancy</a>},
        {type : 'divider'},
        {key : 0,label : <a href="/">Social Media Marketing</a>},
    ]
    //cover page cards
    const coverCards:cardTypes[] = [
        {message : 'Effective', icon : effective},
        {message : 'Cost Effecient', icon : money},
        {message : 'Timely', icon : timely}
    ]
    return(
        <main className="h-screen bg-gradient-to-tr from-white to-blue-200 via-blue-100">
            <div className=" w-9/12 m-auto">
                {/* navbar */}
                <nav className=" h-24 flex flex-row justify-between items-center">
                    {/* brand */}
                    <span className=" flex flex-row">
                        <img src="" alt="logo" />
                        <p className=" text-xl">{states.navbrand}</p>
                    </span>

                    <span className="flex flex-row">
                        {/* links */}
                        <ul className="flex flex-row items-center mr-2">
                            {links.map(({id,name})=>
                                <>
                                    <li
                                    className={name === 'Home' ? "text-blue-700 font-semibold px-5 text-xl" : "text-neutral-600 px-5 text-xl"}
                                    key={id}>
                                    {name}
                                    </li>
                                </>
                            )}
                            <Dropdown menu={{items}} trigger={['click']}>
                                <a className="px-5" onClick={(e) => e.preventDefault()}>
                                    <Space className="text-xl text-neutral-600 flex flex-row h-full items-center justify-center">
                                        Services
                                        <DownOutlined className="h-full pb-2"/>
                                    </Space>
                                </a>
                            </Dropdown>
                        </ul>

                        <button className=" bg-blue-700 py-3.5 px-8 shadow-2xl text-lg text-white rounded-full">Get In Touch</button>
                    </span>
                </nav>

                {/* Main cover section */}
                <section style={{height : 'calc(100vh - 192px)'}} className="body flex flex-row justify-between items-center">
                    {/* text */}
                    <div style={{width : 'calc(50% - 25px)'}} className="">
                        <p className=" text-xl text-blue-800 font-semibold">{states.welcomeText}</p>
                        <h1 className="my-1 font-semibold text-5xl text-gray-800 font-sans">{states.CoverTitle}</h1>
                        <p className=" text-xl text-gray-600 mt-3">{states.coverMessage}</p>
                    </div>

                    {/* illustration */}
                    <div style={{width : 'calc(50% - 25px)'}} className=" h-full flex justify-center items-center">
                        <img className="w-full h-11/12" src={coverIllustration} alt="illustration" />
                    </div>
                </section>

                <section className="h-24 flex flex-row justify-center items-center">
                {/* cards */}
                {coverCards.map(({message,icon})=>
                    <div className="flex flex-row items-center mr-8">
                        <span className="w-4/12 h-4/12 mr-2"><img className=" w-full h-full" src={icon} alt="icon" /></span>
                        <h6 className=" text xl text-gray-500">{message}</h6>
                    </div>
                )}
                </section>
            </div>
        </main>
    )
}