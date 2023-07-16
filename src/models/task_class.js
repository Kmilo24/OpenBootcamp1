import { LEVELS } from "./levels_enum";


export class Task {
    name = '';
    last_name = '';
    email = '';
    level = LEVELS.DESCONECTADO;



    constructor(name, last_name, email, level) {
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.level = level;
    }
}