import { Injectable } from '@nestjs/common';
import { Note } from './note.interface';

@Injectable()
export class NoteService {
    findAll(): Note {
        return {
            id: 1,
            name: 'First note',
            favorite: true,
            color: 1,
            content: [],   
        };
    }
}
