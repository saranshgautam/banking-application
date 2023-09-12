import React, { useState } from "react";
import { Grid, Paper, Avatar, Typography, TextField, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import apiCall from "../apiCall/apiCall";


const userNameRegex=/^(?!.*\.\.)(?!.*\.$)[A-Za-z0-9_.]{8,20}$/;
const passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;


const InternetBankingSignUp = () => {

    const paperStyle = { padding: '20px 20px', width: 300, margin: "20px auto" }
    const headerstyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bb7e' }
    const marginTop = { marginTop: 5 }
    // const [username, setUsername] = useState(null);
    // const [password, setPassword] = useState(null);
    // const [AccountNo, setAccountNo] = useState(null);

    const [formData,setFormData]=useState({
        username:"",
        password:"",
        accountNo:""
    });
    const handleSubmit = async (e) => {
        const url="http://localhost:8080/createIbAccount";
        e.preventDefault();
        const checkUsername=userNameRegex.test(formData.username);
        const checkPassword=passwordRegex.test(formData.password);
        const checkAccountNo=formData.accountNo.length>0?true:false;

        if(checkUsername && checkPassword && checkAccountNo){

        const result=await apiCall(url,"POST",formData,null);
        alert(result.data);
        }else{
            var res="";
            console.log(checkUsername+" "+checkPassword+" "+checkAccountNo)
            if(checkUsername===false){
                res=res.concat("invalid username\n");
            }
            if(checkPassword===false){
                res=res.concat("invalid password");
            }
            if(checkAccountNo===false){
                res=res.concat("invalid account number");
            }
            alert(res);
        }

  
        

    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AccountBalanceIcon />
                    </Avatar>
                    <h2 style={headerstyle}>Internet Banking</h2>
                    <Typography variant='caption' gutterBottom>Fill the form to register for internet banking!</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label='username' placeholder="enter a username" onChange={(e)=>setFormData({...formData,username:e.target.value})}/>
                    <TextField fullWidth label='password' type='password' placeholder="enter a password" onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                    <TextField fullWidth label='account_number' placeholder="enter your account number" onChange={(e)=>setFormData({...formData,accountNo:e.target.value})}/>
                    <Button type='submit' variant='contained' color='primary' >Register</Button>
                </form>
            </Paper>
        </Grid>
    );


}
export default InternetBankingSignUp;