const employees = [
  { id: 1, name: "Alice Martin",  department: "HR",      salary: 45000, specialization: "Python" },
  { id: 2, name: "Bob Dupont",    department: "IT",      salary: 55000, specialization: "JavaScript" },
  { id: 3, name: "Clara Ndiaye",  department: "HR",      salary: 47000, specialization: "JavaScript" },
  { id: 4, name: "David Chen",    department: "Finance", salary: 60000, specialization: "Excel" },
];

const output = document.getElementById("employeesDetails");

function displayEmployees() {
  output.innerHTML = "<h2>All Employees</h2>";
  employees.forEach(emp => {
    output.innerHTML += `<p>${emp.id} - ${emp.name} (${emp.department}) : ${emp.salary}€ | ${emp.specialization}</p>`;
  });
}

function calculateTotalSalaries() {
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  output.innerHTML = `<h2>Total Salaries : ${total}€</h2>`;
}

function displayHREmployees() {
  const hrEmployees = employees.filter(emp => emp.department === "HR");
  output.innerHTML = "<h2>HR Employees</h2>";
  hrEmployees.forEach(emp => {
    output.innerHTML += `<p>${emp.name}</p>`;
  });
}

function findEmployeeById(id) {
  const emp = employees.find(emp => emp.id === id);
  output.innerHTML = emp
    ? `<h2>Employee Found : ${emp.name} - ${emp.department}</h2>`
    : `<h2>No employee with ID ${id}</h2>`;
}

function findEmployeeBySpecialization() {
  const result = employees.filter(emp => emp.specialization === "JavaScript");
  output.innerHTML = "<h2>Employees with JavaScript Specialization</h2>";
  if (result.length === 0) {
    output.innerHTML += "<p>No employees found.</p>";
  } else {
    result.forEach(emp => {
      output.innerHTML += `
        <p>
          ID: ${emp.id} | Name: ${emp.name} | 
          Department: ${emp.department} | 
          Salary: ${emp.salary}€ | 
          Specialization: ${emp.specialization}
        </p>`;
    });
  }
}