import { DataSource } from 'typeorm';
import { Mensagem } from '../domain/mensagem.entity';
import { Carro } from '../domain/carro.entity';
import { Usuario } from '../domain/usuario.entity';

export const repositoryProviders = [
  {
    provide: 'CARRO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Carro),
    inject: ['MYSQL_DATA_SOURCE'],
  },
  {
    provide: 'MENSAGEM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Mensagem),
    inject: ['MYSQL_DATA_SOURCE'],
  },
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuario),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
