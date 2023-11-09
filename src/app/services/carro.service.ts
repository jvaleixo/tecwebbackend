import {Inject, Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Carro } from '../domain/carro.entity';

@Injectable()
export class CarroService {
  constructor(
    @Inject('CARRO_REPOSITORY')
    private readonly repository: Repository<Carro>,
  ) {}

  async getAll(): Promise<Carro[]> {
    return this.repository.find();
  }

  async get(id: string): Promise<Carro> {
    return this.repository.findOneBy({ id: Number(id) });
  }

  async create(carro: Carro): Promise<Carro> {
    return this.repository.save(carro);
  }

  async update(id: string, carro: Carro): Promise<Carro> {
    const existingCarro = await this.repository.findOneBy({
      id: Number(id),
    });
    existingCarro.nome = carro.nome;
    existingCarro.descricao = carro.descricao;
    return this.repository.save(existingCarro);
  }

  async delete(id: string): Promise<void> {
    this.repository.delete({ id: Number(id) });
  }
}
