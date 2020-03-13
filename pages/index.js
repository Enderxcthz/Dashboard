import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolBar: {
    flexWrap: 'wrap'
  },
  toolBarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(10, 0, 10),
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline/>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolBarTitle}>
            RoWifi
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Docs
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Premium
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          RoWifi
        </Typography>
        <Typography component="p" variant="h5" align="center" color="textSecondary">
          The Bind Oriented Roblox-Discord Verification Bot
        </Typography>
        <Grid container spacing={2} justify="center" className={classes.heroButtons}>
          <Grid item>
            <Button variant="contained" size="large" color="primary">
              <TouchAppIcon/>
              Invite Bot
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" color="primary">
              <ChatBubbleIcon/>
              Get Support
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Box mt={10}>
        <Typography variant="body2" component="footer" color="textSecondary" align="center">
          Created by @Gautam.A#9539
        </Typography>
      </Box>
    </div>
  );
}
