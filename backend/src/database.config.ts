import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note/note.entity';

export const DBConnect = TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'corelabbr',
    entities: [Note],
    synchronize: true,
  });