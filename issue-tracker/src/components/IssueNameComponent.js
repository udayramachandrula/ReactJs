import React from 'react';

class IssueNameComponent extends React.Component{
constructor(props){
    super(props);

    this.renderForm =this.renderForm.bind(this);
    this.renderIssues = this.renderIssues.bind(this);
    
    this.toggleState = this.toggleState.bind(this);

    this.updateIssue = this.updateIssue.bind(this);
    this.state={

        isEditing:false
    }
}

renderForm(){
    return ( <form>
        <input type="text" defaultValue={this.props.issues.name}></input>
        <button onClick={(event)=>{
            event.stopPropagation();
            this.updateIssue();
        }}>Update</button>
    </form>);
}

renderIssues(){
    return (
    <ul>
    <li   
    onClick={()=>{this.props.clickHandler(this.props.index)}} 
        className={this.props.issues.completed?'completed':''}>

            <input checked={this.props.issues.completed} type="checkBox"  disabled='disabled'></input>&nbsp;

        {this.props.issues.name} &nbsp;

        <button onClick={(event)=>{
            event.stopPropagation();
            this.props.deleteIssue(this.props.index)}}>Delete</button>&nbsp;

        <button onClick={(event)=>{
            event.stopPropagation();
            this.toggleState()}}>Edit Issue</button>
    </li>

    </ul>);

}

toggleState(){
    const {isEditing} = this.state; //distructoring

    this.setState({
        isEditing:!isEditing
    });
}

 updateIssue(){
    // event.preventDefault();
     console.log(this.input.value);
//     this.props.editIssue(this.props.index,this.input.value);
//   this.toggleState();
 }

    render(){
        
    const isEditing = this.state.isEditing;
        return (<section>
            {
                isEditing? this.renderForm():this.renderIssues()
            }
        </section>   
        );
    }
}

export default IssueNameComponent;