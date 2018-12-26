var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/sampledata"
mongoose.connect(mongoDB);
var db = mongoose.connection;

function dbConnection(){
	// Check DB connection
	db.once("open", function(){
		console.log("Connected to MongoDB");
	});
	// Check for DB errors
	db.on("error", function(err){
		console.log(err);
	});
}

function getReport(){
	dbConnection();
	
	db.users.group({
     keyf: function(doc) {
               return { age: new Date().getFullYear-doc.dob().getFullYear,
						gender: null
			   };
           },
     cond: { Nationality: "NL"},
    reduce: function( curr, result ) {
				result.count++;
            },
    initial: {gender:["Male","Female"], count: 0 },
    finalize: function(result) {
		
		var age = [
		   30, 50, 51
		  ];
		var cnt = [0,0,0];
		switch(result.gender){
			case "Male":
				if(weekdays[result.age]>-1 && weekdays[result.age]<31){
					result.age = weekdays[result.age];
					cnt[0]=cnt[0]+result.count;
				}
				else if(weekdays[result.age]>30 && weekdays[result.age]<51){
					result.age = weekdays[result.age];
					cnt[1]=cnt[1]+result.count;
				}
				else(weekdays[result.age]>50){
					result.age = weekdays[result.age];
					cnt[2]=cnt[2]+result.count;
				}
				break;
			case "Female":
				if(weekdays[result.age]>-1 && weekdays[result.age]<31){
					result.age = weekdays[result.age];
					cnt[0]=cnt[0]+result.count;
				}
				else if(weekdays[result.age]>30 && weekdays[result.age]<51){
					result.age = weekdays[result.age];
					cnt[1]=cnt[1]+result.count;
				}
				else(weekdays[result.age]>50){
					result.age = weekdays[result.age];
					cnt[2]=cnt[2]+result.count;
				}
			result.count=cnt;
	  }
	  db.close();
   })
  
}