import React from "react";
import { cleanup, render, screen } from '@testing-library/react';
import Area from "./Area"
import { ItemComponent } from "components/app/item/Item";

describe("Area", () => {
    test("renders Area component", () => {
        const id = 1;
        const onClick = jest.fn();

        render(
            <Area>
                <ItemComponent id={id} onClick={onClick}/>
            </Area>
        );

        screen.getByText(1);

        expect(screen.getByText('1')).toBeInTheDocument();
    })
})
