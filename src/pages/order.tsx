import Head from 'next/head'
import { useRef } from 'react';
import { NavbarSimple } from '@/component/navbar'
import { Items } from '@/component/items'
import styles from '../styles/order.module.css'

export default function Order() {
  const tacosRef = useRef<HTMLDivElement>(null);
  const saladRef = useRef<HTMLDivElement>(null);
  const coffeeRef = useRef<HTMLDivElement>(null);
  const juiceRef = useRef<HTMLDivElement>(null);
  const goToTacos = () => {
    if (tacosRef.current) {
      tacosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const goToSalad = () => {
    if (saladRef.current) {
      saladRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const goToCoffee = () => {
    if (coffeeRef.current) {
      coffeeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const goToJuice = () => {
    if (juiceRef.current) {
      juiceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.sidebar}>
          <NavbarSimple goToTacos={goToTacos} goToSalad={goToSalad} goToCoffee={goToCoffee} goToJuice={goToJuice}/>
        </div>
        <div>
          <Items tacosRef={tacosRef} saladRef={saladRef} coffeeRef={coffeeRef} juiceRef={juiceRef}/>
        </div>
      </div>
    </>
  )
}