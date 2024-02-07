export interface Device {
    id: number, 
    name: string,
    mobileNumber: number,
    lastConection: string,
    latitude: number,
    longitude: number,
}

export interface DeviceResponse {
    data: Device[], 
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    }
}
