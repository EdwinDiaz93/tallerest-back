import moviesSeeder from "./movies.seeder"
import optionsSeeder from "./options.seeder"
import { rolSeeder } from "./rol.seeder";
import { userSeeder } from "./user.seeder";

const mainSeeder = async () => {
    await rolSeeder();
    await userSeeder();
    await moviesSeeder();
    await optionsSeeder();
}

export default mainSeeder;