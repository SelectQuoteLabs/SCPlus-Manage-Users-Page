import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Accordion, DataTable } from 'scplus-shared-components';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import SideNavBar from '../src/components/SideNavBar';
import { DUMMY_USERS_DATA } from '../src/constants/commonConstants';

const useStyles = makeStyles({
  root: {
    height: '400px',
    width: '100%',
    display: 'flex',
  },
});

const dummyUsers = () => {
  const dummyData = DUMMY_USERS_DATA.map(({ user, comment }) => {
    return { name: user, comment };
  });

  return dummyData;
};

const onCellClicked = (value) => {
  const { name, comment } = value.data;
  alert([name, comment]);
};

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>SelectQuote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="side_nav">
        <SideNavBar />
        <div className={classes.root}>
          <Accordion
            accordionPanels={[
              {
                body: (
                  <div className={classes.root}>
                    <DataTable
                      columns={[
                        {
                          field: 'name',
                          filterParams: {
                            defaultOption: 'filterBy',
                            filterOptions: [
                              {
                                displayKey: 'filterBy',
                                displayName: 'Filter by… (All)',
                                hideFilterInput: true,
                              },
                              {
                                displayKey: 'valid',
                                displayName: 'Valid',
                                hideFilterInput: true,
                              },
                            ],
                            suppressAndOrCondition: true,
                          },
                          headerName: `Name`,
                          onCellClicked: (value) => onCellClicked(value),
                        },
                        {
                          field: 'comment',
                          headerName: 'Comments',
                        },
                      ]}
                      rowData={dummyUsers()}
                      zeroItemsMessage="Custom Zero Items Message"
                    />
                  </div>
                ),
                isInitiallyExpanded: true,
                name: 'one',
                subtitles: [
                  <Typography variant="h5" color="textSecondary">
                    No User Selected
                  </Typography>,
                ],
                title: <Typography variant="h5">Manage Users:</Typography>,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
