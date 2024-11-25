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

        let battery_level = data.pr_telemetry.battery_level;
        let solar_panel_dust_accum = data.pr_telemetry.solar_panel_dust_accum;
        let solar_panel_efficiency = data.pr_telemetry.solar_panel_efficiency;

        let oxygen_levels = data.pr_telemetry.oxygen_levels;
        let ac_fan_pri = data.pr_telemetry.ac_fan_pri;
        let ac_fan_sec = data.pr_telemetry.ac_fan_sec;

        let cabin_pressure = data.pr_telemetry.cabin_pressure;
        let cabin_temperature = data.pr_telemetry.cabin_temperature;

        let power_consumption_rate = data.pr_telemetry.power_consumption_rate;
        let motor_power_consumption = data.pr_telemetry.motor_power_consumption;

        let internal_lights = data.pr_telemetry.internal_lights;
        let external_lights = data.pr_telemetry.external_lights;

        let external_temp = data.pr_telemetry.external_temp;
        let coolant_level = data.pr_telemetry.pr_coolant_level;
        let coolant_pressure = data.pr_telemetry.pr_coolant_pressure;
        let coolant_storage = data.pr_telemetry.pr_coolant_storage;
        let terrain_condition = data.pr_telemetry.terrain_condition;
        let mission_elapsed_time = data.pr_telemetry.mission_elapsed_time;
        let mission_planned_time = data.pr_telemetry.mission_planned_time;
        let point_of_no_return = data.pr_telemetry.point_of_no_return;
        let distance_from_base = data.pr_telemetry.distance_from_base;

        //Destination
        let switch_dest = data.pr_telemetry.switch_dest;
        let dest_x = data.pr_telemetry.dest_x;
        let dest_y = data.pr_telemetry.dest_y;
        let dest_z = data.pr_telemetry.dest_z;


        // PR Positioning
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

        document.getElementById("oxygen_levels").innerText = oxygen_levels.toFixed(2);
        document.getElementById("solar_panel_dust_accum").innerText = solar_panel_dust_accum.toFixed(2);
        document.getElementById("battery_level").innerText = battery_level.toFixed(2);
        document.getElementById("ac_fan_pri").innerText = ac_fan_pri;
        document.getElementById("ac_fan_sec").innerText = ac_fan_sec;
        document.getElementById("cabin_pressure").innerText = cabin_pressure.toFixed(2);
        document.getElementById("cabin_temperature").innerText = cabin_temperature.toFixed(2);
        document.getElementById("power_consumption_rate").innerText = power_consumption_rate.toFixed(2);
        document.getElementById("solar_panel_efficiency").innerText = solar_panel_efficiency.toFixed(2);
        document.getElementById("internal_lights").innerText = internal_lights;
        document.getElementById("external_lights").innerText = external_lights;
        document.getElementById("external_temp").innerText = external_temp.toFixed(2);
        document.getElementById("pr_coolant_level").innerText = coolant_level.toFixed(2);
        document.getElementById("pr_coolant_pressure").innerText = coolant_pressure.toFixed(2);
        document.getElementById("pr_coolant_storage").innerText = coolant_storage.toFixed(2);
        document.getElementById("motor_power_consumption").innerText = motor_power_consumption.toFixed(2);
        document.getElementById("terrain_condition").innerText = terrain_condition.toFixed(2);
        document.getElementById("mission_elapsed_time").innerText = mission_elapsed_time.toFixed(2);
        document.getElementById("mission_planned_time").innerText = mission_planned_time.toFixed(2);
        document.getElementById("point_of_no_return").innerText = point_of_no_return.toFixed(2);
        document.getElementById("distance_from_base").innerText = distance_from_base.toFixed(2);

        //Destination
        document.getElementById("switch_dest").innerText = switch_dest;
        document.getElementById("dest_x").innerText = dest_x.toFixed(2);
        document.getElementById("dest_y").innerText = dest_y.toFixed(2);
        document.getElementById("dest_z").innerText = dest_z.toFixed(2);
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