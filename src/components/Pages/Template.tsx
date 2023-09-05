import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import {
  AppBar,
  Drawer,
  Toolbar,
  createTheme,
  ThemeProvider,
  CssBaseline,
  colors,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Noto Sans JP",
      "Lato",
      "游ゴシック Medium",
      "游ゴシック体",
      "Yu Gothic Medium",
      "YuGothic",
      "ヒラギノ角ゴ ProN",
      "Hiragino Kaku Gothic ProN",
      "メイリオ",
      "Meiryo",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: { main: colors.blue[800] },
  },
});

const Root = styled("div")({
  display: "flex",
});

const MainContent = styled("main")({
  height: "100vh",
  overflow: "auto",
  flexGrow: 1,
});

const AppBarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.text.secondary,
});

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export interface TemplateProps {
  children: React.ReactNode;
  title: string;
}

const drawerWidth = 240;

export default function Template(props: TemplateProps) {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="h1" variant="h6" noWrap flexGrow={1}>
              ヘッダー
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
        >
          <Toolbar />
          <Divider />
          <List>
            <StyledLink to="/">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </StyledLink>
            <StyledLink to="/list">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="List" />
              </ListItem>
            </StyledLink>
          </List>
        </Drawer>
        <MainContent>
          <AppBarSpacer />
          <StyledContainer maxWidth="xl">
            <Typography component="h2" variant="h6" color="inherit" noWrap>
              {props.title}
            </Typography>
            {props.children}
            <Box pt={4}></Box>
          </StyledContainer>
        </MainContent>
      </Root>
    </ThemeProvider>
  );
}
