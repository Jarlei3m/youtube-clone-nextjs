import {
  AppBar,
  Avatar,
  Box,
  Button,
  Hidden,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Toolbar,
} from '@material-ui/core';
import {
  AccountCircle,
  Apps,
  Brightness4,
  MoreVert,
  VideoCall,
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { signIn, signOut, useSession } from 'next-auth/client';
import useSettings from 'src/hooks/useSettings';
import THEMES from 'src/utils/constants';
import Brightness7 from '@material-ui/icons/Brightness7';

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
    marginLeft: theme.spacing(3),
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
  icons: {},
  avatar: {},
}));

export function TopBar() {
  const classes = useStyles();
  const [session] = useSession();
  const { settings, saveSettings } = useSettings();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img
            src={
              settings.theme === THEMES.DARK
                ? '/branco.png'
                : '/new-youtube-logo.svg'
            }
            alt="logo"
            className={classes.logo}
          />
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'arial-label': 'search google maps' }}
              />
              <IconButton type="submit" arial-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box display="flex">
          <IconButton className={classes.icons}>
            {settings.theme === THEMES.DARK ? (
              <Brightness7
                onClick={() => saveSettings({ theme: THEMES.LIGHT })}
              />
            ) : (
              <Brightness4
                onClick={() => saveSettings({ theme: THEMES.DARK })}
              />
            )}
          </IconButton>
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          {!session ? (
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fazer Login
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                onClick={() => signOut()}
                alt="User"
                className={classes.avatar}
                src={session?.user?.image || ''}
              ></Avatar>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
