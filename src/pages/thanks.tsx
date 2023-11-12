import { Overlay, createStyles, rem } from '@mantine/core';
import Image from 'next/image';

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
}));

export default function ThanksPage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            fontSize: '3em',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#6699FF',
          }}
        >
          注文完了しました！
        </div>
        <Image src="/thanks.gif" alt="" width={500} height={500} />
      </div>
    </div>
  );
}
