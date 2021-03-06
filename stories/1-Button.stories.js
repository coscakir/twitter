import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Button from "../components/button";
import NavigationButton from "../components/navigation/navigation-button";
import Navigation from "../components/navigation";
import { Home } from "../components/icons";
import TextTitle from "../components/text/text-title";
import ThemeButton from "../components/theme-button";
import Stack from "../components/stack";

export default {
  title: "Buttons",
  decorators: [withKnobs],
};

export const Normal = () => <Button>Tweet</Button>;
export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet Full</ThemeButton>
    <ThemeButton full large>
      Tweet Full Large
    </ThemeButton>
  </Stack>
);

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
);

export const Nav = () => {
  const flat = boolean("Flat", false);
  return <Navigation flat={flat} selectedKey="home" />;
};
