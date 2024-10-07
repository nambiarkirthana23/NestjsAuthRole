import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'userauth' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id;
    @Column()
    username;
    @Column()
    password;
    @Column()
    role;
}
