import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';


var MyDiv = React.createClass({
    render: function(){
        return <div>{this.props.children}</div>
    }
})
     
  

ReactDOM.render(
    <MyDiv>
        <h1></h1>
    </MyDiv>
)