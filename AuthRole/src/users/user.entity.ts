import { UserRole } from "src/enum/role.enum";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'userauth'})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    username:string
    
    @Column()
    password:string


    @Column()
    role: UserRole;


}
