import React from "react";
import { DefaultHead } from "@/components/layout/Head";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import PagesCover from "@/components/layout/PagesCover";
import ContactUs from "@/components/layout/ContactUs";

const ContactUsPage = () => {
  const theme = useTheme();

  return (
    <>
      <DefaultHead title="Contact Us" />
      <Wrapper>
        <Box
          paddingTop={"4.25rem"}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: "50vh",
            backgroundColor: "custom.primaryBackground",
            textAlign: "left",
            padding: "0 20px",
            justifyContent: "center",
          }}
        >
          <Box zIndex={1}>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="title" fontWeight={600} paddingBottom={1}>
                Cryptech Services&apos;
              </Typography>
              <Typography
                variant="title"
                fontWeight={600}
                fontSize={"3rem"}
                color="custom.primaryText"
                gutterBottom
              >
                Contact Us
              </Typography>
            </Stack>
          </Box>

          <PagesCover />
        </Box>

        <Box position={"relative"}>
          <Box
            sx={{
              position: "absolute",
              left: "0",
              top: "-10%",
              width: "calc(100vw - 5px)",
              minHeight: "10rem",
              background: `linear-gradient(to top, ${theme.palette.custom.primaryBackground}, transparent)`,
            }}
          />
          <Container>
            <Grid
              container
              spacing={5}
              justifyContent="center"
              marginTop={2}
              alignItems={"center"}
            >
              <Grid item xs={12} sm={6} md={7}>
                <Stack spacing={1.5}>
                  <Typography fontSize={"1rem"} color="custom.primaryText">
                    Get In Touch
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography variant="h3" paddingBottom={1}>
                      Contact
                    </Typography>
                    <Typography
                      variant="h3"
                      fontWeight={600}
                      color="custom.primaryText"
                      gutterBottom
                    >
                      Us!
                    </Typography>
                  </Stack>
                  <Typography variant={"h6"} color="custom.primaryTextGrayed">
                    LETS TALK ABOUT YOUR PROJECT, Fill the form and send in your
                    queries. We will respond as soon as we can.
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={5}>
                <ContactUs />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
};

export default ContactUsPage;
