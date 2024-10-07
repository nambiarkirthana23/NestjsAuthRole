import { Injectable } from '@nestjs/common';
import { Userdto } from './user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';




@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}


    // UserRegister(userregister:Userdto){
    // private readonly users=[{
    //     userId:'1',
    //      username:'Mansi',
    //      password:'Mansi@123',
    //  },

    //  {
    //      userId:2,
    //      username:'Mansvi',
    //      password:'Mansvi@123'
    //  }
    // ];

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { username: username } });
    }

    async userregister(userregister: Userdto): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(userregister.password, salt);
        const user = new User();
        // user.id=userregister.id;
        user.username = userregister.username;
        user.password = hashedpassword;
        user.role = userregister.role;
        await user.save();
        const{password,...rest}=user;
       // const { password, ...rest } = user;
        return rest as User;
    }
    


}
