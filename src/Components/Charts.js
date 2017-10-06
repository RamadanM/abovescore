import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import ActionBugReport from 'material-ui/svg-icons/action/bug-report';
import FileCloud from 'material-ui/svg-icons/file/cloud';
import ActionCode from 'material-ui/svg-icons/action/code';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentClear from 'material-ui/svg-icons/content/clear';
import SalesChart from './SalesChart';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';


class Charts extends Component {
  render() {
    return (
    <div style={{display:'flex',backgroundColor: 'ligthgray',marginLeft:'1%',marginTop:'1.5%'}}>
        
        <div style={{display:'inline-block',backgroundColor: 'white',width:'32%',position:'relative'}}>
            <div style={{padding:'.5%' ,display:'flex',width:'96%',height:'80%',marginLeft:'2%',marginTop:-10,position:'absolute', borderRadius: '1%'}}>
                  <SalesChart />
            </div>
            <div style={{marginTop:'35%',position:'relative'}}>
              <h7 style={{ marginLeft:4 , display:'block',marginLeft: '3%'}}>Daily Sales</h7>
              
              <NavigationArrowUpward style={{display:'inline' , color: 'green',width:15 , height:15 ,display:'inline-block' , opacity:.5 , position:'relative' , marginLeft:5}} />
              <p style={{marginLeft:4, fontSize:10 ,display:'inline' }}>"55%"</p>
              <p style={{fontColor:'green' ,fontSize:10 ,display:'inline' }}> increase in today sales</p>
                    <hr style={{opacity: .7}}/>
                    <div style={{bottom:0, position:'relative' , display:'block' }}>
                       <DeviceAccessTime style={{ width:15 , height:15 ,display:'inline-block' , opacity:.5 , position:'relative' , marginLeft:5}} />
                       <p style={{fontColor:'green' ,fontSize:10 ,display:'inline' ,opacity:.5}}> {"Updated 4 minutes ago"}</p>

                    </div>
            </div>                          
        </div>




        <div style={{marginLeft:'1%',display:'inline-block',backgroundColor: 'white',width:'32%',position:'relative'}}>
            <div style={{padding:'.5%' ,display:'flex',width:'96%',height:'80%',marginLeft:'2%',marginTop:-10,position:'absolute', borderRadius: '1%'}}>
                  <SalesChart />
            </div>
            <div style={{marginTop:'35%',position:'relative'}}>
              <h7 style={{ marginLeft:4 , display:'block',marginLeft: '3%'}}>Daily Sales</h7>
              <NavigationArrowUpward style={{display:'inline' , color: 'green',width:15 , height:15 ,display:'inline-block' , opacity:.5 , position:'relative' , marginLeft:5}} />
              <p style={{marginLeft:4, fontSize:10 ,display:'inline' }}>"55%"</p>
              <p style={{fontColor:'green' ,fontSize:10 ,display:'inline' }}> increase in today sales</p>
                    <hr style={{opacity: .7}}/>
                    <div style={{bottom:0, position:'relative' , display:'block' }}>
                       <DeviceAccessTime style={{ width:15 , height:15 ,display:'inline-block' , opacity:.5 , position:'relative' , marginLeft:5}} />
                       <p style={{fontColor:'green' ,fontSize:10 ,display:'inline' ,opacity:.5}}> {"Updated 4 minutes ago"}</p>

                    </div>
            </div>                          
        </div>




<div style={{marginLeft:'1%',display:'inline-block',backgroundColor: 'white',width:'32%',position:'relative'}}>
            <div style={{padding:'.5%' ,display:'flex',width:'96%',height:'80%',marginLeft:'2%',marginTop:-10,position:'absolute', borderRadius: '1%'}}>
                  <SalesChart />
            </div>
            <div style={{marginTop:'35%',position:'relative'}}>
              <h7 style={{ marginLeft:4 , display:'block',marginLeft: '3%'}}>Daily Sales</h7>
              <NavigationArrowUpward style={{display:'inline' , color: 'green',width:15 , height:15 ,display:'inline-block' , opacity:.5 , position:'relative' , marginLeft:5}} />
              <p style={{marginLeft:4, fontSize:10 ,display:'inline' }}>"55%"</p>
              <p style={{fontColor:'green' ,fontSize:10 ,display:'inline' }}> increase in today sales</p>
                    <hr style={{opacity: .7}}/>
                    <div style={{bottom:0, position:'relative' , display:'block' }}>
                       <DeviceAccessTime style={{ width:15 , height:15 ,display:'inline-block' , opacity:.5 , position:'relative' , marginLeft:5}} />
                       <p style={{fontColor:'green' ,fontSize:10 ,display:'inline' ,opacity:.5}}> {"Updated 4 minutes ago"}</p>

                    </div>
            </div>                          
        </div>




     </div>
    );
  }
}

export default Charts;





