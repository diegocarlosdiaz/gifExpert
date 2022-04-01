export const GetGif = async (category) => {
    try {
        const apiKey = "3I1QKWRqOlR7I0uHoFfyu8exDMUC8WBE";

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10&offset=0&rating=g&lang=en`
        const response = await fetch(url)

        const { data } = await response.json()

        const gif = data.map(img => (

            {
            id: img.id ,
            title: img.title ,
            url: img.images.downsized_medium.url
            }

        ))

        return gif


    }


    catch (error) {
        console.log(error);
        return[]
    }
}