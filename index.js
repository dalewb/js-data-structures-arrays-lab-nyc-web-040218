// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return [...drivers.slice(0), name]
}

function prependDriver(name) {
  return [name, ...drivers.slice(0)]
}

function removeLastDriver() {
  return drivers.slice(0,-1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}
