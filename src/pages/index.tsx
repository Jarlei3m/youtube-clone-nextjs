import { Box, Grid } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';
import { Layout } from 'src/components/Layout';
import { VideoCard } from 'src/components/VideoCard';
import getVideos from 'src/database/getVideos';

interface itemProps {
  _id: string;
  title: string;
  thumb: string;
  authorName: string;
  authorAvatar: string;
  views: number;
  updatedAt: string;
}

interface HomeProps {
  data: itemProps[];
}

export default function Home({ data }: HomeProps) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => {
            return (
              <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                <VideoCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getVideos();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
    revalidate: 15,
  };
};
