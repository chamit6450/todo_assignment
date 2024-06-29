import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { Add } from "../redux/actions/action";
import { useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

const Home = () => {
  const [data, setData] = useState("");
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();

  const addData = () => {
   //This if statement executes if we have added null value
    if (data === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } 
    else {
      dispatch(Add(data));
      setData("");
    }
  };

  return (
    <>

     {/* alert if null value is passed */}
     {alert && (
            <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
              <Alert.Heading>Please enter a task!</Alert.Heading>
            </Alert>
          )}

      <div className="container">
        <section className='mt-3 text-center'>
          <h3>Enter Your Task</h3>

          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            {/* input filed to enter task data */}
            <input
              name='task'
              value={data}
              onChange={(e) => setData(e.target.value)}
              className='form-control'
            />
            {/* button to add task */}
            <Button
              variant='contained'
              onClick={() => addData()}
              style={{ background: "#ee5253" }}
              className='mx-2'
            >
              <AddIcon />
            </Button>
          </div>

          <Todo />
        </section>
      </div>
    </>
  );
};

export default Home;