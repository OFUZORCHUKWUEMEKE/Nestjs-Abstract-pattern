import { BaseInterfaceRepository } from "src/common/base.interface";
import { User } from "./user.entity";


export interface UserRepositoryInterface extends BaseInterfaceRepository<User> {}