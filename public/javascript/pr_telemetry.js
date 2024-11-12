// Load telemetry of Pressurized Rover
function loadPR_Telemetry(){
    $.getJSON("json_data/ROVER_TELEMETRY.json", function ( data ){
        if(data.pr_telemetry.ac_heating == true){
            document.getElementById("ac_heating").innerText = "ON";
        }
        else{
            document.getElementById("ac_heating").innerText = "OFF";
        } 

        if(data.pr_telemetry.ac_cooling == true){
            document.getElementById("ac_cooling").innerText = "ON";
        }
        else{
            document.getElementById("ac_cooling").innerText = "OFF";
        }
        
        if(data.pr_telemetry.lights_on == true){
            document.getElementById("lights_on").innerText = "ON";
        }
        else{
            document.getElementById("lights_on").innerText = "OFF";
        } 

        if(data.pr_telemetry.breaks == true){
            document.getElementById("breaks").innerText = "ON";
        }
        else{
            document.getElementById("breaks").innerText = "OFF";
        } 

        if(data.pr_telemetry.in_sunlight == true){
            document.getElementById("in_sunlight").innerText = "True";
        }
        else{
            document.getElementById("in_sunlight").innerText = "False";
        }

        document.getElementById("throttle").innerText = data.pr_telemetry.throttle;
        document.getElementById("steering").innerText = data.pr_telemetry.steering;
        document.getElementById("current_pos_x").innerText = data.pr_telemetry.current_pos_x;
        document.getElementById("current_pos_y").innerText = data.pr_telemetry.current_pos_y;
        document.getElementById("current_pos_alt").innerText = data.pr_telemetry.current_pos_alt;
        document.getElementById("heading").innerText = data.pr_telemetry.heading;
        document.getElementById("roll").innerText = data.pr_telemetry.roll;
        document.getElementById("pitch").innerText = data.pr_telemetry.pitch;
        document.getElementById("distance_traveled").innerText = data.pr_telemetry.distance_traveled;
        document.getElementById("speed").innerText = data.pr_telemetry.speed;
        document.getElementById("surface_incline").innerText = data.pr_telemetry.surface_incline;
    });
}

function onload() {

    // Load immediately
    loadPR_Telemetry();

    // Continously refreshes values
	setInterval(function() {

        loadPR_Telemetry();

    }, 1000);
}