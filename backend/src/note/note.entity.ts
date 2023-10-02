import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
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
    content: string[];
}