import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component{
    render(){
        return (<span> ParentComponent : <ChildComponent msg="uday kumar Ramachandrula"/></span>);
    }
}

export default ParentComponent;