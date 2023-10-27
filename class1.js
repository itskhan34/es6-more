class Person {
    constructor(firstName, rollno, section, city) {
        this.firstName = firstName,
            this.rollno = rollno,
            this.section = section,
            this.city = city
    }
}
const per1 = new Person('muzahid', 1, 'a', 'dhaka');
const per2 = new Person('', '', '', 'dhaka');

//console.log(per2);