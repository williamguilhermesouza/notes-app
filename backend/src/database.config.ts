import { TypeOrmModule } from '@nestjs/typeorm';

export const DBConnect = TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'corelabbr',
    entities: [],
    synchronize: true,
  });