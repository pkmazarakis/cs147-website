/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/PlatonHeadshot.jpg";
import team2 from "assets/images/TaraHeadshot.jpeg";
import team3 from "assets/images/AmyHeadshot.jpeg";
import team4 from "assets/images/AnooshreeHeadshot.jpeg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The 5-9 Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              We are committed to helping post grads be intentional with their time post work
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Platon Mazarakis"
                position={{ color: "info", label: "Developer" }}
                description="Symbolic systems major. Wants to bring design and code to bring smiles to peoples faces."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Tara Parekh"
                position={{ color: "info", label: "Designer" }}
                description="Symbolic systems major. Loves love and wants to build products around it"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Amy Zhang"
                position={{ color: "info", label: "Designer" }}
                description="CS major that loves to build machine learning models to solve intense problems"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Anooshree Sengupta"
                position={{ color: "info", label: "Developer" }}
                description="CS major and Sociology minor. Excited about making post-grad life stress-free!"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
