import React, { Component } from 'react';
import './github.css';

class Github extends Component {

  // creating this.state will include List and search parameter
    constructor(props) {
        super(props);
        this.state = {listItems: [], search: ''};
        }

        // will be called every time when search input is changed. Updates the "search" to .state
        inputChanged = (event) => {
          this.setState({search: event.target.value});
        }

       /*  
       ** onClick will launch searchRepositories 
       ** It will search repositories from github with given parameter (event)
       ** listItems gets response from json
       */
       searchRepositories = (event) => {
        fetch('https://api.github.com/search/repositories?q='+ this.state.search)
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              listItems: responseData.items,
            });
            console.log(responseData);
            
          })
        }
      
      // render shares listItems.map content which came from API by index value (i)
      render() {
        const itemRows = this.state.listItems.map((github, i) => 
              <tr key={i}>
                <td>{github.name}</td>
                <td>{github.url}</td>
              </tr>
            )

        return (
          <div>
           <h2>Repositories</h2>

            <div>
              <input type="text" value={this.state.search} onChange={this.inputChanged} />
              <button onClick={this.searchRepositories}>Search</button>
            </div>                   
            
              <table>
                <tbody>
                  <tr><th>Name</th><th>URL</th></tr>
                  {itemRows}
                </tbody>
              </table>

            </div>
          );
        }

     
}

export default Github;
