import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './note.interface';
import { SingleItemDto } from './dto/single-item.dto';

@Controller('notes')
export class NoteController {
    constructor(private readonly noteService: NoteService){}

    @Get()
    findAllNotes(@Query('color') color?, @Query('favorite') favorite?): Promise<Note[]> {
        return this.noteService.findAll(color, favorite);
    }

    @Get(':id')
    findOneNote(@Param('id') id): Promise<Note> {
        return this.noteService.findOne(id);
    }

    @Post()
    createNote(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.noteService.create(createNoteDto);
    }

    // route to modify an existing Note, or create a new if it
    // don't exist
    @Put(':id')
    updateNote(@Body() updateNoteDto: CreateNoteDto, @Param('id') id): Promise<{}> {
        return this.noteService.update(id, updateNoteDto);
    }

    @Delete(':id')
    deleteNote(@Param('id') id): Promise<{}> {
        return this.noteService.delete(id);
    }

    @Put('item/:id')
    updateSingleItem(@Body() singleItemDto: SingleItemDto, @Param('id') id): Promise<string> {
        return this.noteService.updateSingleItem(id, singleItemDto.item, singleItemDto.itemIndex);
    }
}
