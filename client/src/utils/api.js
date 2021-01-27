// Entries List Function Component
export default async function entriesList() {
    const response = await fetch(`/api/logs`);
    return response.json();
}
// Create New Location Function Component
export async function createNewLocation(data) {
    // States
    const response = await fetch(`/api/logs`,
    {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }
    );
    // Render
    return response.json();
}