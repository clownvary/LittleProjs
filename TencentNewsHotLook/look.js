var id=1250929750;//新闻id
var num=50;//热评显示条数
function getHotArr(data)
{
return  data.map(function(a,index){
  
return {"content":a.content,"up":a.up}; 
});
}
$.get("http://coral.qq.com/article/"+id+"/hotcomment?reqnum="+num,function(data){
   getHotArr(JSON.parse(data).data.commentid).map(function(a,index){console.log((index+1)+"*"+a.content+"----赞"+a.up+"\n");});
})
