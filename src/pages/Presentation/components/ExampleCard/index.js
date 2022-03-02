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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
import { Button } from "@mui/material";
// import needfindingPDF from "../../assets/images/NeedfindingPDF.pdf";
import povPDF from "../../../../assets/images/POVPDF.pdf";
// import lofiPDF from "../../assets/images/LowfiPDF.pdf";
// import medfiPDF from "../../assets/images/MedfiPDF.pdf";
// import needfindingDownload from "../../assets/images/NeedfindingDownload.pptx";
// import povDownload from "../../assets/images/POVDownload.pptx";
// import lofiDownload from "../../assets/images/LofiDownload.pptx";
// import medfiDownload from "../../assets/images/MedfiDownload.pptx";

function ExampleCard({ image, name, count, pro, ...rest }) {
  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      minHeight="10rem"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
    >
      {image ? (
        <MKBox
          component="img"
          src={image}
          alt={name}
          width="100%"
          my="auto"
          opacity={pro ? 0.6 : 1}
        />
      ) : (
        <Icon style={{ alignSelf: "center" }}>lock</Icon>
      )}
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {pro ? (
        <Tooltip title="Pro Element" placement="top">
          {imageTemplate}
        </Tooltip>
      ) : (
        imageTemplate
      )}
      {name || count > 0 ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <MKTypography
              variant="h6"
              fontWeight="bold"
              style={{ alignSelf: "center", textAlign: "center", marginBottom: "16px" }}
            >
              {name}
            </MKTypography>
          )}
          <div style={{ justifyContent: "space-around", flex: 1, display: "flex" }}>
            {/* <Button variant="contained" style={{ color: "white" }}> */}
            <a href={povPDF}>Open</a>
            {/* </Button> */}

            <Button variant="contained" style={{ color: "white" }}>
              Download
            </Button>
          </div>
        </MKBox>
      ) : null}
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
  name: "",
  count: 0,
  pro: false,
};

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.number,
  pro: PropTypes.bool,
};

export default ExampleCard;
