import { Controller, Get } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.interface';

@Controller('notes')
export class NoteController {
    constructor(private readonly noteService: NoteService){}

    @Get()
    findAllNotes(): Note {
        return this.noteService.findAll();
    }
}
