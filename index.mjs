import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sequelize', 'root', 'Anim8ors123!!!', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(
    () => {
        console.log('connected successfully');
    }
    ).catch(()=> {
        console.log(errors);
});

export { sequelize, Sequelize };