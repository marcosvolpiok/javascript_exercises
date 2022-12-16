class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  speak(message) {
    let result = "";
    for (const word of message.split(" ")) {
      result += `${word} ${this.sound} `;
    }
    
    return result.trim();
  }
}

class Lion extends Animal {
  constructor() {
    super("roar");
  }
}

class Tiger extends Animal {
  constructor() {
    super("grrr");
  }
}

const lion = new Lion();
console.log(lion.speak("I'm a lion")); //I'm roar a roar lion roar

const tiger = new Tiger();
console.log(tiger.speak("Lions suck")); //Lions grrr suck grrr