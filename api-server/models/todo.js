module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('todo', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        sort: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        due: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
    return Todo;
}