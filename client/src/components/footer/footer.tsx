/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {Typography} from "src/components/typography/typography";

// RESOURCES
import {useAppSelector} from "src/store/hooks";
import {selectFilterState} from "src/store/filter/filter.slice";
import {selectAvailableSensorsState} from "src/store/filter/available-sensors.slice";

// STYLE
import { style } from 'src/components/footer/footer.style';
import {selectDisplayedSensorsState} from "src/store/filter/displayed-sensors.slice";

/**
 *
 */
export const Footer = () => {
    const availableSensors = useAppSelector(selectAvailableSensorsState);
    const displayedSensors = useAppSelector(selectDisplayedSensorsState);
    const filterEnabled = useAppSelector(selectFilterState);

    return (
            <footer css={style}>
                <Typography variant='Text'>Sensors available: {availableSensors}</Typography>
                <Typography variant='Text'>Filter: {(filterEnabled) ? 'enabled' : 'disabled'}</Typography>
                <Typography variant='Text'>Showing: {displayedSensors}</Typography>
            </footer>
    );
};
