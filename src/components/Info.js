import React ,{useState} from "react";

const Info = (props) =>{
    const [info , setInfo] = useState(props.data);
    const renderInfo = () =>{
        return info.map(({title,desc}) =>{
            return(
                <div key={title}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            )
        })
    }
    return(
        <div>{renderInfo()}</div>
    )
}
export default Info;