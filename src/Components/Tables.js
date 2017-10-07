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
import IconButton from 'material-ui/IconButton';



class Tables extends Component {
  constructor(){
    super();
    this.state = {
      tasks:[]
    }
  }

  componentWillMount(){
    fetch("http://172.17.0.1:5000/tasks", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(tasks => {this.setState({ tasks })} )
      console.log(this.state.tasks);
  }

    handleDeletetask(id){
    let tasks= this.state.tasks;
    let index= tasks.findIndex(x => x.id === id);
    tasks.splice(index,1);
    this.setState({tasks: tasks});
  }

  render() {
    return (
    <div style={{
      display:'flex',
      backgroundColor: 'ligthgray',
      marginLeft:'1%',
      marginTop:'1.5%'

      }}>
              <div 
                  style={{
                      display:'inline-block',
                      backgroundColor: 'white',
                      width:'48%',
                      position:'relative',
                    }}>
                      <div style={{
                        display:'flex',
                        backgroundColor: 'purple',
                        width:'96%',
                        height:'20%',
                        marginLeft:'2%',
                        marginTop:-10,
                        position:'absolute',
                        borderRadius: '1%',
                      }}>

                            <p style={{padding:10 ,display:'inline',fontSize:15 ,color:'white' , marginLeft:10,marginRight:10}}>Tasks:</p>
                                                        <RaisedButton
                                          primary={true}
                                          target="_blank"
                                          label="BUGS"
                                          buttonStyle={{padding:5 ,display:'flex',backgroundColor:'purple' , height:'100%'}}
                                          icon={<ActionBugReport />}
                             />
                             <RaisedButton
                                         primary={true}
                                          target="_blank"
                                          label="WEBSITE"
                                          buttonStyle={{padding:5 ,display:'flex',backgroundColor:'purple' , height:'100%'}}
                                          icon={<ActionCode />}
                             />
                            <RaisedButton
                                          primary={true}
                                          target="_blank"
                                          label="SERVER"
                                          buttonStyle={{padding:5 ,display:'flex',backgroundColor:'purple' , height:'100%'}}
                                          icon={<FileCloud />}
                             />
                            
                        </div>

                  <div style={{marginTop:'7%'}}>
                      <Table style={{marginTop:'1%'}}>
                      <TableBody>
                        {this.state.tasks.map((task) => {
                          return(
                          <TableRow>
                          <TableRowColumn  style={{left: 0}} >{task.title}</TableRowColumn>
                          <TableRowColumn > 
                             <IconButton onClick={this.handleDeletetask.bind(this)} tooltip="SVG Icon" style={{float:'right'}}>
                                <ContentClear />
                              </IconButton>
                              <IconButton tooltip="SVG Icon" style={{float:'right'}}>
                                <EditorModeEdit  />
                              </IconButton>
                          </TableRowColumn>
                        </TableRow>
                        );
                        })
                      }
                      </TableBody>
                    </Table>

                  </div>
                            
                  </div>
                  
                  <div style={{
                      display:'inline-block',
                      backgroundColor: 'white',
                      marginLeft:'2%',
                      width:'48%',
                      position:'relative',
                  }}>

                       <div style={{
                        display:'inline-block',
                        backgroundColor: 'orange',
                        width:'96%',
                        marginLeft:'2%',
                        marginTop:-10,
                        position:'absolute',
                        borderRadius: '1%',
                              }}>
                                <p style={{color:'white', marginLeft:4, fontSize:12 ,fontWeight:'bold' }}>Employees State</p>
                                <p style={{color:'white',marginLeft:4, fontSize:10 , opacity:.7 }}> New employees are going to .. </p>
                        </div>

                  <div style={{marginTop:'7%'}}>
                      <Table style={{}}>
                      <TableHeader 
                            displaySelectAll={false} 
                            adjustForCheckbox={false}
                            style={{}}
                      >
                        <TableRow >
                          <TableHeaderColumn>ID</TableHeaderColumn>
                          <TableHeaderColumn>Name</TableHeaderColumn>
                          <TableHeaderColumn>Salary</TableHeaderColumn>
                           <TableHeaderColumn>Country</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>

                      <TableBody displayRowCheckbox={false}>
                        <TableRow>
                          <TableRowColumn>1</TableRowColumn>
                          <TableRowColumn>John</TableRowColumn>
                          <TableRowColumn>$2364</TableRowColumn>
                           <TableRowColumn>Egypt</TableRowColumn>

                        </TableRow>
                        <TableRow>
                          <TableRowColumn>2</TableRowColumn>
                          <TableRowColumn>Randal </TableRowColumn>
                          <TableRowColumn>$5332</TableRowColumn>
                          <TableRowColumn>Niger</TableRowColumn>

                        </TableRow>
                        <TableRow >
                          <TableRowColumn>3</TableRowColumn>
                          <TableRowColumn>Stephanie </TableRowColumn>
                          <TableRowColumn>$2300</TableRowColumn>
                          <TableRowColumn>Nitherland</TableRowColumn>

                        </TableRow>
                      </TableBody>
                    </Table>

                        </div>
                        
                 </div>

      </div>
    );
  }
}

export default Tables;





