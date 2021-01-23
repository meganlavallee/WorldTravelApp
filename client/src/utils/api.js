// const API_URL = "http://localhost:3000";

export default async function entriesList() {
    const response = await fetch(`/api/logs`);
    return response.json();
}