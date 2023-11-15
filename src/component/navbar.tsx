import { useState, useEffect } from 'react';
import { createStyles, Navbar, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: 15,
    color: 'black',
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 600,

    '&:hover': {
      backgroundColor: theme.colors.gray[3],
      color: 'black',
    },
  },

  linkActive: {
    '&, &:hover': {
      textDecoration: 'underline',
    },
  },
}));

const data = [
  { link: '', label: 'タコス Tacos' },
  { link: '', label: 'サラダ Salad' },
  { link: '', label: 'コーヒー Coffee' },
  { link: '', label: 'ソフトドリンク Soft Drink' },
];

type Props = {
  goToTacos: () => void;
  goToSalad: () => void;
  goToCoffee: () => void;
  goToJuice: () => void;
};
export function NavbarSimple({
  goToTacos,
  goToSalad,
  goToCoffee,
  goToJuice,
}: Props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  const [top, setTop] = useState(230);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        if (item.label === 'タコス Tacos') {
          goToTacos();
        }
        if (item.label === 'サラダ Salad') {
          goToSalad();
        }
        if (item.label === 'コーヒー Coffee') {
          goToCoffee();
        }
        if (item.label === 'ソフトドリンク Soft Drink') {
          goToJuice();
        }
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  useEffect(() => {
    const handleScroll = () => {
      const newTop = 230 - document.documentElement.scrollTop;
      if (newTop >= 0) {
        setTop(newTop);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fixed={true} top={{ sm: top }} width={{ sm: 350 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <div style={{ fontSize: 35, fontWeight: 600 }}>
            Carol Tacos <br />
            お茶の水女子大学店
          </div>
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  );
}
