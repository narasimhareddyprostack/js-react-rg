import React from 'react'
class CompB extends React.Component{
    render(){
        return <div>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>Component B</h2>
            <h3>Name:{this.props.name}</h3>
            <h3>id:{this.props.id}</h3>
            <h2>Message:{this.props.msg}</h2>
        </div>
    }

}

export default CompB