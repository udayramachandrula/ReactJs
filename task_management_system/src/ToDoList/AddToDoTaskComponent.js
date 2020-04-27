import React from 'react';

class AddToDoTaskComponent extends React.Component {
   
    render() {
        return (
            <div>
                <form>
                    <div className="addtask_div">
                    <input
                    placeholder="Add Todo"
                    id="addtask"
                    name="currentTask"
                    value={this.props.currentTask}
                    onChange={this.props.updateTask}
                    ></input>
                    <button type="button" onClick={this.props.submitTask} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddToDoTaskComponent;