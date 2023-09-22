import React, { Component, useState, useContext, useEffect }   from 'react';

import apiCall from '../apiCall/apiCall';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Modal,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import styled from '@emotion/styled';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useToken } from "../context/TokenContext";
import { RequestDetails } from './RequestDetails';
import Box from '@mui/material/Box';
import DangerousIcon from '@mui/icons-material/Dangerous';

 
const UserRequestsTable = (props) =>{

    const [openView, setOpenView] = useState(false);    
    const [actionTaken, setActionTaken] = useState(false);
    const [requests, setRequests] = useState(props.requests); 
    const [modalIndex, setModalIndex] = useState();
    const viewRequest = () =>{
        setOpenView(true);
      }
      const approveRequest = (index) =>{
        setActionTaken(true);
        console.log(actionTaken);
        modifyTable(index);
        setActionTaken(false);
      }
      const deleteRequest = (index) =>{
        console.log("Index:"+index);
        setActionTaken(true);
        modifyTable(index);
        setActionTaken(false);
      }
      const closeRequest = () =>{
        setOpenView(false);
      }
      const modifyTable = (index) =>{
        const newReqs = [...requests];
        newReqs.splice(index, 1);
        setRequests(newReqs);
        //console.log(newReqs);
      }
      
  //setRequests(props.requests);
  //setRequests(props.requests);
  console.log("Received Reqs:"+requests);
  console.log(props.requests);
  return (
    <div className="container">
         <TableContainer component={Paper} style={{marginLeft:"30%", marginTop:"10%", maxWidth:800}}>
      <Table sx={{ maxWidth:800}} aria-label="simple table">
        <TableHead style={{textAlign:"center"}}>
          <TableRow>
            <TableCell>Account Number</TableCell>
            <TableCell align="right">Account Type</TableCell>
            <TableCell align="centre"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((request, index) => (
            <TableRow
              key={request.accountNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {request.accountNo}
              </TableCell>
              <TableCell align="right" style={{textAlign:"center"}}>{request.accountType}</TableCell>
              <TableCell align="right" style={{textAlign:"center"}}>{request.customerId}</TableCell>
              <TableCell align="right" style={{textAlign:"center"}} onClick={()=>{setModalIndex(index); viewRequest();}} ><Button size="small" variant="contained" style={{backgroundColor:"blue"}}>View</Button></TableCell>
              <TableCell align="right" style={{textAlign:"center"}} onClick={()=>{approveRequest(index)}} ><Button size="small" variant="contained" style={{backgroundColor:"green"}}>Approve</Button></TableCell>
              <TableCell align="right" style={{textAlign:"center"}}onClick={()=>{deleteRequest(index)}} ><Button size="small" variant="contained" style={{backgroundColor:"red"}}>Reject</Button></TableCell>
              <Modal open={openView}>
            <Box>
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                <RequestDetails customer={request}/>
                <Button size="large" variant='contained' onClick={closeRequest} style={{width:"5%", marginLeft:"12%", marginTop:"2%"}}><DangerousIcon/></Button>
                </div>
            </Box>
    </Modal>
            </TableRow>
            
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    {/* <Modal open={openView}>
            <Box>
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                <RequestDetails customer={request}/>
                <Button size="large" variant='contained' onClick={closeRequest} style={{width:"5%", marginLeft:"12%", marginTop:"2%"}}><DangerousIcon/></Button>
                </div>
            </Box>
    </Modal> */}
    </div>
  );
}

export default UserRequestsTable;
