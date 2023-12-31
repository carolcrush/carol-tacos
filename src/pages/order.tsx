import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import { Image, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NavbarSimple } from '@/component/navbar';
import { Items } from '@/component/items';
import { Item, CheckItem } from '../types/items';
import styles from '../styles/order.module.css';
import Router from 'next/router';
import useLocalStorageState from 'use-local-storage-state';
import axios from 'axios';

const handler = (path: string) => {
  Router.push(path);
};

export const getJSON = async (): Promise<Item[]> => {
  const url = '/api/items';
  const response = await axios.get(url);
  return response.data.data;
};

export default function Order() {
  const [checkList, setCheckList] =
    useLocalStorageState<CheckItem[]>('checkList');

  const isMobile = useMediaQuery(`(max-width: 576px)`);

  const tacosRef = useRef<HTMLDivElement>(null);
  const saladRef = useRef<HTMLDivElement>(null);
  const coffeeRef = useRef<HTMLDivElement>(null);
  const juiceRef = useRef<HTMLDivElement>(null);

  const [itemList, setItemList] = useState<Item[]>();
  useEffect(() => {
    getJSON().then((res) => setItemList(res));
  }, []);

  const goToTacos = () => {
    if (tacosRef.current) {
      tacosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const goToSalad = () => {
    if (saladRef.current) {
      saladRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const goToCoffee = () => {
    if (coffeeRef.current) {
      coffeeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const goToJuice = () => {
    if (juiceRef.current) {
      juiceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [orderList, setOrderList] = useState<{
    [key: string]: { price: number; count: number };
  }>();

  useEffect(() => {
    if (checkList) {
      setOrderList(
        checkList?.reduce((obj, item) => {
          obj[item.title] = { price: item.price, count: item.count };
          return obj;
        }, {} as any),
      );
    }
  }, [checkList]);

  const counter = (item: string, price: number, count: number) => {
    setOrderList((pre) => {
      if (count === 0 && pre !== undefined) {
        delete pre[item];
        return { ...pre };
      }
      return { ...pre, [item]: { price, count } };
    });
  };
  const orderCountList: number[] = Object.values(orderList ?? {}).map(
    (v: any) => v.count,
  );
  const orderCountNumber = orderCountList.reduce((pre, current) => {
    return Number(pre) + Number(current);
  }, 0);

  const onClick = () => {
    handler('/check');
    const list = Object.entries(orderList ?? {}).map(([key, value]) => {
      const item = itemList?.find((item) => item.title === key);
      return {
        image: item?.image ?? '',
        title: key,
        ...value,
      };
    });
    setCheckList(list);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/tacos-bg.jpeg"
        alt=""
        width={'100%'}
        height={isMobile ? 400 : 500}
        style={{
          marginTop: '-150px',
          marginBottom: '-100px',
          objectFit: 'cover',
          objectPosition: 'center bottom',
          clipPath: 'inset(30% 0 25% 0)',
        }}
      />
      <div>
        <div>
          <NavbarSimple
            goToTacos={goToTacos}
            goToSalad={goToSalad}
            goToCoffee={goToCoffee}
            goToJuice={goToJuice}
          />
        </div>
        <div className={styles.div}>
          <Button
            radius="xl"
            size="sm"
            color="dark"
            onClick={onClick}
            disabled={orderCountNumber === 0}
          >
            <Image
              src="cart.svg"
              alt="cart image"
              style={{
                width: '20px',
                height: '20px',
                transform: 'scaleX(-1)',
              }}
            />
            <div style={{ margin: '10px' }}>Cart・{orderCountNumber}</div>
          </Button>
        </div>
        <div className={styles.content}>
          <Items
            tacosRef={tacosRef}
            saladRef={saladRef}
            coffeeRef={coffeeRef}
            juiceRef={juiceRef}
            counter={counter}
            orderList={orderList}
            itemList={itemList}
          />
        </div>
      </div>
    </>
  );
}
