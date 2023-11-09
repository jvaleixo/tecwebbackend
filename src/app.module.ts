import { Module } from '@nestjs/common';
import { CarroController } from './app/controllers/carro.controller';
import { CarroService } from './app/services/carro.service';
import { MensagemController } from './app/controllers/mensagem.controller';
import { MensagemService } from './app/services/mensagem.service';
import { DatabaseModule } from './app/data-source/database.module';
import { UsuarioController } from './app/controllers/usuario.controller';
import { UsuarioService } from './app/services/usuario.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CarroController, MensagemController,UsuarioController],
  providers: [CarroService,MensagemService,UsuarioService],
})
export class AppModule {}
