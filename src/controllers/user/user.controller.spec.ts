import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';
import { User } from '../../schemas/user.schema';



describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          expandVariables: true
        }),
        TypegooseModule.forRoot(
          process.env.DATABASE_URI
        ),
        TypegooseModule.forFeature([User])
      ],
      controllers: [UserController],
      providers: []
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should create an user', async () => {
    const user = {
      nome: "Lukas Fialho",
      email: "lukas.fialho@gmail.com",
      password: "1234567"
    }

    const u = await controller.createUser(user);

    console.log(u);

    expect(user.nome && user.email && user.password)
    .toEqual(u.nome && u.email && u.password);
  });
/*
  it('should list the created user', async () => {
    const user = {email: "lukas.fialho@gmail.com"};

    const u = await controller.getUsers();

    expect(u).toEqual(
      expect.arrayContaining([
        expect.objectContaining(user)
      ])
    );

  
  });

  it('should find the specific user', async () => {
    const user = {email: "lukas.fialho@gmail.com"};

    const u = await controller.getUser(user);

    expect(u.email).toEqual(user.email);
  });

  it('should change the created user', async () => {
    const user = {email: "lukas.fialho@gmail.com"}
    const toBe = {
      nome: "Lukas Camargo",
      email: "lukas.fialho@gmail.com"
    }

    const u = await controller.updateUser(user, toBe);

    expect(u.nome).toEqual(toBe.nome);
  });

  it('should delete the created user', async() => {
    const user = {email: "lukas.fialho@gmail.com"};

    const u = await controller.deleteUser(user);

    expect(u.deletedCount).toBe(1);
  });*/
});

