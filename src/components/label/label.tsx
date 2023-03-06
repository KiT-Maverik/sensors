/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {Typography} from "src/components/typography/typography";
import {ReactComponent as SensorIcon} from "src/resources/sensor.svg";
import {FilterButton} from "src/components/filter-button/filter-button";

// STYLE
import * as style from 'src/components/label/label.style';

/**
 *
 */
export const Label = () => {
    return (
            <div css={style.container}>
                <SensorIcon css={style.sensorIcon}/>
                <Typography css={style.header} variant='Heading 1'>Sensors</Typography>
                <FilterButton/>
            </div>
    );
};
