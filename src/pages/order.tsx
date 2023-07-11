import Head from 'next/head';
import { useRef } from 'react';
import { Image, Button } from '@mantine/core';
import { NavbarSimple } from '@/component/navbar';
import { Items } from '@/component/items';
import styles from '../styles/order.module.css';
import Router from 'next/router';

const handler = (path: string) => {
  Router.push(path);
};

export default function Order() {
  const tacosRef = useRef<HTMLDivElement>(null);
  const saladRef = useRef<HTMLDivElement>(null);
  const coffeeRef = useRef<HTMLDivElement>(null);
  const juiceRef = useRef<HTMLDivElement>(null);
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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            onClick={() => handler('/check')}
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
            <div style={{ margin: '10px' }}>Cart・0</div>
          </Button>
        </div>
        <div className={styles.content}>
          <Items
            tacosRef={tacosRef}
            saladRef={saladRef}
            coffeeRef={coffeeRef}
            juiceRef={juiceRef}
          />
        </div>
      </div>
    </>
  );
}
