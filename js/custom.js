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

//页脚底部运行时间
setInterval(() => {
    // let create_time = Math.round(new Date('2023-01-14 22:00:00').getTime() / 1000); //在此行修改建站时间
    // 有苹果用户发现safari浏览器不能正常运行，百度了一下发现是格式化的问题，改成下面这种应该就可以了。感谢反馈。
    let create_time = Math.round(new Date('2023/01/14 22:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0);
    var nol = function(h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 24 * 3600) {
        time[0] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[1] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[2] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second >= 0) {
        time[3] = nol(second);
    }
    let currentTimeHtml = ""
    currentTimeHtml += ' 本站已安全运行 ' + time[0] + ' 天 ' + time[1] + ' 小时 ' + time[2] + ' 分 ' + time[3] + ' 秒 ';
    document.getElementById("runtime").innerHTML = currentTimeHtml;
}, 1000);

//js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素
//2022.9.11 已修复，需要jq，请自行引入
document.getElementById("name-container").setAttribute("style", "display:none");
var position = $(window).scrollTop();
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    document.getElementById("name-container").setAttribute("style", "");
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
  } else {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");
  }
  position = scroll;
});
function scrollToTop(){
    document.getElementsByClassName("menus_items")[1].setAttribute("style","");
    document.getElementById("name-container").setAttribute("style","display:none");
    btf.scrollToDest(0, 500);
}
//修复没有弄右键菜单的童鞋无法回顶部的问题
document.getElementById("page-name").innerText = document.title.split(" | jianerssr的个人小屋")[0];