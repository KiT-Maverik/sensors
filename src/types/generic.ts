export type TSensors = 'Humidity' | 'PM2.5' | 'PM10' | 'Temperature' | 'Pressure' | 'Wind';

export interface ISensorData {
    id: string;
    name: TSensors;
    connected: boolean;
    unit: string;
    value: string
}
