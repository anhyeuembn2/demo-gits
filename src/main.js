import Navigo from "navigo";
const router=new Navigo("/",{linksSelector:"a"});

const print=(content)=>{
   document.querySelector('#app').innerHTML=content
}


router.on({
   "/":()=>{
      print('Home Page')
   },
   "/about":()=>{
      print("About Page")
   }
})
router.resolve();