import React from "react"

const HOC = (HOCComponent,data) => {
    return class extends React.Component{
        render(){
            return <HOCComponent data={data}/>
        }
    }
}

export default HOC