var numbers = [];
for (var i = 1; i <= 45; i++) {
    numbers.push(i)
};
var index = 1;
let arr = [];

function generateNumber() {
    $("#button-gen").prop('disabled', true);
    let r = Math.floor(Math.random() * numbers.length) + 1;
    var desired = numbers[index];
    if(numbers.indexOf(r) !== -1)  desired = numbers[r];
    arr.push(desired)
    var duration = 4000;

    var output = $('#output' + index); // Start ID with letter
    var started = new Date().getTime();

    var animationTimer = setInterval(function() {
        if (new Date().getTime() - started > duration) {
            clearInterval(animationTimer); // Stop the loop
            index++;
            var indexOfDesired = numbers.indexOf(desired);
            numbers.splice(indexOfDesired, 1);
            $("#button-gen").prop('disabled', false);
            output.text(desired); // Print desired number in case it stopped at a different one due to duration expiration
        } else {
            output.text(
                numbers[Math.floor(Math.random() * numbers.length) + 1]
            );
        }
    }, 30);
}