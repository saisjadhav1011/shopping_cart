import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database';
import { controllers } from './controllers';
import { services } from './services';
import { HelpersModule } from '@app/helpers';

@Module({
  imports: [
    DatabaseModule,
    HelpersModule,
  ],
  controllers: [
    ...controllers,
  ],
  providers: [
    ...services,
  ],
})
export class AppModule { }
