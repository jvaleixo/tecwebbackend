import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from '../domain/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly repository: Repository<Usuario>,
  ) {}

  async getAll(): Promise<Usuario[]> {
    return this.repository.find();
  }

  async get(id: string): Promise<Usuario> {
    return this.repository.findOneBy({ id: Number(id) });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    return this.repository.save(usuario);
  }

  async update(id: string, usuario: Usuario): Promise<Usuario> {
    const existingUsuario = await this.repository.findOneBy({
      id: Number(id),
    });
    existingUsuario.nome = usuario.nome;
    existingUsuario.senha = usuario.senha;
    return this.repository.save(existingUsuario);
  }

  async delete(id: string): Promise<void> {
    this.repository.delete({ id: Number(id) });
  }
}
