// RESOURCES
import {ISensorData, TSensors} from "src/types/generic";

export function generateSensorMock(sensor: TSensors): ISensorData {
    return {
        id: "",
        name: sensor,
        connected: false,
        value: "",
        unit: "",
    }
}
