/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {Typography} from "src/components/typography/typography";

// RESOURCES
import {useAppSelector} from "src/store/hooks";
import {selectFilterState} from "src/store/filter/filter.slice";

// STYLE
import { style } from 'src/components/footer/footer.style';

/**
 *
 */
export const Footer = () => {
    const filterEnabled = useAppSelector(selectFilterState);

    return (
            <footer css={style}>
                <Typography variant='Text'>Sensors available: 6</Typography>
                <Typography variant='Text'>Filter: {(filterEnabled) ? 'enabled' : 'disabled'}</Typography>
                <Typography variant='Text'>Showing: 6</Typography>
            </footer>
    );
};
