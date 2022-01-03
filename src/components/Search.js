import react ,{useState , useEffect} from "react";
import axios from "axios";
const Search = () =>{
    const[term , setTerm] = useState('');
    const[results ,getResults] = useState([]);
    console.log(results);
    useEffect(() =>{
      const time = setTimeout(() => {
        if(term) {
            axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term ,
                }
            }).then((response) => {
                getResults(response.data.query.search)
            })
           }  
      }, 1000);
      
      return () =>{
          clearTimeout(time);
      }

    },[term])
    const renderedResults =() =>{return results.map(({title ,pageid,snippet}) => {
        return(
            <div key={pageid}>
                <h1>{title}</h1>
                <span dangerouslySetInnerHTML={{__html:snippet}}></span>
            </div>
        )
    })}
    return(
        <section>
            <input type ='text' value={term} onChange={e => setTerm(e.target.value)} />
            <section>
                {renderedResults()}
            </section>
        </section>
    )
}

export default Search;








// import React from "react";
// class Search extends React.Component{
//    constructor(props){
//        super(props);
//        this.state = {
//            term :''
//        }
//    }
//    onInputChange = (event) =>{
//        this.setState({
//            term : event.target.value
//        })
//    }
//    onTermSubmit = (event) =>{
//     event.preventDefault();
//     this.props.searchSubmit(this.state.term)
//    }
//    render(){
//        return(
//            <section>
//                <form className="search" onSubmit={this.onTermSubmit}>
//                    <label >  Enter the word:</label><br/>
//                    <input type="text" value={this.state.term} onChange={this.onInputChange} /> <br/>
//                    <button type="submit" > submit</button>
//                </form>
//            </section>
//        )
//    }
// }
// export default Search;