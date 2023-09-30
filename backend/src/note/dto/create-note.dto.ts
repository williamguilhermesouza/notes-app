export interface CreateNoteDto {
    id: number;
    name: string;
    creation_date: Date;
    favorite: boolean;
    color: number;
    content: string[];
}
