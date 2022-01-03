import React from "react";
import Info from "./Info";
import Search from "./Search";

const Data =[
    {
        title : 'what is React ?',
        desc : 'React is a JS Library'
    },
    {
        title : 'why React ?',
        desc : 'Beacause it is fast and easy'
    },
    {
        title : 'Is React available to use with Redux ?',
        desc :'yes!'
    }
]
const App = () =>{
    return(
        <div>
            <Search />
            {/* <Info data ={Data} /> */}
        </div>
    )
}
export default App;