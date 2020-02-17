import * as mongoose from 'mongoose';
import { prop } from '@typegoose/typegoose';

export class User {
    _id?: string;

    @prop({required: true})
    nome: string;

    @prop({required: true})
    email: string;

    @prop({required: true})
    password: string;
}

export interface User {
    _id?: string,
    nome: string,
    email: string,
    password: string
}