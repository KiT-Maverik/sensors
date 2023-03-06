/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {Typography} from "src/components/typography/typography";

// STYLE
import { style } from 'src/components/footer/footer.style';

/**
 *
 */
export const Footer = () => {
    return (
            <footer css={style}>
                <Typography variant='Text'>Sensors available: 6</Typography>
                <Typography variant='Text'>Showing: 6</Typography>
            </footer>
    );
};
