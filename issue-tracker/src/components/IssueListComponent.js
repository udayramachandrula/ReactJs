import React from 'react';
import IssueNameComponent from './IssueNameComponent'; 
import HeaderComponent from '../HeaderComponent';
import IssueForm from './IssueForm';

//import { NavLink } from 'react-router-dom';


class IssueListComponent extends React.Component{
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.updateIssue = this.updateIssue.bind(this);
        this.addIssue = this.addIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);

        this.filterIssues = this.filterIssues.bind(this);
        this.state={
            issues:[{name:'React App Issue -1',completed:false},
            {name:'React App Issue -2',completed:true},
            {name:'React App Issue -3',completed:true},
            {name:'React App Issue -4',completed:false}] ,

            currentIssue:''
        }
    }


changeStatus(index){
    var issues = this.state.issues;
    
    var issue = issues[index];
    issue.completed = !issue.completed;


    this.setState({
        issues:issues
    });

    this.filterIssues();
    //console.log(this.state.issues[index]);
}


updateIssue(newValue){
    //console.log(newValue);
    //console.log(newValue.target.value);
    let value = newValue.target.value;
    this.setState({
        currentIssue : value
    });
}

addIssue(event){
    event.preventDefault();

    let issues = this.state.issues;
    let currentIssue = this.state.currentIssue;

    if(currentIssue !=='')
        issues.push({name:currentIssue,completed:false});
    
    this.setState({
        issues:issues,
        currentIssue : ''
    });
}

deleteIssue(issueToBeDeleted)
{

    let issues = this.state.issues;
    //alert('Are you Sure Want To Delete The Issue' + issues[issueToBeDeleted].name? 'Yes':'No')
    issues.splice(issueToBeDeleted,1)

    this.setState({
        issues
    });

}

editIssue(index,newValue){
    let {issues}  = this.state;
    let currentIssue = issues[index];

    currentIssue['name'] = newValue;

    this.setState({
        issues
    })
}

filterIssues(completed){
    completed = true;
    let issues = this.state.issues;
    let filteredIssues = [];
    for(var i = 0; i< issues.length;i++){
        if (issues[i].completed === completed){
            filteredIssues.push(issues[i]);
        }
    }

    if(filteredIssues.length > 0){
    this.setState({
        issues:filteredIssues
    });
}
    else{
        this.setState({
            issues:issues
        });
    }
    
}

    render(){
        return( 
            <div onLoad={this.filterIssues}>
            <center> 
                <div>
                    < HeaderComponent />

                </div> 
                <br/>
                <div><IssueForm currentIssue = {this.state.currentIssue} 
                updateIssue={this.updateIssue}
                addIssue = {this.addIssue}
                
                /></div>
                <div>{
                        this.state.issues.map((issue,index) =>{
                            return <IssueNameComponent key={issue.name} issues= {issue}
                            index={index} clickHandler={this.changeStatus}
                            deleteIssue = {this.deleteIssue}
                            editIssue = {this.editIssue}
                            
                            />
                        })
                    }
                   
                </div>
               
        </center>
        </div>);
    }
}





export default IssueListComponent;