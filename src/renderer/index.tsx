import React from 'react'
import ReactDom from 'react-dom'

const Root :React.FC = ()=>{
    return(
        <div>
            <h1 className="heading">hello</h1>
            <style>
                {
                    `
                    .heading{
                        color:red;
                    }
                    `
                }
            </style>
        </div>
    )
}

ReactDom.render(
    <Root/>,
    document.getElementById("app"),
)