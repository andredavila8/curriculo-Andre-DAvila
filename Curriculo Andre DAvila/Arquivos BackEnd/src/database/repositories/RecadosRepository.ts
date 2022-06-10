import { RecadosDTO } from "../../DTO/RecadosDTO";
import { Recados } from "../entities/RecadosEntity";;

export class RecadosRepository {
    async find() {
        const recados = await Recados.find()

        return recados
    }

    async findOne(id: number) {
        const recados = await Recados.findOne(id)

        return recados
    }

    async create(recadosDTO: RecadosDTO) {
        const recados = await new Recados(recadosDTO.descricao, recadosDTO.detalhes)
        recados.save()

        return recados
    }

    async update(recadosDTO: RecadosDTO) {
        const recados = await Recados.findOne(recadosDTO.id)

        if (recados) {
            recados.descricao = recadosDTO.descricao
            recados.detalhes = recadosDTO.detalhes
            await recados.save()
        }

        return recados
    }

    async delete (id: number) {
        await Recados.delete(id)
    }
}