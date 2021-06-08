import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Layout';

export function Video() {
  const router = useRouter();

  return (
    <Layout title="Youtube">
      <span>{router.query.id}</span>
      <Button onClick={() => router.back()}>Voltar</Button>
    </Layout>
  );
}

export default Video;
