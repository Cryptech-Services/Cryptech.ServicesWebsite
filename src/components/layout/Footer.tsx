// REACT
import Link from "next/link";

// MUI
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useThemeContext } from "@/theme/themeProvider";

const services = [
  {
    text: "Fees / Rates",
    url: "/public/rates",
    isExternal: false,
  },
  {
    text: "Blog",
    url: "https://stakecube.info",
    isExternal: true,
  },
  {
    text: "SCP Explorer",
    url: "https://scpscan.net",
    isExternal: true,
  },
  {
    text: "Discord Bot",
    url: "https://discord.com/oauth2/authorize?client_id=816420836226629632&scope=bot",
    isExternal: true,
  },
];

const support = [
  {
    text: "Guides & FAQs",
    url: "/support/faq",
    isExternal: false,
  },
  {
    text: "24/7 Support",
    url: "/#help",
    isExternal: false,
  },
];

const legal = [
  {
    text: "Cryptech Services",
    url: "/public/legal/terms",
    isExternal: false,
  },
  {
    text: "StakeCube",
    url: "/public/legal/privacy",
    isExternal: false,
  },
];

const community = [
  {
    text: "Discord",
    url: "https://discord.gg/stakecube",
    isExternal: true,
  },
];

interface SubLinkInterface {
  text: string;
  url: string;
  isExternal: boolean;
}

export default function Footer() {
  const SubLink = ({ text, url, isExternal }: SubLinkInterface) => {
    return (
      <Link href={url} target={isExternal ? "_blank" : "_self"}>
        <Typography
          variant={"subtitle1"}
          color={"custom.primaryTextGrayed"}
          sx={{
            "&:hover": {
              color: "custom.secondaryText", // Change color on hover
            },
          }}
        >
          {text}
        </Typography>
      </Link>
    );
  };

  const { activeSet } = useThemeContext();

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-ctlogo.png",
    2: "/static/images/green-ctlogo.png",
    3: "/static/images/yellow-ctlogo.png",
    4: "/static/images/orange-ctlogo.png",
    5: "/static/images/pink-ctlogo.png",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  return (
    <Box>
      <Box
        pt={{ xs: 1, md: 5 }}
        pb={0}
        width={"100vw"}
        position={"absolute"}
        left={"0"}
        sx={{
          backgroundColor: (theme) =>
            `rgba(${parseInt(
              theme.palette.custom.primaryComponents.slice(1, 3),
              16
            )}, ${parseInt(
              theme.palette.custom.primaryComponents.slice(3, 5),
              16
            )}, ${parseInt(
              theme.palette.custom.primaryComponents.slice(5, 7),
              16
            )}, .5)`,
        }}
      >
        <Grid
          container
          item
          xs={12}
          rowSpacing={2}
          padding={{ xs: 2, md: 0 }}
          sx={{
            maxWidth: "1600px !important",
            justifyContent: { sm: "center", xs: "left" },
            marginX: "auto",
          }}
        >
          <Grid item lg={7} xs={12}>
            <Stack spacing={1} pb={{ xs: 1, md: 5 }}>
              <Stack
                display={"flex"}
                direction={"row"}
                alignItems={"center"}
                marginTop={1}
                paddingBottom={1}
                spacing={1}
              >
                <Box
                  component="img"
                  width={{ md: 35 }}
                  alt="Logo"
                  src={imageSrc}
                />
                <Typography
                  variant={"h3"}
                  fontSize={"1.75rem"}
                  color={"custom.primaryText"}
                >
                  Cryptech Services
                </Typography>
              </Stack>
              <Divider
                sx={{
                  bgcolor: "custom.mainColor",
                  paddingBottom: 0.1,
                  border: "none",
                }}
              />
              <Stack
                spacing={1}
                direction={"row"}
                display={"flex"}
                flexWrap={"wrap"}
              >
                <Typography
                  variant={"body1"}
                  color={"custom.primaryText"}
                  fontSize={"1.15rem"}
                >
                  Cryptocurrency,
                </Typography>
                <Typography
                  variant={"body1"}
                  color={"custom.primaryTextGrayed"}
                  fontSize={"1.15rem"}
                >
                  Blockchain,
                </Typography>
                <Typography
                  variant={"body1"}
                  color={"custom.secondaryTextGrayed"}
                  fontSize={"1.15rem"}
                >
                  Web Development.
                </Typography>
              </Stack>
              <Typography variant="subtitle1" color="custom.primaryTextGrayed">
                We specialize in providing robust web3 and fullstack development
                services, with a primary focus on cryptocurrency, blockchain
                technology, and web design.
              </Typography>
            </Stack>
          </Grid>

          {/* <Grid
            item
            lg={1}
            sm={3}
            xs={4}
            display={"flex"}
            sx={{ justifyContent: { lg: "center", xs: "left" } }}
          >
            <Stack spacing={1}>
              <Typography fontWeight={600}>Services</Typography>
              <Box>
                {services.map((val, index) => (
                  <ListItem key={index} disablePadding>
                    <SubLink
                      text={val.text}
                      url={val.url}
                      isExternal={val.isExternal}
                    />
                  </ListItem>
                ))}
              </Box>
            </Stack>
          </Grid> */}

          {/* <Grid
            item
            lg={1}
            sm={3}
            xs={4}
            display={"flex"}
            sx={{ justifyContent: { lg: "center", xs: "left" } }}
          >
            <Stack spacing={1}>
              <Typography fontWeight={600}>Support</Typography>
              <Box>
                {support.map((val, index) => (
                  <ListItem key={index} disablePadding>
                    <SubLink
                      text={val.text}
                      url={val.url}
                      isExternal={val.isExternal}
                    />
                  </ListItem>
                ))}
              </Box>
            </Stack>
          </Grid> */}

          <Grid
            item
            lg={1.5}
            sm={6}
            xs={6}
            display={"flex"}
            sx={{ justifyContent: { lg: "center", xs: "left" } }}
          >
            <Stack spacing={1}>
              <Typography fontWeight={600} color={"custom.primaryText"}>
                Links
              </Typography>
              <Box>
                {legal.map((val, index) => (
                  <ListItem key={index} disablePadding>
                    <SubLink
                      text={val.text}
                      url={val.url}
                      isExternal={val.isExternal}
                    />
                  </ListItem>
                ))}
              </Box>
            </Stack>
          </Grid>

          <Grid
            item
            lg={1.5}
            sm={6}
            xs={6}
            display={"flex"}
            sx={{ justifyContent: { lg: "center", xs: "left" } }}
          >
            <Stack spacing={1}>
              <Typography fontWeight={600} color={"custom.primaryText"}>
                Community
              </Typography>
              <Box>
                {community.map((val, index) => (
                  <ListItem key={index} disablePadding>
                    <SubLink
                      text={val.text}
                      url={val.url}
                      isExternal={val.isExternal}
                    />
                  </ListItem>
                ))}
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Box bgcolor={"custom.secondaryBackground"} py={1}>
            <Typography>
              &copy; Copyright Cryptech Services - {new Date().getFullYear()}.
              All Rights Reserved.
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
