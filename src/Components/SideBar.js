import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ContentContentPaste from 'material-ui/svg-icons/content/content-paste';
import AVLibraryBooks from 'material-ui/svg-icons/av/library-books';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import EditorBubbleChart from 'material-ui/svg-icons/editor/bubble-chart';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';


class SideBar extends Component {
  render() {
  		let imageUrl='https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/7/71/Snow-mountains-background-1.jpg/revision/latest?cb=20160501132624';

    return (
      <div className="SideBar" style=
      {{ 
      	display:'flex' ,
      	width: '20.5%' ,
        backgroundColor: '#f8f9ee',
      	height: '100%',
      	backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      	opacity: 3,
    }}>


		   <List style={{
            padding: '7%'
		    }}>
    
      <h4 align= 'center'>CREATIVE TIM</h4>
      <hr style={{opacity:.5 }} />
      <ListItem primaryText="Dashboard" hoverColor="purple" leftIcon={<ActionDashboard />} />
      <ListItem primaryText="User Profile" hoverColor="purple" leftIcon={<ActionPermIdentity />} />
      <ListItem primaryText="Table List" hoverColor="purple" leftIcon={<ContentContentPaste />} />
      <ListItem primaryText="Typography" hoverColor="purple" leftIcon={<AVLibraryBooks />} />
      <ListItem primaryText="Icons" hoverColor="purple" leftIcon={<EditorBubbleChart />} />
      <ListItem primaryText="Maps" hoverColor="purple" leftIcon={<MapsPlace />} />
      <ListItem primaryText="Notifications" hoverColor="purple" leftIcon={<SocialNotifications />} />
		    </List>
      </div>
    );
  }
}

export default SideBar;
