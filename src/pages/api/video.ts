import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import upload from 'src/utils/upload';

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(upload.single('file'))
  .post((req, res) => {
    // Get image and other datas from endpoint
    // Insert on mongodb
    const { title, authorName, authorAvatar, videoUrl } = req.body;

    res.json({ hello: 'world' });
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default handler;
