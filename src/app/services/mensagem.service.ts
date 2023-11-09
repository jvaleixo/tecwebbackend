import { Inject, Injectable } from '@nestjs/common';
import { Mensagem } from '../domain/mensagem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MensagemService {
  constructor(
    @Inject('MENSAGEM_REPOSITORY')
    private readonly repository: Repository<Mensagem>,
  ) {}

  async registrarMensagem(mensagem: Mensagem): Promise<Mensagem> {
    return this.repository.save(mensagem);
  }

  async getAllByCarro(id: string): Promise<Mensagem[]> {
    return null;
  }
}
