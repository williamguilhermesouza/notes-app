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

    async findAll(colorFilter?: number, favoriteFilter?: boolean): Promise<Note[]> {
        
        let favorite, color;
        favoriteFilter ? favorite = true : favorite = undefined;
        colorFilter ? color = colorFilter : color = undefined;
        
        return await this.noteRepository.find({
            order: {favorite: "DESC"},
            where: {favorite: favoriteFilter, color: colorFilter},
        });
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
