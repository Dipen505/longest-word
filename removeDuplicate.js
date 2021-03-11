function megaFriend(names) {
    if (names == '') {
      return "Invalid input!"
    }
    else {
      var longText = names[0];
      for (i = 0; i < names.length; i++) {
        if (names[i].length > longText.length) {
          longText = names[i];
        }
      }
      return longText;
    }
  }
var names = ["bat", "khata", "Tanvir", "hold"];
var out = megaFriend(names);
console.log(out);