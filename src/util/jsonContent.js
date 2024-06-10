export async function readJsonContent(jsonName) {
    try {
        const response = await fetch(`/website/json/${jsonName}.json`);
        return await response.json();
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
}