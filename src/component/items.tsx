import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  rem,
  Select,
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
  orderNumber: {
    float: 'right',
    position: 'sticky',
    bottom: '20px',
    right: '30px',
  },

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

const data = Array(11)
  .fill(0)
  .map((_, index) => `${index}`);

type CardProps = {
  itemList: Item[];
  counter: (item: string, value: number) => void;
};

function Cards({ itemList, counter }: CardProps) {
  const { classes } = useStyles();
  const onChange = (item: string) => (value: string | null) => {
    if (value !== null) {
      counter(item, Number(value));
    }
  };

  return (
    <>
      {itemList.map((item) => (
        <Card key={item.title} p="md" radius="md" className={classes.card}>
          <Image src={item.image} alt="item image" />
          <Text className={classes.title} mt={5}>
            {item.title}
          </Text>
          <Text className={classes.price} mt={3}>
            {item.price}
          </Text>
          <div className={classes.orderNumber}>
            <Select
              style={{ width: '60px' }}
              data={data}
              placeholder="0"
              maxDropdownHeight={100}
              size="xs"
              onChange={onChange(item.title)}
            />
          </div>
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
  counter: (item: string, value: number) => void;
};
export function Items({
  tacosRef,
  saladRef,
  coffeeRef,
  juiceRef,
  counter,
}: Props) {
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
          counter={counter}
        />
        <div ref={saladRef} className={classes.category}>
          サラダ Salad
        </div>
        <div />
        <Cards
          itemList={itemList.filter((item) => item.category === 'salad')}
          counter={counter}
        />
        <div ref={coffeeRef} className={classes.category}>
          コーヒー Coffee
        </div>
        <div />
        <Cards
          itemList={itemList.filter((item) => item.category === 'coffee')}
          counter={counter}
        />
        <div ref={juiceRef} className={classes.category}>
          ソフトドリンク Soft Drink
        </div>
        <div />
        <Cards
          itemList={itemList.filter((item) => item.category === 'juice')}
          counter={counter}
        />
      </SimpleGrid>
    </Container>
  );
}
