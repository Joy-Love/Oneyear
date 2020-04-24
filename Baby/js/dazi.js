var str = "Dear 梦荧：\n" +
    "\t我们在一起一周年了。这一年里，我们经历了很多。从相遇到牵手，从拥抱到接吻，我们经历了心动的第一次。从课室到饭堂，从图书馆到电影院，从宁静的校园到繁华的都市，每个地方都撒满了回忆。遇见你是我在大学里最幸运的事，和你在一起是我感到最快乐的时光。这一年里有笑有欢乐，也有泪有不愉快。可能是因为我的不成熟，但是我们熬过来了。我们慢慢相知，互相了解，互相包容。时光匆匆，一年过去了。这是我们的一周年，我却不能陪在你身边度过。这有点遗憾，但是以后的日子还很长，我们一起慢慢往前走……\n" +
    "我好想你啊  （点击鼠标有惊喜哦）\n";
var i = 0;

function typing() {
    var divTyping = document.getElementById("divTyping");
    if (i <= str.length) {
        // str.slice(start, end) 切片函数，切取数组中的从start到end的字符串，不修改原数组
        // start 参数必须要有，end 可以没有，默认数组最后一个
        divTyping.innerHTML = str.slice(0, i++) + "_";
        setTimeout("typing()", 200); // 递归调用
    } else {
        divTyping.innerHTML = str; // 结束打字，移除光标
    }
}
// 该函数实际上不是一个个输出，只是后面的长度多一的字符串覆盖前面的字符串
typing();
