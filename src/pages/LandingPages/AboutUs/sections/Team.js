/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
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
// import MKTypography from "components/MKTypography";

// // Material Kit 2 React examples
// import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// // Images
// import team1 from "assets/images/PlatonHeadshot.jpg";
// import team2 from "assets/images/TaraHeadshot.jpeg";
// import team3 from "assets/images/AmyHeadshot.jpeg";
// import team4 from "assets/images/AnooshreeHeadshot.jpeg";
import TeamPhoto from "../../../../assets/images/Team.jpeg";

function Team() {
  return (
    <Container style={{ alignSelf: "center", alignItems: "center", textAlign: "center" }}>
      <img src={TeamPhoto} width="90%" style={{ alignSelf: "center" }} />
    </Container>
  );
}

export default Team;
