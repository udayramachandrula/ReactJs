import React from 'react';

class IncrDecrComponent extends React.Component{
constructor(){
    super();
    this.incrementMethod = this.incrementMethod.bind(this);
    this.decrementMethod = this.decrementMethod.bind(this);

this.state={
    number:0
}
}

incrementMethod(){
    
var number =  this.state.number;
number = number +1;
this.setState({
    number:number
});
}

decrementMethod(){
    
    var number =  this.state.number;
    number = number - 1;
    this.setState({
        number:number
    });
    }





    render(){
    return (
    <div>
        <div><input type="button" value="Increment" onClick={this.incrementMethod}></input> &nbsp;
    <input type="button" value="Decrement" onClick={this.decrementMethod}></input><br></br></div>
        <h1>Number:{this.state.number}</h1>
        </div>
        );
    }
}

export default IncrDecrComponent;