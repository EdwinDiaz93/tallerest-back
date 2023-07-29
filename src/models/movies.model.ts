import { Table, Model, Column, DataType } from 'sequelize-typescript';


@Table({
    modelName: 'Movie',
    tableName: 'movies'
})
class Movie extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataType.BIGINT,
    })
    id: number;


    @Column(DataType.STRING)
    name: string;

    @Column(DataType.DOUBLE)
    budget: number;

    @Column(DataType.DATE)
    date: Date;

    @Column(DataType.INTEGER)
    duration: number;

}

export default Movie;

