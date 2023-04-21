import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setData(response.data.posts);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Assignment by Nitin Kumar
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" >
            Assignment of Nitin Kumar
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 6 }} maxWidth="">
        <Grid container spacing={7}>
          {data.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography>{card.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
    </>
  );
};
export default Posts;
