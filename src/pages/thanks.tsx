import { Title, Overlay, createStyles, rem, Button } from '@mantine/core';
import Image from 'next/image';
import Router from 'next/router';

const handler = (path: string) => {
  Router.push(path);
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: 'url(/tacos-bg.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    color: 'pink',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },
}));

export default function ThanksPage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>注文完了しました！</Title>
        <div>
          <Image src="/thankYou.gif" alt="" width={498} height={422} />
        </div>
        <Button
          radius="xl"
          size="sm"
          style={{ marginTop: '50px', backgroundColor: 'pink', color: 'gray' }}
          onClick={() => handler('/')}
        >
          <div style={{ margin: '10px' }}>Topページに戻る</div>
        </Button>
      </div>
    </div>
  );
}
