const url = () => `https://5bcce576cf2e850013874767.mockapi.io/task/categories`

export async function getStoreData() {
    try {
        const result = await fetch(url());
        if (result.ok) {
            const data = await result.json();
            return data;
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'Something went wrong'}
    }
}