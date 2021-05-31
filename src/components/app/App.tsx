import * as React from "react";
import Area from 'components/app/area/Area';
import { ItemComponent } from 'components/app/item/Item';

export default (): JSX.Element => {
    const [ids] = React.useState<Array<number>>([1,2,3,4]);

    const style = {
        color: '#fff8DC',
        width: 30,
        height: 30
    }

    return (
        <Area>
            {ids.map((id) => (
                <ItemComponent id={id} onClick={(id) => console.log(id)}
                               color={style.color} width={style.width} height={style.height}/>
            ))}
        </Area>
    );
}