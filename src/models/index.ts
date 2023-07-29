// DB Config
import DB from '../db';

// Models
import Movie from './movies.model';
import Option from './options.model';

// Assign Models

DB.addModels([
    Movie,
    Option,
]);

// Export DB
export default DB;