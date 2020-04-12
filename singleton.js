class Singleton {
    constructor({value1, value2}) {
        this.value1 = value1;
        this.value2 = value2;

        if (Singleton.instance) {
            return Singleton.instance;
        } else {
            Singleton.instance = this;
        }
    }
}

const Singleton2 = (() => {
    let instance = null;

    class Singleton {
        constructor({value1, value2}) {
            this.value1 = value1;
            this.value2 = value2;

            if (instance) {
                return instance
            } else {
                instance = this;
            }
        }
    }

    return Singleton;
})();


const instance1 = new Singleton2({value1: 1, value2: 2});
const instance2 = new Singleton2({value1: 'Hello', value2: 'world'});

console.log(instance2 instanceof Singleton2);