import { Controller, Post, Get, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { User } from '../../schemas/user.schema';
import { UserService } from '../../services/user/user.service';


@Controller('user')
export class UserController {

    constructor(
        @InjectModel(User) private readonly _userModel: ReturnModelType<typeof User>,
        private readonly _userService : UserService
    ) { }

    @Post()
    async createUser(usuario: any)  {
        return await this._userService.createUser(usuario);
    }

    @Get()
    async getUsers() {
        return await this._userModel.find();
    }

    @Get()
    async getUser(param: any) {
        return await this._userModel.findOne(param)
    }

    @Post()
    async updateUser(param: any, newUser: User) {
        return await this._userModel.findOneAndUpdate(param, newUser, {new: true});
    }

    @Delete()
    async deleteUser(param) {
        return await this._userModel.deleteOne(param);
    }

}

