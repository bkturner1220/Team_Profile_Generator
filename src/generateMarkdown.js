const generateMarkdown = (data) => {
    console.log(data);
    const arrayHTML = [];
    
    // Create functions for each type of employee that returns HTML data
    const generateIntern = intern => {
        console.log(intern);
        let intHTML = ` 
        <div class="card employee-card" style="width: 18rem; text-transform:uppercase">
    <div class="card-header">
        <h2 class="card-title">${ intern.name }</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ intern.id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ intern.email }">${ intern.email }</a></li>
            <li class="list-group-item">School: ${ intern.school }</li>
        </ul>
    </div>
</div>
        `;
        arrayHTML.push(intHTML);}

    const generateEngineer = engineer => {
        console.log(engineer);
        let engHTML = ` 
        <div class="card employee-card" style="width: 18rem; text-transform:uppercase">
    <div class="card-header">
        <h2 class="card-title">${ engineer.name }</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ engineer.id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ engineer.email }">${ engineer.email }</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${ engineer.github }" target="_blank" rel="noopener noreferrer">${ engineer.github }</a></li>
        </ul>
    </div>
</div>
        `;
        arrayHTML.push(engHTML);}

    const generateManager = manager => {
        console.log(manager);
        let mgrHTML = ` 
        <div class="card employee-card" style="width: 18rem; text-transform:uppercase">
    <div class="card-header">
        <h2 class="card-title">${ manager.name }</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ manager.id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ manager.email }">${ manager.email }</a></li>
            <li class="list-group-item">Office number: ${ manager.officeNumber }</li>
        </ul>
    </div>
</div>
        `;
        arrayHTML.push(mgrHTML);}

            // create a loop for all of the employees
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === "Intern") {
            generateIntern(data[i]);
        }
        if (data[i].getRole() === "Engineer") {
            generateEngineer(data[i]);
        }
        if (data[i].getRole() === "Manager") {
            generateManager(data[i]);
        }
    }

    return arrayHTML.join('');}

    // Main style that employee cards will be push to
module.exports = data => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/assets/css/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
    <h1> TEAM MEMBERS </h1>
          </div>
       </div>
    </div>
    <div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
                        ${generateMarkdown(data)} 
           </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/e30414fb31.js" crossorigin="anonymous"></script>
</body>
</html>
    `;
}

