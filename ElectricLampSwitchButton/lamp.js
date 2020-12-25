var ElectricLap = function () {
    this.turnOn = function () {
        this.status = true;
        alert("Lamp is on.")
    }
    this.turnOff = function () {
        this.status = false;
        alert("Lamp is off.");
    }
}

var SwitchButton = function () {
    this.connectToLamp = function (lamp) {
        this.lamp = lamp;
    }

    this.switchOn = function () {
        this.lamp.turnOn();
    }
    this.switchOff = function () {
        this.lamp.turnOff();
    }
}

var eLamp = new ElectricLap();
var button = new SwitchButton(eLamp);
button.connectToLamp(eLamp);
button.switchOn();
button.switchOff();
button.switchOn();
button.switchOff();
button.switchOn();
button.switchOff();
button.switchOn();
button.switchOff();
button.switchOn();
button.switchOff();
document.write("10 times")