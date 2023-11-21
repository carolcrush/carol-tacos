import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  rem,
} from '@mantine/core';
import Router from 'next/router';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: 'url(/tacos-bg.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    margin: rem(20),
    color: theme.colors.gray[0],
    textAlign: 'center',
  },

  button: {
    margin: rem(40),
    textAlign: 'center',
  },
}));

export function Header() {
  const { classes } = useStyles();

  const handler = (path: string) => {
    Router.push(path);
  };

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Carol Tacos</Title>

        <Container>
          <Text size="lg" className={classes.description}>
            美味しさとアツさが融合する至福のタコス体験へようこそ！
          </Text>
        </Container>
        <div className={classes.button}>
          <Button radius="xl" size="lg" onClick={() => handler('/order')}>
            ORDER NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
