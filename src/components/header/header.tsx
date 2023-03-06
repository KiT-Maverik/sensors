/** @jsxImportSource @emotion/react */
// TODO: resolve

// STYLE
import * as style from 'src/components/header/header.style';
import {ReactComponent as Logo} from 'src/resources/logo.svg';

/**
 *
 */
export const Header = () => {
    return (
            <header css={style.container}>
                <Logo css={style.logo}/>
            </header>
    );
};
