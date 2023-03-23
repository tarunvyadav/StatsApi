import Post from "../models/model.js";
import fetch from 'node-fetch';


 const getPost=async(req,res)=>{
    const api_url ="https://s3.amazonaws.com/roxiler.com/product_transaction.json"
     const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
 
     for(let i =0; i<json.length; i++ ){
      
        const post = new Post({
            id: json[i]["id"],
            title: json[i]["title"],
            price: json[i]["price"],
            description: json[i]["description"],
            category: json[i]["category"],
            image: json[i]["image"],
            sold: json[i]["sold"],
            dateOfSale: json[i]["dateOfSale"]
         })
      post.save()
        
    }
   
    res.json(json)
 }

 const getStat = async(req,res)=>{
 const yearMonth= req.params.yearMonth.split('-');
 const year = yearMonth[0];

 const month = yearMonth[1];
 const Products= await Post.find()
 const MonthlyStock = Products.filter((t)=>{
    if(t.dateOfSale.split("-")[1]==month)
       return t
 })

 const totalNoOfSoldItems = MonthlyStock.filter((item)=>{
    if(item.sold===true){
        return "i"
        
    }
 }).length

  const initialValue = 0;
  const totalAmountOfSale = MonthlyStock.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );



 const totalNoOfUnsoldItems=  MonthlyStock.length - totalNoOfSoldItems

  res.json({soldItems:totalNoOfSoldItems,
            unSoldItems: totalNoOfUnsoldItems,
            totalAmountOfSale: totalAmountOfSale })
 }

//---------------------------------*********************************----------------------------------
 const getBar = async(req,res)=>{
    const month= req.params.month;
    const Products = await Post.find()

 

   const MonthlyStock = Products.filter((t)=>{
    if(t.dateOfSale.split("-")[1]==month)
       return t
    })



    const items1 = MonthlyStock.filter((item)=>{
    if(item.price>0&&item.price<=100)
       return item
    }).length
    const items2 = MonthlyStock.filter((item)=>{
    if(item.price>100&&item.price<=200)
       return item
    }).length
    const items3 = MonthlyStock.filter((item)=>{
    if(item.price>200&&item.price<=300)
       return item
    }).length
    const items4 = MonthlyStock.filter((item)=>{
    if(item.price>300&&item.price<=400)
       return item
    }).length
    const items5 = MonthlyStock.filter((item)=>{
    if(item.price>400&&item.price<=500)
       return item
    }).length
    const items6 = MonthlyStock.filter((item)=>{
    if(item.price>500&&item.price<=600)
       return item
    }).length
    const items7 = MonthlyStock.filter((item)=>{
    if(item.price>600&&item.price<=700)
       return item
    }).length
    const items8 = MonthlyStock.filter((item)=>{
    if(item.price>700&&item.price<=800)
       return item
    }).length
    const items9 = MonthlyStock.filter((item)=>{
    if(item.price>800&&item.price<=900)
       return item
    }).length
    const items10 = MonthlyStock.filter((item)=>{
    if(item.price>900)
       return item
    }).length



 res.json({
    "0-100": items1,
    "100-200":items2,
    "200-300":items3,
    "300-400":items4,
    "400-500":items5,
    "500-600":items6,
    "600-700":items7,
    "700-800":items8,
     "800-900":items8,
    "900<":items10,
    
 })
}
//-----------------*********************---------------------
const getPie= async (req,res)=>{
    const month= req.params.month;
    const Products = await Post.find()

 const MonthlyStock = Products.filter((t)=>{
    if(t.dateOfSale.split("-")[1]===month)
       return t
 })

    const menClothing = MonthlyStock.filter((item)=>{
        if(item.category==="men's clothing")
            return item
        }).length
    const jewelery = MonthlyStock.filter((item)=>{
        if(item.category==="jewelery"){
            return item
        }}).length
    const electronics = MonthlyStock.filter((item)=>{
        if(item.category==="electronics"){
            return item
        }}).length
    const womenClothing = MonthlyStock.filter((item)=>{
        if(item.category==="women's clothing"){
            return item
        }}).length
    
    const sum= womenClothing+electronics+jewelery+menClothing
      

         res.json({
         womenClothing:womenClothing,
         electronics:electronics,
         jewelery:jewelery,
         menClothing: menClothing
         })

    }




export {getPost,getBar,getStat,getPie}

