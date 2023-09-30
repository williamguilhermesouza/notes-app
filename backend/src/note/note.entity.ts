import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Note {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    creation_date: Date;

    @Column()
    favorite: boolean;

    @Column()
    color: number;

    @Column('simple-array')
    content: [];
}