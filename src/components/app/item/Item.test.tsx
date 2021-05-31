import React from "react";
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { ItemComponent } from "components/app/item/Item";
import {color} from "@storybook/addon-knobs";

describe("Item component", () => {
    test("render Item component", () => {
        const onClick = jest.fn();
        const id = 1;

        render(
            <ItemComponent id={id} onClick={onClick} />
        );

        expect(screen.getByText(1)).toBeInTheDocument();

        userEvent.click(screen.getByText(id));

        expect(onClick).toHaveBeenCalled();

        expect(screen.getByText(id)).toBeVisible();
    });
});