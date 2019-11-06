var connection = require("./connection.js");


function printQuestionMarks(num) {
  var array = [];

  for (var i = 0; i < num; i++) {
    array.push("?");
  }

  return array.toString();
}

function objToSql(ob) {
  var array = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      array.push(key + "=" + ob[key]);
    }
  }

  return array.toString();
}


var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) { 
				throw err; 
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});

	},
	updateOne: function(table, colVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(colVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;
