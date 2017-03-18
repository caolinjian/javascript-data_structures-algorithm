function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = (element) => {
        this.dataStore[this.top++] = element;
        return this.top
    }
    this.pop = () => {
        return this.dataStore[--this.top];
    }
    this.peek = () => {
        return this.dataStore[this.top - 1];
    }
    this.length = () => {
        return this.top
    }
    this.clear = () => {
        this.top = 0;
    }
}

/*test*/
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan")
console.log("length: " + s.length())
console.log(s.peek());
var popped = s.pop()
console.log("The popped element is: " + popped)
console.log(s.peek());
s.push("Cynthia")
console.log(s.peek());
s.clear()
console.log("length: " + s.length())
console.log(s.peek());
s.push("Clayton")
console.log(s.peek());
console.log('---line---', s.dataStore);

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
