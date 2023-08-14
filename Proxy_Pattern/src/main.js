const person = {
  name: "Hisham Khaled",
  age: 24,
  nationality: "Egyption",
};

/**
 * * Normal Proxy
 */

// const personProxy = new Proxy(person, {
//   get: (obj, prop) => {
//     if (!obj[prop]) {
//       console.error(
//         "Hmm.. this property dose't seem to be exist on the target object."
//       );
//     }
//     console.log(`The value of ${prop} is ${obj[prop]}`);
//   },
//   set: (obj, prop, value) => {
//     if (prop === "age" && typeof value !== "number") {
//       console.error("Sorry, you can only pass numeric values for age.");
//     } else if (prop === "name" && typeof value !== "string") {
//       console.error("Sorry, you can only pass string values for name.");
//     } else if (prop === "name" && value.length < 2) {
//       console.error("You need to provide a valid name.");
//     } else {
//       console.log(`Change the value of ${prop} from ${obj[prop]} to ${value}`);
//       obj[prop] = value;
//     }
//   },
// });

// personProxy.name;
// personProxy.age = 25;

// ------------------------------------------------------------------------------

/**
 * * Reflect with Proxy
 */

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(
      `Change the value of ${prop} from (${obj[prop]}) to => (${value})`
    );
    Reflect.set(obj, prop, value);
  },
});

personProxy.name;
personProxy.age = 25;
personProxy.name = "Hisham Khaled Saber";
