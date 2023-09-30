import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private noteRepository: Repository<Note>,
    ) {}

    async findAll(): Promise<Note> {
        // must be sorted by favorite
        // can implement filters of creation date and color here
        return {
            id: 1,
            name: 'Find All',
            creation_date: new Date(Date.now()),
            favorite: true,
            color: 1,
            content: [],   
        };
    }

    async findOne(id: number): Promise<Note> {
        return {
            id: id,
            name: 'Find One',
            creation_date: new Date(Date.now()),
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
            creation_date: new Date(Date.now()),
            favorite: true,
            color: 1,
            content: [],   
        };
    }

    async updateSingleItem(item: string): Promise<string> {
        return item;
    }
}
