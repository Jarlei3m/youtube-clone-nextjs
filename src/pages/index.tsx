import React from 'react';
import { Button } from '@material-ui/core'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout title="YouTube">
      home
      <Button variant='outlined' color='secondary'>Hello world</Button>
    </Layout>
  )
}
