import React from 'react';
import Image from 'next/image';
import { EnvelopeClosedIcon } from '@navikt/aksel-icons';
import NextLink from 'next/link';

import { Container } from '../Container/Container';
import { Link } from '../Link/Link';

import classes from './Footer.module.css';

const centerLinks = [
  {
    text: 'Om designsystemet',
    url: '/grunnleggende/introduksjon/om-designsystemet',
  },
  {
    text: 'Personvernerklæring',
    url: '/grunnleggende/personvernerklaering',
  },
  {
    text: 'Tilgjengelighetserklæring',
    url: '/grunnleggende/tilgjengelighetserklaering',
  },
];

const rightLinks = [
  {
    text: 'designsystem@digdir.no',
    url: 'mailto:designsystem@digdir.no',
    prefix: <EnvelopeClosedIcon title='a11y-title' />,
  },
  {
    text: 'Bli invitert til slack',
    url: '/grunnleggende/introduksjon/slack',
    prefix: (
      <Image
        height={20}
        width={20}
        alt='f'
        src='/img/logos/slack-negative.png'
      />
    ),
  },
  {
    text: 'Github',
    url: 'https://github.com/digdir/designsystem',
    prefix: (
      <Image
        height={20}
        width={20}
        alt='f'
        src='/img/logos/github-negative.png'
      />
    ),
  },
  {
    text: 'Figma',
    url: 'https://www.figma.com/@designsystemet',
    prefix: (
      <Image
        height={20}
        width={20}
        alt='f'
        src='/img/logos/figma-negative.png'
      />
    ),
  },
];

type LinkListItemProps = {
  text: string;
  url: string;
  prefix?: React.ReactNode;
};

const LinkList = (links: LinkListItemProps[]) => {
  return (
    <ul className={classes.links}>
      {links.map((item, index) => (
        <li key={index}>
          <Link
            prefix={item.prefix}
            href={item.url}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.top}>
        <Container className={classes.container}>
          <div>
            <h2 className={classes.title}>
              Lages på tvers av offentlige etater:
            </h2>
            <div className={classes.logos}>
              <Image
                alt='Digdir logo'
                height={100}
                width={600}
                src='/img/logos/digdir-negative.svg'
              ></Image>
              <Image
                alt='Brønnøysund logo'
                height={100}
                width={600}
                src='/img/logos/bronnoysund.svg'
              ></Image>
            </div>
            <NextLink
              href='mailto:designsystem@digdir.no'
              className={classes.button}
            >
              Din etat? Ta kontakt!
            </NextLink>
          </div>
          <div>
            <h2 className={classes.title}>Om nettstedet</h2>
            {LinkList(centerLinks)}
          </div>
          <div>
            <h2 className={classes.title}>Kom i kontakt med oss</h2>
            {LinkList(rightLinks)}
          </div>
        </Container>
      </div>
      <div className={classes.bottom}>
        <Container>© 2023 Designsystemet</Container>
      </div>
    </footer>
  );
};

export { Footer };
