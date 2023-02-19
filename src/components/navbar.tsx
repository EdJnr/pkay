import { MenuProps, Dropdown, Space } from "antd"
import { useState } from "react"
import { linkTypes } from "../types/types"
import { DownOutlined } from '@ant-design/icons';

interface stateTypes{
    navbrand ?: string
}
export const Navbar = () =>{
    // states
    const [states,setState] = useState<stateTypes>({
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
    return(
        <nav className=" h-28 fixed top-0 shadow-xl w-full bg-white">
            <div className=" w-9/12 h-full m-auto flex flex-row justify-between items-center">
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

                    <button className=" bg-blue-700 w-40 h-14 shadow-2xl text-lg text-white rounded-full">Get In Touch</button>
                </span>
            </div>
        </nav>
    )
}