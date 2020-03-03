# Cheat Challenge 2

### EECMASCRIPT6

Sebuah standarisasi scripting language (Javascript) yang dibuat oleh European Computer Manufacturers Association (ECMA), ES6 adalah sebuah singkatan dari ECMAScript versi 6. 
ES6 diluncurkan pada tahun 2015, jadi ES6 sama dengan ES 2015. Pada ES6 ini terdapat banyak perubahan pada JavaScript yang semakin memudahkan programmer JavaScript.

### Arrow Function
Penyederhanaan penulisan sebuah function pada JavaScript dengan menggunakan panah `=>`.
```sh
const a = () => console.log(“a”)
const b = (x, y) => x + y
const c = (x, y, z) => {
	return x + y * z
}
```
### FOR Loop
Penyederhanaan penulisan sebuah function pada JavaScript dengan menggunakan panah `=>`.
```sh
const array = ['a', 'b', 'c'];
for (const element of array) {
console.log(element);
}
```
### Array.fill()
Pengisian value pada elemen JavaScript dipermudah dengan menggunakan property fill().
```sh
const array1 = [1, 2, 3, 4]
console.log(array1.fill(0, 2, 4)) 	 // expected output: [1, 2, 0, 0]
console.log(array1.fill(5, 1)) 		// expected output: [1, 5, 5, 5]
console.log(array1.fill(6))		// expected output: [6, 6, 6, 6]
```
### Array.find()
Mencari elemen pertama (Array.find())

```sh
const find = array.findIndex(it => it > 10) 			//`Index ke 1`
```

### Array.findIndex()
index pertama (Array.findIndex())  yang memenuhi kriteria yang diharapkan pada Array JavaScript.

```sh 
const found = array.find(it => it > 10) 			//`Elemen 12`
```

### Function
Function merupakan sebuah code block yang digunakan untuk melakukan tugas tertentu, pada JavaScript mendeklarasikan function bisa dengan menggunakan keyword ‘function’, parentheses ‘( )’ dan curly bracket ‘{ do magic here }’.

```sh
function hello() {
    console.log('Hellow Fadhel')
}
hello()
```
### Function Expression
Sebuah function dapat didefinisikan dengan menggunakan expression yang dapat disimpan dalam sebuah variabel. 

```sh
const coba = function() {
    console.log('Hello Fadhel')
// Call expression function with name of variable and parent
}
```

### Default Parameter
Pada JavaScript membolehkan membuat parameter default dalam sebuah function, parameter tersebut akan menggantikan parameter yang dikirim pada function yang berupa undefined.

```sh
function tambah(a,b=2,c) {
    const x = c ? c : 1
    console.log(a + b + x)
}

tambah(1)
tambah(2,2)
tambah(2,3,1)
```

### Arrow Function 
Mendeklarasikan sebuah expression function dengan menggunakan panah ( => ) hal ini untuk mempersingkat dalam membuat function.

```sh
const print = (value) => value.lenght //returne value 
const fun (a,b) => {
    let c = a * b
    let d = Math.floor((Math.random() * 10 ) + 1 )
    console.log(c / d)
}
console.log(print('Hello world')     // 11
fun(1000, 10001)
```

### Spread Operator
Spread operator adalah operator yang digunakan menyebarkan array baik ke dalam function ataupun ke dalam object atau array.

```sh
const array = [1, 2, 3]
const list = [4, 5, 6]

console.log ([...array, ...list])   // [1,2,3,4,5,6]
console.log ([...list, ...array])   // [4,5,6,1,2,3]

const arrayList = [...array, ...list]
const [a, ...b] = arrayList
console.log(a, b)                  // 1 [2,3,4,5,6]
```

### Spread Operator in Parameter
Spread operator bisa dilakukan ke dalam sebuah function yang memiliki parameter.
```sh
const array = [1, 2, 3, 4]
const fun = (a, b, c) => console.log(a * b * c )

fun(...array)                 // element 4 ignored
fun(...[1,2])                 //  output NaN
```
### Rest Parameter
Sebuah parameter yang berupa array
```sh
const total = (...arr) => {
    console.log(arr.reduce((x, y) => x * y));
}

total(1)                    // 1
total(1, 2, 3)              // 6
total(1, 2, 3, 4, 5, 6)     // 720
```

### Array Operation
#### Array.Sort()
Ordering pada JavaScript
```sh
let a = [1, 3, 2, 5, 4]
a.sort()
console.log(a)              // [ 1, 2, 3, 4, 5 ] asc
a.sort((x,y) => y - x)
console.log(a)              // [ 5, 4, 3, 2, 1 ] desc

let b = ['Aan', 'Chandra', 'Desi', 'Budi']
b.sort()
console.log(b)              // ['Aan', 'Budi', 'Chandra', 'Desi'] asc
b.sort((x,y) => y < x ? -1 :1)
console.log(b)              // ['Desi','Chandra','Budi','Aan'] desc
```

#### Array.push()
Operasi untuk menambah akhir array
```sh
let a = [1, 2, 3]
a.push(4)                   // [1, 2, 3, 4]
```

#### Array.pop()
Operasi untuk mengurangi akhir array
```sh
let a = [1, 2, 3]
a.pop()                   // [1, 2, 3]
```
#### Array.shift()
Operasi untuk mengurangi awal array
```sh
let a = [1, 2, 3]
a.shift()                   // [2, 3, 4]
```

#### Array.unshift()
Operasi untuk menambah di awal array
```sh
let a = [1, 2, 3]
a.punshift(0)                 // [0, 1, 2, 3, 4]
```
### Array.splice() , indexOf()
Menambahkan sesuai index yan di inginkan

```sh
let a = [-1, 0, 1, 2, 3, 4, 5]
a.splice(a.indexOf(0),1)        // [-1, 1, 2, 3, 4, 5]
a.splice(a.indexOf(5), 0, 6, 7, 8 ) // [-1,1,2,3,4,5,6,7,8,5]
```
### Array.find() and Array.filter()
Operasi untuk menyaring sebuah array

```sh
let a = [1, 2, 3, 4 ,5]
console.log(a.filter(x => x % 2 == 1))  // [1, 3, 4]
console.log(a.find(x => x > 10 )        // undefined
console.log(a.find(x => x % 2 == 0))    //2
```
### Array.forEach(), reduce(), map()
Operasi untuk me-return value

```sh
let a = [1, 2, 3]
a.forEach(x => console.log(x))          // 1 \n 2 \n 3
a.map (x => x %2 == 0 ? 'Genap' : 'Ganjil') // ['Ganjil', 'Genap', 'Ganjil']
a.reduce((x,y) => x + y )               // 6
```
### Spread Operator
Spread operator adalah operator yang digunakan menyebarkan key dan value object pada javascript

```sh
const a = {
    id: 1,
    name: 'Zeus'
}                       //{ id: 1, name: 'Zeus'}

const b = {
    ...a,
    live: 'Yunani'      // { id: 1, name:'Zeus', live: 'Yunani'
}
```

### Spread Operator in Parameter
Spread operator bisa dilakukan ke dalam sebuah function yang memilik parameter

```sh
const array = [1, 2, 3, 4]
const fun = (a, b, c) => console.log (a * b * c)

fun(...array)                   // Elemen 4 ignored
fun(...[1,2])                   // output Nan (multiply with undefined)
```

### Object.assign()
Menyalin semua properti object ke dalam object target, jika ada key yang sama maka akan mengubah value dari key tersebut.

### Object.entries()
Mengembalikkan sebuah array yang setiap element berupa array dengan ukuran 2, dimana index pertama sebagai array dan index kedua berupa value

### Object.fromEntries()
Mengembalikkan sebuah object dari Array, dimana setiap element hanya mempunyai dua ukuran, index pertama sebagai key dan index kedua sebagai value.

### Object.keys() and Object.values()
Mengembalikkan sebuah Array yang beranggotakan key / value dari sebuah object.
### Object.freeze()
Membekukan nilai yang ada pada object, supaya tidak dapat diubah.

## Asynchronous
Proses eksekusi kode pada program yang berjalan tidak berurutan tanpa harus menunggu perintah kode sebelumnya selesai.

```sh
const a = Math.floor(Math.random()* 1000) +1
console.log('Hello')
setTimeout(() => console.log(`World ${a}`), a)
console.log('Reborn')
```

### Callback
Sebuah function yang meminta sebuah parameter berupa function kemudian akan menjalankan function tersebut.

### Promises
Sebuah object yang mempresentasikan sebuah penyelesaian perintah (atau bahkan sebuah error pada proses asynchronous) dan me-return value-nya. 

### Promise Methods
Beberapa static method yang bisa dipakai didalam Promise.
- Promise.all([promise1, promise2])
- Promise.race([promise1, promise2])
- Promise.resolve(value)
- Promise.reject(value)

### Promise Properties

- then()
- catch()
- finally()

### Async - await 
Async function merupakan function yang mengandung ekspresi `await` untuk menunggu hasil dari sebuah promise diselesaikan terlebih dahulu (synchronous).
