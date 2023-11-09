import {JoinColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Carro } from './carro.entity';
import { Usuario } from './usuario.entity'

@Entity('favorito')
export class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.mensagens, {
    eager: true,
  })

  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Carro, (carro) => carro.favoritos)
  @JoinColumn({ name: 'carro_id' })
  carro: Carro;

  
}