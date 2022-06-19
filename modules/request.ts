import axios from "axios";
const serverSideBaseURL = "http://localhost:3000/api";
const clientSideBaseURL = "http://localhost:3000/api";
 
const requestInstance = axios.create({
	baseURL: serverSideBaseURL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	  },
});
 
const clientRequestInstance = axios.create({
	baseURL: clientSideBaseURL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	  },
});
 
export const getRequestInstance = (isServerSide: boolean) => {
	if (isServerSide) {
		return requestInstance;
	}
	return clientRequestInstance;
};