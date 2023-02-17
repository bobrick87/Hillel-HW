function* Foo() {
    console.log('start');
    yield 1;
    yield 2;
    yield 3;
    console.log('finish');
}
  
const iterator = Foo();
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().value);
  

function Boo() {  
    this.value = 0;
    this.done = false;
    this.next = () => {
      if (this.value === 0) {
        console.log("start");
      }
      if (this.value === 3) {
        console.log("finish");
        this.done = true;
      }
      this.value++;      
      
      if (this.done === true) {
        this.value = undefined;
      }

      return this;
    }
    return this;
}

console.log('');

const iterator2 = Boo();
console.log(iterator2.next().value);
console.log(iterator2.next().done);
console.log(iterator2.next().value);
console.log(iterator2.next().done);