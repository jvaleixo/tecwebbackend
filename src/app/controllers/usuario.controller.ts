import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../domain/usuario.entity';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly UsuarioService: UsuarioService) {}

  @Get()
  getUsuarios(): Promise<Usuario[]> {
    console.log('Requisicao para retornar todos os Usuarios');
    return this.UsuarioService.getAll();
  }

  @Get(':id')
  getUsuario(@Param('id') id: string): Promise<Usuario> {
    console.log(`Requisicao para retornar Usuario ${id}`);
    return this.UsuarioService.get(id);
  }

  @Post()
  createUsuario(@Body() Usuario: Usuario): Promise<Usuario> {
    console.log('Requisicao para criar um Usuario');
    return this.UsuarioService.create(Usuario);
  }

  @Put(':id')
  updateUsuario(@Param('id') id: string, @Body() Usuario: Usuario): Promise<Usuario> {
    console.log(`Requisicao para atualizar Usuario ${id}`);
    return this.UsuarioService.update(id, Usuario);
  }

  @Delete(':id')
  deletePalestra(@Param('id') id: string): Promise<void> {
    console.log(`Requisicao para deletar Usuario ${id}`);
    return this.UsuarioService.delete(id);
  }
}
