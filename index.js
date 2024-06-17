const express=require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json({limit:'1mb'}))
app.use(express.json());
const port = 5500; 
const springedge=require('springedge');
//const db=require('./auth');
app.set('view engine','ejs');
var val=1;
const path = require("path"); 
const static_path = path.join(__dirname, "public"); 
app.use(express.static(static_path)); 
app.use(express.urlencoded({ extended: true })); 
const bcrypt = require("bcrypt")
const saltRounds = 10
// NO ched khani
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let currentProductDetails;
let arr=[];
app.get("/hellow",(req,res)=>{
  res.send("hellow");
}
        );
app.post("/AddProductDetails",(req,res)=>{
    currentProductDetails=req.body;
    res.send("correct");
});
app.post("/AddItem",(req,res)=>{
    arr.push(req.body);
    
    res.send("correct");
});
// app.get("/SearchProduct",(req,res)=>{
//     let url=req.query.name;
//       let str="%";
//       let md='%';
//     for(let i=0;i<url.length;i++)
//     {
//        str=str+url[i]+md;

//     }
//     console.log("opppp");
//     db.query(`select*from Product where productTitle like "${str}"`,(err,data)=>{
//         if(err)
//         {
//          console.log(err);
//         }
//         else
//         { 
//            while(data.length>10)
//            {
//               data.pop();
//            }
//        res.send(data); 
//         }
//     })
// })
app.get("/sendProductDetails",(req,res)=>{
    res.send(currentProductDetails);
});
app.get("/getAddItem",(req,res)=>{
 
console.log("hellow1");
    res.send(arr);
});
app.get("/RemoveCart",(req,res)=>{
    
   arr.pop();
    console.log("hellow2");
        res.send(arr);
    });
   
    
app.post("/SingUp",(req,res)=>{
  let data=req.body;
  console.log(data);
  let password=data.password;
  bcrypt
  .hash(password, saltRounds)
  .then(hash => {
    console.log('Hash ', hash)

  })
  .catch(err => console.error(err.message))

  console.log("hi");
  res.send("send");
})
app.post("/login",(req,res)=>{
    let data=req.body;
    console.log(data);
    let password=data.password;
    bcrypt
  .hash(password, saltRounds)
  .then(hash => {
    console.log('Hash ', hash)
       //check from databace user password and id  match or not 
  })
  .catch(err => console.error(err.message))

})
console.log("server is running");
app.listen(5500);














































































































































































































































































// const Razorpay = require('razorpay');  
// let YOUR_KEY_ID="rzp_test_E3ZIrnoUp2a7Pn";
// let YOUR_KEY_SECRET="RTFe4NYTlwVOEX2ASQZVJDQn";
// var instance = new Razorpay({
// 	key_id: YOUR_KEY_ID,
// 	key_secret: YOUR_KEY_SECRET,
//   });
// app.post('/createOrder', (req, res)=>{ 
// 	const {amount,currency,receipt, notes} = req.body;	
// 	//console.log(req.body);  
// 	instance.orders.create({amount, currency, receipt, notes}, 
// 		(err, order)=>{ 
// 		if(!err) 
// 			res.json(order) 
// 		else
// 			res.send(err); 
// 		console.log(order);
// 		} 
// 	) 
// }); 
// app.post("/CustomerByItem",(req,res)=>{
// 	console.log(req.body);
//    let about=req.body.about;
//    let src=req.body.src;
//    let type=req.body.type;
//    let treanding=req.body.treanding;
//    let discount=req.body.discount;
//    let price=req.body.price;
//    let name=req.body.name;
//    let like=req.body.like;
//    if(like===NaN||like===undefined)
//    {
// 	like=req.body.likes;
// 	console.log("hello like err   ",like);
//    }
//    try{
// 	db.query(`insert into CustomerFood (about,src,type,treanding,discount,price,name,likes) values ("${about}","${src}","${type}","${treanding}","${discount}","${price}","${name}",${like})`,(err,res)=>{
// 		if(err)
// 		throw err;
// 	});
// }catch(err){
// 	console.log("table err");
// }
//    res.send(`<h1>Hello this is avan singh</h1>`);
// })
// app.post("/CustomerRemoveByItem",(req,res)=>{
// 	var name=req.body.name;
// 	console.log("remove name from"+name);
// 	db.query(`delete from CustomerFood where Name="${name}"`,(err,res)=>{
// 		if(err)
// 		throw err;
// 	});
//    res.send({name:`<h1>Hellow this is avan singh</h1>`});
// })
// app.get("/cardData",(req,resp)=>{
// 	console.log("data do");
// 	try{
// 	db.query(`select*from CustomerFood`,(err,data)=>{
// 		if(err)
// 		throw err;
// 	console.log(data);
// 	resp.send(data);
// 	});
// }
// catch(err){
// 	console.log("hello cardData not retrive data")
// }
// });
// app.get("/UpdateLike",(req,res)=>{

// })
// app.get("/RemoveItem",(req,res)=>{

// })
// app.post("/SaveSearchData",(req,res)=>{ 
// 	if(req.body.searchValue.length>3)
// 	db.query(`insert into searchData (data) values ("${req.body.searchValue}")`,(err,data)=>{
// 		if(err)
// 		console.log("search save data err");
// 	})
// 	res.send("data save successfully");
// })
// app.get("/RetriveSearchData",(req,res)=>{
// 	   let sql=req.query.search;
// 	   console.log("hellow"+sql);
	   
	  
// 	   if(sql.length>2)
// 	db.query(`select data from searchData where data like '${sql}'`,(err,data)=>{
// 		if(err)
// 		throw err;
// 	console.log(data);
// 	   res.send(data);
// 	})
// })
// app.post("/PushPurchaseHistery",(req,res)=>{
//         let item=req.body;
// 		for(let i=0;i<item.length;i++)
// 		{
// 			console.log(req.body);
// 			let about=req.body.about;
// 			let src=req.body.src;
// 			let type=req.body.type;
// 			let treanding=req.body.treanding;
// 			let discount=req.body.discount;
// 			let price=req.body.price;
// 			let name=req.body.name;
// 			let like=req.body.like;
// 			try{
// 			 db.query(`insert into PurchaseHistery(about,src,type,treanding,discount,price,name,likes) values ("${about}","${src}","${type}","${treanding}","${discount}","${price}","${name}",${like})`,(err,res)=>{
// 				 if(err)
// 				 throw err;
			 
// 			 });
// 		 }catch(err){
// 			 console.log("table err");
// 		 }
// 		}
// 		res.send("correct this side");
// })
// app.get("/PurchaseHistery",(req,res)=>{
// 	db.query("select*from PurchaseHistery",(err,data)=>{
// 		if(err)
// 		throw err;
// 	res.send(data);
// 	})
// })
// app.get("/SendFoodData",(req,res)=>{
// 	try{
// 	db.query("select*from CustomerData",(err,data)=>{
// 		if(err)
// 		throw err;
// 	console.log("data send successfully")
// 		res.send(data);
// 	})
// }
// catch(err)
// {
// 	console.log("data can not retrive from customerFood data");
// }
// })
// app.post("/AddItem",(req,res)=>{
//     let about=req.body.about;
//    let src=req.body.src;
//    let type=req.body.type;
//    let treanding=req.body.treanding;
//    let discount=req.body.discount;
//    let price=req.body.price;
//     let name=req.body.name;
//    let like=req.body.like;
//    try{
// 	db.query(`insert into CustomerData (about,src,type,treanding,discount,price,name,likes) values ("${about}","${src}","${type}","${treanding}","${discount}","${price}","${name}","${like}")`,(err,res)=>{
// 		if(err)
// 		throw err;
// 	});
// }catch(err){
// 	console.log("table err");
// }
//    res.send(`<h1>Hellow this is avan singh</h1>`);
// })

