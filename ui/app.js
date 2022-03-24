// ----------------------------[Globals]-----------------------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let ME = getRandomInt(10);
let CH = "red";
const CICONS = [
    `<div class="rounded-full bg-red-700 w-10 h-10"></div>`,
    `<div class="rounded-full bg-green-700 w-10 h-10"></div>`,
    `<div class="rounded-full bg-blue-700 w-10 h-10"></div>`,
]
const ICONS = [
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>`,
    `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>`,

];
const INFO = {
    "red": {chname: "Red Group", icon: CICONS[0]},
    "green": {chname: "Green Group", icon: CICONS[1]},
    "blue": {chname: "Blue Group", icon: CICONS[2]},

}
const TABLE = document.getElementById("msgtable");
const API = "http://localhost:3000";
const socket = io(API);
let N = 0;
function DEFAULT() {
    CH = "red";
    getch("red");
}
// ----------------------------[/Globals]-----------------------------------
//
// ----------------------------[Support Scripts]-----------------------------------
//
//always scroll down
function scroll() {
    let tabla = document.querySelector("#msgtable");
    tabla.scrollTop = tabla.scrollHeight-tabla.clientHeight;
    tabla.scrollTop = tabla.scrollHeight-tabla.clientHeight;
}

//build msg html string
function msgstr(iconid, msg) {
    let m = null;
    if (iconid == ME) {
        m = `
        <!-- [My message] -->
        <div class="flex flex-row-reverse space-y-reverse space-x-reverse space-x-2 space-y-2 items-center">
            ${ICONS[iconid]}
            <div class="bg-teal-400 rounded p-3">${msg}  </div>
        </div>
        <!-- [/My message] -->
        `;
    } else {
        m = `
        <!-- [Messgage] -->
        <div class="flex flex-row space-x-2 space-y-2 items-center">
            ${ICONS[iconid]}
            <div class="bg-sky-200 rounded p-3">${msg} </div>
        </div>
        <!-- [/Message] -->
        `;
        
    }
    return m;
}
//test table build (offline function)
function testbuild() {
    const testmsgs = [{icon: 10, msg: "Valami", ch: "red"}, {icon: 10, msg: "Teszt", ch: "red"}, {icon: 10, msg: "Üzi", ch: "red"}];
    TABLE.innerHTML = "";
    testmsgs.forEach(e => {
        TABLE.innerHTML += msgstr(e.icon, e.msg);
    });
}

//build (build msg html, css)
function build(m, i) {
    TABLE.innerHTML += msgstr(i, m);
    N += 1;
    document.getElementById("channelcounter").innerHTML = N;
}

//Send (communicatte with server)
function send() {
    let input = document.getElementById("txt").value;
    socket.emit("msg-reg", {"msg": input, "id": ME, "ch": CH});
    document.getElementById("txt").value = "";
    //build(input, ME);
    //scroll()
}

//get channel, channel cahnge, context build
function getch(chname) {
    console.log(chname);
    socket.emit("join", chname);
    (async () => {
        const res = await fetch(API+"/"+chname);
        console.log(res);
        const arr = await res.json();
        console.log(arr);
        TABLE.innerHTML = "";
        arr.forEach(e => {
            build(e["msg"], e["id"]);
        });
        N = arr.length;
        //icon, név, counter
        document.getElementById("channelicon").innerHTML = INFO[chname].icon;
        document.getElementById("channelname").innerHTML = INFO[chname].chname;
        document.getElementById("channelcounter").innerHTML = N;
        CH = chname;

      })();
    
    
      

}
// ----------------------------[/Support Scripts]-----------------------------------
// 
// ----------------------------[Listenings, Init]-----------------------------------

//Listen to new msg
socket.on("msg", ({"msg": m, "id": i, "ch": c})=>{
    if (c == CH) {
        build(m, i);
        scroll()
    } else {
        console.log("Unhandeled message in other channel");
    }
    
});
//Init
document.getElementById("uid").innerHTML = ICONS[ME];
getch("red");

//Send message enter
document.getElementById("txt").addEventListener("keypress", (e)=>{
    if (e.which === 13 && !e.shiftKey) {
        send();
        document.getElementById("txt").value = "";
    }
});
// ----------------------------[/Listenings, Init]-----------------------------------
//
//
(async () => {
    /* ... */
  })();
  