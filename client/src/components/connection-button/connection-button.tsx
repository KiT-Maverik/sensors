/** @jsxImportSource @emotion/react */

// MODULES
import {useCallback, useMemo, useState} from "react";

//COMPONENTS
import {ReactComponent as SocketMaleIcon} from "src/resources/socket_male.svg";
import {ReactComponent as SocketFemaleIcon} from "src/resources/socket_female.svg";

// STYLE
import * as style from 'src/components/connection-button/connection-button.style';

interface IConnectionButtonProps {
    connected: boolean;
    sensorId: string;
}

/**
 *
 */
export const ConnectionButton = ({connected, sensorId}: IConnectionButtonProps) => {
    const [isConnected, setConnected] = useState(false);

    const handleSensorConnect = useCallback(() => {
        setConnected(true);
        console.log('Sensor connected');
    }, []);

    const handleSensorDisconnect = useCallback(() => {
        setConnected(false);
        console.log('Sensor disconnected');
    }, []);

    const renderIcon = useMemo(() => {
        return (
            <button
                css={[style.container, (isConnected) ? style.connected : style.disconnected]}
                onClick={(isConnected) ? handleSensorDisconnect : handleSensorConnect}>
                <SocketFemaleIcon/>
                <SocketMaleIcon/>
            </button>
        )
    }, [handleSensorConnect, isConnected]);

    return renderIcon;
};
