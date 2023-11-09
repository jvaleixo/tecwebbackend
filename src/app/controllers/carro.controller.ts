import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarroService } from '../services/carro.service';
import {Carro} from "../domain/carro.entity";

@Controller('/Carros')
export class CarroController {
  constructor(private readonly CarroService: CarroService) {}

  @Get()
  getCarros(): Promise<Carro[]> {
    console.log('Requisicao para retornar todos os Carros');
    return this.CarroService.getAll();
  }

  @Get(':id')
  getCarro(@Param('id') id: string): Promise<Carro> {
    console.log(`Requisicao para retornar Carro ${id}`);
    return this.CarroService.get(id);
  }

  @Post()
  createCarro(@Body() Carro: Carro): Promise<Carro> {
    console.log('Requisicao para criar um Carro');
    return this.CarroService.create(Carro);
  }

  @Put(':id')
  updateCarro(
    @Param('id') id: string,
    @Body() Carro: Carro,
  ): Promise<Carro> {
    return this.CarroService.update(id, Carro);
  }

  @Delete(':id')
  deleteCarro(@Param('id') id: string): Promise<void> {
    console.log(`Requisicao para deletar Carro ${id}`);
    return this.CarroService.delete(id);
  }
}
