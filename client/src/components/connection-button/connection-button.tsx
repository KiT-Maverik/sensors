/** @jsxImportSource @emotion/react */

// MODULES
import {useCallback, useMemo} from "react";
import useWebSocket from "react-use-websocket";

//COMPONENTS
import {ReactComponent as SocketMaleIcon} from "src/resources/socket_male.svg";
import {ReactComponent as SocketFemaleIcon} from "src/resources/socket_female.svg";

// STYLE
import * as style from 'src/components/connection-button/connection-button.style';

interface IConnectionButtonProps {
    connected: boolean;
    sensorId: string;
    resetSensor: () => void;
}

/**
 *
 */
export const ConnectionButton = ({connected, sensorId, resetSensor}: IConnectionButtonProps) => {
    const {sendJsonMessage} = useWebSocket('ws://localhost:5001');

    const handleSensorConnect = useCallback(() => {
        sendJsonMessage({command: 'connect', id: sensorId});
    }, [sensorId]);

    const handleSensorDisconnect = useCallback(() => {
        sendJsonMessage({command: 'disconnect', id: sensorId});
        resetSensor();
    }, [sensorId]);

    const renderIcon = useMemo(() => {
        return (
            <button
                css={[style.container, (connected) ? style.connected : style.disconnected]}
                onClick={() => (connected) ? handleSensorDisconnect() : handleSensorConnect()}>
                <SocketFemaleIcon/>
                <SocketMaleIcon/>
            </button>
        )
    }, [handleSensorConnect, handleSensorDisconnect, connected]);

    return renderIcon;
};
