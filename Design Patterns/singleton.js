
var play = (function () {

    var cricInstance;

    function type() {

        function batting() {
            console.log('Right handed');
        }

        function bowling() {
            console.log('Fast bowling');
        }

        function fielding() {
            console.log('Mid on');
        }

        return {
            batting: batting,
            bowling: bowling,
            fielding: fielding
        }
    }

    return {
        getInstance: function () {

            if (!cricInstance) {
                cricInstance = type();
            }

            return cricInstance;
        }
    }

})();

var cricket = play.getInstance();
cricket.batting();
cricket.bowling();