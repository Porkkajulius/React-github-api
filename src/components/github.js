import React, { Component } from 'react';
import './github.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Github extends Component {
    constructor(props) {
        super(props);
        this.state = {listItems: []};
        }

    
      componentDidMount() {
       const keyWord = "react";
       console.log(keyWord);
       fetch(`https://api.github.com/search/repositories?q=${keyWord}`)
       
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            listItems: responseData.items,
          });
          console.log(responseData);
        })
      }

      render() {
        
        return (
          
          <div>
           <ul>
            {this.state.listItems.map( github =>
             <li key={github.id}> {github.name} {github.url} </li>
            )}
           </ul>
          </div>
        );
      }

     
}

export default Github;
