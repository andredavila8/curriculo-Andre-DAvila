import { RecadosRepository } from "../database/repositories/RecadosRepository";
import { RecadosDTO } from "../DTO/RecadosDTO";

export class RecadosService {
    async find() {
        const repository = new RecadosRepository();
        const recados = await repository.find()

        return recados
    }

    async findOne(id: number) {
        const repository = new RecadosRepository();
        const recados = await repository.findOne(id)

        return recados
    }

    async create(recadosDTO: RecadosDTO) {
        const repository = new RecadosRepository();
        const recados = await repository.create(recadosDTO)

        return recados
    }

    async update(recadosDTO: RecadosDTO) {
        const repository = new RecadosRepository ();
        const recados = await repository.update(recadosDTO)

        return recados
    }

    async delete(id: number) {
        const repository = new RecadosRepository();
        const recados = await repository.delete(id)

        return recados
    }
}