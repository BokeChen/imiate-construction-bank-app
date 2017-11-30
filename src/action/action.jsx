const actions = {

 changeText:function(num){    
      switch(num){
      case 1:
      return {type:'AlterMain',payload:"mainContainer had been changed"};
      case 2:
       return {type:'AlterTopic',payload:"topicContainer had been changed"};
       default:
       return action;
       
   }
   
},
 changeInfo:(infotype,string)=>{     
    switch(infotype){
        case "inp":
        return {type:"AlterHeaderInp",payload:string};
        case "div":
         return {type:"AlterHeaderDiv",payload:string};
         case "info":
         return {type:"AlterHeaderInfo",payload:string};
         default:
         return action;
    }
},
changeImg:(imglist)=>{ 
    var list = imglist.slice();  
    var temp = list.shift(); 
        list.push(temp);       
      return {type:"AlterImglist",payload:list};
      
}
};
export default actions;