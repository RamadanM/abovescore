import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Charts from './Components/Charts';
import Tables from './Components/Tables';


injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div style={{
      	position: 'absolute',
      	width:'82.5%',
       	display: '-webkit-box' ,
      	height: '100%',
      	backgroundColor: '#eeeeee',

      }}>
      
        <SideBar/>
        		<div style={{
		        	display: 'block',
				    width:'100%',
				    marginLeft: 10,
				    height:'100%',
				    backgroundColor: '#eeeeee',

		  		}}>
		          <Header />
		          <Cards />
              <Charts />
		          <Tables />

		   </div>
		</div>

      </MuiThemeProvider>

    );
  }
}

export default App;
