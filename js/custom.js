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

//控制台样式自定义
var now1 = new Date();
function createtime1() {
    var grt = new Date("01/14/2023 22:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);
    var ascll = [
        `欢迎来到jianerssr的个人小屋`,
        `---便是仙禁春深，御炉香袅，临轩亲试。对天颜咫尺，定然魁甲登高第。`,
        `
     ██╗██╗ █████╗ ███╗   ██╗███████╗██████╗ ███████╗███████╗██████╗ 
     ██║██║██╔══██╗████╗  ██║██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗
     ██║██║███████║██╔██╗ ██║█████╗  ██████╔╝███████╗███████╗██████╔╝
██   ██║██║██╔══██║██║╚██╗██║██╔══╝  ██╔══██╗╚════██║╚════██║██╔══██╗
╚█████╔╝██║██║  ██║██║ ╚████║███████╗██║  ██║███████║███████║██║  ██║
 ╚════╝ ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
`,
        "jianerssr的个人小屋已经运行",
        dnum,
        "天啦!",
        "©2023 By jianerssr",
    ];
    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#3366ff",
            "",
            "color:#3366ff",
            "color:#3366ff",
            "",
            "color:#3366ff",
            ""
        )
    );
}
createtime1();
// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };