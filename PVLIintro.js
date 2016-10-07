$ node prueba.js
node prueba.js
var bool = true; // false
var number = 1234.5; // 42, -Infinity, +Infinity
var text = 'I want to be a pirate!'; // "I want to be a pirate"
var object = {}; // [], null
var bool = true; // false
var number = 1234.5; // 42, -Infinity, +Infinity
var text = 'I want to be a pirate!'; // "I want to be a pirate"
var object = {}; // [], null
var bool = true; // false
var number = 1234.5; // 42, -Infinity, +Infinity
var text = 'I want to be a pirate!'; // "I want to be a pirate"
var object = {}; // [], null
var code = function () { return 42; };
typeof true;
typeof 1234.5
typeof 'I want to be a pirate!';
typeof {};
typeof function () { return 42; };
var x;
typeof x;
x = 5; // tan pronto como le demos un valor, el tipo dejará de ser undefined.
typeof x;
var point = { 'x': 10, 'y': 10 };
var point = { x: 10, y: 10 }; // mucho más conveniente.

point['x'];
point['y'];
point.x;
point.y;
point.x = 0;
point.y = 0;
point['x'] = 0;
point['y'] = 0;
var label = point.label; // será undefined. Compruébalo con typeof.
typeof label
point.label = 'origin';
point;
var menu = ['Attack', 'Defense', 'Inventory'];
menu[0];
menu[1];
menu[2];
menu.length;
menu.push('Magic');
menu
menu.pop();
menu
menu.splice(2, 0, 'Magic'); // añade Magic antes de Inventory.
menu.splice(2, 2, 'Ench. Inventory'); // reemplaza Magic and Inventory with Ench. Inventory.
menu.splice(0, 0, 'Wait'); // añade Wait al principio de la lista.
menu
menu[0] = 'Special';
menu
menu;
menu.length;
var item = menu[10];
typeof item; // será undefined.
menu[10] = 'Secret';
menu;
menu.length;
var obj = {}; // el objeto vacío es tan válido como cualquier otro.
var arr = []; // una lista sin elementos, como te puedes imaginar.
typeof obj; // será object.
typeof arr; // será object.
Array.isArray(obj); // será false.
Array.isArray(arr); // será true.
function getNextAliveEnemy() {
var nextEnemy;
if (aliveEnemies.length > 0) {
  nextEnemy = aliveEnemies[0];
  }
else {
  nextEnemy = null;
  }
return nextEnemy;
}
var hero = { sword: null, shield: null };
hero.sword = { attack: 20, magic: 5 }; // coge una espada.
hero.sword = null; // suelta la espada.
var hero = {
name: 'Link',
life: 100,
weapon: { kind: 'sword', power: 20, magicPower: 5 },
defense: { kind: 'shield', power: 5, magicPower: 0 },
// Inventario por slots. Dos slots vacion y una último con 5 pociones.
inventory: [
{ item: null, count: 0},
{ item: null, count: 0},
{ item: { kind: 'potion', power: 15 }, count: 5}
]
};
hero.name; // el nombre del héroe.
hero.weapon.kind; // el tipo de arma.
hero.inventory[0]; // el primer slot del inventario.
hero.inventory[0].item; // qué hay en el primer slot del inventario.
hero.inventory[2].item.power; // el poder del item del tercer slot del inventario.
"Hola" === "Hola";
"Hola" !== "hola";
true === true;
123 === 123.0;
123 === 122 + 1; // primero se resuelve la expresión, luego se compara.
undefined === undefined;
({} !== {}); // da igual la forma, esto son dos objetos distintos.
({} !== []);
[] !== []; // igual que antes.
[1, 2, 3] !== [1, 2, 3]; // la forma da igual, los objetos son distintos.
null === null; // pero con null funciona porque sólo hay un valor null.
var obj = {};
var sameObj = obj;
var another = {};
sameObj === obj; // funciona porque ambos nombres se refieren al mismo objeto.
sameObj !== another; // insisto, distintos, pese a la forma.
var enemy = {
graphic: 'specie01.png',
currentDirection: 'right',
position: { x: 10, y: 10 },
score: 40
};
enemy.position.x = 100; // perfectamente válido.
var enemy = {
_graphic: 'specie01.png',
_currentDirection: 'right',
_position: { x: 10, y: 10 },
_score: 40
};
enemy._position.x = 100; // perfectamente válido también.

var enemy = {
_graphic: 'specie01.png',
_currentDirection: 'right',
_position: { x: 10, y: 10 },
_score: 40,

moveLeft: function () { console.log('Going left!'); },
moveRight: function () { console.log('Going right!'); },
advance: function () { console.log('Marching forward!'); },
shoot: function () { console.log('PICHIUM!'); } // (es un láser)
};
enemy.shoot(); // primero accedemos con punto, luego llamamos con ().
enemy.moveLeft();
enemy.moveLeft();
enemy.advance();
enemy['shoot'](); // es lo mismo, acceder con corchetes y llamar con ().
enemy.shoot(); // PICHIUM!
enemy.shoot = function () { console.log('PAÑUM!'); };
enemy.shoot();
enemy;
enemy.moveLeft();
enemy; // fíjate en la posición otra vez.
enemy.moveLeft = function () { this._position.x -= 2; };
enemy.moveRight = function () { this._position.x += 2; };
enemy.advance = function () { this._position.y += 2; };
enemy;
enemy.moveLeft();
enemy;
enemy.shoot = function() {
var bullet = {x: enemy._position.x, y: enemy._position.y}
;
var bullet = {x: enemy._position.x, y: enemy._position.y};
enemy.shoot = "hola";
enemy.shoot = function(){console.log("hola");};
enemy.shoot();
enemy._bullet {x:enemy._position.x, y:enemy._position.y, count: 10};
enemy._bullet ={x:enemy._position.x, y:enemy._position.y, count: 10};

enemy
enemy.ataque = 3;
enemy
enemy.ataque = {count: 10}
enemy
enemy.ataque =  {x: enemy._position.x};
enemy
enemy.ataque =  {x: enemy._position.x, y:enemy._position.y, count:10};
enemy
enemy.shoot = function(){enemy.ataque.x -=3;}
enemy.shoot
enemy
enemy.shoot();
enemy
enemy.shoot = function(){enemy.ataque.x -=3;

}
enemy
enemy.shoot = function(){enemy.ataque.y -=3;
enemy.ataque.count -= 1;}
enemy.shoot();
enemy
