import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Carro } from './carro.entity';
import { Usuario } from './usuario.entity';

@Entity('mensagem')
export class Mensagem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.mensagens, {
    eager: true,
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Carro, (carro) => carro.mensagens)
  @JoinColumn({ name: 'carro_id' })
  carro: Carro;
}
