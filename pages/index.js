import React from 'react';
import { useQuery } from 'react-query';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { Accordion, DataTable } from 'scplus-shared-components';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import SideNavBar from '../src/components/SideNavBar';

const useStyles = makeStyles({
  root: {
    height: '400px',
    width: '100%',
    display: 'flex',
  },
});

const getUsersData = async (page = 1) => {
  const res = await fetch(`http://localhost:8000/DUMMY_USERS_DATA`);
  const userData = await res.json();
  return userData;
};

export default function Home() {
  const [userName, setUserName] = React.useState('No user selected');
  const [page, setPage] = React.useState(1);
  const { data, status } = useQuery(
    ['userData', page],
    () => getUsersData(page),
    {
      keepPreviousData: true,
    }
  );

  const dummyUsers = () => {
    const dummyData = data?.map(({ userName, userComment }) => {
      return { name: userName, comment: userComment };
    });

    return dummyData;
  };

  const classes = useStyles();

  const onCellClick = ({ data }) => {
    const { name, comment } = data;
    setUserName(name);
  };

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
                    {userName}
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
