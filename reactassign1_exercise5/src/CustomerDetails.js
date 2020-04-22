import React from 'react';
import './CustomerDetails.css'

class CustomerDetails extends React.Component {


    render() {
        var custArray = [
            {
                CustomerId: 1,
                CustomerName: "Uday",
                CustomerAddress: "India"
            },
            {
                CustomerId: 2,
                CustomerName: "Adam",
                CustomerAddress: "Australia"
            },
            {
                CustomerId: 3,
                CustomerName: "Akshitha",
                CustomerAddress: "India"

            },
            {
                CustomerId: 4,
                CustomerName: "Anil",
                CustomerAddress: "India"
            },
            {
                CustomerId: 5,
                CustomerName: "Astin",
                CustomerAddress: "America"

            }
        ];
        debugger;
        var FilteredCustomer = custArray.filter((customer) => {
            return ((customer.CustomerName).startsWith('A') && customer.CustomerAddress === "India")
        }).map((customer) =>{
        return ( <tbody>
            <tr key={customer.CustomerId}><td>{customer.CustomerId}</td><td>{customer.CustomerName}</td><td>{customer.CustomerAddress}</td></tr>
            </tbody>);
        })
        return (
            <div>
                <div>
                    <h2>Filtered Customers</h2>
                    <table><thead><tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            </tr></thead>
          
        {FilteredCustomer}</table>
                </div>
            </div>
        )
    }


} 


export default CustomerDetails;
