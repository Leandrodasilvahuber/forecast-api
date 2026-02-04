import { serviceWeather, express, cors } from "./config.js";

const ws = express();
ws.use(express.json());
ws.use(cors());

ws.listen(process.env.ENV_API_PORT, () => {
    console.log(`Connected successfully on port ${process.env.ENV_API_PORT}`);
});

ws.get("/forecast", async (req, res) => {
    try {
        let forecast = await serviceWeather.getForecast();
        res.status(200).json({ status: "ok", forecast });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Failed to fetch forecast" });
    }
});

// Global error handler
ws.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
});
