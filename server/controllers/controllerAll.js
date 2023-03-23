import Post from "../models/model.js";



const getAllData=async (req,res)=>{


const month= req.params.month;
const Products = await Post.find()

const MonthlyStat = Products.filter((t)=>{
    if(t.dateOfSale.split("-")[1]==month)
       return t
})

const totalNoOfSoldItems = MonthlyStat.filter((item)=>{
    if(item.sold===true){
        return "i"
        
    }
}).length
 

const initialValue = 0;
const totalAmountOfSale = MonthlyStat.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue
);



 const totalNoOfUnsoldItems=  MonthlyStat.length - totalNoOfSoldItems

const MonthlyStock = Products.filter((t)=>{
    if(t.dateOfSale.split("-")[1]==month)
       return t
})

const MonthlyPie = Products.filter((t)=>{
    if(t.dateOfSale.split("-")[1]===month)
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




const menClothing = MonthlyPie.filter((item)=>{
        if(item.category==="men's clothing")
            return item
        }).length

const jewelery = MonthlyPie.filter((item)=>{
        if(item.category==="jewelery"){
            return item
        }}).length

const electronics = MonthlyPie.filter((item)=>{
        if(item.category==="electronics"){
            return item
        }}).length
        
const womenClothing = MonthlyPie.filter((item)=>{
        if(item.category==="women's clothing"){
            return item
        }}).length
    
const sum= womenClothing+electronics+jewelery+menClothing



 res.json({
    monthlyStats:{
            soldItems:totalNoOfSoldItems,
            unSoldItems: totalNoOfUnsoldItems,
            totalAmountOfSale: totalAmountOfSale },

    barChart:{
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
    
            },
    pieChart:{
         womenClothing:womenClothing,
         electronics:electronics,
         jewelery:jewelery,
         menClothing: menClothing
            }
    })
}

export default getAllData;