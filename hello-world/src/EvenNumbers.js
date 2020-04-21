import React from 'react';

class EvenNumbers extends React.Component{
    render(){
        var ArrNumbers = [1,2,3,4,5,6,7,8,9];
        

        var EvenNum = [];

        var OddNum = [];

         ArrNumbers.map(num => {
            if(num%2==0)
            EvenNum.push(num);
            else
            OddNum.push(num);
        });

    return (<div><div>Given Numbers: {ArrNumbers}</div><br></br>
    <div>Even Numbers : {EvenNum}</div><br></br>
    <div> Odd Numbers : {OddNum}</div><br></br>
    </div>);
 
    } 
} 

export default EvenNumbers;
