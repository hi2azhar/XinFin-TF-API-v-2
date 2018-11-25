var sql = require("mssql");  
var connect = function()  
{  
    var conn = new sql.ConnectionPool({ 
        user: 'sa',  
      
        database: 'AMLTH',
        options: {           
            encrypt: false
        }
      
    });  
  
    return conn;  
};  
  
module.exports = connect; 
