import { ReactNode } from "react";
import { makeStyles } from '@material-ui/core';
import theme from "../../theme";
import  Head  from "next/head";

import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw'
  },
  warpper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
})

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function Layout({children, title}: LayoutProps) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale-1.0, width-device-width" />
      </Head>

      <div className={classes.root}>
        <TopBar />
        <NavBar />
        <div className={classes.warpper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}