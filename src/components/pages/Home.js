import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "red" }}>
        <Grid container style={{ marginTop: 75 }}>
          <Grid item xs={12}>
            1
            <div
              style={{ width: 100, backgroundColor: "orange", height: 1000 }}
            >
              ss
            </div>
          </Grid>
          <Grid item md={9} xs={12}>
            1
          </Grid>
          <Grid item md={3} xs={12}>
            s
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
