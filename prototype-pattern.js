class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
class Student extends Person {
	constructor(name) {
		super(name);
	}
	sayHello() {
		console.log(`Hello， My name is ${this.name}`);
	}
}

let student = new Student("xiaoming");
student.sayHello();
console.log(student.getName());

// 原型模式，就是创建一个共享的原型，通过拷贝这个原型来创建新的类，用于创建重复的对象，带来性能上的提升。
