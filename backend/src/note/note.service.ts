import { Injectable } from '@nestjs/common';
import { Note } from './note.interface';

@Injectable()
export class NoteService {

    async findAll(): Promise<Note> {
        return {
            id: 1,
            name: 'Find All',
            favorite: true,
            color: 1,
            content: [],   
        };
    }

    async findOne(id: number): Promise<Note> {
        return {
            id: id,
            name: 'Find One',
            favorite: true,
            color: 1,
            content: [],   
        };
    }
    async create(note: Note): Promise<Note> {
        return note;
    }

    async update(id: number, note: Note): Promise<{}> {
        note.id = id;
        return {
            note,  
        };
    }

    async delete(id: number): Promise<{}> {
        return {
            id: id,
            name: 'delete',
            favorite: true,
            color: 1,
            content: [],   
        };
    }
}
