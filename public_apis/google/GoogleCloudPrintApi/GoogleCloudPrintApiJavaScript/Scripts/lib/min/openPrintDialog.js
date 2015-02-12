// 'openPrintDialog()' minified
g.ka = function () {
	if (E ? 0 <= wa("9") : F ? 0 <= wa("1.9.0") : 1) { if (!this.a) { var a; Ja ? a = !0 : (a = A, a = -1 != a.indexOf("Android") || -1 != a.indexOf("iPad") || -1 != a.indexOf("iPod") || -1 != a.indexOf("iPhone")); this.a = a ? new Z(this.o) : new Xb(this.o); this.a.B(this.i); this.a.A(this.g); this.a.C(this.j); this.a.D(this.k); this.a.F(this.h) } this.a.open() } else {
		a = alert; var b = Bb($a()); Aa(b, J, "renderText cannot be called on a non-strict soy template"); y(b.t === Ua, 'renderText was called with a template of kind other than "text"'); Za.qa.push({
			La: Bb.S,
			data: void 0, Ka: $a()
		}); Za.ra(); a(String(b))
	}
};