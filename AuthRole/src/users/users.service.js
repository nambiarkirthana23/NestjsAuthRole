import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    userRepository;
    constructor(
    @InjectRepository(User)
    userRepository) {
        this.userRepository = userRepository;
    }
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
    async findOne(username) {
        return this.userRepository.findOne({ where: { username: username } });
    }
    async userregister(userregister) {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(userregister.password, salt);
        const user = new User();
        // user.id=userregister.id;
        user.username = userregister.username;
        user.password = hashedpassword;
        user.role = userregister.role;
        await user.save();
        const { password, ...rest } = user;
        // const { password, ...rest } = user;
        return rest;
    }
}
