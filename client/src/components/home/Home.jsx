import Banner from "../banner/banner";
import Categories from './Categories'

import { Grid } from "@mui/material";

const Home = () =>{

    return(
        <>
        <Banner />
  
        <Grid container>
            
            {/*  side portion for categroies */}
             <Grid item lg = {2} sm = {2} xs = {12}>
                <Categories />

            </Grid>
            <Grid item lg = {10} sm = {10} xs = {12}>
                posts

            </Grid>


        </Grid>

        </>
    )

}

export default Home;