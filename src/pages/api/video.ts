import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectToDatabase from 'src/utils/mongodb';
import upload from 'src/utils/upload';

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(upload.single('file'))
  .post(async (req, res) => {
    // Get image and other datas from endpoint
    // Insert on mongodb
    const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;
    const { db } = await connectToDatabase();
    const collection = db.collection('videos');

    await collection.insertOne({
      title,
      authorId: new ObjectId(authorId),
      authorName,
      authorAvatar,
      views: 0,
      thumb: req.file.location,
      videoUrl,
      updatedAt: new Date(),
    });

    return res.status(200).json({ ok: true });
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
