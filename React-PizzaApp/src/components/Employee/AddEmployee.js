import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid, withStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
import './styles/view-styles.css';
import './add-employee-style.css';
import ReactNotification from 'react-notifications-component'
import {store} from "react-notifications-component";
import 'animate.css/animate.min.css';
import 'react-notifications-component/dist/theme.css'



const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
          },
        },
        normalTextField: {
          maxHeight : '4px'
       },
      });

      function notifcation(){
        store.addNotification({
          title: "Inserted",
          message: "Employee has been successfully added",
          type: "success",
          insert: "top",
          container: "center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      }

class AddEmployee extends Component {
  constructor(){
    super();
    this.state = {
      name : "React",
      records: [],
      record:  [],
      empId:"",
      empName: "",
      empAge: "",
      phoneNum:"",
      department: ""
 
  };
  }
  
  OnchangeID = (e) => {
    this.setState({
      empId : e.target.value
    });
  }

  OnchangeEmpName = (e) => {
    this.setState({
      empName: e.target.value
    });
  }

  OnchangePhone = (e) => {
    this.setState({
      phoneNum: e.target.value
    });
  }

  OnchangeDept = (e) => {
    this.setState({
      department: e.target.value
    });
  }

  OnchangeAge = (e) => {
    this.setState({
      empAge: e.target.value
    });
  }

  post = () => {
    axios.post('/employees', {
      emp_id: this.state.empId,
      name: this.state.empName,
      department: this.state.department,
      phone: this.state.phoneNum,
      age: this.state.empAge,

    })
    .then( result =>{
      console.log(result.data);
      this.setState({ records: result.data});
      notifcation();
      setInterval(() => {
        {window.location.pathname = "/user/employee"}
      }, 1500);
      
    } )
  }
    render() {
        const { classes } = this.props;
        return (
        <div>
        <div style={{height:60}}  />
        <h1 class="header" >Add Employee</h1>

        <div style={{paddingLeft:'270px'}}> 
        <ReactNotification />
        <form name="form" className={classes.root} noValidate autoComplete="off">        
        <TextField
          required
          id="id"
          label="Emp.ID"
          variant="outlined"
          InputProps={{ classes: { input: this.props.classes.normalTextField } }}
          onChange={this.OnchangeID}
        />
        <TextField
          id="name"
          label="Emp Name"
          variant="outlined" 
          InputProps={{ classes: { input: this.props.classes.normalTextField } }}
          onChange={this.OnchangeEmpName}
        /> <br />

        <TextField
          id="phone"
          label="Phone Number"
          type="number"
          InputProps={{ classes: { input: this.props.classes.normalTextField } }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={this.OnchangePhone}
        /> 

        <TextField
          id="dept"
          label="Department"
          variant="outlined"
          InputProps={{ classes: { input: this.props.classes.normalTextField } }}
          onChange={this.OnchangeDept}
        />

         <TextField
          id="age"
          label="Age"
          variant="outlined"
          InputProps={{ classes: { input: this.props.classes.normalTextField } }}
          onChange={this.OnchangeAge}
        />  <br /> 
        <Grid style={{paddingLeft:'10px'}} >
       <Button onClick={this.post}  variant="contained" color="primary"> ADD  </Button> &nbsp;
       <Button  onClick={() => {window.location.pathname = "/user/employee"}} variant="contained" color="secondary"> CANCEL  </Button>
       </Grid>
    </form>
    </div>
 </div>
        );
    }
}

export default withStyles(styles)(AddEmployee);