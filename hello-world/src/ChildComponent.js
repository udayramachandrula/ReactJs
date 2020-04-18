import React from 'react';
import ReactDom from 'react-dom';

const ChildComponent = (props) => {
    return (<h2> Hello {props.msg}  </h2>);
}

//ReactDom.render(<ChildComponent/>,document.getElementById('root'));

export default ChildComponent;