// Constructor function for Student
function Student(name, grade) {
    this.name = name;  // Student's name
    this.grade = grade; // Student's grade
  
    // Method to simulate the student studying
    this.study = function() {
      console.log(`${this.name} is studying.`);
    };
  
    // Method to get the student's grade
    this.getGrade = function() {
      return `${this.name}'s grade is ${this.grade}.`;
    };
  }
  
  // Creating instances of Student
  let student1 = new Student("Alice", "A");
  let student2 = new Student("Bob", "B");

  
  // Calling the study method
  student1.study(); // Output: Alice is studying.
  student2.study(); // Output: Bob is studying.
  
  // Using getGrade method to get the student's grade
  console.log(student1.getGrade()); // Output: Alice's grade is A.
  console.log(student2.getGrade()); // Output: Bob's grade is B.