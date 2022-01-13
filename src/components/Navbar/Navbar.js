import * as React from 'react';
import {useState} from 'react';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { NotificationsNone } from '@material-ui/icons';
import './Navbar.css'
// import { useHistory } from 'react-router-dom';
//import Home from '../../pages/Home/Home';
//import ContactUs from '../../pages/ContactUs/ContactUs';
//import CreateRecipe from '../../pages/CreateRecipe/CreateRecipe';

 const Profile_pic= 'https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4='
export default function Navbar() {
  // const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // history.push(`/feed/${tabNameToIndex[newValue]}`);
    // if(newValue==0)
    // history.push("/home");
    setValue(newValue);
  };
  return(
    <>
    <div className="navbar">
    <div className="navbar-left">
        <div className="brand-name">tasty</div>
        <img
                  alt={"usershere"}
                  src={Profile_pic}
                  height={45}
                  width={45} 
                  className="icons profile-pic"/>
        <NotificationsNone className="icons"/>
    </div>
    <Tabs value={value} onChange={handleChange} centered className="navbar-right">
        <Tab className="navbar-right-elements" label="Home"/>
        <Tab className="navbar-right-elements" label="Create a Recipe"/>
        <Tab className="navbar-right-elements" label="Contact Us"/>
    </Tabs>
    </div>
   
    </>
  );
}
