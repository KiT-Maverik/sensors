/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {Typography} from "src/components/typography/typography";

// STYLE
import * as style from 'src/components/status-widget/status-widget.style';

interface IStatusWidgetProps {
    status: 'offline' | 'online';
}

/**
 *
 */
export const StatusWidget = ({status}: IStatusWidgetProps) => {
    return <Typography css={style[status]} variant='Text'>{status}</Typography>
};
