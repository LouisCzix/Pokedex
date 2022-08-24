
export const allpokemons = async(limit=30, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error")
    }
}


    