import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('inventory_portal', 'postgres', 'AMe4kNLwCJdNCo0hWdn6W1tdcSykixoWfCALXaeVbpnD2J7z1OLIEjruUyqq6xmr', {
    host: '82.112.236.232',
    port:'5432',
    dialect: 'postgres'
  });

const connection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // This will create/update tables based on your models
        await sequelize.sync({ force: true }); // Be careful with force:true in production!
        console.log('Database synchronized');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export {connection,sequelize};