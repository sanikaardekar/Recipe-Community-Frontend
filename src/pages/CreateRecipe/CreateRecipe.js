import { Grid, Typography, TextField, Box } from "@material-ui/core";
import './CreateRecipe.css';
import React, { useState } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
//import { makeStyles } from "@material-ui/styles"
import Tags from "../../components/Tags/Tags";

export default function Createrecipe()
{ 
    //const arr = ["veg", "nonveg", "vegan"];
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const addIcon = {
        width: '100px',
        height: '100px',
        display: 'block',
    };
    const imageSelectedHandler = (e) =>{
        console.log(e.target.files[0])
    }
   
    return(<>
    <Grid container direction="column" justifyContent="space-evenly" alignItems="flex-start" style={{gap:15}}>  {/*outermost grid */}
        {/* <Box component="div" mt={4} pt={4}> */}
        <Grid item xs={12} sm={12} md={6} lg={6} style={{marginTop:"20px", marginLeft:"36px"}}>
    <Typography className="title">Create a Recipe</Typography>
        </Grid>
        {/* </Box> */}
        <Grid container direction="row" >
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
    <Typography className="input-titles">Name</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <TextField variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        name="name"
        autoComplete="name"
        autoFocus
        type="text"
        value={name.trim()}
        onChange={(e) => setName(e.target.value)}/>
        </Grid>
        </Grid>
        <Grid container direction="row">
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
    <Typography className="input-titles">Description</Typography>
        </Grid>
        <Grid item sm={6} md={3} style={{marginLeft: '15px'}}>
        <TextField variant="outlined" className="tf-desc"
        margin="normal"
        required
        fullWidth
        id="description"
        name="description"
        autoComplete="description"
        autoFocus
        type="text"
        value={description.trim()}
        onChange={(e) => setDescription(e.target.value)}/>
        </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
    <Typography className="input-titles">Upload Image</Typography>
        </Grid>
        <Grid item sm={6} md={3}>
        <Box component="div" sx={{borderRadius:'8px', border: '1px solid #58971C', width: 291, height: 206, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: '15px'}}>
            <label htmlFor="input-img"><AddAPhotoIcon style={addIcon}/></label>
            <input type="file" name="photo" onChange={imageSelectedHandler} id="input-img"/>
        </Box>
        </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Grid item sm={6} md={3} style={{marginLeft:"46px"}}>
    <Typography className="input-titles">Select Tags</Typography>
        </Grid>
    <Grid item sm={6} md={3}>
     <Tags/>  
    </Grid>
        </Grid>
</Grid>
    </>);
}