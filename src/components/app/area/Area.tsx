import React from 'react';

export default ({ children }: {
    children: Array<JSX.Element> | JSX.Element } = { children: [] }): JSX.Element => {
        return <div className="area">{children}</div>
    }