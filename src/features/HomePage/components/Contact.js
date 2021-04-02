import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Link } from '@material-ui/core';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Facebook as FacebookIcon,
} from '@material-ui/icons';
import Section from '@components/Section';

export const SECTION_ID = 'contact';

function Contact() {
  const classes = useStyles();

  const linkProps = {
    underline: 'hover',
    color: 'secondary',
  };

  return (
    <Section size="small" id={SECTION_ID}>
      <Container maxWidth="md" className={classes.container}>
        <div className={classes.urlContainer}>
          <Typography variant="h6">
            <EmailIcon fontSize="large" />
            <Link href="mailto:contact@dwysokinski.me" {...linkProps}>
              contact@dwysokinski.me
            </Link>
          </Typography>
          <Typography variant="h6">
            <GitHubIcon fontSize="large" />
            <Link href="https://github.com/Kichiyaki" {...linkProps}>
              Kichiyaki
            </Link>
          </Typography>
          <Typography variant="h6">
            <FacebookIcon fontSize="large" />
            <Link
              href="https://www.facebook.com/dawidwysokinski00"
              {...linkProps}
            >
              /dawidwysokinski00
            </Link>
          </Typography>
        </div>
      </Container>
    </Section>
  );
}

const useStyles = makeStyles(theme => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    urlContainer: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(0.5),
      },
      '& > *': {
        display: 'flex',
        alignItems: 'center',
        wordBreak: 'break-all',
        '& > *:not(:last-child)': {
          marginRight: theme.spacing(1),
        },
      },
    },
  };
});

export default Contact;
