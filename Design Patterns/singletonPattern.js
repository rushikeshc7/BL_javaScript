
(function () {

    function Singleton() {
        if (Singleton.prototype.instance) {
            return Singleton.prototype.instance
        }
        Singleton.prototype.instance = this;
        var array = [];
        this.setItem = function (item) {
            array.push(item);
        }

        this.show = function () {
            console.log(array);
        }
    }
    var a = new Singleton();
    var b = new Singleton();
    console.log(a === b);

    a.setItem("A");
    a.show();
    b.show();

    b.setItem("B");
    a.show();
    b.show();

    b.setItem("C");
    a.show();
    b.show();

    a.setItem("D");
    a.show();
    b.show();
})();