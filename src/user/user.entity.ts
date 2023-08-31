import { Entity, Column, OneToMany, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: false })
    firstname: string

    @Column({ nullable: false })
    lastname: string


    @Column({ unique: true, nullable: false })
    businessname: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    profilepicture: string

}