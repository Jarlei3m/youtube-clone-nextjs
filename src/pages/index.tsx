import { Box, Grid } from '@material-ui/core';
import { GetStaticProps } from 'next';
import React from 'react';
import { Layout } from 'src/components/Layout';
import { VideoCard } from 'src/components/VideoCard';

interface itemProps {
  id: number;

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
              <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
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
  const data = [
    {
      id: 1,
      title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE #01]',
      authorId: 1,
      authorName: 'Joshua Rawson-Harris',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.jfif',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      authorId: 1,
      authorName: 'Joshua Rawson-Harris',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.jfif',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      authorId: 1,
      authorName: 'Joshua Rawson-Harris',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.jfif',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      authorId: 1,
      authorName: 'Joshua Rawson-Harris',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.jfif',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};
