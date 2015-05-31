var employeeDb = require('./employee.js');

employeeDb.getAllEmployees(function(data){
	console.log(data);
});