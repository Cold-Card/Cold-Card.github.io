// JavaScript Document
$(document).ready(function(e) {
   /* Todo:
 • Merge this with Node.js, almost done
 • Webpages in a database/more editable version
 • Add cookies to track previous commands? (You can press up and down to browse previous commands this session)
*/
   var faviconnumber = 1;
	function favicon() {
		favicon = favicon == 1 ? 2 : 1;
		$('.favicon').attr('href','favicon' + favicon + ".png");
	}
   console.clear();
   var commandlist = [ /*Can be populated with various methods*/
      ["/help", "Show commands"],
      ["/list", "List all pages on the website"],
      ["/nav &lt;location&gt;", "Navigate to location"],
	   ["/gl", "Generate a url for the current page"],
      ["/clear", "Clear the console"],
      ["/login &lt;username&gt; &lt;password&gt;", "Login to your account - This is not set up and when implemeneted it'll be '/login username' then request password without printing into the cmd prompt"],
      ["/upload", "Upload file, must be logged in."]
   ];
   var previouscommands = [];
   var currentcommand = 0;
   var pages = [ /*Can be populated with various methods*/
      ["index",
      "",
      "Welcome to ColdCard's Blog",
      "",
      "A!E!_________        .__       .____________                  .___",
      "A!E!\\_   ___ \\  ____ |  |    __| _/\\_   ___ \\_____ _______  __| _/",
      "A!E!/    \\  \\/ /  _ \\|  |   / __ | /    \\  \\/\\__  \\\\_  __ \\/ __ | ",
      "A!E!\\     \\___(  <_> )  |__/ /_/ | \\     \\____/ __ \\|  | \\/ /_/ | ",
      "A!E! \\______  /\\____/|____/\\____ |  \\______  (____  /__|  \\____ | ",
      "A!E!       \\/                  \\/         \\/     \\/           \\/ ",
      "",
      "本博客是我在业余时间制作，本人不擅长写日志，所以日志也没几篇，本人学习的是动画相关专业，没有学习过网页前端等专业知识，但是我比较喜欢建设博客的过程。",
      "This blog is made in my spare time, I am not good at writing posts, so there are few posts, I studied animation related majors, I have not learned the front-end webpage and other professional knowledge.",
      "But I prefer the process of building a blog.",
      "",
      "此页面是我在 [^https://codepen.io/](*CodePen*) 网站中找到，并在原有的基础上修改得到的。",
      "I found this page on the [^https://codepen.io/](*CodePen*) website and modified it based on the original.",
      "至于具体的修改样式及代码，可以查看[^/posts/Page_Not_Found/](*此日志*)。",
      "As for the specific modification style and code, you can view [^/posts/Page_Not_Found/](*this post*).",
      "",
      ],
      ["other/about",
      "",
      "About ColdCard's Blog",
      "",
      "A!E!  ___ ___                       ",
      "A!E! /   |   \\   ____ ___  _______  ",
      "A!E!/    ~    \\_/ __ \\\\  \\/  /  _ \\ ",
      "A!E!\\    Y    /\\  ___/ >    <  <_> )",
      "A!E! \\___|_  /  \\___  >__/\\_ \\____/ ",
      "A!E!       \\/       \\/      \\/      ",
      "",
      "Personal power website for ColdCard.",
      "",
      "本博客使用 [^https://hexo.io/](*Hexo*) 的 [^https://github.com/next-theme/hexo-theme-next](*NexT*) 主题",
      "This blog uses [^https://github.com/next-theme/hexo-theme-next](*NexT*) theme of [^https://hexo.io/](*Hexo*)",
      "",
      ],
      ["connect", 
      "",
      "Connect with ColdCard",
      "",
      "A!E! __  __     ______     __         __         ______    ",
      "A!E!/\\ \\_\\ \\   /\\  ___\\   /\\ \\       /\\ \\       /\\  __ \\   ",
      "A!E!\\ \\  __ \\  \\ \\  __\\   \\ \\ \\____  \\ \\ \\____  \\ \\ \\/\\ \\  ",
      "A!E! \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\ ",
      "A!E!  \\/_/\\/_/   \\/_____/   \\/_____/   \\/_____/   \\/_____/ ",
      "",
      "[mailto:ColdCard@qq.com](Email ColdCard@qq.com) < Maine",
      "[^https://github.com/Cold-Card](GitHub)",
      "[^https://cold-card.coding.net](Coding)",
      "[^https://steamcommunity.com/id/ColdCard](Steam) < Always available",
      "[^https://account.xbox.com/profile?gamertag=ColdCard1230](XboX)",
      "[^https://my.playstation.com/profile/X-ColdCard-X](PlayStation)",
      "[^https://space.bilibili.com/85970713](BiliBili) < subscribe",
      "[^https://www.youtube.com/channel/UCuh30UopOLnAi39YQ3uP5Pw](YouTube) < subscribe",
      "[^https://discordapp.com/channels/@ColdCard](Discord)",
      "[^https://t.me/X_ColdCard_X](Telegram)",
      "",
      ]];
   var pageindex = ["index", "other/about", "connect"];
   var currentpage = "404";
   var url = "/"
      /*
         Custom Text Syntax
         Links:      
            [URLPATH](NAME) - regular
            [^URLPATH](NAME) - open in new tab
            
         Styles:
            *TEXT* - bold text
            E! - Text is an error/notification
            A! - spaces are converted to non-breaking spaces (it's for ascii art - after all, this is a text based website)
      */

   function init() {
      setInterval(time);
      console.clear();
      console.log(new Date().getTime());
      log("Website", "A!   _____  _______      _____   __________                          _______          __    ___________                      .___");
      log("Website", "A!  /  |  | \\   _  \\    /  |  |  \\______   \\_____     ____   ____    \\      \\   _____/  |_  \\_   _____/___  __ __  ____    __| _/");
      log("Website", "A! /   |  |_/  /_\\  \\  /   |  |_  |     ___/\\__  \\   / ___\\_/ __ \\   /   |   \\ /  _ \\   __\\  |    __)/  _ \\|  |  \\/    \\  / __ | ");
      log("Website", "A!/    ^   /\\  \\_/   \\/    ^   /  |    |     / __ \\_/ /_/  >  ___/  /    |    (  <_> )  |    |     \\(  <_> )  |  /   |  \\/ /_/ | ");
      log("Website", "A!\\____   |  \\_____  /\\____   |   |____|    (____  /\\___  / \\___  > \\____|__  /\\____/|__|    \\___  / \\____/|____/|___|  /\\____ | ");
      log("Website", "A!     |__|        \\/      |__|                  \\//_____/      \\/          \\/                   \\/                   \\/      \\/ ");
      log("Website", ""); 
      log("Website", "A!E!   ___ _ _   _        _      __        ___         _ _           ");
      log("Website", "A!E!  / __(_) |_| |_ _  _| |__  / _|___   / __|___  __| (_)_ _  __ _ ");
      log("Website", "A!E! | (_ | |  _| ' \\ || | '_ \\ > _|_ _| | (__/ _ \\/ _` | | ' \\/ _` |");
      log("Website", "A!E!  \\___|_|\\__|_||_\\_,_|_.__/ \\_____|   \\___\\___/\\__,_|_|_||_\\__, |");
      log("Website", "A!E!                                                           |___/ ");
      log("Website", "");
      log("Website", "A![^/](*ColdCard's Blog*)");
      log("Website", "");
      log("Website", "E!I'm no longer using this at [^/](*ColdCard's Blog*)");
      log("Website", "");
      log("Website", "E!嗯。。。你居然到了这里，你也看到了，这里是 404 页面，你可以有很多方法回去，不过你也可以在这个页面玩会。");
      log("Website", "E!'/gl' 回到主页（如果你没用 '/nav' ）");
      log("Website", "");
     urlvars();
      log("Client", "For help say '/help'");
	  setInterval(favicon,500);
   }

   function urlvars() {
	   var pagelocs = window.location.pathname.replace("/","").split("/");
	   var pageloc = pagelocs[0];
	   console.log(pageloc);
	   //alert();
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
            }
		}
      	log("Website", "You are currently on page: *" + currentpage + "*");
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
               loadpage($.inArray(pageloc, pageindex));
            } else {
               //Un-note next line to show 404 errors with wrong urls
               log("Client", "404 - The page '" + pageloc + "' does not exist. To "); 
            }
		}
		if(pageloc == "") {
      		log("Client", "What would you like to access?");	
		}
   }
   function getParam(name){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec (window.location.href);
		if (results == null) {
			return "";
		}
		else  {
			return results[1];
		}
	}

   function log(name, information) {
      var d = new Date();
      var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
      var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
      var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
      var colour = "whitet";
      var textcolour = "";
      var postcolour = "";

      switch (name[0]) {
         case "!":
            postcolour = " important";
            name = name.substr(1);
            break;
      }
      switch (name) {
         case "Website":
            colour = "redt";
            break;
         case "Server":
            colour = "bluet";
            break;
         case "Client":
            colour = "bluet";
            break;
         case "User":
            colour = "greent";
            postcolour = " selft";
            break;
      }
      if (information[0] == "A" && information[1] == "!") {
         information = information.substr(2);
         information = information.replace(/ /g, '\u00A0');
      }
      if (information[0] == "E" && information[1] == "!") {
         information = information.substr(2);
         postcolour = " important";
      }

      while (information.indexOf("](") >= 0) { //URL parser

         var NAMEregExp = /\(([^)]+)\)/;
         var uname = NAMEregExp.exec(information)[1];

         var URLregExp = /\[([^)]+)\]/;
         var url = URLregExp.exec(information)[1];
         var newpage = false;
         if (url[0] == "^") {
            newpage = true;
            url = url.substr(1);
         }
         var start = information.indexOf("[");
         var end = information.indexOf(")");
         if (newpage) {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
         } else {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working

      }
      var tobold = true;
      var boldnumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            boldnumber++;
         }
      }
      while (information.indexOf("*") >= 0) { //Bold parser
         var pos = information.indexOf("*");
         information = information.replace("*", "");
         if (tobold) {
            information = information.splice(pos, 0, '<b>');
         } else {
            information = information.splice(pos, 0, '</b>');
         }
         tobold = !tobold;
         if (tobold && boldnumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      }
      var tounderline = true;
      var underlinenumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            underlinenumber++;
         }
      }
      while (information.indexOf("**") >= 0) { //Bold parser
         var pos = information.indexOf("**");
         information = information.replace("**", "");
         if (tounderline) {
            information = information.splice(pos, 0, '<u>');
         } else {
            information = information.splice(pos, 0, '</u>');
         }
         tounderline = !tounderline;
         if (tounderline && underlinenumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      } /**/
      $(".stream").append('<div class="line">' +
         '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
         '<p class="name ' + colour + '">' + name + '</p>' +
         '<p class="information' + postcolour + '">' + information + '</p>' +
         '</div>');
      $(document).scrollTop($(document).height() - $(window).height());
   }
	var timestring = "";
   function time() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      if (hours < 10) {
         hours = "0" + hours;
      }
      if (minutes < 10) {
         minutes = "0" + minutes;
      }
      if (seconds < 10) {
         seconds = "0" + seconds;
      }
	  var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
	  if (temptimestring != timestring) {
		  timestring = temptimestring;
      	$(".editline .time").text(timestring);
	  }
   }

   var ctrldown = false;
   $(".editline .edit").keydown(function(e) {
      var text = $(".editline .edit").text();
      console.log(e.which);
      if (e.which == 13 && text !== "" && !ctrldown) {
         var commands = text.split(' ');
         var output = "";
         if (commands[0] == "help") {
            text = "/" + text;
         }
         $(".editline .edit").text("");
         log("User", text);

         previouscommands[currentcommand] = text;
         currentcommand = previouscommands.length;
         $(".editline .edit").keydown(35);
         cmd(commands[0], text, commands);
         /*Add mod commands*/
         //modcmd(commands[0], text, commands);
         /*Add mod commands*/

      }
      if (e.which == 38) { //up
         if (currentcommand > 0) {
            currentcommand--;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
      if (e.which == 40) { //down

         if (currentcommand < previouscommands.length) {
            currentcommand++;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
   });

   function cmd(command, words, word) {
      switch (word[0]) {
         case "/help":
         case "help":
            for (var i = 0; i < commandlist.length; i++) {
               output = commandlist[i][0] + " : " + commandlist[i][1];
               //console.log(command[i][0]);
               log("Client", output);
            }
            break;
		 case "/gl":
			window.location.href = "https://coldcard.wang" + (currentpage == "404" ? "" : "/" + currentpage);
			window.history.pushState(currentpage, 'InpagePage', (currentpage == "404" ? "/" : "/" + currentpage));
			break;
         case "/clear":
            $(".stream").text("");
            break;
         case "/nav":
            if ($.inArray(word[1], pageindex) >= 0) {
               currentpage = word[1];
               log("Website", "You are now in " + currentpage);
               loadpage($.inArray(word[1], pageindex));
            } else {
               log("Client", "'" + word[1] + "' does not exist.");
            }
            break;
         case "/list":
            $.each(pageindex, function(id, content) {
               log("Client", "> " + content);
            });
            break;
         case "/login":
            if (word.length >= 3) {
               log("Client", "Attempting to login to " + word[1] + " with " + Array(word[2].length + 1).join("â€¢"));
               loginreturn = false;
               //log("Client", "ER1");
               setTimeout(loginemptyreturn, 20000);
            } else {
               log("Client", "Not enough arguments to log in, you need a USERNAME and a PASSWORD.");
            }
            break;
         default:
            output = "Unrecognised command '" + word[0] + "'.";
            log("Client", output);
      }
   }

   function loadpage(i) {
      $.each(pages[i], function(id, content) {
         if (content != pageindex[i]) {
            log("Website", content);
         }
      });
   }
   var loginreturn = false;

   function loginemptyreturn() {
      //log("Client", "ER2");
      if (!loginreturn) {
         log("Client", "E![LOGIN] No Return Recieved");
      }
   }
   String.prototype.splice = function(idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
   };
   init();
});