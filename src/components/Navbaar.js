import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DeleteContext } from './context/ContextProvider';
import Alert from 'react-bootstrap/Alert'

const Navbaar = () => {

    const { dlttask, setDlettask } = useContext(DeleteContext);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: "#232f3e" }}>
                    
                    <Toolbar>
                        
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: "center" }}>
                             TO-DO App
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
   
         {/* alert will be shown if task is removed */}
            {
                dlttask ? <Alert variant="danger" onClose={() => setDlettask(false)} dismissible>
                    <Alert.Heading>Your Task remove Succesfully</Alert.Heading>
                </Alert> : ""
            }
        </>
    )
}

export default Navbaar