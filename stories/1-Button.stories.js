import React from 'react';

import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button
  value="Hello Button"
  onClick={action('clicked')}
/>;

export const Emoji = () => (
  <Button
    onClick={action('clicked')}
    value="😀 😎 👍 💯" />
);

Emoji.story = {
  name: 'with emoji',
};
