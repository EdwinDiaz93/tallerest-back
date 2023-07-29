// DB Config
import DB from '../db';

// Models
import Movie from './movies.model';
import Option from './options.model';
import User from './user.model';
import Rol from './rol.model';
import UserRol from './user-rol.model';

// Assign Models

DB.addModels([
    User,
    Rol,
    Movie,
    Option,
    UserRol,
]);

// Export DB
export default DB;