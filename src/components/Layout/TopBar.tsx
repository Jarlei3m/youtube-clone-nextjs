import { AppBar, Box, Button, Hidden, IconButton, InputBase, makeStyles, Paper, Toolbar } from "@material-ui/core";
import { AccountCircle, Apps, MoreVert, VideoCall } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3)
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
  icons: {

  }
}));

export function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color='default'>
      <Toolbar className={classes.toolbar}>
        <Box display='flex' alignItems='center'>
          <MenuIcon />
          <img 
            src='/new-youtube-logo.svg' 
            alt='logo' 
            className={classes.logo} />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component='form' className={classes.search}>
              <InputBase 
                className={classes.input}
                placeholder='Pesquisar'
                inputProps={{ 'arial-label': 'search google maps'}}
              />
              <IconButton 
                type='submit'
                arial-label='search'
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box display='flex'>
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            color='secondary'
            component='a'
            variant='outlined'
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}