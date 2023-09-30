import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private noteRepository: Repository<Note>,
    ) {}

    async findAll(): Promise<Note[]> {
        // must be sorted by favorite
        // can implement filters of creation date and color here

        return await this.noteRepository.find();
    }

    async findOne(id: number): Promise<Note> {
        return await this.noteRepository.findOne({where: {id}});
    }
    async create(note: Note): Promise<Note> {
        return await this.noteRepository.save(note);
    }

    async update(id: number, note: Note): Promise<{}> {
        return await this.noteRepository.update(id, note);
    }

    async delete(id: number): Promise<{}> {
        return await this.noteRepository.delete(id);
    }

    async updateSingleItem(id: number, item: string, itemIndex: number): Promise<string> {
        let note = await this.noteRepository.findOne({where: {id}});
        note.content[itemIndex] = item;
        await this.noteRepository.update(id, note);
        return item;
    }
}
