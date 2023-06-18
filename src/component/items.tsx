import { createStyles, SimpleGrid, Card, Image, Text, Container, rem } from '@mantine/core';
import { RefObject } from 'react'
import { tacosList } from '../mock/tacos'
import { saladList } from '../mock/salad'
import { coffeeList } from '../mock/coffee'
import { juiceList } from '../mock/juice'

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  category: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginLeft: rem(20),
    marginBottom: -20,
    fontSize: 30,
    fontWeight: 600,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  price: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

type Props = {
  tacosRef: RefObject<HTMLDivElement>
  saladRef: RefObject<HTMLDivElement>
  coffeeRef: RefObject<HTMLDivElement>
  juiceRef: RefObject<HTMLDivElement>
}
export function Items({ tacosRef,saladRef,coffeeRef,juiceRef, }: Props) {
  const { classes } = useStyles();

  const tacosCards = tacosList.map((tacos) => (
    <Card key={tacos.title} p="md" radius="md" component="a" href="#" className={classes.card}>
        <Image src={tacos.image} />
      <Text className={classes.title} mt={5}>
        {tacos.title}
      </Text>
      <Text className={classes.price} mt={3}>
        {tacos.price}
      </Text>
    </Card>
  ));

  const saladCards = saladList.map((salad) => (
    <Card key={salad.title} p="md" radius="md" component="a" href="#" className={classes.card}>
        <Image src={salad.image} />
      <Text className={classes.title} mt={5}>
        {salad.title}
      </Text>
      <Text className={classes.price} mt={3}>
        {salad.price}
      </Text>
    </Card>
  ));

  const coffeeCards = coffeeList.map((coffee) => (
    <Card key={coffee.title} p="md" radius="md" component="a" href="#" className={classes.card}>
        <Image src={coffee.image} />
      <Text className={classes.title} mt={5}>
        {coffee.title}
      </Text>
      <Text className={classes.price} mt={3}>
        {coffee.price}
      </Text>
    </Card>
  ));

  const juiceCards = juiceList.map((juice) => (
    <Card key={juice.title} p="md" radius="md" component="a" href="#" className={classes.card}>
        <Image src={juice.image} />
      <Text className={classes.title} mt={5}>
        {juice.title}
      </Text>
      <Text className={classes.price} mt={3}>
        {juice.price}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div ref={tacosRef} className={classes.category}>
         タコス Tacos
        </div>
        <div />
        {tacosCards}
        <div ref={saladRef} className={classes.category}>
         サラダ Salad
        </div>
        <div />
        {saladCards}
        <div ref={coffeeRef} className={classes.category}>
         コーヒー Coffee
        </div>
        <div />
        {coffeeCards}
        <div ref={juiceRef} className={classes.category}>
        ソフトドリンク Soft Drink
        </div>
        <div />
        {juiceCards}
      </SimpleGrid>
    </Container>
  );
}