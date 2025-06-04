import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enums';
import { Roles_key } from './roles.decorator';
import { stringify } from 'querystring';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor (private reflector: Reflector){}
  canActivate(
  context: ExecutionContext,
): boolean | Promise<boolean> | Observable<boolean> {
  const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
    Roles_key, [
      context.getHandler(),
      context.getClass()
    ]
  );
  if (!requiredRoles) return true;
  const request = context.switchToHttp().getRequest();
  const userRole = request.headers['x-user-role'] as Role;

  return requiredRoles.includes(userRole);
}
}