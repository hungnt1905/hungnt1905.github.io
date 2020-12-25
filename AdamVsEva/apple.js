 var Apple = function (weight) {
    this.weight = weight;

    this.getWeight = function () {
        return this.weight;
    }

    this.isEmpty = function(){
        return this.weight === 0;
    }

    this.decrease = function () {
            this.weight--;
    }
}

var Human = function (name, gender, weight) {

    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        return this.gender === true;
    }
    this.setGender = function (gender) {
        this.gender = gender;
    }
    this.checkApple = function (apple) {
        return apple.isEmpty();
    }
    this.eat = function (apple) {
        if (apple.getWeight() > 0) {
            apple.decrease();
            this.weight++;
        }
    }
    this.say = function (message) {
        return message;
    }
    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }
}

var apple = new Apple(10);
var adam = new Human("Adam", true, 40);
var eva = new Human("Eva", false, 50);

function show() {
    document.getElementById("apple").innerHTML = apple.getWeight();
    document.getElementById("adam").innerHTML = adam.getWeight();
    document.getElementById("eva").innerHTML = eva.getWeight();
}

function update(who) {
    document.getElementById("apple").innerHTML = apple.getWeight();
    if (apple.isEmpty()) {
        document.getElementById("message").innerHTML = "Apple is empty";
    } else {
        if (who === "adam") {
            document.getElementById("adam").innerHTML = adam.getWeight();
            console.log(adam.say("Hihi"));
        } else if (who === "eva") {
            document.getElementById("eva").innerHTML = eva.getWeight();
        }
    }
};

function eatApple(who) {
    who === "adam" ? adam.eat(apple) : eva.eat(apple);
    update(who);
};