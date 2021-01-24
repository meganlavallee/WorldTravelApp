// const API_URL = "http://localhost:3000";

export default async function entriesList() {
    const response = await fetch(`/api/logs`);
    return response.json();
}
export async function createNewLocation(data) {
    const response = await fetch(`/api/logs`,
    {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }
    );
    return response.json();
}