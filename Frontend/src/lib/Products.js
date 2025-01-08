// export const Products =[
//     {
//         id:1,
//         title:"core i5 7th Gen",
//         description:"Best PC for Gaming",
//         price:600,
//         category:"PC"
//     },
//     {
//         id:2,
//         title:"core i9 8th Gen",
//         description:"Best PC for Designing",
//         price:500,
//         category:"PC"
//     },
//     {
//         id:3,
//         title:"core i3 3th Gen",
//         description:"Best PC for Editiong",
//         price:800,
//         category:"PC"
//     },
//     {
//         id:4,
//         title:"core i5 12th Gen",
//         description:"Best PC for Gaming",
//         price:900,
//         category:"PC"
//     },
//     {
//         id:4,
//         title:"core i9 12th Gen",
//         description:"Best PC for Gaming An Coding",
//         price:1200,
//         category:"PC"
//     },
//     //For Mobile and Console
//     {
//         id:5,
//         title:"Samsung Galaxy S21",
//         description:"Best Mobile for Gaming",
//         price:1200,
//         category:"Mobiles"
//     },
//     {
//         id:6,
//         title:"Samsung Galaxy S20",
//         description:"Best Mobile for Gaming",
//         price:1000,
//         category:"Mobiles"
//     },
//     {
//         id:7,
//         title:"Samsung Galaxy S10",
//         description:"Best Mobile for Gaming",
//         price:800,
//         category:"Mobiles"
//     },
//     {
//         id:8,
//         title:"Samsung Galaxy S9",
//         description:"Best Mobile for Gaming",
//         price:700,
//         category:"Mobiles"
//     },
//     {
//         id:9,
//         title:"Samsung Galaxy S8",
//         description:"Best Mobile for Gaming",
//         price:600,
//         category:"Mobiles"
//     },
//     {
//         id:10,
//         title:"Samsung Galaxy S7",
//         description:"Best Mobile for Gaming",
//         price:500,
//         category:"Mobiles"
//     },
//     {
//         id:11,
//         title:"Samsung Galaxy S6",
//         description:"Best Mobile for Gaming",
//         price:400,
//         category:"Mobiles"
//     },
//     {
//         id:12,
//         title:"Samsung Galaxy S5",
//         description:"Best Mobile for Gaming",
//         price:300,
//         category:"Mobiles"
//     },
//     {
//         id:13,
//         title:"Samsung Galaxy S4",
//         description:"Best Mobile for Gaming",
//         price:200,
//         category:"Mobiles"
//     },
//     {
//         id:14,
//         title:"Samsung Galaxy S3",
//         description:"Best Mobile for Gaming",
//         price:100,
//         category:"Mobiles"
//     },
//     {
//         id:15,
//         title:"Samsung Galaxy S2",
//         description:"Best Mobile for Gaming",
//         price:50,
//         category:"Mobiles"
//     },
//     {
//         id:16,
//         title:"Samsung Galaxy S1",
//         description:"Best Mobile for Gaming",
//         price:10,
//         category:"Mobiles"
//     },
//     {
//         id:17,
//         title:"Samsung Galaxy S21",
//         description:"Best Mobile for Gaming",
//         price:1200,
//         category:"Mobiles"
//     },
//     //Consoles
//     {
//         id:18,
//         title:"PS5",
//         description:"Best Console for Gaming",
//         price:1200,
//         category:"Consoles"
//     },
//     {
//         id:19,
//         title:"PS4",
//         description:"Best Console for Gaming",
//         price:1000,
//         category:"Consoles"
//     },
//     {
//         id:20,
//         title:"PS3",
//         description:"Best Console for Gaming",
//         price:800,
//         category:"Consoles"
//     },
//     {
//         id:21,
//         title:"PS2",
//         description:"Best Console for Gaming",
//         price:700,
//         category:"Consoles"
//     },
//     {
//         id:22,
//         title:"PS1",
//         description:"Best Console for Gaming",
//         price:600,
//         category:"Consoles"
//     },
//     {
//         id:23,
//         title:"Xbox Series X",
//         description:"Best Console for Gaming",
//         price:1200,
//         category:"Consoles"
//     },
//     {
//         id:24,
//         title:"Xbox Series S",
//         description:"Best Console for Gaming",
//         price:1000,
//         category:"Consoles"
//     },
//     {
//         id:25,
//         title:"Xbox One",
//         description:"Best Console for Gaming",
//         price:800,
//         category:"Consoles"
//     },
//     {
//         id:26,
//         title:"Xbox 360",
//         description:"Best Console for Gaming",
//         price:700,
//         category:"Consoles"
//     },
//     {
//         id:27,
//         title:"Xbox",
//         description:"Best Console for Gaming",
//         price:600,
//         category:"Consoles"
//     },
//     {
//         id:28,
//         title:"Nintendo Switch",
//         description:"Best Console for Gaming",
//         price:1200,
//         category:"Consoles"
//     },
//     {
//         id:29,
//         title:"Nintendo Wii",
//         description:"Best Console for Gaming",
//         price:1000,
//         category:"Consoles"
//     },
//     {
//         id:30,
//         title:"Nintendo GameCube",
//         description:"Best Console for Gaming",
//         price:800,
//         category:"Consoles"
//     },
//     {
//         id:31,
//         title:"Nintendo 64",
//         description:"Best Console for Gaming",
//         price:700,
//         category:"Consoles"
//     },
    
// ]

export const Products = async()=>{
    const res = await fetch("http://localhost:5000/api/product")
    return res.json();
}