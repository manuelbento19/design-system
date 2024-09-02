import type {Meta,StoryObj} from '@storybook/react';
import {Button, ButtonProps} from '@dev-ui/react';

const meta: Meta<ButtonProps> = {
    title: "Form/Button",
    component: Button,
    args: {
        children: 'Login',
        variant: "primary"
    },
    argTypes: {
        variant: {
            options: ["primary","secondary"],
            control: "inline-radio"
        }
    }
}

export default meta;

export const Primary:StoryObj<ButtonProps> = {
    
}

export const Secondary:StoryObj<ButtonProps> = {
    args: {
        variant: "secondary"
    }
}