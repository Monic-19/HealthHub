import { Sequelize } from 'sequelize';
import { sequelize } from  '../Config/sequelize';
import User from './User';

interface Database {
    sequelize: Sequelize;
    User: typeof User;
}

const db: Database = {} as Database;
db.sequelize = sequelize;
db.User = User;

export async function  sync_models(){
    db.sequelize.sync({ force: true, alter: true }).then(() => {
		console.log(` Database Synced...`)
    })
}
export default db;