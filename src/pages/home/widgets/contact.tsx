import { message } from "antd"
import { Header } from "../../../components/header"
import { cardTypes } from "../../../types/types"

export const Contact = () =>{
    const contactDetails:cardTypes[] =[
        {icon : '', message : 'No 1 Street New Town'}
    ]
    return(
        <main className="bg-gradient-to-br h-96 from-white to-blue-100 via-blue-50">
            <div className="w-9/12 m-auto py-16 ">
                {/* header */}
                <Header title={"Get In Touch"} />

                <div className="">
                    {/* contact details */}
                    <section className="">
                    {
                        contactDetails.map(({message,icon})=>
                        <div className="">
                            <span>
                                
                            </span>

                            <p>{message}</p>
                        </div>
                        )
                    }
                    </section>

                    {/* form */}
                    <section className="form">

                    </section>
                </div>

            </div>
        </main>
    )
}