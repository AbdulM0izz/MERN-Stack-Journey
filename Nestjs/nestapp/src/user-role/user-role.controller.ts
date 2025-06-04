import { Controller, Get, UseGuards } from '@nestjs/common';
import { RoleGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/guards/role/roles.decorator';
import { Role } from 'src/guards/role/roles.enums';


@Controller('user-role')
export class UserRoleController {
  @Get('admin-data')
  @Roles(Role.Admin) // Roles decorator should come before UseGuards
  @UseGuards(RoleGuard)
  getAdminData() {
    return { message: 'only admin can access' };
  }

  @Get('user-data')
  getUserdata() {
    return { message: 'anyone can access' };
  }
}