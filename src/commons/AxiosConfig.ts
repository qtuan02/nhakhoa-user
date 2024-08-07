import axios from "axios";
import { appConfig } from "./AppConfig";

const axiosClient = axios.create({
	baseURL: appConfig.API_LOCAL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

export default axiosClient;
