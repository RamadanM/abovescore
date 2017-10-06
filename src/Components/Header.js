import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {
  black,
  white,
} from 'material-ui/styles/colors';

class Header extends Component {
  render() {
    return (
      <div 
	      style={{
			      	display:'flex',
              marginTop: '.2%' ,

	  	    	 }}>

	  	 <p style={{fontSize: 15 ,marginLeft: '1%',marginRight: '40%' ,}}>Matrial Dashboard</p>
	  	<TextField
	      defaultValue="Search" 

	    />
	      <Avatar
          icon={<ActionSearch />}
          size={35}
          color={black}
          backgroundColor={white}
          style={{marginRight:'2%'}}
        />
  		<ActionDashboard style={{marginRight: '2%'}}/>
  		<SocialNotifications style={{marginRight: '2%'}}/>
  		<ActionPermIdentity style={{marginRight: '2%'}}/>

      </div>
    );
  }
}

export default Header;
