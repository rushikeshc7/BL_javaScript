
var subject = function () {
    var observers = [];
    return {

        subscribeObserver: function (observer) {
            observers.push(observer);
        },

        unsubscribeObserver: function (observer) {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
        },

        notifyObserver: function (observer) {
            var index = observers.indexOf(observer);
            if (index > -1) {
                observers[index].notify(index);
            }
        },

        notifyAllObserver: function () {
            for (let i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            }
        }
    }
}
var observer = function (){
    return{
        notify: function(index){
           console.log("Observer " + (parseInt(index, 10) + 1)  + " is notified"); 
        }
    }
}

var subject = new subject();
var observer1 = new observer();
var observer2 = new observer();
var observer3 = new observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);

subject.notifyObserver(observer3);
subject.notifyAllObserver();

subject.unsubscribeObserver(observer2);
subject.unsubscribeObserver(observer1);
subject.unsubscribeObserver(observer3);