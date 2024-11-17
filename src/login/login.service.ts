import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
    checkAuthorization(){
        return "Login page!"
    }
}
