// Write your solution in this file!

//Question 1
// Initial employee object
let employee = {};

// Function to update employee with a new key and value (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

//Question 2
// Function to destructively update employee with a new key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

//Question 3
// Function to delete a key from a clone of employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const { [key]: omitted, ...newEmployee } = employee;
  return newEmployee;
}

//Question 4
// Function to destructively delete a key from employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
