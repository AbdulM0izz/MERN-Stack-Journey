import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'supertest';

@Catch()
export class ExecptionFiltersFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Respo
    const request = ctx.getRequest();
  }
}
