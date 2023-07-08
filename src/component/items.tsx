import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  rem,
} from '@mantine/core';
import { RefObject, useEffect, useState } from 'react';
import { Item } from '../types/items';
import axios from 'axios';

// GETリクエスト
export const getJSON = async (): Promise<Item[]> => {
  const url = '/api/items';
  const response = await axios.get(url);
  return response.data.data;
};

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

type CardProps = {
  itemList: Item[];
};
function Cards({ itemList }: CardProps) {
  const { classes } = useStyles();
  return (
    <>
      {itemList.map((item) => (
        <Card
          key={item.title}
          p="md"
          radius="md"
          component="a"
          href="#"
          className={classes.card}
        >
          <Image src={item.image} />
          <Text className={classes.title} mt={5}>
            {item.title}
          </Text>
          <Text className={classes.price} mt={3}>
            {item.price}
          </Text>
        </Card>
      ))}
    </>
  );
}

type Props = {
  tacosRef: RefObject<HTMLDivElement>;
  saladRef: RefObject<HTMLDivElement>;
  coffeeRef: RefObject<HTMLDivElement>;
  juiceRef: RefObject<HTMLDivElement>;
};
export function Items({ tacosRef, saladRef, coffeeRef, juiceRef }: Props) {
  const [itemList, setItemList] = useState<Item[]>();
  const { classes } = useStyles();
  useEffect(() => {
    getJSON().then((res) => setItemList(res));
  }, []);

  if (!itemList) return null;

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div ref={tacosRef} className={classes.category}>
          タコス Tacos
        </div>
        <div />
        <Cards
          itemList={itemList.filter((item) => item.category === 'tacos')}
        />
        <div ref={saladRef} className={classes.category}>
          サラダ Salad
        </div>
        <div />
        <Cards
          itemList={itemList.filter((item) => item.category === 'salad')}
        />
        <div ref={coffeeRef} className={classes.category}>
          コーヒー Coffee
        </div>
        <div />
        <Cards
          itemList={itemList.filter((item) => item.category === 'coffee')}
        />
        <div ref={juiceRef} className={classes.category}>
          ソフトドリンク Soft Drink
        </div>
        <div />
        <Cards
          itemList={itemList.filter((item) => item.category === 'juice')}
        />
      </SimpleGrid>
    </Container>
  );
}
