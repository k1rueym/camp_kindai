/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓  JavaScript ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 


■命令したいHTMLタグを指定する
$('●●●')


■クリックイベントの設定
$('●●●').on('click', function(){


});

■代表的なjQueryの命令
show(), hide(), fadeOut(), append()

■変数
const ●●●　= ●●●;
let ●●●　= ●●●;

■if文
if(){

}else if(){

}else{


}

*/
$(function(){
  $("#spain").on("click", function(){
    alert("スペインで受け付けました。")
  });
});
$(function(){
  $("#japan").on("click", function(){
    alert("頑張ろう！！！")
  });
});
$(function(){
  $("#germany").on("click", function(){
    alert("ドイツで受け付けました。")
  });
});
$(function(){
  $("#costarica").on("click", function(){
    alert("コスタリカで受け付けました。")
  });
});

