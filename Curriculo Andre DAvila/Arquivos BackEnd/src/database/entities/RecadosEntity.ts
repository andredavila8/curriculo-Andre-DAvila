import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Recados extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    descricao?: string;

    @Column()
    detalhes?: string;

    constructor(descricao: string, detalhes: string) {
        super()
        this.descricao = descricao
        this.detalhes = detalhes
    }
}