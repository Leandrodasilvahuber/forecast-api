import { formatlabelsAndIconsForecast } from '../module/serviceWeather/module.js';

describe('formatlabelsAndIconsForecast', () => {
    test('should return rainy when cloudCover > 10 and precipitation > 0', () => {
        const input = {
            cloudCover: 15,
            precipitation: { noaa: 1 },
            parsedTime: new Date('2023-01-01T12:00:00Z')
        };
        const result = formatlabelsAndIconsForecast(input);
        expect(result.text).toBe('Chuva');
    });

    test('should return cloudy when cloudCover > 10 and precipitation = 0', () => {
        const input = {
            cloudCover: 15,
            precipitation: { noaa: 0 },
            parsedTime: new Date('2023-01-01T12:00:00Z')
        };
        const result = formatlabelsAndIconsForecast(input);
        expect(result.text).toBe('Parcialmente Nublado');
    });

    test('should return sunny when cloudCover <= 10 and precipitation = 0', () => {
        const input = {
            cloudCover: 5,
            precipitation: { noaa: 0 },
            parsedTime: new Date('2023-01-01T12:00:00Z')
        };
        const result = formatlabelsAndIconsForecast(input);
        expect(result.text).toBe('Sol');
    });
});