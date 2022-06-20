import axios from "axios";
const serverSideBaseURL = process.env.NEXT_PUBLIC_TEST;
const clientSideBaseURL = process.env.NEXT_PUBLIC_TEST;
 
const requestInstance = axios.create({
	baseURL: serverSideBaseURL,
	headers: {
		'Content-Type': 'application/json',
	  },
});
 
const clientRequestInstance = axios.create({
	baseURL: clientSideBaseURL,
	headers: {
		'Content-Type': 'application/json',
	  },
});
 
export const getRequestInstance = (isServerSide: boolean) => {
	if (isServerSide) {
		return requestInstance;
	}
	return clientRequestInstance;
};