import Options from "../models/options.model"


const optionsSeeder = async () => {
    const options = [
        { name: 'Listar Opciones', path: 'opciones' },
        { name: 'Listar Peliculas', path: 'peliculas' },
    ];
    await Options.bulkCreate(options);
}

export default optionsSeeder;