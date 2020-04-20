import React from 'react';


class EmployeeComponent extends React.Component{

    
    render(){
        return(
            <tbody>
           <tr>
                <td>{this.props.emp.empId}</td>
                <td>{this.props.emp.empName}</td>
                <td>{this.props.companyName}</td>
            </tr>
            </tbody>
        )
    }
}


EmployeeComponent.defaultProps = {
    companyName:"Yash"
}

export default EmployeeComponent;