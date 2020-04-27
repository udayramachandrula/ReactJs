import React from 'react';
import HeaderComponent from '../Header/HeaderComponent'
import AddToDoTaskComponent from '../ToDoList/AddToDoTaskComponent'

class HomeComponent extends React.Component {
    constructor() {
        super()
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.onClickAll=this.onClickAll.bind(this);
        this.onCompleted = this.onCompleted.bind(this);
        this.onActive= this.onActive.bind(this);

        this.state = {
            tasks: [
                {  taskName: "To Do Task-1",completed: false},
                { taskName: "To Do Task-2",completed: true},
                { taskName: "To Do Task-3",completed: false},
                { taskName: "To Do Task-4",completed: true},

            ],
            completed:[],
            active:[],
            currentTask: '',
            tobeaddtask: '',
            hideCompleted:true,
            hideActive:true,
            hideAll:false
        }
    }

    toggletask(newtaskValue,index){
        var tasks=this.state.tasks;
        var task= tasks[index];
        task.completed=!newtaskValue.completed
        this.setState({
            tasks:tasks
        })
    }

    onDelete(index){
        var tasks=this.state.tasks;
        tasks.splice(index,1); 
        this.setState({
            tasks:tasks
        })
    }

    onUpdatetask(){
        var tasks=this.state.tasks;
       // tasks.splice(index,1); 
        this.setState({
            tasks:tasks
        })
    }
    
    updateTask(event){
        var newtask = event.target.value;
        this.setState({
            currentTask:newtask
        })
    }

    addTask(event){
        debugger
        var allTasks = this.state.tasks
        var taskName = this.state.currentTask
        var task={
            taskName:taskName,
            completed:false
        }
        allTasks.push(task)
        this.setState({
            tasks:allTasks,
            currentTask:''
        })
        
    }

    onClickAll(){
        this.setState({
            hideCompleted:true,
            hideActive:true,
            hideAll:false
        })
    
    }

    onCompleted(){
        var tasks= this.state.tasks;
        var completedTask = tasks.filter(task => task.completed===true)
        this.setState({
            completed:completedTask,
            hideCompleted:false,
            hideActive:true,
            hideAll:true
        })
    }

    onActive(){
        var tasks= this.state.tasks;
        var activeTask = tasks.filter(task => task.completed===false)
        this.setState({
            active:activeTask,
            hideCompleted:true,
            hideActive:false,
            hideAll:true
        })
    }

    render() {
        return (
            <div className="home_div">
                <div>
                    <HeaderComponent />
                    <br />
                    <br />
                    <AddToDoTaskComponent
                        currentTask={this.state.currentTask}
                        updateTask={this.updateTask}
                        submitTask={this.addTask}
                    />
                    <br />
                    <div id="status" className="status-bar"> 
                        <button onClick={this.onClickAll}>All</button> /
                        <button onClick={this.onCompleted}> Completed</button> /
                        <button onClick={this.onActive}>Active</button>
                    </div>
                    <br />
                    <br />
                    <div id="all" hidden={this.state.hideAll}>
                        <table className="table table-striped">
                            <tbody>
                                {this.state.tasks.map((task, i) => {
                                    return < tr key={task.taskName}>
                                        <td className={task.completed ? 'completed' : ''}>
                                            <input type="checkbox"
                                                checked={task.completed}
                                                onChange={() => this.toggletask(task, i)}
                                            /> {task.taskName}</td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Delete</button></td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Edit</button></td>
                                        
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div >
                    <div id="Completed" hidden={this.state.hideCompleted}>
                        <table className="table table-striped">
                            <tbody>
                                {this.state.completed.map((task, i) => {
                                    return < tr key={task.taskName}>
                                        <td className={task.completed ? 'completed' : ''}>
                                            <input type="checkbox"
                                                checked={task.completed}
                                                onChange={() => this.toggletask(task, i)}
                                            /> {task.taskName}</td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Delete</button></td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Edit</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div >
                    <div id="active" hidden={this.state.hideActive}>
                        <table className="table table-striped">
                            <tbody>
                                {this.state.active.map((task, i) => {
                                    return < tr key={task.taskName}>
                                        <td className={task.completed ? 'completed' : ''}>
                                            <input type="checkbox"
                                                checked={task.completed}
                                                onChange={() => this.toggletask(task, i)}
                                            /> {task.taskName}</td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Delete</button></td>
                                        <td> <button type="button" className="btn btn-primary" onClick={() => this.onDelete(i)} >Update</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div >
                </div>

            </div>
        )
    }
}
export default HomeComponent;