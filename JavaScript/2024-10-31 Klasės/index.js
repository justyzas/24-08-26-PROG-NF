//OOP - Object oriented programming
import Profile from "./classes/Profile.js";
import Rectangle from "./classes/Rectangle.js";

// Klasės deklaravimas

// const skywalkerProfile = new Profile("Skywalkeris19", "veryHardPassword123");
// const agneProfile = new Profile("AGNE123", "Agnieskha12479");

// agneProfile.logout();

// agneProfile.login("Agnieskha124799");

// agneProfile.changePassword("Agnieskha12479", "Asdfghjkl?");

const myRect = new Rectangle(4, 5);
console.log(myRect.area);
console.log(myRect.perimeter);
myRect.width = 88;
console.log(myRect.perimeter);
console.log(myRect.area);
