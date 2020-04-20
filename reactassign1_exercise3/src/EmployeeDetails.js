import React from 'react';

import EmployeeComponent from './EmployeeComponent';
import './EmployeeDetails.css';

class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.handler={
        empArr :[
            {
              empId:1,
              empName:"uday",
              empCompany:"Yash"
            },
            {
              empId:2,
              empName:"Jhon",
              empCompany:"XXX"
            },
            {
              empId:3,
              empName:"Sagar",
              empCompany:"Yash"
            }
            ]
        }
    }

    render() {
        return (
           <table >
               <tr><th>Employee Id</th>
               <th>Employee Name</th>
               <th>Company</th></tr>
                {this.handler.empArr.map((emp)=>{
                        return <EmployeeComponent key={emp.empId} emp={emp} />
                    })}
               </table>
        )
    }

    
}


export default EmployeeDetails;