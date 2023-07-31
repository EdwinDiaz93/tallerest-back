import Options from "../models/options.model"


const optionsSeeder = async () => {
    const options = [
        { name: 'Listar Opciones', path: 'opciones' },
        { name: 'Listar Peliculas', path: 'peliculas' },
        { name: 'Rentar Peliculas', path: 'rentar' },
    ];
    await Options.bulkCreate(options);
}

export default optionsSeeder;