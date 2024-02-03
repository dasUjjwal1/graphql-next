import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Groups2TwoToneIcon from "@mui/icons-material/Groups2TwoTone";
const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Groups2TwoToneIcon color="success" />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
        <Grid xs={3}></Grid>
        <Grid xs={3}></Grid>
        <Grid xs={3}></Grid>
      </Grid>
    </>
  );
};

export default HomePage;
