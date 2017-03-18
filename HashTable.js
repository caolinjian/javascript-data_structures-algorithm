function HashTable() {
    this.table = new Array(137);
    this.simpleHash = (data) => {
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    };
    this.betterHash = (string) => {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
           total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        return parseInt(total);
     }
    this.showDistro = () => {
        let n = 0;
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    };
    this.put = (data) => {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    };
    //this.get = get;
}

module.exports =  HashTable;
