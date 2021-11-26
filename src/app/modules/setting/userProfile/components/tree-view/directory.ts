import { SystemProfileFunct } from 'app/models/SystemProfileFunct';

export class Directory{
    name: string;
    directories: Array<any>;
    files: Array<any>;
    expanded:boolean;
    checked:boolean;
    data:SystemProfileFunct;
    constructor(name,directories,files,data,checked) {
        this.name = name;
        this.files = files;
        this.directories = directories;
        this.expanded = false;
        this.checked = checked;
        this.data = data;
    }
    toggle(){
        this.expanded = !this.expanded;
    }
    check(){
        //let newState = !this.checked;
        //this.checked = newState;
        this.checked = !this.checked;             
        this.checkRecursive(this.checked);
    }
    checkRecursive(state){
        this.directories.forEach(d => {
            d.checked = state;           
            d.checkRecursive(state);
        })
       
    }
}