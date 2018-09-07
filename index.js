var Redis = require('ioredis');
var redis = new Redis();

redis.keys("*",function(err,keys){
    console.log(keys.length);
    var tasks=0;

    console.time("fetching");
    for(i=0;i<keys.length;i++) {
        tasks++;
        redis.get(keys[i], function (err, result) {
            // console.log(result);
            tasks--;

            if(tasks==0) {
                console.log("All done");
                console.timeEnd("fetching");
            }

        
          });
    }
});