import { Submenu } from './submenu';
export class Menu {
    constructor(
        public label: string,
        public path: string,
        public icon:string,
        public submenus: Submenu[]
    ){
    }
}
