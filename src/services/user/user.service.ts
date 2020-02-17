import { Injectable, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { User } from '../../schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private readonly _userModel: ReturnModelType<typeof User>
    ) {}

    async createUser(userParam: User) { 
        if(
            !userParam.nome ||
            !userParam.email ||
            !userParam.password
        ) { 
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Você deve enviar todos os parametros'
            }, 403);
         }
        const user = await new this._userModel(userParam).save();
        return user;
    }
}
