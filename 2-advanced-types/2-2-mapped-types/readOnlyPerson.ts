import { Person } from './Person';

type ReadonlyPerson = {
  readonly [Property in keyof Person]: Person[Property];
}
 
const readPerson: ReadonlyPerson = {
  name: "Adnane",
  age: 38
};