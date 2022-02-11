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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    What we
                    <br />
                    do at 5-9
                  </>
                }
                description="Get intentional by creating social or self-care events each week"
              />
              <RotatingCardBack
                image={bgBack}
                title={
                  <>
                    What we
                    <br />
                    do at 5-9
                  </>
                }
                description="Get intentional by creating social or self-care events each week"
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <MKTypography variant="h4">Our features</MKTypography>
            <Grid container spacing={3} marginTop="8px">
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="person"
                  title="The right time"
                  description="Automatically finds the right time between you and your friends to make events"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="celebration"
                  title="The right event"
                  description="Whether its finding the right social event or stay at home task we recommend the best"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="sentiment_very_satisfied"
                  title="Get excited!"
                  description="Have a list of all of your future events to get excited for the week and leave work with a smile"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="favorite"
                  title="Happily remember the past"
                  description="Look at all your fond memories with stats and history posts from your 5-9 past"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
