import { moviesDB } from "../data"
import Movie from "../models/movies.model"



const moviesSeeder = async () => {
    await Movie.bulkCreate(moviesDB);
}

export default moviesSeeder;