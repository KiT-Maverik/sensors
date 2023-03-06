/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {ReactComponent as EnabledIcon} from "src/resources/filter_enabled.svg";
import {ReactComponent as DisabledIcon} from "src/resources/filter_disabled.svg";

// STYLE
import {style} from 'src/components/connection-button/connection-button.style';
import {useCallback, useMemo} from "react";

interface IConnectionButtonProps {
    connected: boolean;
    sensorId: string;
}

/**
 *
 */
export const ConnectionButton = ({connected, sensorId}: IConnectionButtonProps) => {

    const handleSensorConnect = useCallback(() => {
        console.log('Sensor connected');
    }, []);

    const handleSensorDisconnect = useCallback(() => {
        console.log('Sensor disconnected');
    }, []);

    const renderIcon = useMemo(() => {
        return (
            <button css={style} onClick={(connected) ? handleSensorDisconnect : handleSensorConnect}>
                {(connected) ? <EnabledIcon/> : <DisabledIcon/>}
            </button>
        )
    }, [handleSensorConnect]);

    return renderIcon;
};
