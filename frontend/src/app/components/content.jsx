
import React from "react";


/**
 * @author rlapin
 */


class TestComponent extends React.Component{
    render(){
        return (
        <h1>Hello world</h1>
        )
    }
}

export class Content extends React.Component{
    render(){
        return (
            <TestComponent/>
        )
    }
}
