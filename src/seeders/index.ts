import moviesSeeder from "./movies.seeder"

const mainSeeder = async () => {
    await moviesSeeder();
}

export default mainSeeder;