import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight:'100vh',
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage:
      'url(/tacos.top.jpg)',
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

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    margin: rem(20),
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  button: {
    margin: rem(40),
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },
}));

export function Header() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Carol Tacos
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          美味しさとアツさが融合する至福のタコス体験へようこそ！
          </Text>
        </Container>
        <div className={classes.button}>
          <Button radius="xl" size="lg">
            ORDER NOW
          </Button>
        </div>
      </div>
    </div>
  );
}