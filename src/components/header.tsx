interface props{
    title: string
}
export const Header = ({title}:props) =>{
    return(
        <header>
            <h1 className=" text-5xl text-gray-700">{title}</h1>
            <hr className=" w-20 bg-blue-400 h-2 mt-6 rounded-lg shadow-2xl"/>
        </header>
    )
}