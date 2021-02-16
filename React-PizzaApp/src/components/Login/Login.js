import React, { Component } from 'react';
import { Grid, TextField, Button, InputAdornment} from '@material-ui/core';
import { LockRounded, AccountCircle } from "@material-ui/icons"


export default class Login extends Component {

    // Initializing state values
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            login: false,
            isLogged: false,
            store: null,
            username: null,
            user: null
        }
    }

    componentDidMount() {
        // this.storeCollector()
    }
    storeCollector() {
        let store = JSON.parse(localStorage.getItem('login'));
        if (store && store.login && (store.user == "admin") ) {
            this.setState({ login: true, store: store })
            this.props.history.push('/user/viewcatalog')
        }
    }
    // Store the token to localStorage
    login() {
        this.storeCollector()
        fetch('http://localhost:3000/api-token-auth', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            response.json().then((result) => {
                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    token: result.token,
                    username: result.user,
                    user: result.user.user
                }))
                // Check if usr or admin is logging in
                if(result.user.user == "admin"){
                    localStorage.setItem('admin', JSON.stringify({
                        user: result.user.user
                    }))
                }
                if(result.user.user == "customer"){
                    localStorage.setItem('customer', JSON.stringify({
                        user: result.user.user
                    }))
                    this.props.history.push('/home/menu')
                 }
                this.storeCollector()
            }, (error) => {
                if (error) {
                    this.setState({ isLogged: true });
                }
            })
        });
    }

    render() {
        return (
            <div>
                <div >

                    {/* Login Cover image */}
                <Grid container style={ {minHeight:'100vh'}}>
                    <Grid item xs={12} sm={6}>
                        <img src="https://cdn.pixabay.com/photo/2018/04/11/03/13/food-3309418_960_720.jpg"
                         style={{width:'130vh', height:'100%', objectFit: 'cover'}} alt="sample"/>

                    </Grid>
                <Grid  container item xs={12} sm={6}  alignItems="center" direction="center" justify="space-evenly" style={{padding: 50}}> 
                    <div/>
                    <div >
                        {/* Logo Image */}
                        <Grid container justify="center">
                            <img src= "https://www.humanrightslogo.net/sites/default/files/HRLogoCMYKsmallRGB.png" width={100} alt="Logo"/>
                        </Grid>
                        { this.state.isLogged ? <h5 className="errormessage">Please Enter a Valid Password and Email</h5> : " "}
                        <TextField type="email" onChange={(event) => { this.setState({ email: event.target.value }) }}
                        label='EMAIL' required name="email" fullWidth  
                        InputProps={{startAdornment: <InputAdornment position="start"> <AccountCircle /> </InputAdornment>}} /> <br />

                        <div style={{height:20}} />

                        <TextField type="password" onChange={(event) => { this.setState({ password: event.target.value }) }}
                        label='PASSWORD' name="password" placeholder='Enter password' required type='password' fullWidth 
                        InputProps={{startAdornment: <InputAdornment  position="start"> <LockRounded /> </InputAdornment>}} /> <br />

                        <div style={{height:20}} />
                        <Button onClick={() => { this.login() }} type='submit' color='primary' variant="contained"  fullWidth>Sign in</Button>
                    </div>
                    <div style={{height:20}} />
                    <Grid container justify="center" style={{padding:50}} spacing={3}>
                    <Grid item>
                        <Button  color="primary" >Forgot password</Button>
                    </Grid>
                                
                    <Grid item>
                        <Button color="primary" >Signup</Button>
                    </Grid>
                </Grid>
                </Grid>
                </Grid>    
                        </div>
            </div>
        )
    }
}