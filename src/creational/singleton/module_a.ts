import { MyDatabaseModule } from "./db/my-database-module"; 

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: "Hudson", age: 30});
myDatabaseClassic.add({name: "Ramona", age:30});
myDatabaseClassic.show();

export { myDatabaseClassic }