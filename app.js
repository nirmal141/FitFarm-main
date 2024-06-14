const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash")
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const cropName = ["Wheat", "Rice", "Jowar", "Maize", "Cotton", "Chickpeas", "Toor", "Sugarcane", "No Crop Recommended", "Bajra"];
const cropInfo = ["Wheat thrives in well-drained soil and requires full sunlight. Ensure proper irrigation during the growth stages, and consider crop rotation for healthier yields.",
"Rice needs ample water for cultivation. Keep the paddy fields flooded during the growing season and control weeds. Consider traditional or modern rice varieties based on your region.",
" Jowar is drought-tolerant and suitable for dry regions. Sow it in well-prepared soil with good drainage. Proper spacing and fertilization are essential for healthy growth.",
"Maize grows best in well-drained, loamy soil. Ensure adequate spacing between plants and provide regular watering. Protect against pests like corn borers.",
"Cotton thrives in warm climates. Ensure well-drained soil and control pests like bollworm. Plan for proper cotton picking and ginning.",
"Chickpeas prefer sandy soil and moderate watering. Inoculate seeds for better nitrogen fixation and control aphids and pod borers.",
"Toor grows well in tropical climates. Maintain well-drained soil, and protect against pests like pod borers and Fusarium wilt.",
"Sugarcane thrives in tropical climates. Choose disease-resistant varieties and ensure adequate irrigation. Pay attention to weed control and sugar content for optimal yield.",
"Oops! For given geographical area and parameters provided, no crop is recommended due to higher concentration of",
"Bajra is well-suited for arid regions. It's a hardy crop that requires minimal water but thrives in full sunlight. To cultivate Bajra successfully, plant it in rows with adequate spacing to allow the plant to mature fully. It's crucial to prepare the soil well, adding organic matter to enhance nutrient retention."]

app.get("/", function(req, res){
    
        res.render("index")
      })
      

      app.post("/", function(req, res){
        // res.render("test")
       
          var ph =  req.body.phLevel;
          var humid = req.body.humidity;
          var temp = req.body.temperature;
          var n = req.body.nitrogen;
          var p = req.body.phosphorus;
          var k = req.body.potassium;

          if (ph>=6 && ph<=7 && humid>=60 && humid<=80 && temp>=10 && temp<=24 && n>=40 && n<=60 && p>=30 && p<=40 && k>=20 && k<=30){
            res.render("prediction", {pCropImg: cropName[0], pCropName: cropName[0], pCropInfo: cropInfo[0]})
          } else if (ph>=6 && ph<=7 && humid>=70 && humid<=85 && temp>=24 && temp<=37 && n>=100 && n<=150 && p>=30 && p<=90 && k>=30 && k<=110){
            res.render("prediction", {pCropImg: cropName[1], pCropName: cropName[1], pCropInfo: cropInfo[1]})
          } else if (ph>=6 && ph<=8 && humid>=30 && humid<=40 && temp>=25 && temp<=35 && n>=40 && n<=60 && p>=20 && p<=30 && k>=20 && k<=30){
            res.render("prediction", {pCropImg: cropName[2], pCropName: cropName[2], pCropInfo: cropInfo[2]})
          } else if (ph>=6 && ph<=8 && humid>=50 && humid<=75 && temp>=18 && temp<=32 && n>=120 && n<=160 && p>=60 && p<=80 && k>=60 && k<=80){
            res.render("prediction", {pCropImg: cropName[3], pCropName: cropName[3], pCropInfo: cropInfo[3]})
          } else if (ph>=5 && ph<=7 && humid>=60 && humid<=80 && temp>=24 && temp<=30 && n>=90 && n<=150 && p>=30 && p<=40 && k>=40 && k<=60){
            res.render("prediction", {pCropImg: cropName[4], pCropName: cropName[4], pCropInfo: cropInfo[4]})
          } else if (ph>=6 && ph<=7 && humid>=50 && humid<=70 && temp>=18 && temp<=24 && n>=20 && n<=40 && p>=20 && p<=30 && k>=20 && k<=30){
            res.render("prediction", {pCropImg: cropName[5], pCropName: cropName[5], pCropInfo: cropInfo[5]})
          } else if (ph>=6 && ph<=7 && humid>=60 && humid<=80 && temp>=25 && temp<=39 && n>=30 && n<=70 && p>=20 && p<=70 && k>=20 && k<=90){
            res.render("prediction", {pCropImg: cropName[6], pCropName: cropName[6], pCropInfo: cropInfo[6]})
          } else if (ph>=5 && ph<=8 && humid>=75 && humid<=85 && temp>=20 && temp<=32 && n>=100 && n<=150 && p>=30 && p<=60 && k>=60 && k<=100){
            res.render("prediction", {pCropImg: cropName[7], pCropName: cropName[7], pCropInfo: cropInfo[7]})
          } else if (ph>=10 || ph<=4 || humid>=100 || humid<=50 || temp>=45 || temp<=10 || n>=200 || n<20 || p>=200 || p<20 || k>=200 || k<20){
            res.render("prediction", {pCropImg: cropName[8], pCropName: cropName[8], pCropInfo: cropInfo[8]})
          }  else res.render("prediction", {pCropImg: cropName[9], pCropName: cropName[9], pCropInfo: cropInfo[9]})
          console.log (ph, humid, temp, n, p, k)
      })

      app.get("/prediction", function(req, res){
        res.render("prediction", {pCropName: cropName})
      })
      
        






  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });