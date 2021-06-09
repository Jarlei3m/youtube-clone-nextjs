import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from 'crypto';
import { NextApiRequest } from 'next';

declare const accessKeyId: string;
declare const secretAccessKey: string;
declare const region: string;
declare const bucket: string;

aws.config.update({
  secretAccessKey: process.env.AWSSECRET_KEY,
  accessKeyId: process.env.AWSACCESS_KEY,
  region: process.env.AWSREGION,
});

const s3 = new aws.S3({
  /* ... */
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWSBUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req: NextApiRequest, file: any, cb: any) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req: NextApiRequest, file: any, cb: any) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
});

export default upload;
