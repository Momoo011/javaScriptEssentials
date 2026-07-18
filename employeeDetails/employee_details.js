// 1. Tableau de données employés
const employees = [
  { id: 1, name: "Alice Martin", department: "HR", salary: 45000 },
  { id: 2, name: "Bob Dupont", department: "IT", salary: 55000 },
  { id: 3, name: "Clara Ndiaye", department: "HR", salary: 47000 },
  { id: 4, name: "David Chen", department: "Finance", salary: 60000 },
];

const output = document.getElementById("employeesDetails");

// 2. Afficher tous les employés (forEach ou map)
function displayEmployees() {
  output.innerHTML = "<h2>Tous les employés</h2>";
  employees.forEach(emp => {
    output.innerHTML += `<p>${emp.id} - ${emp.name} (${emp.department}) : ${emp.salary}€</p>`;
  });
}

// 3. Calculer le total des salaires (reduce)
function calculateTotalSalaries() {
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  output.innerHTML = `<h2>Total des salaires : ${total}€</h2>`;
}

// 4. Filtrer les employés RH (filter)
function displayHREmployees() {
  const hrEmployees = employees.filter(emp => emp.department === "HR");
  output.innerHTML = "<h2>Employés RH</h2>";
  hrEmployees.forEach(emp => {
    output.innerHTML += `<p>${emp.name}</p>`;
  });
}

// 5. Trouver un employé par ID (find)
function findEmployeeById(id) {
  const emp = employees.find(emp => emp.id === id);
  output.innerHTML = emp
    ? `<h2>Employé trouvé : ${emp.name} - ${emp.department}</h2>`
    : `<h2>Aucun employé avec l'ID ${id}</h2>`;
}