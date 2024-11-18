import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  @ApiOperation({summary: "Проверка валидности авторизации"})
  async login(){
        return this.loginService.checkAuthorization()
  }
}
