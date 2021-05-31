import { useRouter } from 'next/router';

import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import WhatShot from '@material-ui/icons/WhatShot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% -64px)',
    borderRight: 'none',
  },
  avatar: {
    cursos: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

export function NavBar() {
  const classes = useStyles();
  const router = useRouter();

  const primaryMenu = [
    { id: 1, label: 'Início', path: '/', icon: HomeIcon },
    { id: 2, label: 'Em alta', path: '/trending', icon: WhatShot },
    { id: 3, label: 'Inscrições', path: '/subscriptions', icon: Subscriptions },
  ];

  const secondaryMenu = [
    { id: 1, label: 'Biblioteca', path: '/library', icon: VideoLibrary },
    { id: 2, label: 'Histórico', path: '/history', icon: History },
  ];

  function isSelected(path: string) {
    return router.pathname === path;
  }

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const { id, label, path } = item;
          const Icon = item.icon;

          return (
            <ListItem
              key={id}
              button
              className={{ root: classes.listItem }}
              selected={isSelected(path)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(path) && '#f00' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={label}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>

      <Divider />

      <List>
        {secondaryMenu.map((item) => {
          const { id, label, path } = item;
          const Icon = item.icon;

          return (
            <ListItem
              key={id}
              button
              className={{ root: classes.listItem }}
              selected={isSelected(path)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(path) && '#f00' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={label}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>

      <Divider />

      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer login
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Hidden>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}
