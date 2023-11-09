import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Mensagem } from '../domain/mensagem.entity';
import { MensagemService } from '../services/mensagem.service';

@Controller('/mensagens')
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) {}

  @Get(':id')
  getAllByCarro(@Param('id') id: string): Promise<Mensagem[]> {
    console.log(`Requisicao para retornar todas as mensagems de um carro`);
    return this.mensagemService.getAllByCarro(id);
  }

  @Post()
  registrarMensagem(@Body() mensagem: Mensagem): Promise<Mensagem> {
    console.log(`Requisicao para registrar mensagem no carro ${mensagem}`);
    return this.mensagemService.registrarMensagem(mensagem);
  }
}
