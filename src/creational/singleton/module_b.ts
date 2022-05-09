import { MyDatabaseModule } from "./db/my-database-module"; 
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a'

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "Rebecca", age: 12});
myDatabaseClassic.add({name: "Hellena", age:7});
myDatabaseClassic.show();
