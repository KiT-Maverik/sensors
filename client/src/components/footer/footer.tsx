/** @jsxImportSource @emotion/react */

// COMPONENTS
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
                <Typography variant='Text'>Filter: {(filterEnabled) ? 'enabled' : 'disabled'}</Typography>
            </footer>
    );
};
