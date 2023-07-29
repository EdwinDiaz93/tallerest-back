import { Table, Model, Column, DataType } from 'sequelize-typescript';


@Table({
    modelName: 'Option',
    tableName: 'options'
})
class Option extends Model {
    @Column({
        primaryKey: true,
        allowNull: false,
        type: DataType.BIGINT,
    })
    id: number;


    @Column(DataType.STRING)
    name: string;
}

export default Option;

