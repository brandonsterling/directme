import { AppShell, createStyles, Header } from "@mantine/core";
import React from "react";
import { MainNav } from "./MainNav";

const useStyles = createStyles((theme) => ({
  main: {
    backgroundColor: theme.white,
  },
}));

function Layout({ children }) {
  const { classes } = useStyles();
  return (
    <AppShell
      classNames={{ main: classes.main }}
      padding="md"
      navbar={
        <MainNav width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </MainNav>
      }
    >
      {children}
    </AppShell>
  );
}

export default Layout;
