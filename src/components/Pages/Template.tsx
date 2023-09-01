import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  AppBar,
  Drawer,
  Toolbar,
  createTheme,
  ThemeProvider,
  CssBaseline,
  colors,
  IconButton,
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

const StyledRoot = styled("div")({
  display: "flex",
});

const StyledContent = styled("main")({
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
});

const AppBarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const ToolbarIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
  ...theme.mixins.toolbar,
}));

const StyledToolbar = styled(Toolbar)({
  paddingRight: 24,
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

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

export default function Template(props: TemplateProps) {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledRoot>
        <CssBaseline />
        <AppBar position="absolute">
          <StyledToolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <StyledTypography component="h1" variant="h6" noWrap>
              ヘッダー
            </StyledTypography>
          </StyledToolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <ToolbarIcon>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </ToolbarIcon>
          <Divider />
          <List>
            <StyledLink to="/">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="トップページ" />
              </ListItem>
            </StyledLink>
            <StyledLink to="/list">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="一覧ページ" />
              </ListItem>
            </StyledLink>
          </List>
        </Drawer>
        <StyledContent>
          <AppBarSpacer />
          <StyledContainer maxWidth="lg">
            <StyledTypography
              component="h2"
              variant="h5"
              color="inherit"
              noWrap
            >
              {props.title}
            </StyledTypography>
            {props.children}
            <Box pt={4}></Box>
          </StyledContainer>
        </StyledContent>
      </StyledRoot>
    </ThemeProvider>
  );
}
