console.log("john"["john".length - 1]);

let str = "samuel";
console.log(str[6 - 1]);

console.log(typeof "David");

console.log((5 * 5) / 2);
console.log(6 * 4 + 4);
console.log(6 * (4 + 4));

console.log(20 % 4);
console.log(23 % 4);

console.log(5 < 10);
console.log(5 > 10);
console.log(typeof false);

const fullName = "Samuel Luke";
console.log(fullName);

let temp = "samuel";
temp = temp + " luke";
console.log(temp);

let celcius = 10;
let farenheit = celcius * 1.8 + 32;
console.log(farenheit);

console.log("1" != 1);

let subscribed = false;
let loggedIn = false;
console.log(typeof subscribed);

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("upgrade to premium");
} else {
  console.log("tell the user to log in");
}

let time = 12;

if (time > 21) {
  console.log("good night!");
} else if (time > 16) {
  console.log("good evening!");
} else if (time > 11) {
  console.log("good afternoon!");
} else if (time > 3) {
  console.log("good morning");
} else {
  console.log("good night!");
}

let cash = 50;
let price = 80;
let difference = cash - price;

if (cash > price) {
  console.log(`you paid extra, here's ${difference} change. you are a top g`);
} else if (cash === price) {
  console.log(`here's your item`);
} else {
  console.log(
    `you don't have enough money broke boy! you still need ${
      difference * -1
    }! you are a worm!`
  );
}

let outsideTemp = 12;

if (outsideTemp <= 9) {
  console.log(`it's bloody freezing jackie!`);
} else if (outsideTemp <= 14) {
  console.log(`it's a fine mild day god bless it`);
} else {
  console.log(`it's bloody boiling jackie`);
}

let cash2 = 30;
let price2 = 30;
let isStoreOpen = false;

if (cash2 >= price2 || isStoreOpen === true) {
  console.log("print the receipt");
}

if (!isStoreOpen) {
  console.log("hi");
}

if (10) {
  console.log("wasssuuuupppp");
} else {
  console.log("no");
}

console.log(!!1);

let val = 10;

if (val) {
  console.log(!!val);
} else {
  console.log(!!val);
}

let hot = "hi";

hot ? console.log("weather is hot") : console.log("weather is cold");

let sub = 0;
let log = 0;

let subLog = sub || log ? "show the video" : "hide the video";
console.log(subLog);

let cash3 = 30;
let price3 = 40;
let storeOpen = 1;

let receipt = cash3 >= price3 && storeOpen ? "give receipt" : "no receipt";

console.log(receipt);

let count = 1;

while (count <= 100) {
  console.log(count);
  count = count + 1;
}

for (let i = 0; i < 100; ++i) {
  console.log(i + 1);
}

for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} - frontend simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} - frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} - simplified`);
  } else {
    console.log(`${i} - ${i}`);
  }
}

console.log("frontend simplified".length);

const string = "frontend simplified";

for (let i = 0; i < string.length; ++i) {
  console.log(string[i]);
}

function welcomeFES(firstName, lastName) {
  console.log(`welcome to FES, ${firstName} ${lastName}`);
}

welcomeFES("Samuel", "Luke");

function fn(a, b) {
  return a * b;
}

console.log(fn(4, 5));

const convertCtoF = (tempCelcius) => {
  let tempFarenheit = tempCelcius * 1.8 + 32;
  return tempFarenheit;
};

console.log(convertCtoF(0));
console.log(convertCtoF(10));
console.log(convertCtoF(30));

let arr = [1, 5, "samuel", true];

console.log(arr[arr.length - 1]);

arr.push("hiho");

console.log(arr[arr.length - 1]);

let grades = ["FAIL", "A", "B"];
console.log(grades);

/*
let newGrades = grades.filter((grade) => {
    if (grade !== 'FAIL') 
    return true 
});

let newGrades = grades.filter(grade => grade !== 'FAIL');

console.log(newGrades);
*/

let goodGrades = [];

for (let i = 0; i < grades.length; ++i) {
  if (grades[i] !== "FAIL") {
    goodGrades.push(grades[i]);
  }
}

console.log(goodGrades);

for (let a = 0; a < goodGrades.length; ++a) {
  console.log(goodGrades[a]);
}

let balances = [100, 300, 4500, 7000, 24000, 153000];

/*

let under10000balance = [];

for (let i = 0; i < balances.length; ++i) {
    if (balances[i] < 10000) {
        under10000balance.push(balances[i])
    }
};

console.log(under10000balance);

*/

/*

let balanceUnderTenK = balances.filter((balance) => {
    if (balance < 10000) {
        return true
    }
});

*/

let balanceUnderTenK = balances.filter((balance) => balance < 10000);

console.log(balanceUnderTenK);

let map = [2, 8, 8, 10, 3, 1];

/*
let newMap = map.map((num) => {
    return num * 2
});
*/

let newMap = map.map((num) => num * 2);

console.log(newMap);

let dollars = [1, 5, 10, 3];

/*

let cents = dollars.map(elem => elem * 100);

*/

let cents = dollars.map((elem) => {
  return elem * 100;
});

console.log(cents);

let dollars1 = [0, 10, 20];

let cents1 = [];

/*
let cents1 = dollars1.map((num1) => {
    return num1 * 100
});
*/

/*

let cents1 = dollars1.map(num1 => num1 * 100);

console.log(cents1);

*/

for (let i = 0; i < dollars1.length; ++i) {
  cents1.push(dollars1[i] * 100);
}

console.log(cents1);

let user = {
  username: "Samuel",
  age: 24,
  password: "1234",
  email: "samuelluke1998@gmail.com",
  lessonsCompleted: [0, 1, 2, 3],
};

console.log(user.username);

console.log(user.lessonsCompleted);

console.log(
  user.lessonsCompleted.map((lesson) => {
    return lesson * 2;
  })
);

console.log(user.lessonsCompleted.map((lesson) => lesson * 2));

console.log(
  user.lessonsCompleted.map((lesson) => {
    if (lesson !== 0) {
      return lesson * 2;
    }
  })
);

let newLessonsCompleted = [];

for (let i = 0; i < user.lessonsCompleted.length; ++i) {
  if (user.lessonsCompleted[i] !== 0) {
    newLessonsCompleted.push(user.lessonsCompleted[i] * 2);
  }
}

console.log(newLessonsCompleted);

let list = [
  {
    username: "Samuel",
    age: 24,
    password: "1234",
    email: "samuelluke1998@gmail.com",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "John",
    age: 57,
    password: "password",
    email: "john@mail.com",
    lessonsCompleted: [3, 7, 8],
  },
];

console.log(list[1]);

function login(email, password) {
  for (let i = 0; i < list.length; ++i) {
    if (list[i].email === email) {
      console.log("Correct email");
      if (list[i].password === password) {
        console.log("Correct password");
      } else {
        console.log("Incorrect password");
      }
      return;
    }
  }
  console.log("Could not find an email that matches");
}

login("samuelluke1998@gmail.com", "1234");

function register(user) {
  list.push(user);
}

register({
  username: "benjamin",
  email: "ben@mail.com",
  password: "opensesame",
  subscriptionStatus: "VIP",
  discordID: "ben001",
  lessonsCompleted: [0, 1, 5],
});

console.log(list);

console.log(document.querySelector('#title'));

console.log(document.getElementById('title')); 

document.querySelector('#title').innerHTML += " Howdy!";

/*

document.querySelector('#title').style.color = 'aqua';

function changeTitleToRed() {
  document.querySelector('#title').style.color = 'red';
};

*/

function toggleDarkTheme() {
  document.querySelector('body').classList.toggle('dark-theme')
};
