import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Mensagem } from './mensagem.entity';
import { Favorito } from './favorito.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @OneToMany(() => Mensagem, (mensagem) => mensagem.usuario)
  mensagens: Mensagem[];

  @OneToMany(() => Favorito, (favorito) => favorito.usuario)
  favoritos: Favorito[];

}