import React from 'react'
import { FC } from 'react'
import styled from "styled-components"

export interface ItemProps {
    id: number;
    onClick?: (id: number) => void;
    color?: string;
    width?: string;
    height?: string;
}

const ItemStyled = styled.div`
    background: ${props => props.color ? props.color : '#fff'};
    border: 1px solid #000000;
    width: ${props => props.width ? props.width : 30 }px;
    height: ${props => props.height ? props.height : 30 }px;
    display: inline-block;
    text-align: center
    `;

export const ItemComponent: FC<ItemProps> = ({
    id, onClick, color, width, height}) => (
        <ItemStyled color={color} width={width} height={height} onClick={() => onClick(id)}>
            {id}
        </ItemStyled>
);
