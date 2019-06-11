show dbs
show collections
use points
db.points.insert(
{
    "point_slug":"regen_1",
    "coordinates":"-43.160195145374814,-20.177999014647924",
    "data":"Jul4",
    "year":"1985",
    "LT-GEE-NDVI":"0.281"}
)
db.points.find()
db.points.update(
    {"coordinates":"[-43.160195145374814,-20.177999014647924]"},
       {$set: 
           {"coordinates":"-43.160195145374814,-20.177999014647924"}
       })
       
 db.points.insert(
       { point_slug: "regen_1",
         coordinates: [
            {longtitude: "-43.160195145374814", latitude: "-20.177999014647924"},
           ],
         datas: [ 
            {data_1:"Jul 4/1985", EVI2LTGEE:"0.35"},
            {data_2:"Jul 4,1985", EVI2LTGEE:"348"},
            {data_3:"Aug 5, 1985", EVI2LTGEE:"347"},
            {data_4:"Aug 21, 1985", EVI2LTGEE:"345"},
            {data_5:"Mar 17, 1986", EVI2LTGEE:"343"},
            {data_6:"Apr 18, 1986", EVI2LTGEE:"341"},
            {data_7:"May 4, 1986", EVI2LTGEE:"0.3"},
            {data_8:"May 20, 1986", EVI2LTGEE:"338"},
    ]
        
})