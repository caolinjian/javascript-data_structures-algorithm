function List() {
    this.listSize = 0;
    this.pos = 0;
    let listData = [];

    this.clear = () => {
        listData = [];
        this.listSize = 0;
        this.pos = 0;
        return this;
    }

    this.toString = () => {
        return listData;
    }

    this.length = () => {
        return this.listSize;
    }

    this.getElement = () => {
        return listData[this.pos];
    }

    this.findIndex = (element) => {
        return listData.findIndex((i) => i === element);
    }

    this.insert = (newItem, element) => {
        if (element) {
            let index = this.findIndex(element);
            if (index !== -1) {
                listData.splice(index, 0, element);
            } else {
                listData.splice(this.pos, 0, element);
            }
        } else {
            listData.splice(this.pos, 0, element);
        }
        this.listSize++;
        return this;
    }

    this.append = (element) => {
        listData[this.listSize++] = element;
        return this;
    }

    this.remove = (element) => {
        let index = this.findIndex(element);
        if (index !== -1) {
            listData.splice(index, 1);
            this.listSize--;
        }
        return this;
    }

    this.front = () => {
        this.pos = 0;
        return this;
    }

    this.end = () => {
        this.pos = this.listSize-1;
        return this;
    }

    this.prev = () => {
        if (this.pos > 0) {
            this.pos--;
            return this;
        }
    }

    this.next = () => {
        if (this.pos < this.listSize-1) {
            this.pos++;
            return this;
        }
    }

    this.currPos = () => {
        return this.pos;
    }

    this.moveTo = (pos) => {
        if(pos>=0&&pos<=this.listSize-1){
            this.pos = pos;
            return this;
        }
    }
}
