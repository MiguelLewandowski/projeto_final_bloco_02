import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias/entities/categoria.entity';
import { CategoriaModule } from './categorias/categoria.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
      entities: [Categoria],
      synchronize: true,
    }),  
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}