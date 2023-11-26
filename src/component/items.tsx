import {
  createStyles,
  Grid,
  Card,
  Image,
  Text,
  Container,
  rem,
  Select,
} from '@mantine/core';
import { RefObject, useState } from 'react';
import { Item } from '../types/items';

const useStyles = createStyles((theme) => ({
  orderBox: {
    float: 'right',
    position: 'sticky',
    bottom: '20px',
    right: '30px',
    [theme.fn.smallerThan('xs')]: {
      right: '0',
    },
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
    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    whiteSpace: 'pre',
    overflowX: 'auto',
  },

  price: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

const data = Array(11)
  .fill(0)
  .map((_, index) => `${index}`);

type CardItemProps = {
  item: Item;
  counter: (item: string, price: number, count: number) => void;
  orderList: number;
};

function CardItem({ item, counter, orderList }: CardItemProps) {
  const { classes } = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const onChange = (count: string | null) => {
    if (count !== null) {
      counter(item.title, item.price, Number(count));
    }
  };
  return (
    <Card
      key={item.title}
      p="md"
      radius="md"
      className={classes.card}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Image src={item.image} alt="item image" />
      <Text className={classes.title} mt={5}>
        {item.title}
      </Text>
      <Text className={classes.price} mt={3}>
        ¥{item.price}
      </Text>
      <div
        className={classes.orderBox}
        style={{
          visibility: isHovered || orderList > 0 ? 'visible' : 'hidden',
        }}
      >
        <Select
          style={{ width: '60px' }}
          defaultValue={String(orderList)}
          data={data}
          placeholder="0"
          maxDropdownHeight={100}
          size="xs"
          onChange={onChange}
        />
      </div>
    </Card>
  );
}

type CardsProps = {
  itemList: Item[];
  counter: (item: string, price: number, count: number) => void;
  orderList?: { [key: string]: { price: number; count: number } };
};

function Cards({ itemList, counter, orderList }: CardsProps) {
  return (
    <>
      {itemList.map((item, index) => (
        <Grid.Col key={index} span={1}>
          <CardItem
            item={item}
            counter={counter}
            orderList={(orderList && orderList[item.title]?.count) ?? 0}
          />
        </Grid.Col>
      ))}
    </>
  );
}

type Props = {
  tacosRef: RefObject<HTMLDivElement>;
  saladRef: RefObject<HTMLDivElement>;
  coffeeRef: RefObject<HTMLDivElement>;
  juiceRef: RefObject<HTMLDivElement>;
  counter: (item: string, price: number, count: number) => void;
  orderList?: { [key: string]: { price: number; count: number } };
  itemList?: Item[];
};
export function Items({
  tacosRef,
  saladRef,
  coffeeRef,
  juiceRef,
  counter,
  orderList,
  itemList,
}: Props) {
  const { classes } = useStyles();

  if (!itemList) return null;

  return (
    <Container py="xl">
      <Grid columns={2} style={{ width: '100%' }}>
        <Grid.Col span={2}>
          <div ref={tacosRef} className={classes.category}>
            タコス Tacos
          </div>
        </Grid.Col>
        <Cards
          itemList={itemList.filter((item) => item.category === 'tacos')}
          counter={counter}
          orderList={orderList}
        />
        <Grid.Col span={2}>
          <div ref={saladRef} className={classes.category}>
            サラダ Salad
          </div>
        </Grid.Col>

        <Cards
          itemList={itemList.filter((item) => item.category === 'salad')}
          counter={counter}
          orderList={orderList}
        />
        <Grid.Col span={2}>
          <div ref={coffeeRef} className={classes.category}>
            コーヒー Coffee
          </div>
        </Grid.Col>

        <Cards
          itemList={itemList.filter((item) => item.category === 'coffee')}
          counter={counter}
          orderList={orderList}
        />
        <Grid.Col span={2}>
          <div ref={juiceRef} className={classes.category}>
            ソフトドリンク Soft Drink
          </div>
        </Grid.Col>
        <Cards
          itemList={itemList.filter((item) => item.category === 'juice')}
          counter={counter}
          orderList={orderList}
        />
      </Grid>
    </Container>
  );
}
