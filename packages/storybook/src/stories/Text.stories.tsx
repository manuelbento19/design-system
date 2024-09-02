import type {Meta,StoryObj} from '@storybook/react';
import {Text,TextProps} from '@dev-ui/react';

const meta: Meta<TextProps> = {
    title: "Form/Text",
    component: Text,
    args: {
        children: "Manuel Bento",
        size: "xs",
    },
    argTypes: {
        size: {
            options: ["xs","sm","md","lg"],
            control: "select"
        }
    }
}

export default meta;

export const Xs:StoryObj<TextProps> = {}

export const Sm:StoryObj<TextProps> = {
   args: {
    size: "sm"
   } 
}
export const Md:StoryObj<TextProps> = {
    args: {
     size: "md"
    } 
}
export const Lg:StoryObj<TextProps> = {
    args: {
     size: "lg"
    } 
}