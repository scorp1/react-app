import React from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ItemComponent, ItemProps } from "./Item";

export default {
    title: "ItemComponent",
    component: ItemComponent,
    argTypes: {
        color: {
            control: { type: "color" },
            defaultValue: '#8a2be2'
        },
        width: {
            control: { type: "number" },
            defaultValue: 30
        },
        height: {
            control: { type: "number" },
            defaultValue: 30
        },
        onClick: {
            action: 'clicked'
        },
        id: {
            control: { type: "number" },
            defaultValue: 1
        }


    }
}

export const ItemComponentStory: Story<ItemProps> = (args) => (
  <ItemComponent {...args}/>
);
