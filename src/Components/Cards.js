import React, { Component } from 'react';
import ContentContentCopy from 'material-ui/svg-icons/content/content-copy';
import ActionStore from 'material-ui/svg-icons/action/store';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import ActionReportProblem from 'material-ui/svg-icons/action/report-problem';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import MapsLocalOffer from 'material-ui/svg-icons/maps/local-offer';
import ActionSettingsBackupRestore from 'material-ui/svg-icons/action/settings-backup-restore';

class Cards extends Component {
  render() {
    return (
    <div style={{
      display:'flex',
      marginLeft:"1%",
      marginTop:'1.5%',
      width:'100%',
      heigth:'100%'
  	}}>
  				
	  		<div style={{
			  	  	width: '23.5%' , 
				    height: 75,
				    borderRadius: '3%',
				    verticalAlign: 'top',
	    	  	  	backgroundColor:'white',
			  	  	position:'relative'
			  	  }}>
		  	  		  	 <div style={{ opacity:.5 , float:'right', margin:5}}>
		  	  			  	<h7 style={{fontSize: 10 , display:'block'}}>Used Space </h7>
		  	  			  	<h5 style={{fontWeight:'bold' , display:'inline' , marginLeft:5}}>{"34/50"}</h5>
		  	  			  	<h6 style={{fontSize: 6 , display:'inline'}}>GB</h6>


		  	  			 </div>
				  	  		  <div style={{
						  	  	width: '23%' ,
						  	  	height:45, 
						  	   	marginLeft: '4%',
						  	   	borderRadius: '5%',
						  	  	backgroundColor:'#ff5722',
						  	  	position:'absolute',
						  	  	top:-10
						  	  }}>
						  	  	<ContentContentCopy style={{
						  	  		paddingLeft: '23%',
						  	  		paddingTop: '23%', 
						  	  		color: 'white'}}
						  	  		/>
						  	  </div>
							  	  <hr style={{ opacity:0.4 , marginTop: 45 , marginLeft:10 , marginRight:10}}/>
						  		  <div style={{bottom:0, position:'absolute' , display:'block' }}>
								  	  <ActionReportProblem style={{ width:15 , height:15 , display:'inline-block' , color:'orange' , position:'relative' , marginLeft:5}} />
								  	  <a href="#" style={{opacity: .5 ,fontSize:10 , textDecoration: 'none', display:'inline-block', paddingLeft:5}}> Get More Space ...</a>
				  	  			  </div>
			</div>

				  	<div style={{
			  	  	width: '23.5%' , 
				    height: 75,
				    borderRadius: '3%',
				    verticalAlign: 'top',
	    	  	  	backgroundColor:'white',
			  	  	position:'relative',
			  	  	marginLeft:"1%"
			  	  }}>
		  	  		  	 <div style={{ opacity:.5 , float:'right', margin:5}}>
		  	  			  	<h7 style={{fontSize: 10 , display:'block'}}>Revenue</h7>
		  	  			  	<h5 style={{fontWeight:'bold' , display:'inline', marginRight:10}}>{"$34,245"}</h5>
		  	  			 </div>
				  	  		  <div style={{
						  	  	width: '23%' ,
						  	  	height:45, 
						  	   	marginLeft: '4%',
						  	   	borderRadius: '5%',
						  	  	backgroundColor:'green',
						  	  	position:'absolute',
						  	  	top:-10
						  	  }}>
						  	  	<ActionStore style={{
						  	  		paddingLeft: '23%',
						  	  		paddingTop: '23%', 
						  	  		color: 'white'}}
						  	  		/>
						  	  </div>
							  	  <hr style={{ opacity:0.4 , marginTop: 45 , marginLeft:10 , marginRight:10}}/>
						  		  <div style={{bottom:0, position:'absolute' , display:'block' }}>
								  	  <ActionDateRange style={{ width:15 , height:15 , display:'inline-block' ,opacity:.5 , position:'relative' , marginLeft:5}} />
								  	  <a href="#" style={{opacity: .5 ,fontSize:10 , textDecoration: 'none', display:'inline-block', paddingLeft:5}}> Last 24 hours</a>
				  	  			  </div>
			</div>

				  	<div style={{
			  	  	width: '23.5%' , 
				    height: 75,
				    borderRadius: '3%',
				    verticalAlign: 'top',
	    	  	  	backgroundColor:'white',
			  	  	position:'relative',
			  	  	marginLeft:"1%"

			  	  }}>
		  	  		  	 <div style={{ opacity:.5 , float:'right', margin:5}}>
		  	  			  	<h7 style={{fontSize: 10 , display:'block'}}>Fixed Issues</h7>
		  	  			  	<h5 style={{fontWeight:'bold' , display:'inline' , marginLeft:5}}>{"75"}</h5>


		  	  			 </div>
				  	  		  <div style={{
						  	  	width: '23%' ,
						  	  	height:45, 
						  	   	marginLeft: '4%',
						  	   	borderRadius: '5%',
						  	  	backgroundColor:'#f44336',
						  	  	position:'absolute',
						  	  	top:-10
						  	  }}>
						  	  	<ActionInfoOutline style={{
						  	  		paddingLeft: '23%',
						  	  		paddingTop: '23%', 
						  	  		color: 'white'}}
						  	  		/>
						  	  </div>
							  	  <hr style={{ opacity:0.4 , marginTop: 45 , marginLeft:10 , marginRight:10}}/>
						  		  <div style={{bottom:0, position:'absolute' , display:'block' }}>
								  	  <MapsLocalOffer style={{ width:15 , height:15 ,display:'inline-block' , opacity:.5 , position:'relative' , marginLeft:5}} />
								  	  <a href="#" style={{opacity: .5 ,fontSize:10 , textDecoration: 'none', display:'inline-block', paddingLeft:5}}>Tracked from github</a>
				  	  			  </div>
			</div>
				  	<div style={{
			  	  	width: '23.5%' , 
				    height: 75,
				    borderRadius: '3%',
				    verticalAlign: 'top',
	    	  	  	backgroundColor:'white',
			  	  	position:'relative',
			  	  	marginLeft:"1%"

			  	  }}>
		  	  		  	 <div style={{ opacity:.5 , float:'right', margin:5}}>
		  	  			  	<h7 style={{fontSize: 10 , display:'block'}}>Followers</h7>
		  	  			  	<h5 style={{fontWeight:'bold' , display:'inline' , marginLeft:5}}>{"+245"}</h5>


		  	  			 </div>
				  	  		  <div style={{
						  	  	width: '23%' ,
						  	  	height:45, 
						  	   	marginLeft: '4%',
						  	   	borderRadius: '5%',
						  	  	backgroundColor:'#00aced',
						  	  	position:'absolute',
						  	  	top:-10
						  	  }}>
						<img 
						src="http://icons.iconarchive.com/icons/icons8/ios7/256/Logos-Twitter-icon.png" 
						style={{ 
						display:'inline-block' , 
						opacity:.5, 
						marginLeft:5 ,
						width:20 , 
						height:20,
						paddingLeft: '23%',
						paddingTop: '23%', 
						color:'white'
					}}
						/>
						  	  </div>
							  	  <hr style={{ opacity:0.4 , marginTop: 45 , marginLeft:10 , marginRight:10}}/>
						  		  <div style={{bottom:0, position:'absolute' , display:'block' }}>
								  	  <ActionSettingsBackupRestore style={{ display:'inline-block' , opacity:.5, position:'relative' , marginLeft:5 ,width:15 , height:15}} />
								  	  <a href="#" style={{opacity: .5 ,fontSize:10 , textDecoration: 'none', display:'inline-block', paddingLeft:5}}> Get More Space ...</a>
				  	  			  </div>
			</div>
		  	  
		  	 
      </div>
    );
  }
}

export default Cards;
