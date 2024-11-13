// Load telemetry of Pressurized Rover
function loadPR_Telemetry(){
    $.getJSON("json_data/ROVER_TELEMETRY.json", function ( data ){
        if(data.pr_telemetry.ac_heating == true){
            //document.getElementById("ac_heating").innerText = "ON";
            document.getElementById("acHeatingSensor").style.backgroundColor = 'rgba(0, 240, 10, 1)';
            document.getElementById("acHeatingSwitch").checked = true;
        }
        else{
            //document.getElementById("ac_heating").innerText = "OFF";
            document.getElementById("acHeatingSensor").style.backgroundColor = 'rgba(100, 100, 100, 1)';
            document.getElementById("acHeatingSwitch").checked = false;
        } 

        if(data.pr_telemetry.ac_cooling == true){
            //document.getElementById("ac_cooling").innerText = "ON";
            document.getElementById("acCoolingSensor").style.backgroundColor = 'rgba(0, 240, 10, 1)';
            document.getElementById("acCoolingSwitch").checked = true;

        }
        else{
            //document.getElementById("ac_cooling").innerText = "OFF";
            document.getElementById("acCoolingSensor").style.backgroundColor = 'rgba(100, 100, 100, 1)';
            document.getElementById("acCoolingSwitch").checked = false;
        }
        
        if(data.pr_telemetry.lights_on == true){
            //document.getElementById("lights_on").innerText = "ON";
            document.getElementById("lightsOnSensor").style.backgroundColor = 'rgba(0, 240, 10, 1)';
            document.getElementById("lightsOnSwitch").checked = true;
        }
        else{
            //document.getElementById("lights_on").innerText = "OFF";
            document.getElementById("lightsOnSensor").style.backgroundColor = 'rgba(100, 100, 100, 1)';
            document.getElementById("lightsOnSwitch").checked = false;
        } 

        if(data.pr_telemetry.breaks == true){
            //document.getElementById("breaks").innerText = "ON";
            document.getElementById("breaksSensor").style.backgroundColor = 'rgba(0, 240, 10, 1)';
            document.getElementById("breaksSwitch").checked = true;
        }
        else{
            //document.getElementById("breaks").innerText = "OFF";
            document.getElementById("breaksSensor").style.backgroundColor = 'rgba(100, 100, 100, 1)';
            document.getElementById("breaksSwitch").checked = false;
        } 

        if(data.pr_telemetry.in_sunlight == true){
            //document.getElementById("in_sunlight").innerText = "True";
            document.getElementById("inSunlightSensor").style.backgroundColor = 'rgba(0, 240, 10, 1)';
            document.getElementById("inSunlightSwitch").checked = true;
        }
        else{
            //document.getElementById("in_sunlight").innerText = "False";
            document.getElementById("inSunlightSensor").style.backgroundColor = 'rgba(100, 100, 100, 1)';
            document.getElementById("inSunlightSwitch").checked = false;
        }

        if(data.pr_telemetry.co2_scrubber == true){
            document.getElementById("co2ScrubberSensor").style.backgroundColor = 'rgba(0, 240, 10, 1)';
            document.getElementById("co2ScrubberSwitch").checked = true;
        }
        else{
            document.getElementById("co2ScrubberSensor").style.backgroundColor = 'rgba(100, 100, 100, 1)';
            document.getElementById("co2ScrubberSwitch").checked = false;
        }

        let throttle = data.pr_telemetry.throttle;
        let steering = data.pr_telemetry.steering;
        let current_pos_x = data.pr_telemetry.current_pos_x;
        let current_pos_y = data.pr_telemetry.current_pos_y;
        let current_pos_alt = data.pr_telemetry.current_pos_alt;
        let heading = data.pr_telemetry.heading;
        let roll = data.pr_telemetry.roll;
        let pitch = data.pr_telemetry.pitch;
        let distance_traveled = data.pr_telemetry.distance_traveled;
        let speed = data.pr_telemetry.speed;
        let surface_incline = data.pr_telemetry.surface_incline;

        document.getElementById("throttle").innerText = throttle.toFixed(2);
        document.getElementById("steering").innerText = steering.toFixed(2);
        document.getElementById("current_pos_x").innerText = current_pos_x.toFixed(2);
        document.getElementById("current_pos_y").innerText = current_pos_y.toFixed(2);
        document.getElementById("current_pos_alt").innerText = current_pos_alt.toFixed(2);
        document.getElementById("heading").innerText = heading.toFixed(2);
        document.getElementById("roll").innerText = roll.toFixed(2);
        document.getElementById("pitch").innerText = pitch.toFixed(2);
        document.getElementById("distance_traveled").innerText = distance_traveled.toFixed(2);
        document.getElementById("speed").innerText = speed.toFixed(2);
        document.getElementById("surface_incline").innerText = surface_incline.toFixed(2);
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