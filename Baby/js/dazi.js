var str = "js 实现自动打字效果  的简单实现。我的乖乖斤斤计较";
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