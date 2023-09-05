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

const drawerWidth = 240;

const Root = styled("div")({
  display: "flex",
});

const MainContent = styled("main")({
  width: `calc(100% - ${drawerWidth}px)`,
  height: "100%",
  overflow: "auto",
});

const AppBarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const StyledAppBar = styled(AppBar)({
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
});

const StyledToolbar = styled(Toolbar)({
  margin: "0 auto",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.text.secondary,
});

const StyledContainer = styled(Container)(({ theme }) => ({
  height: "90vh",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export interface TemplateProps {
  children: React.ReactNode;
  title: string;
}

export default function Template(props: TemplateProps) {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <CssBaseline />
        <StyledAppBar position="absolute">
          <StyledToolbar>
            <Typography component="h1" variant="h6" noWrap>
              Header
            </Typography>
          </StyledToolbar>
        </StyledAppBar>
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
          <StyledContainer>
            <Typography component="h2" variant="h6" color="inherit" noWrap>
              {props.title}
            </Typography>
            {props.children}
            <Typography variant="body2" align="center" padding={2} noWrap>
              Footer
            </Typography>
          </StyledContainer>
        </MainContent>
      </Root>
    </ThemeProvider>
  );
}
