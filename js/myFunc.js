function submitFunc() {
  var money = $("#money").val();
  var one_yen_height = 0.15; // 0.15cm
  
  var skytree_height = 63400; // 63400cm
  
  var money_tree = money * one_yen_height;
  
  var compare = (money_tree / skytree_height) * 100;
  
  compare = Math.round(compare * 1000000) / 1000000;

	var str = "私の所持金を1円玉にして積み上げると、スカイツリーの " + compare + " ％の高さになります。";
	
	$("#str").html(str + "<a href=\"https://twitter.com/intent/tweet?text=" + str + " http://shun-ichiro.com/skytree/ @pinkroot\" target=\"_blank\">" + "<img src=\"./img/tweet.gif\" alt=\"ツイートする\">" + "</a>");

}

// http://d.hatena.ne.jp/kokoromo/20090113/1231828845 より
function zentohan(obj){
	if(typeof(obj.value)!="string")return false;
	var han= '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@-.,:';
	var zen= '１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ＠－．，：';
	var word = obj.value;
	for(i=0;i<zen.length;i++){
		var regex = new RegExp(zen[i],"gm");
		word = word.replace(regex,han[i]);
	}
	obj.value = word;
}