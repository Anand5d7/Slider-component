import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Slider, { SliderProps } from './Slider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: { type: 'radio', options: ['continuous', 'discreet'] },
    },
    subtype: {
      control: { type: 'radio', options: ['single', 'range'] },
    },
    numberOfSteps: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    handleSize: {
      control: { type: 'radio', options: ['size_24', 'size_32'] },
    },
  },
} as Meta;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const BasicSlider = Template.bind({});
BasicSlider.args = {
  type: 'continuous',
  subtype: 'single',
  handleSize: 'size_24',
  onChange: action('Slider value changed'),
};
