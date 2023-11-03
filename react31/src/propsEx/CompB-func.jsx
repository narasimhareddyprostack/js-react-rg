import React from 'react'

const CompB = (props) => {
    return <div>
        <pre>{JSON.stringify(props)}</pre>
        <h1>Component B</h1>
        <h3>Name:{props.name}</h3>
        <h4>Id:{props.id}</h4>
    </div>
}

export default CompB