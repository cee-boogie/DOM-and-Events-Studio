// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let takeoff = document.getElementById('takeoff');
    let rocket = document.getElementById('rocket');

    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = '100px';

    takeoff.addEventListener("click", function() {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
        }
    });

    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    missionAbort.addEventListener("click", function() {
        if (confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        };

    });

    up.addEventListener("click", function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
    });

    down.addEventListener("click", function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 +"px";
    });

    right.addEventListener("click", function() {
        rocket.style.left = parseInt(rocket.style.left) + 10 +"px";
    });

    left.addEventListener("click", function() {
        rocket.style.left = parseInt(rocket.style.left) - 10 +"px";
    });

});