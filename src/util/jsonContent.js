import {getBaseUrl} from "./utils";

export async function readJsonContent(jsonName) {
    const url = `${getBaseUrl()}json/${jsonName}.json`
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
}