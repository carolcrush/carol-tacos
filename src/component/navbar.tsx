import { useState } from 'react';
import { createStyles, Navbar, Group, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}));

const data = [
  { link: '', label: 'タコス Tacos'},
  { link: '', label: 'サラダ Salad'},
  { link: '', label: 'コーヒー Coffee'},
  { link: '', label: 'ソフトドリンク Soft Drink'},
];

type Props = {
  goToTacos: () => void
  goToSalad: () => void
  goToCoffee: () => void
  goToJuice: () => void
}
export function NavbarSimple({ goToTacos,goToSalad, goToCoffee,goToJuice}: Props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        if (item.label === 'タコス Tacos') {
          goToTacos()
        }
        if (item.label === 'サラダ Salad') {
          goToSalad()
        }
        if (item.label === 'コーヒー Coffee') {
          goToCoffee()
        }
        if (item.label === 'ソフトドリンク Soft Drink') {
          goToJuice()
        }
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar fixed={true} width={{ sm: 350 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <div style={{fontSize: 30}}>キャロルタコス <br />お茶の水女子大学店</div>
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  );
}