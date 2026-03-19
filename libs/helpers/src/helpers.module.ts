import { Module } from '@nestjs/common';
import { AuthHelper } from './auth.helper';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './response.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    AuthHelper
  ],
  exports: [
    AuthHelper
  ],
})
export class HelpersModule { }
