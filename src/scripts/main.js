/* Once the resources are set up, use fetch calls to get your data, 
and use your DOM skills to display a card for each employee. 
It should display the employee name, the name of their department, and which computer they are using.
*/
//http://localhost:3000/employees?_expand=computer
//http://localhost:3000/employees?_expand=computer&_expand=department

fetch("http://localhost:3000/employees?_expand=computer&_expand=department")
.then(r => r.json())
.then(entries => {
    const container = document.getElementById("container")
    entries.forEach(entry=> {
        const employee = `
        <article class="employee">
            <header class="employee__name">
                <h1>${entry.name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${entry.department.name} department
            </section>
            <section class="employee__computer">
                Currently using a ${entry.computer.name}
            </section>
        </article>`
        container.innerHTML += employee
    })
})