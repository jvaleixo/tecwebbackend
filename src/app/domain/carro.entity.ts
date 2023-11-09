import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Mensagem} from './mensagem.entity';
import { Favorito } from './favorito.entity';

@Entity('carro')
export class Carro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Mensagem, (mensagem) => mensagem.carro)
  mensagens: Mensagem[];

  @OneToMany(() => Favorito, (favorito) => favorito.carro)
  favoritos: Mensagem[];
}
