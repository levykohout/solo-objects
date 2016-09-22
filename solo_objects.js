var vikings = {
  name: "Minnesota Vikings",
  division: "NFC North",
  city: "Minneapolis",
  state: "Minnesota",
  nemesis: "Green Bay Packers",
  stadium: "US Bank Stadium",
  headCoach: "Mike Zimmer",
  owner: "Zygi Wilf",
  fightSong: "Skol Vikings",
  mascot: "Victor the Viking",
  championships: {
        division: 19,
        conference: 4,
        superBowl: 0
  },
  get location() {
    return this.city + ' ' + this.state;
  },
  set location(cityAndState) {
    var twoWords = cityAndState.toString().split(',');
    this.city = twoWords[0] || '';
    this.state = twoWords[1] || '';
  },
  displayText: function() {
    return ' The ' + this.name + ' are an American football team in ' + this.city +', ' + this.state + '. The team is owned by '+ this.owner+ '\n and playing in the '+ this.stadium+
'. The team\'s headcoach is ' + this.headCoach +', team mascot is ' + this.mascot+ '\n and its fightsong is '+this.fightSong+ '. They are known to have the biggest rivalry' +
  ' with '+ this.nemesis + '. \n ' + this.name + ' has ' + this.championships.division + ' division championships, ' + this.championships.conference + ' conference championships and '
  + this.championships.superBowl+ ' superBowl championships as of 2016.';
  }
}
console.log(vikings.displayText());
