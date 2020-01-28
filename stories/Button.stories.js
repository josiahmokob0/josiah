import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import Button from "../src/components/Button";
import "../dist/tailwind.css";

export default {
  title: "Buttons",
  decorators: [withKnobs]
};

const primary = {
  onClick: action('Button Clicked'),
  value: "Primary Button",
  type: "primary",
};
const secondary = {
  onClick: action('Button Clicked'),
  value: "Secondary Button",
  type: "secondary",
}
const danger = {
  onClick: action('Button Clicked'),
  value: "Danger Button",
  type: "danger",
}

const warning = {
  onClick: action('Button Clicked'),
  value: "Warning Button",
  type: "warning",
}

const info = {
  onClick: action('Button Clicked'),
  value: "Info Button",
  type: "info",
}

const success = {
  onClick: action('Button Clicked'),
  value: "Success Button",
  type: "success",
}

const dark = {
  onClick: action('Button Clicked'),
  value: "Dark Button",
  type: "dark",
}

const light = {
  onClick: action('Button Clicked'),
  value: "Light Button",
  type: "light",
}
export const secondaryButton  = () => <Button {...secondary} onClick={action('clicked')} />;
export const primaryButton  = () => <Button {...primary} onClick={action('clicked')} />;
export const dangerButton  = () => <Button {...danger} onClick={action('clicked')} />;
export const warningButton  = () => <Button {...warning} onClick={action('clicked')} />;
export const infoButton = () => <Button {...info} onClick={action('clicked')} />;
export const successButton  = () => <Button {...success} onClick={action('clicked')} />;
export const lightButton  = () => <Button {...light} onClick={action('clicked')} />;
export const darkButton  = () => <Button {...dark} onClick={action('clicked')} />;
