import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import Image from 'next/image';

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

interface itemProps {
  _id: string;
  title: string;
  thumb: string;
  authorName: string;
  authorAvatar: string;
  views: number;
  updatedAt: string;
}

interface VideoCardProps {
  item: itemProps;
}

export function VideoCard({ item }: VideoCardProps) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Image
        width={500}
        height={300}
        layout="intrinsic"
        src={item.thumb}
        alt={item.title}
        className={classes.img}
        onClick={() =>
          router.push({
            pathname: '/video/[id]',
            query: { id: item._id },
          })
        }
      />
      <Box display="flex" mt={1}>
        <Box mr={2}>
          <Avatar alt={item.authorName} src={item.authorAvatar}>
            AV
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} visualizações • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
