! function(t) {
	var e, n, o, i, l, c =
		'<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"  ></path></symbol><symbol id="icon-xiala" viewBox="0 0 1024 1024"><path d="M216 400c-13.3-13.3-13.3-34.8 0-48.1 13.1-13.1 34.4-13.3 47.7-0.4l0.3 0.5 248 248 248-248c13.1-13.1 34.4-13.3 47.7-0.4l0.3 0.4c13.1 13.1 13.3 34.4 0.4 47.7l-0.4 0.3-272 272c-13.1 13.1-34.4 13.3-47.7 0.4l-0.4-0.4L216 400z" fill="#A8A8A8" ></path></symbol><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M313.987456 1023.943672c-5.644178 0-11.313329-1.898042-15.983511-5.769049-10.589076-8.84088-12.012607-24.574648-3.196702-35.188699l378.909107-454.581042-380.832123-464.620685c-8.740982-10.663998-7.19258-26.397767 3.496393-35.13875 10.688973-8.740982 26.397767-7.167606 35.13875 3.496393l393.893649 480.579221c7.592167 9.265441 7.542219 22.601684-0.124871 31.817176l-392.145452 470.464656C328.247744 1020.896816 321.130087 1023.943672 313.987456 1023.943672z"  ></path></symbol><symbol id="icon-renminbi" viewBox="0 0 1024 1024"><path d="M851.2 57.6 608 465.066667l211.2 0 0 72.533333L561.066667 537.6l0 115.2 260.266667 0L821.333333 725.333333 561.066667 725.333333l0 241.066667-96 0L465.066667 725.333333 206.933333 725.333333l0-72.533333 258.133333 0 0-115.2L206.933333 537.6l0-72.533333 211.2 0L172.8 57.6l106.666667 0 234.666667 401.066667L746.666667 57.6 851.2 57.6z"  ></path></symbol><symbol id="icon-changjiantouyou" viewBox="0 0 9557 1024"><path d="M0 341.333333h8874.666667v341.333334H0z" fill="#000000" ></path><path d="M7850.666667 0l1706.666666 512-1706.666666 512z" fill="#000000" ></path></symbol></svg>',
		d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"),
		a = function(t, e) {
			e.parentNode.insertBefore(t, e)
		};
	if (d && !t.__iconfont__svg__cssinject__) {
		t.__iconfont__svg__cssinject__ = !0;
		try {
			document.write(
				"<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
				)
		} catch (t) {
			console && console.log(t)
		}
	}

	function s() {
		l || (l = !0, o())
	}

	function m() {
		try {
			i.documentElement.doScroll("left")
		} catch (t) {
			return void setTimeout(m, 50)
		}
		s()
	}
	e = function() {
		var t, e = document.createElement("div");
		e.innerHTML = c, c = null, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"),
			e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden",
			e = e, (t = document.body).firstChild ? a(e, t.firstChild) : t.appendChild(e))
	}, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(
		e, 0) : (n = function() {
		document.removeEventListener("DOMContentLoaded", n, !1), e()
	}, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = e, i = t.document, l = !
		1, m(), i.onreadystatechange = function() {
			"complete" == i.readyState && (i.onreadystatechange = null, s())
		})
}(window);
