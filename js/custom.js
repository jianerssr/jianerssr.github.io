// 分享按钮自定义js
// 分享本页
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页面信息已成功复制至剪贴板！小伙子，尽情分享去吧o(*￣▽￣*)ブ")
}

//f12提醒、复制提醒、粘贴提醒
window.onkeydown=e=>{123===e.keyCode&&btf.snackbarShow("开发者模式已打开，请记得遵循GPL协议哟(●'◡'●)")}
document.body.addEventListener("copy",(e=>{"TEXTAREA"==e.target.tagName&&""==e.target.className||btf.snackbarShow("滴\^o^/复制成功~")}))
document.body.addEventListener("paste",(e=>{btf.snackbarShow("滴\^o^/粘贴成功~")}))