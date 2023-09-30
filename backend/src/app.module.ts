import { Module } from '@nestjs/common';
import { DBConnect } from './database.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    DBConnect,
    NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
