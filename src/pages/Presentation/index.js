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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";

// Images
import bgImage from "assets/images/TeamPhoto.jpg";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import needfindingPDF from "../../assets/images/NeedfindingPDF.pdf";
import povPDF from "../../assets/images/POVPDF.pdf";
import lofiPDF from "../../assets/images/LowfiPDF.pdf";
import medfiPDF from "../../assets/images/MedfiPDF.pdf";
import needfindingDownload from "../../assets/images/NeedfindingDownload.pptx";
import povDownload from "../../assets/images/POVDownload.pptx";
import lofiDownload from "../../assets/images/LofiDownload.pptx";
import medfiDownload from "../../assets/images/MedfiDownload.pptx";

function Presentation() {
  return (
    <>
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome to 5-9
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Helping post-grads be intentional of their time post work
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          alignItems: "center",
        }}
      >
        <Information />
        <YoutubeEmbed embedId="Z2-3NQdH2Os" />

        <a href={needfindingPDF} style={{ marginTop: "24px" }}>
          Open Needfinding PDF
        </a>
        <a href={povPDF}>Open POV PDF</a>
        <a href={lofiPDF}>Open Lofi PDF</a>
        <a href={medfiPDF}>Open Medfi PDF</a>
        <a href={needfindingDownload} download>
          Download Needfinding PPT
        </a>
        <a href={povDownload} download>
          Download POV PPT
        </a>
        <a href={lofiDownload} download>
          Download Lofi PPT
        </a>
        <a href={medfiDownload} download>
          Download Medfi PPT
        </a>
        <a href="https://docs.google.com/presentation/d/1D89wKXPypSNqj8CYeZyhv8MWDXz3jXIMogdc82N4gUU/edit?usp=sharing">
          Medium Fi Presentation Link
        </a>
        <a href="https://www.figma.com/proto/uBLVQDmFF5ag5zojXDysoG/CS147-Med-Fi-Prototype?node-id=55%3A363&scaling=scale-down&page-id=0%3A1&starting-point-node-id=55%3A363&show-proto-sidebar=1">
          Medium Fi Figma Link
        </a>
        <DesignBlocks />
        <Team />
      </Card>
    </>
  );
}

export default Presentation;
