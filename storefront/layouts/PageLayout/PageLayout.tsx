import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@navikt/aksel-icons';

import { Container, MdxContent } from '../../components';

import classes from './PageLayout.module.css';

interface PageLayoutProps {
  content: React.ReactNode;
  data: PageLayoutData;
}

type PageLayoutData = {
  title: string;
  date: string;
  author: string;
  backText: string;
  backUrl: string;
};

const PageLayout = ({ content, data }: PageLayoutProps) => {
  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <Container className={classes.headerContainer}>
          <div className={classes.headerContent}>
            <Link
              href={'/' + data.backUrl}
              className={classes.back}
            >
              <ArrowLeftIcon
                title='Tilbake'
                fontSize={28}
              />
              {data.backText}
            </Link>
            <div className={classes.meta}>
              <span>
                {data.author && (
                  <div className={classes.date}>{data.author}</div>
                )}
              </span>
              <span className={classes.separator}> - </span>
              <span>
                {data.date && <div className={classes.date}>{data.date}</div>}
              </span>
            </div>
            <h1 className={classes.title}>{data.title}</h1>
          </div>
        </Container>
      </div>

      <Container className={classes.container}>
        <div className={classes.content}>
          <MdxContent>{content}</MdxContent>
        </div>
      </Container>
    </div>
  );
};

export { PageLayout };
