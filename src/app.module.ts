import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database';
import { controllers } from './controllers';
import { services } from './services';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    ...controllers,
  ],
  providers: [
    ...services,
  ],
})
export class AppModule { }
