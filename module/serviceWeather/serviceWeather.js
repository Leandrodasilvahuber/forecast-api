import { getWeekForecast, getTodayForecast } from "./module.js";

const getForecast = async () => {
    const today = await getTodayForecast();
    
    if (!today) {
        return {
            currentTemp: 0,
            condition: "Sem Dados",
            conditionIcon: "❓",
            waveHeight: 0,
            waveDirection: "N/A",
            waveDirectionIcon: "❓",
            windSpeed: 0,
            windDirection: "N/A",
            windDirectionIcon: "❓",
            forecast: await getWeekForecast(),
        };
    }

    return {
        currentTemp: today.airTemperature,
        condition: today.condition.text,
        conditionIcon: today.condition.icon,
        waveHeight: today.waveHeight,
        waveDirection: today.waveDirection.nome,
        waveDirectionIcon: today.waveDirection.emoji,
        windSpeed: today.windSpeed,
        windDirection: today.windDirection.nome,
        windDirectionIcon: today.windDirection.emoji,
        forecast: await getWeekForecast(),
    };
};

export default { getForecast };
