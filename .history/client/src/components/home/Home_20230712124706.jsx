import { Grid } from "@mui/material";

import Banner from "../banner/banner";
import Categories from './Categories'
import Header from "../header/Header";
import Posts from "./post/Posts";

const Home = () =>{

    return(
        <>
        <Header />
        <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>

        </>
    )

}

export default Home;