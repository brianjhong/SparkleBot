// reptar!

exports.names = ['can you feel it!?'];
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    setTimeout(function() {
        bot.chat('YES I CAN FEEL IT!');
    }, 1500);
};