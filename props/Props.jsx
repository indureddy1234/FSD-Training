import React from "react"

class props extends React.Component{
    render(){
        return(
            <>
            {
                React.createElement("hi" , "null" , "hello-world")
            }
            {
                React.createElement("div" , {id: "demo"} , React.createElement("span" , "null" , "iam span tag"))
            }
            <h1>hello-world</h1>
            <h1>{5 + 5}</h1>
            
            </>
        )
    }
}
export default props