
//
export default {
  get_sub_items: function(parent_id){
    var ret = {}
    var arr = [
      {id: 1 , 
        subData: [
          {name: 'subAction-1' , action: '/action/1'},
          {name: 'subAction-2' , action: '/action/2'},
          {name: 'subAction-3' , action: '/action/3'},
        ] 
      } ,
      {id: 2 , 
        subData: [
          {name: 'subAction-11' , action: '/action/11'},
          {name: 'subAction-12' , action: '/action/12'},
          {name: 'subAction-13' , action: '/action/13'},
          {name: 'サブメニュー14' , action: '/action/14'},
          {name: 'サブメニュー15' , action: '/action/15'},
          {name: 'サブメニュー16' , action: '/action/16'},
        ] 
      } ,
    ]
    arr.forEach(function(item){
//console.log(item.id );
      if(item.id === parent_id){
        ret = item.subData
      }
    });    
    return ret
  },  
}
