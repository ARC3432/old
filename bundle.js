(() => {
	function bb(Na) {
		if (Db[Na])
			return Db[Na].exports;
		var Fa = Db[Na] = {
			exports: {}
		};
		dc[Na](Fa, Fa.exports, bb);
		return Fa.exports
	}
	var dc = [, (Na, Fa, X) => {
			const u = X(2),
				Y = {
					L: {
						KEY_OVERRIDE: "R",
						KEY_LEVEL_UP: "N",
						KEY_ABILITY: "F",
						KEY_CHOOSE_1: "Y",
						KEY_CHOOSE_2: "U",
						KEY_CHOOSE_3: "I",
						KEY_CHOOSE_4: "H",
						KEY_CHOOSE_5: "J",
						KEY_CHOOSE_6: "K",
						KEY_SPECIAL: "`"
					},
					KEY_AUTO_FIRE: 69,
					KEY_AUTO_SPIN: 67,
					KEY_OVERRIDE: 82,
					KEY_LEVEL_UP: 78,
					KEY_ABILITY: 70,
					KEY_REVERSE_TANK: 86,
					KEY_REVERSE_MOUSE: 66,
					KEY_SCREENSHOT: 81,
					KEY_UPGRADE_MAX: 77,
					KEY_CLASS_TREE: 84,
					KEY_RECORD: 90,
					KEY_UP: 87,
					KEY_PING: 76,
					KEY_LEFT: 65,
					KEY_DOWN: 83,
					KEY_RIGHT: 68,
					KEY_CHOOSE_1: 89,
					KEY_CHOOSE_2: 85,
					KEY_CHOOSE_3: 73,
					KEY_CHOOSE_4: 72,
					KEY_CHOOSE_5: 74,
					KEY_CHOOSE_6: 75,
					KEY_CHOOSE_7: -1,
					KEY_CHOOSE_8: -1,
					KEY_CHOOSE_9: -1,
					KEY_ENTER: 13,
					KEY_SPAWN: 13,
					KEY_LEFT_ARROW: 37,
					KEY_UP_ARROW: 38,
					KEY_RIGHT_ARROW: 39,
					KEY_DOWN_ARROW: 40,
					KEY_UPGRADE_ATK: 49,
					KEY_UPGRADE_HLT: 50,
					KEY_UPGRADE_SPD: 51,
					KEY_UPGRADE_STR: 52,
					KEY_UPGRADE_PEN: 53,
					KEY_UPGRADE_DAM: 54,
					KEY_UPGRADE_RLD: 55,
					KEY_UPGRADE_MOB: 56,
					KEY_UPGRADE_RGN: 57,
					KEY_UPGRADE_SHI: 48,
					KEY_MOUSE_0: 32,
					KEY_MOUSE_1: 9,
					KEY_MOUSE_2: 16,
					KEY_SPECIAL: 192,
					KEY_SUICIDE: 79,
					c: 1920,
					f: 1080,
					Aa: !1,
					ba: !1,
					M: !1,
					cb: 0,
					bc: !1,
					Ta: [{
							z: ["Private", null],
							x: ["Local", null],
							glitch: ["Glitch", 10],
							buyvm: ["BuyVM", 15],
							extravm: ["ExtraVM", 40],
							hetzner: ["Hetzner", 50],
							ovh: ["OVH", 45],
							wsi: ["WSI", 50],
							vultr: ["Vultr", 30]
						}, {
							xyz: ["Local", "Localhost", null],
							unk: ["Unknown", "Unknown", null],
							svx: ["US West", "Silicon Valley, CA, US", -7],
							lax: ["US West", "Los Angeles, CA, US", -7],
							dal: ["USA", "Dallas, TX, US", -5],
							kci: ["USA", "Kansas City, MO, US", -5],
							vin: ["US East", "Vint Hill, VA, US", -4],
							mtl: ["US East", "Montreal, CA", -4],
							lon: ["Europe", "London, UK", 1],
							fra: ["Europe", "Frankfurt, DE", 2],
							fsn: ["Europe", "Falkenstein, DE", 2],
							sgp: ["Asia", "Singapore", 8]
						},
						[
							[{
								id: "x",
								v: "Private"
							}],
							[{
								id: "e",
								Ib: "word"
							}],
							[{
								id: "w",
								Ib: "words"
							}],
							[{
								id: "p",
								v: "Portal"
							}],
							[{
								id: "o",
								v: "Open"
							}],
							[{
								id: "m",
								v: "Maze",
								delay: !0,
								remove: "f"
							}],
							[{
								id: "f",
								v: "FFA"
							}, {
								id: "d",
								v: "Duos"
							}, {
								id: "s",
								v: "Squads"
							}, {
								id: "1",
								v: "1 Team",
								advance: !0
							}, {
								id: "2",
								v: "2 Team",
								advance: !0,
								end: "2TDM"
							}, {
								id: "3",
								v: "3 Team",
								advance: !0,
								end: "3TDM"
							}, {
								id: "4",
								v: "4 Team",
								advance: !0,
								end: "4TDM"
							}],
							[{
								id: "d",
								v: "Domination"
							}, {
								id: "m",
								v: "Mothership",
								remove: "2"
							}, {
								id: "a",
								v: "Assault",
								remove: ["2", "m"]
							}, {
								id: "s",
								v: "Siege",
								remove: "1"
							}, {
								id: "t",
								v: "Tag",
								remove: ["o", "4"]
							}, {
								id: "p",
								v: "Pandemic",
								remove: ["o", "2"]
							}, {
								id: "z",
								v: "Sandbox"
							}]
						]
					],
					ra: (new Date).getTimezoneOffset() / -60,
					wa: [{
						visible: 1,
						id: "c",
						code: "extravm-dal-x",
						host: "ext.arras.cx:5000"
					}, {
						visible: 2,
						id: "x",
						code: "x-xyz-x",
						host: "localhost:5000"
					}, {
						visible: 3,
						id: "sb",
						code: "extravm-dal-2",
						host: "ext.arras.cx:5001",
						sb: !0
					}, {
						visible: 3,
						id: "sc",
						code: "extravm-dal-f",
						host: "ext.arras.cx:5002",
						sb: !0
					}],
					B: null,
					rb: 0,
					ke: null,
					mobile: "ontouchstart" in document.body && /android|mobi/i.test(navigator.userAgent)
				};
			let b = !1;
			window.Arras = l => "string" === typeof l && (b = b || "X8KDa199MTItU+gyqYWU+GIExelEY1yYwZU0xzRF104=" === u.hash(l, "latin1", "base64")) ? Y : {
				get graphical() {
					let v = Y.Fb.h;
					return {
						get screenshotMode() {
							return v.Qa
						},
						set screenshotMode(C) {
							v.Qa = C
						},
						get borderChunk() {
							return v.jb
						},
						set borderChunk(C) {
							v.jb = C
						},
						get compensationScale() {
							return v.Eb
						},
						set compensationScale(C) {
							v.Eb = C
						},
						get lowGraphics() {
							return v.Za
						},
						set lowGraphics(C) {
							v.Za = C
						},
						get alphaAnimations() {
							return v.gb
						},
						set alphaAnimations(C) {
							v.gb = C
						},
						get inversedRender() {
							return v.Wa
						},
						set inversedRender(C) {
							v.Wa = C
						},
						get miterStars() {
							return v.ab
						},
						set miterStars(C) {
							v.ab = C
						},
						get miter() {
							return v.$a
						},
						set miter(C) {
							v.$a = C
						},
						get fontSizeOffset() {
							return v.nb
						},
						set fontSizeOffset(C) {
							v.nb = C
						},
						get shieldbars() {
							return v.vb
						},
						set shieldbars(C) {
							v.vb = C
						},
						get renderGrid() {
							return v.ub
						},
						set renderGrid(C) {
							v.ub = C
						},
						get renderNames() {
							return v.Xb
						},
						set renderNames(C) {
							v.Xb = C
						},
						get censorNames() {
							return v.kb
						},
						set censorNames(C) {
							v.kb = C
						},
						get darkBorders() {
							return v.za
						},
						set darkBorders(C) {
							v.za = C
						},
						get neon() {
							return v.Ca
						},
						set neon(C) {
							v.Ca = C
						},
						get alternateBorder() {
							return v.Sa
						},
						set alternateBorder(C) {
							v.Sa = C
						},
						get coloredNest() {
							return v.Db
						},
						set coloredNest(C) {
							v.Db = C
						}
					}
				},
				get gui() {
					let v = Y.Fb.J;
					return {
						get enabled() {
							return v.enabled
						},
						set enabled(C) {
							v.enabled = C
						},
						get scale() {
							return v.scale
						},
						set scale(C) {
							v.scale = C
						},
						get alcoveSize() {
							return v.Ab
						},
						set alcoveSize(C) {
							v.Ab = C
						},
						get spacing() {
							return v.ec
						},
						set spacing(C) {
							v.ec = C
						},
						get leaderboard() {
							return v.Mb
						},
						set leaderboard(C) {
							v.Mb = C
						},
						get barChunk() {
							return v.xa
						},
						set barChunk(C) {
							v.xa = C
						}
					}
				},
				get themeColor() {
					return Y.ee
				},
				get debug() {
					if (b) {
						var v = Y.Fb.debug;
						return {
							get showId() {
								return v.wb
							},
							set showId(C) {
								v.wb = C
							},
						}
					}
				}
			};
			Na.exports = Y
		}, Na => {
			const Fa = () => {
				let l = new ArrayBuffer(65536),
					v = new Uint8Array(l),
					C = function (La, Qa, Va) {
						function Pa(A) {
							A |= 0;
							var U = O[A | 0] << 24 | O[A | 1] << 16 | O[A | 2] << 8 | O[A | 3];
							var fa = O[A | 4] << 24 | O[A | 5] << 16 | O[A | 6] << 8 | O[A | 7];
							var ka = O[A | 8] << 24 | O[A | 9] << 16 | O[A | 10] << 8 | O[A | 11];
							var ya = O[A | 12] << 24 | O[A | 13] << 16 | O[A | 14] << 8 | O[A | 15];
							var da = O[A | 16] << 24 | O[A | 17] << 16 | O[A | 18] << 8 | O[A | 19];
							var aa = O[A | 20] << 24 | O[A | 21] << 16 | O[A | 22] << 8 | O[A | 23];
							var ta = O[A | 24] << 24 | O[A | 25] << 16 | O[A | 26] << 8 | O[A | 27];
							var ua = O[A | 28] << 24 | O[A | 29] << 16 | O[A | 30] << 8 | O[A | 31];
							var va = O[A | 32] << 24 | O[A | 33] << 16 | O[A | 34] << 8 | O[A | 35];
							var wa = O[A | 36] << 24 | O[A | 37] << 16 | O[A | 38] << 8 | O[A | 39];
							var xa = O[A | 40] << 24 | O[A | 41] << 16 | O[A | 42] << 8 | O[A | 43];
							var pa = O[A | 44] << 24 | O[A | 45] << 16 | O[A | 46] << 8 | O[A | 47];
							var la = O[A | 48] << 24 | O[A | 49] << 16 | O[A | 50] << 8 | O[A | 51];
							var P = O[A | 52] << 24 | O[A | 53] << 16 | O[A | 54] << 8 | O[A | 55];
							var M = O[A | 56] << 24 | O[A | 57] << 16 | O[A | 58] << 8 | O[A | 59];
							A = O[A | 60] << 24 | O[A | 61] << 16 | O[A | 62] << 8 | O[A | 63];
							var f = Za;
							var m = gb;
							var k = jb;
							var p = T;
							var t = Ra;
							var q = D;
							var n = ib;
							var r = hb;
							r = U + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 1116352408 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							n = fa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 1899447441 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							q = ka + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 3049323471 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							t = ya + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 3921009573 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							p = da + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 961987163 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							k = aa + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 1508970993 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							m = ta + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 2453635748 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							f = ua + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 2870763221 | 0;
							t = t + f | 0;
							f = f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0;
							r = va + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 3624381080 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							n = wa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 310598401 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							q = xa + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 607225278 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							t = pa + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 1426881987 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							p = la + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 1925078388 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							k = P + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 2162078206 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							m = M + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 2614888103 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							f = A + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 3248222580 | 0;
							t = t + f | 0;
							f = f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0;
							U = (fa >>> 7 ^ fa >>> 18 ^ fa >>> 3 ^ fa << 25 ^ fa << 14) + (M >>> 17 ^ M >>> 19 ^ M >>> 10 ^ M << 15 ^ M << 13) + U + wa | 0;
							r = U + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 3835390401 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							fa = (ka >>> 7 ^ ka >>> 18 ^ ka >>> 3 ^ ka << 25 ^ ka << 14) + (A >>> 17 ^ A >>> 19 ^ A >>> 10 ^ A << 15 ^ A << 13) + fa + xa | 0;
							n = fa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 4022224774 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							ka = (ya >>> 7 ^ ya >>> 18 ^ ya >>> 3 ^ ya << 25 ^ ya << 14) + (U >>> 17 ^ U >>> 19 ^ U >>> 10 ^ U << 15 ^ U << 13) + ka + pa | 0;
							q = ka + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 264347078 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							ya = (da >>> 7 ^ da >>> 18 ^ da >>> 3 ^ da << 25 ^ da << 14) + (fa >>> 17 ^ fa >>> 19 ^ fa >>> 10 ^ fa << 15 ^ fa << 13) + ya + la | 0;
							t = ya + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 604807628 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							da = (aa >>> 7 ^ aa >>> 18 ^ aa >>> 3 ^ aa << 25 ^ aa << 14) + (ka >>> 17 ^ ka >>> 19 ^ ka >>> 10 ^ ka << 15 ^ ka << 13) + da + P | 0;
							p = da + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 770255983 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							aa = (ta >>> 7 ^ ta >>> 18 ^ ta >>> 3 ^ ta << 25 ^ ta << 14) + (ya >>> 17 ^ ya >>> 19 ^ ya >>> 10 ^ ya << 15 ^ ya << 13) + aa + M | 0;
							k = aa + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 1249150122 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							ta = (ua >>> 7 ^ ua >>> 18 ^ ua >>> 3 ^ ua << 25 ^ ua << 14) + (da >>> 17 ^ da >>> 19 ^ da >>> 10 ^ da << 15 ^ da << 13) + ta + A | 0;
							m = ta + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 1555081692 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							ua = (va >>> 7 ^ va >>> 18 ^ va >>> 3 ^ va << 25 ^ va << 14) + (aa >>> 17 ^ aa >>> 19 ^ aa >>> 10 ^ aa << 15 ^ aa << 13) + ua + U | 0;
							f = ua + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 1996064986 | 0;
							t = t + f | 0;
							f = f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0;
							va = (wa >>> 7 ^ wa >>> 18 ^ wa >>> 3 ^ wa << 25 ^ wa << 14) + (ta >>> 17 ^ ta >>> 19 ^ ta >>> 10 ^ ta << 15 ^ ta << 13) + va + fa | 0;
							r = va + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 2554220882 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							wa = (xa >>> 7 ^ xa >>> 18 ^ xa >>> 3 ^ xa << 25 ^ xa << 14) + (ua >>> 17 ^ ua >>> 19 ^ ua >>> 10 ^ ua << 15 ^ ua << 13) + wa + ka | 0;
							n = wa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 2821834349 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							xa = (pa >>> 7 ^ pa >>> 18 ^ pa >>> 3 ^ pa << 25 ^ pa << 14) + (va >>> 17 ^ va >>> 19 ^ va >>> 10 ^ va << 15 ^ va << 13) + xa + ya | 0;
							q = xa + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 2952996808 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							pa = (la >>> 7 ^ la >>> 18 ^ la >>> 3 ^ la << 25 ^ la << 14) + (wa >>> 17 ^ wa >>> 19 ^ wa >>> 10 ^ wa << 15 ^ wa << 13) + pa + da | 0;
							t = pa + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 3210313671 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							la = (P >>> 7 ^ P >>> 18 ^ P >>> 3 ^ P << 25 ^ P << 14) + (xa >>> 17 ^ xa >>> 19 ^ xa >>> 10 ^ xa << 15 ^ xa << 13) + la + aa | 0;
							p = la + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 3336571891 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							P = (M >>> 7 ^ M >>> 18 ^ M >>> 3 ^ M << 25 ^ M << 14) + (pa >>> 17 ^ pa >>> 19 ^ pa >>> 10 ^ pa << 15 ^ pa << 13) + P + ta | 0;
							k = P + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 3584528711 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							M = (A >>> 7 ^ A >>> 18 ^ A >>> 3 ^ A << 25 ^ A << 14) + (la >>> 17 ^ la >>> 19 ^ la >>> 10 ^ la << 15 ^ la << 13) + M + ua | 0;
							m = M + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 113926993 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							A = (U >>> 7 ^ U >>> 18 ^ U >>> 3 ^ U << 25 ^ U << 14) + (P >>> 17 ^ P >>> 19 ^ P >>> 10 ^ P << 15 ^ P << 13) + A + va | 0;
							f = A + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 338241895 | 0;
							t = t + f | 0;
							f = f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0;
							U = (fa >>> 7 ^ fa >>> 18 ^ fa >>> 3 ^ fa << 25 ^ fa << 14) + (M >>> 17 ^ M >>> 19 ^ M >>> 10 ^ M << 15 ^ M << 13) + U + wa | 0;
							r = U + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 666307205 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							fa = (ka >>> 7 ^ ka >>> 18 ^ ka >>> 3 ^ ka << 25 ^ ka << 14) + (A >>> 17 ^ A >>> 19 ^ A >>> 10 ^ A << 15 ^ A << 13) + fa + xa | 0;
							n = fa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 773529912 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							ka = (ya >>> 7 ^ ya >>> 18 ^ ya >>> 3 ^ ya << 25 ^ ya << 14) + (U >>> 17 ^ U >>> 19 ^ U >>> 10 ^ U << 15 ^ U << 13) + ka + pa | 0;
							q = ka + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 1294757372 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							ya = (da >>> 7 ^ da >>> 18 ^ da >>> 3 ^ da << 25 ^ da << 14) + (fa >>> 17 ^ fa >>> 19 ^ fa >>> 10 ^ fa << 15 ^ fa << 13) + ya + la | 0;
							t = ya + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 1396182291 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							da = (aa >>> 7 ^ aa >>> 18 ^ aa >>> 3 ^ aa << 25 ^ aa << 14) + (ka >>> 17 ^ ka >>> 19 ^ ka >>> 10 ^ ka << 15 ^ ka << 13) + da + P | 0;
							p = da + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 1695183700 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							aa = (ta >>> 7 ^ ta >>> 18 ^ ta >>> 3 ^ ta << 25 ^ ta << 14) + (ya >>> 17 ^ ya >>> 19 ^ ya >>> 10 ^ ya << 15 ^ ya << 13) + aa + M | 0;
							k = aa + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 1986661051 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							ta = (ua >>> 7 ^ ua >>> 18 ^ ua >>> 3 ^ ua << 25 ^ ua << 14) + (da >>> 17 ^ da >>> 19 ^ da >>> 10 ^ da << 15 ^ da << 13) + ta + A | 0;
							m = ta + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 2177026350 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							ua = (va >>> 7 ^ va >>> 18 ^ va >>> 3 ^ va << 25 ^ va << 14) + (aa >>> 17 ^ aa >>> 19 ^ aa >>> 10 ^ aa << 15 ^ aa << 13) + ua + U | 0;
							f = ua + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 2456956037 | 0;
							t = t + f | 0;
							f = f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0;
							va = (wa >>> 7 ^ wa >>> 18 ^ wa >>> 3 ^ wa << 25 ^ wa << 14) + (ta >>> 17 ^ ta >>> 19 ^ ta >>> 10 ^ ta << 15 ^ ta << 13) + va + fa | 0;
							r = va + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 2730485921 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							wa = (xa >>> 7 ^ xa >>> 18 ^ xa >>> 3 ^ xa << 25 ^ xa << 14) + (ua >>> 17 ^ ua >>> 19 ^ ua >>> 10 ^ ua << 15 ^ ua << 13) + wa + ka | 0;
							n = wa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 2820302411 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							xa = (pa >>> 7 ^ pa >>> 18 ^ pa >>> 3 ^ pa << 25 ^ pa << 14) + (va >>> 17 ^ va >>> 19 ^ va >>> 10 ^ va << 15 ^ va << 13) + xa + ya | 0;
							q = xa + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 3259730800 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							pa = (la >>> 7 ^ la >>> 18 ^ la >>> 3 ^ la << 25 ^ la << 14) + (wa >>> 17 ^ wa >>> 19 ^ wa >>> 10 ^ wa << 15 ^ wa << 13) + pa + da | 0;
							t = pa + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 3345764771 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							la = (P >>> 7 ^ P >>> 18 ^ P >>> 3 ^ P << 25 ^ P << 14) + (xa >>> 17 ^ xa >>> 19 ^ xa >>> 10 ^ xa << 15 ^ xa << 13) + la + aa | 0;
							p = la + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 3516065817 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							P = (M >>> 7 ^ M >>> 18 ^ M >>> 3 ^ M << 25 ^ M << 14) + (pa >>> 17 ^ pa >>> 19 ^ pa >>> 10 ^ pa << 15 ^ pa << 13) + P + ta | 0;
							k = P + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 3600352804 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							M = (A >>> 7 ^ A >>> 18 ^ A >>> 3 ^ A << 25 ^ A << 14) + (la >>> 17 ^ la >>> 19 ^ la >>> 10 ^ la << 15 ^ la << 13) + M + ua | 0;
							m = M + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 4094571909 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							A = (U >>> 7 ^ U >>> 18 ^ U >>> 3 ^ U << 25 ^ U << 14) + (P >>> 17 ^ P >>> 19 ^ P >>> 10 ^ P << 15 ^ P << 13) + A + va | 0;
							f = A + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 275423344 | 0;
							t = t + f | 0;
							f = f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0;
							U = (fa >>> 7 ^ fa >>> 18 ^ fa >>> 3 ^ fa << 25 ^ fa << 14) + (M >>> 17 ^ M >>> 19 ^ M >>> 10 ^ M << 15 ^ M << 13) + U + wa | 0;
							r = U + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 430227734 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							fa = (ka >>> 7 ^ ka >>> 18 ^ ka >>> 3 ^ ka << 25 ^ ka << 14) + (A >>> 17 ^ A >>> 19 ^ A >>> 10 ^ A << 15 ^ A << 13) + fa + xa | 0;
							n = fa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 506948616 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							ka = (ya >>> 7 ^ ya >>> 18 ^ ya >>> 3 ^ ya << 25 ^ ya << 14) + (U >>> 17 ^ U >>> 19 ^ U >>> 10 ^ U << 15 ^ U << 13) + ka + pa | 0;
							q = ka + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 659060556 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							ya = (da >>> 7 ^ da >>> 18 ^ da >>> 3 ^ da << 25 ^ da << 14) + (fa >>> 17 ^ fa >>> 19 ^ fa >>> 10 ^ fa << 15 ^ fa << 13) + ya + la | 0;
							t = ya + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 883997877 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							da = (aa >>> 7 ^ aa >>> 18 ^ aa >>> 3 ^ aa << 25 ^ aa << 14) + (ka >>> 17 ^ ka >>> 19 ^ ka >>> 10 ^ ka << 15 ^ ka << 13) + da + P | 0;
							p = da + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 958139571 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							aa = (ta >>> 7 ^ ta >>> 18 ^ ta >>> 3 ^ ta << 25 ^ ta << 14) + (ya >>> 17 ^ ya >>> 19 ^ ya >>> 10 ^ ya << 15 ^ ya << 13) + aa + M | 0;
							k = aa + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 1322822218 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							ta = (ua >>> 7 ^ ua >>> 18 ^ ua >>> 3 ^ ua << 25 ^ ua << 14) + (da >>> 17 ^ da >>> 19 ^ da >>> 10 ^ da << 15 ^ da << 13) + ta + A | 0;
							m = ta + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 1537002063 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							ua = (va >>> 7 ^ va >>> 18 ^ va >>> 3 ^ va << 25 ^ va << 14) + (aa >>> 17 ^ aa >>> 19 ^ aa >>> 10 ^ aa << 15 ^ aa << 13) + ua + U | 0;
							f = ua + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 1747873779 | 0;
							t = t + f | 0;
							f = f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0;
							va = (wa >>> 7 ^ wa >>> 18 ^ wa >>> 3 ^ wa << 25 ^ wa << 14) + (ta >>> 17 ^ ta >>> 19 ^ ta >>> 10 ^ ta << 15 ^ ta << 13) + va + fa | 0;
							r = va + r + (t >>> 6 ^ t >>> 11 ^ t >>> 25 ^ t << 26 ^ t << 21 ^ t << 7) + (n ^ t & (q ^ n)) + 1955562222 | 0;
							p = p + r | 0;
							r = r + (f & m ^ k & (f ^ m)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
							wa = (xa >>> 7 ^ xa >>> 18 ^ xa >>> 3 ^ xa << 25 ^ xa << 14) + (ua >>> 17 ^ ua >>> 19 ^ ua >>> 10 ^ ua << 15 ^ ua << 13) + wa + ka | 0;
							n = wa + n + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (q ^ p & (t ^ q)) + 2024104815 | 0;
							k = k + n | 0;
							n = n + (r & f ^ m & (r ^ f)) + (r >>> 2 ^ r >>> 13 ^ r >>> 22 ^ r << 30 ^ r << 19 ^ r << 10) | 0;
							xa = (pa >>> 7 ^ pa >>> 18 ^ pa >>> 3 ^ pa << 25 ^ pa << 14) + (va >>> 17 ^ va >>> 19 ^ va >>> 10 ^ va << 15 ^ va << 13) + xa + ya | 0;
							q = xa + q + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (t ^ k & (p ^ t)) + 2227730452 | 0;
							m = m + q | 0;
							q = q + (n & r ^ f & (n ^ r)) + (n >>> 2 ^ n >>> 13 ^ n >>> 22 ^ n << 30 ^ n << 19 ^ n << 10) | 0;
							pa = (la >>> 7 ^ la >>> 18 ^ la >>> 3 ^ la << 25 ^ la << 14) + (wa >>> 17 ^ wa >>> 19 ^ wa >>> 10 ^ wa << 15 ^ wa << 13) + pa + da | 0;
							t = pa + t + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (p ^ m & (k ^ p)) + 2361852424 | 0;
							f = f + t | 0;
							t = t + (q & n ^ r & (q ^ n)) + (q >>> 2 ^ q >>> 13 ^ q >>> 22 ^ q << 30 ^ q << 19 ^ q << 10) | 0;
							la = (P >>> 7 ^ P >>> 18 ^ P >>> 3 ^ P << 25 ^ P << 14) + (xa >>> 17 ^ xa >>> 19 ^ xa >>> 10 ^ xa << 15 ^ xa << 13) + la + aa | 0;
							p = la + p + (f >>> 6 ^ f >>> 11 ^ f >>> 25 ^ f << 26 ^ f << 21 ^ f << 7) + (k ^ f & (m ^ k)) + 2428436474 | 0;
							r = r + p | 0;
							p = p + (t & q ^ n & (t ^ q)) + (t >>> 2 ^ t >>> 13 ^ t >>> 22 ^ t << 30 ^ t << 19 ^ t << 10) | 0;
							P = (M >>> 7 ^ M >>> 18 ^ M >>> 3 ^ M << 25 ^ M << 14) + (pa >>> 17 ^ pa >>> 19 ^ pa >>> 10 ^ pa << 15 ^ pa << 13) + P + ta | 0;
							k = P + k + (r >>> 6 ^ r >>> 11 ^ r >>> 25 ^ r << 26 ^ r << 21 ^ r << 7) + (m ^ r & (f ^ m)) + 2756734187 | 0;
							n = n + k | 0;
							k = k + (p & t ^ q & (p ^ t)) + (p >>> 2 ^ p >>> 13 ^ p >>> 22 ^ p << 30 ^ p << 19 ^ p << 10) | 0;
							m = ((A >>> 7 ^ A >>> 18 ^ A >>> 3 ^ A << 25 ^ A << 14) + (la >>> 17 ^ la >>> 19 ^ la >>> 10 ^ la << 15 ^ la << 13) + M + ua | 0) + m + (n >>> 6 ^ n >>> 11 ^ n >>> 25 ^ n << 26 ^ n << 21 ^ n << 7) + (f ^ n & (r ^ f)) + 3204031479 | 0;
							q = q + m | 0;
							m = m + (k & p ^ t & (k ^ p)) + (k >>> 2 ^ k >>> 13 ^ k >>> 22 ^ k << 30 ^ k << 19 ^ k << 10) | 0;
							f = ((U >>> 7 ^ U >>> 18 ^ U >>> 3 ^ U << 25 ^ U << 14) + (P >>> 17 ^ P >>> 19 ^ P >>> 10 ^ P << 15 ^ P << 13) + A + va | 0) + f + (q >>> 6 ^ q >>> 11 ^ q >>> 25 ^ q << 26 ^ q << 21 ^ q << 7) + (r ^ q & (n ^ r)) + 3329325298 | 0;
							Za = Za + (f + (m & k ^ p & (m ^ k)) + (m >>> 2 ^ m >>> 13 ^ m >>> 22 ^ m << 30 ^ m << 19 ^ m << 10) | 0) | 0;
							gb = gb + m | 0;
							jb = jb + k | 0;
							T = T + p | 0;
							Ra = Ra + (t + f | 0) | 0;
							D = D + q | 0;
							ib = ib + n | 0;
							hb = hb + r | 0
						}

						function cb(A, U) {
							A |= 0;
							U |= 0;
							var fa = 0;
							if (A & 63)
								return -1;
							for (; 64 <= (U | 0);)
								Pa(A),
								A = A + 64 | 0,
								U = U - 64 | 0,
								fa = fa + 64 | 0;
							ab = ab + fa | 0;
							ab >>> 0 < fa >>> 0 && (Ha = Ha + 1 | 0);
							return fa | 0
						}
						var Za = 0,
							gb = 0,
							jb = 0,
							T = 0,
							Ra = 0,
							D = 0,
							ib = 0,
							hb = 0,
							ab = 0,
							Ha = 0,
							O = new La.Uint8Array(Va);
						return {
							reset: function () {
								Za = 1779033703;
								gb = 3144134277;
								jb = 1013904242;
								T = 2773480762;
								Ra = 1359893119;
								D = 2600822924;
								ib = 528734635;
								hb = 1541459225;
								ab = Ha = 0
							},
							update: cb,
							digest: function (A, U, fa) {
								A |= 0;
								U |= 0;
								fa |= 0;
								var ka = 0;
								if (A & 63 || ~fa && fa & 31)
									return -1;
								if (64 <= (U | 0)) {
									ka = cb(A, U) | 0;
									if (-1 == (ka | 0))
										return -1;
									A = A + ka | 0;
									U = U - ka | 0
								}
								ka = ka + U | 0;
								ab = ab + U | 0;
								ab >>> 0 < U >>> 0 && (Ha = Ha + 1 | 0);
								O[A | U] = 128;
								if (56 <= (U | 0)) {
									for (U = U + 1 | 0; 64 > (U | 0); U = U + 1 | 0)
										O[A | U] = 0;
									Pa(A);
									U = 0;
									O[A | 0] = 0
								}
								for (U = U + 1 | 0; 59 > (U | 0); U = U + 1 | 0)
									O[A | U] = 0;
								O[A | 56] = Ha >>> 21 & 255;
								O[A | 57] = Ha >>> 13 & 255;
								O[A | 58] = Ha >>> 5 & 255;
								O[A | 59] = Ha << 3 & 255 | ab >>> 29;
								O[A | 60] = ab >>> 21 & 255;
								O[A | 61] = ab >>> 13 & 255;
								O[A | 62] = ab >>> 5 & 255;
								O[A | 63] = ab << 3 & 255;
								Pa(A);
								~fa && (A = fa | 0,
									O[A | 0] = Za >>> 24,
									O[A | 1] = Za >>> 16 & 255,
									O[A | 2] = Za >>> 8 & 255,
									O[A | 3] = Za & 255,
									O[A | 4] = gb >>> 24,
									O[A | 5] = gb >>> 16 & 255,
									O[A | 6] = gb >>> 8 & 255,
									O[A | 7] = gb & 255,
									O[A | 8] = jb >>> 24,
									O[A | 9] = jb >>> 16 & 255,
									O[A | 10] = jb >>> 8 & 255,
									O[A | 11] = jb & 255,
									O[A | 12] = T >>> 24,
									O[A | 13] = T >>> 16 & 255,
									O[A | 14] = T >>> 8 & 255,
									O[A | 15] = T & 255,
									O[A | 16] = Ra >>> 24,
									O[A | 17] = Ra >>> 16 & 255,
									O[A | 18] = Ra >>> 8 & 255,
									O[A | 19] = Ra & 255,
									O[A | 20] = D >>> 24,
									O[A | 21] = D >>> 16 & 255,
									O[A | 22] = D >>> 8 & 255,
									O[A | 23] = D & 255,
									O[A | 24] = ib >>> 24,
									O[A | 25] = ib >>> 16 & 255,
									O[A | 26] = ib >>> 8 & 255,
									O[A | 27] = ib & 255,
									O[A | 28] = hb >>> 24,
									O[A | 29] = hb >>> 16 & 255,
									O[A | 30] = hb >>> 8 & 255,
									O[A | 31] = hb & 255);
								return ka | 0
							}
						}
					}({
						Uint8Array
					}, null, l),
					ma = 0,
					ea = 0;
				C.reset();
				return La => {
					La = new Uint8Array(La);
					let Qa = 0,
						Va = La.length;
					for (; 0 < Va;) {
						var Pa = v.length - ea;
						Pa = Pa < Va ? Pa : Va;
						v.set(La.subarray(Qa, Qa + Pa), ea);
						ea += Pa;
						Qa += Pa;
						Va -= Pa;
						ma += C.update(ma, ea - ma);
						ma === ea && (ea = ma = 0)
					}
					C.digest(ma, ea - ma, 0);
					La = v.slice(0, 32).buffer;
					ea = ma = 0;
					C.reset();
					return La
				}
			};
			let X = Fa();
			const u = (l, v) => {
					if ("string" === typeof l)
						if ("latin1" === v || "base64" === v) {
							v = "base64" === v ? atob(l) : l;
							l = new Uint8Array(v.length);
							for (var C = 0; C < v.length; C++)
								l[C] = v.charCodeAt(C)
						} else if ("hex" === v) {
						v = new Uint8Array(l.length / 2);
						for (C = 0; C < l.length; C += 2)
							v[C >> 1] = parseInt(l.slice(C, C + 2), 16);
						l = v
					}
					return l.buffer || l
				},
				Y = (l, v) => {
					l = new Uint8Array(l);
					if ("latin1" === v || "base64" === v)
						return l = String.fromCharCode.apply(String, l),
							"base64" === v ? btoa(l) : l;
					if ("hex" === v) {
						v = "";
						for (let C = 0; 32 > C; C++)
							v += (l[C] >> 4).toString(16),
							v += (l[C] & 15).toString(16);
						return v
					}
					return l
				},
				b = {
					hash(l, v = "latin1", C = null) {
						l = u(l, v);
						if (!(l instanceof ArrayBuffer))
							throw new TypeError("Invalid data type");
						l = X(l);
						return l instanceof Promise ? l.then(ma => Y(ma, C)) : Y(l, C)
					},
					pow: (() => {
						let l = URL.createObjectURL(new Blob(["!function(x){x=x();self.onmessage=function(d){for(var b=d.data[1],a=new Uint8Array(6+b.length),c=0;c<b.length;c++)a[c+6]=b.charCodeAt(c);for(b=0;1073741824>b;b++)for(a[0]=48+(63&b>>24),a[1]=48+(63&b>>18),a[2]=48+(63&b>>12),a[3]=48+(63&b>>6),a[4]=48+(63&b),c=0;64>c;c++)if(a[5]=48+c,0===(new Uint16Array(x(a.buffer)))[0]){postMessage([d.data[0],String.fromCharCode(a[0],a[1],a[2],a[3],a[4],a[5])]);return}}}(", Fa.toString(), ")"], {
								type: "application/javascript"
							})),
							v = new Worker(l);
						URL.revokeObjectURL(l);
						let C = 0,
							ma = {};
						v.onmessage = ea => {
							let [La, Qa] = ea.data;
							ma[La] && (ma[La](Qa),
								delete ma[La])
						};
						return {
							be(ea) {
								return new Promise(La => {
									let Qa = C++;
									ma[Qa] = La;
									v.postMessage([Qa, ea])
								})
							}
						}
					})()
				};
			Na.exports = b
		}, (Na, Fa) => {
			let X = window.localStorage || {};
			Fa.fa = u => {
				let Y = document.getElementById(u);
				"text" === Y.type || "select-one" === Y.type ? X.setItem(u, Y.value || "") : ("checkbox" === Y.type || "radio" === Y.type) && X.setItem(u, Y.checked || "false");
				X.removeItem(`${u}Value`);
				X.removeItem(`${u}Checked`)
			};
			Fa.ma = (u, Y = !1) => {
				let b = document.getElementById(u);
				if ("text" === b.type || "select-one" === b.type)
					b.value = X.getItem(u) || "";
				else if ("checkbox" === b.type || "radio" === b.type)
					b.checked = "true" === (X.getItem(u) || Y.toString())
			};
			Fa.ud = u => `${/^[aeiou]/i.test(u) ? "an" : "a"} ${u}`;
			Fa.Bb = u => {
				if (0 === u.length)
					return "";
				if (1 === u.length)
					return u[0];
				let Y = `${"and"} ${u[u.length - 1]}`;
				return [...u.slice(0, -1), Y].join(2 === u.length ? " " : ", ")
			};
			Fa.Pd = u => {
				u = Math.floor(u);
				if (0 >= u)
					return "less than a second";
				let Y = [];
				for (let [b, l] of [
						[60, "second"],
						[60, "minute"],
						[24, "hour"],
						[null, "day"]
					]) {
					let v = b ? u % b : u;
					u = b ? Math.floor(u / b) : 0;
					Y.unshift(`${v} ${l}${1 === v ? "" : "s"}`);
					if (0 === u)
						break
				}
				return Fa.Bb(Y)
			};
			Fa.Bc = (u, Y = !1) => Y && 0 >= u ? "" : 1E3 > u ? u.toFixed(0) : 1E6 > u ? (u / 1E3).toFixed(2) + "k" : 1E9 > u ? (u / 1E6).toFixed(2) + "m" : 1E12 > u ? (u / 1E9).toFixed(2) + "b" : 1E15 > u ? (u / 1E12).toFixed(2) + "t" : 1E18 > u ? (u / 1E15).toFixed(2) + "q" : 0 < u ? "\u221e" : "\u2014";
			Fa.Kb = u => 1E18 > u ? u.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0 < u ? "\u221e" : "\u2014"
		}, Na => {
			const Fa = class {
				static now() {
					return Math.max(0, Math.min(Math.floor(Date.now() / 2E3) - 757382400, 268435455))
				}
				constructor() {
					this.G = 0;
					this.l = this.b = this.A = null;
					this.N = this.ca = !1;
					this.reset();
					setInterval(() => this.Ma(), 2E3)
				}
				reset() {
					this.G = Fa.now();
					this.A = {
						Gd: 0,
						disconnect: 0
					};
					this.b = {
						status: !0,
						Ia: [0, 0, 0, 0, 0, 0, 0]
					};
					this.l = {
						status: !!navigator.onLine,
						Ia: [0, 0, 0, 0]
					};
					this.N = this.ca = !1;
					let X = new Image;
					Object.defineProperty(X, "id", {
						get: () => {
							this.N = !0;
							return ""
						}
					});
					let u = () => {};
					u.toString = () => {
						this.N = !0;
						return "color:rgba(0,0,0,0)"
					};
					setTimeout(console.log.bind(null, "%c%s", u, X))
				}
				time() {
					return Math.max(0, Math.min(Fa.now() - this.G, 65535))
				}
				Oc(X) {
					this.A[X] = this.time()
				}
				Pc(X) {
					this.b.status !== X && (this.b.status = X,
						this.b.Ia.shift(),
						this.b.Ia.push(this.time()))
				}
				Ma() {
					var X = !!navigator.onLine;
					this.l.status !== X && (this.l.status = X,
						this.l.Ia.shift(),
						this.l.Ia.push(this.time()))
				}
				Xd() {
					this.ca = !0
				}
				Na() {
					return [this.b.status | this.l.status << 1 | this.ca << 2 | this.N << 3 | (this.G & 4095) << 4, this.G >>> 12, this.A.Gd, this.A.disconnect, ...this.b.Ia, ...this.l.Ia, this.time()]
				}
				Hd(X, u) {
					var Y = this.Na(),
						b = Y.reduce((ma, ea) => ma ^ ea, 0);
					Y = [57005, b, ...Y, b ^ 65535, 48879];
					var l = parseInt(u.slice(1), 16);
					u = l >> 16 & 224;
					b = l >> 8 & 224;
					l &= 192;
					let v = Math.floor(X.canvas.width / 2) - 10,
						C = Math.floor(X.canvas.height / 3);
					for (let ma = 0; 20 > ma; ma++) {
						let ea = Y[ma];
						X.fillStyle = `rgb(${u | (ea & 63488) >>> 11},${b | (ea & 1984) >>> 6},${l | ea & 63})`;
						X.fillRect(v + ma, C, 1, 1)
					}
				}
			};
			Na.exports = new Fa
		}, (Na, Fa, X) => {
			const u = X(1),
				Y = X(4);
			let b = l => u.Yd.push({
				text: l,
				status: 2,
				alpha: 0,
				time: Date.now()
			});
			Na.exports = class {
				constructor() {
					this.target = {
						x: 0,
						y: 0
					};
					this.s = null;
					this.Na = this.Ob = !1;
					this.control = "";
					this.A = this.N = this.l = null;
					this.oc = 0;
					this.ca = -1;
					this.lc = !1;
					this.b = null;
					this.raw = document.getElementById("canvas")
				}
				mc() {
					let l = navigator.getGamepads();
					if (-1 !== this.ca) {
						var v = l[this.ca];
						if (v && "standard" === v.mapping && v.connected)
							return v;
						this.ca = -1
					}
					for (v = 0; v < l.length; v++) {
						let C = l[v];
						if (C && "standard" === C.mapping && C.connected)
							return this.ca = v,
								C
					}
					return null
				}
				nc() {
					if (!this.lc) {
						this.lc = !0;
						var l = !1,
							v = !1,
							C = !1,
							ma = !1,
							ea = !1;
						setInterval(() => {
							let La = this.mc();
							ea !== !!La && (ea = !!La,
								b(ea ? "Controller connected." : "Controller disconnected."));
							if (La) {
								var Qa = cb => cb < La.axes.length ? La.axes[cb] : 0,
									Va = cb => cb < La.buttons.length && La.buttons[cb].pressed;
								this.Zb(Qa(0), Qa(1));
								var Pa = Qa(2);
								Qa = Qa(3);
								if (.01 < Pa * Pa + Qa * Qa) {
									let cb = .6 * Math.max(this.raw.width, this.raw.height);
									this.setPosition(Pa * cb, Qa * cb)
								}
								this.set(4, Va(5) || Va(7));
								this.set(6, Va(4) || Va(6));
								Pa = Va(1);
								l !== Pa && (Pa && this.g("t", 2),
									l = Pa);
								Pa = Va(2);
								v !== Pa && (Pa && this.G("0"),
									v = Pa);
								Pa = Va(10);
								C !== Pa && (Pa && this.g("t", 1),
									C = Pa);
								Va = Va(11);
								ma !== Va && (Va && this.g("t", 0),
									ma = Va)
							}
						}, 10)
					}
				}
				Ud(l, v) {
					this.control = l;
					this.s = v;
					v = this.raw;
					"joysticks" === l ? (v.addEventListener("touchstart", C => this.td(C), !1),
						v.addEventListener("touchmove", C => this.qc(C), !1),
						v.addEventListener("touchend", C => this.pc(C), !1),
						v.addEventListener("touchcancel", C => this.pc(C), !1)) : (v.addEventListener("mousedown", C => this.qd(C), !1),
						v.addEventListener("mousemove", C => this.rd(C), !1),
						v.addEventListener("mouseup", C => this.sd(C), !1));
					window.addEventListener("keydown", C => this.od(C), !1);
					window.addEventListener("keyup", C => this.pd(C), !1);
					this.mc() ? this.nc() : window.addEventListener("gamepadconnected", C => his.nc());
					this.ld()
				}
				ld() {
					if (u.yd)
						var l = 60,
							v = setInterval(() => {
								this.s.g("L");
								0 >= --l && clearInterval(v)
							}, 100)
				}
				G(l) {
					this.s.g(l)
				}
				g(l, v) {
					this.s.g(l, v)
				}
				xb() {
					this.s.xb();
					Y.reset();
					this.ld()
				}
				set(l, v) {
					this.s.cmd.set(l, v)
				}
				Zb(l, v) {
					this.set(0, -.3826834323650898 > v);
					this.set(1, .3826834323650898 < v);
					this.set(2, -.3826834323650898 > l);
					this.set(3, .3826834323650898 < l)
				}
				setPosition(l, v) {
					this.target.x = l;
					this.target.y = v;
					this.s.cmd.setPosition(l, v)
				}
				capture(l) {
					let v = (ma, ea) => {
						let La = URL.createObjectURL(ma),
							Qa = document.createElement("a");
						Qa.style.display = "none";
						Qa.setAttribute("download", ea);
						Qa.setAttribute("href", La);
						document.body.appendChild(Qa);
						setTimeout(() => {
							URL.revokeObjectURL(La);
							Qa.remove()
						}, 100);
						Qa.click()
					};
					if ("image" === l) {
						var C = this.raw.toDataURL();
						l = atob(C.split(",")[1]);
						C = C.split(",")[0].split(":")[1].split(";")[0];
						let ma = new Uint8Array(l.length);
						for (let ea = 0; ea < l.length; ea++)
							ma[ea] = l.charCodeAt(ea);
						v(new Blob([ma], {
							type: C
						}), "screenshot.png")
					} else if ("video" === l)
						if (this.raw.captureStream && window.MediaRecorder) {
							if (!this.b) {
								let ma = [];
								this.b = new MediaRecorder(this.raw.captureStream(60));
								this.b.addEventListener("dataavailable", ea => ma.push(ea.data));
								this.b.addEventListener("stop", () => {
									v(new Blob(ma, {
										type: this.b.mimeType
									}), "video.mp4");
									ma.length = 0
								})
							}
							switch (this.b.state) {
							case "inactive":
								b("Recorder started!");
								this.b.start();
								break;
							case "recording":
								b("Recorder stopped! Saving file..."),
									this.b.stop()
							}
						} else
							b("Media recorder is unsupported in this browser!")
				}
				od(l) {
					if (this.Na)
						l.preventDefault(),
						this.g("0", l.keyCode);
					else {
						switch (l.keyCode) {
						case u.KEY_SPAWN:
							u.M && u.Yb <= Date.now() && this.xb();
							break;
						case u.KEY_UP_ARROW:
						case u.KEY_UP:
							this.set(0, !0);
							break;
						case u.KEY_DOWN_ARROW:
						case u.KEY_DOWN:
							this.set(1, !0);
							break;
						case u.KEY_LEFT_ARROW:
						case u.KEY_LEFT:
							this.set(2, !0);
							break;
						case u.KEY_RIGHT_ARROW:
						case u.KEY_RIGHT:
							this.set(3, !0);
							break;
						case u.KEY_MOUSE_0:
							this.set(4, !0);
							break;
						case u.KEY_MOUSE_1:
							this.set(5, !0);
							break;
						case u.KEY_MOUSE_2:
							this.set(6, !0);
							break;
						case u.KEY_LEVEL_UP:
							this.G("L");
							break;
						case u.KEY_ABILITY:
							this.G("A")
						}
						if (!l.ctrlKey && !l.altKey) {
							if (u.na) {
								let v = -1;
								switch (l.keyCode) {
								case u.KEY_UPGRADE_ATK:
									v = 0;
									break;
								case u.KEY_UPGRADE_HLT:
									v = 1;
									break;
								case u.KEY_UPGRADE_SPD:
									v = 2;
									break;
								case u.KEY_UPGRADE_STR:
									v = 3;
									break;
								case u.KEY_UPGRADE_PEN:
									v = 4;
									break;
								case u.KEY_UPGRADE_DAM:
									v = 5;
									break;
								case u.KEY_UPGRADE_RLD:
									v = 6;
									break;
								case u.KEY_UPGRADE_MOB:
									v = 7;
									break;
								case u.KEY_UPGRADE_RGN:
									v = 8;
									break;
								case u.KEY_UPGRADE_SHI:
									v = 9
								}
								if (-1 !== v) {
									let C = this.Ob ? 12 : 1;
									for (let ma = 0; ma < C; ma++)
										this.g("x", v)
								}
							}
							if (!l.repeat) {
								switch (l.keyCode) {
								case u.KEY_AUTO_SPIN:
									this.g("t", 0);
									break;
								case u.KEY_AUTO_FIRE:
									this.g("t", 1);
									break;
								case u.KEY_OVERRIDE:
									this.g("t", 2);
									break;
								case u.KEY_REVERSE_MOUSE:
									this.g("t", 3);
									break;
								case u.KEY_REVERSE_TANK:
									this.g("t", 4);
									break;
								case u.KEY_SPECIAL:
									this.G("0");
									this.Na = !0;
									break;
								case u.KEY_SUICIDE:
									this.G("K");
									break;
								case u.KEY_UPGRADE_MAX:
									this.Ob = !0;
									break;
								case u.KEY_PING:
									u.cb = l.shiftKey ? 2 : 1;
									break;
								case u.KEY_CLASS_TREE:
									u.bc = !0;
									break;
								case u.KEY_RECORD:
									this.capture("video");
									break;
								case u.KEY_SCREENSHOT:
									this.capture("image")
								}
								if (u.ta)
									switch (l.keyCode) {
									case u.KEY_CHOOSE_1:
										this.g("U", 0);
										break;
									case u.KEY_CHOOSE_2:
										this.g("U", 1);
										break;
									case u.KEY_CHOOSE_3:
										this.g("U", 2);
										break;
									case u.KEY_CHOOSE_4:
										this.g("U", 3);
										break;
									case u.KEY_CHOOSE_5:
										this.g("U", 4);
										break;
									case u.KEY_CHOOSE_6:
										this.g("U", 5);
										break;
									case u.KEY_CHOOSE_7:
										this.g("U", 6);
										break;
									case u.KEY_CHOOSE_8:
										this.g("U", 7);
										break;
									case u.KEY_CHOOSE_9:
										this.g("U", 8)
									}
							}
						}
					}
				}
				pd(l) {
					switch (l.keyCode) {
					case u.KEY_UP_ARROW:
					case u.KEY_UP:
						this.set(0, !1);
						break;
					case u.KEY_DOWN_ARROW:
					case u.KEY_DOWN:
						this.set(1, !1);
						break;
					case u.KEY_LEFT_ARROW:
					case u.KEY_LEFT:
						this.set(2, !1);
						break;
					case u.KEY_RIGHT_ARROW:
					case u.KEY_RIGHT:
						this.set(3, !1);
						break;
					case u.KEY_MOUSE_0:
						this.set(4, !1);
						break;
					case u.KEY_MOUSE_1:
						this.set(5, !1);
						break;
					case u.KEY_MOUSE_2:
						this.set(6, !1);
						break;
					case u.KEY_SPECIAL:
						this.Na = !1;
						break;
					case u.KEY_UPGRADE_MAX:
						this.Ob = !1;
						break;
					case u.KEY_PING:
						2 !== u.cb && (u.cb = 0);
						break;
					case u.KEY_CLASS_TREE:
						u.bc = !1
					}
					this.Na && this.g("0", -l.keyCode)
				}
				kd(l) {
					var v = u.u.stat.check(l);
					if (-1 !== v)
						return this.g("x", v),
							!0;
					if (-1 !== u.u.dc.check(l))
						return u.Cd(),
							!0;
					if (-1 !== u.u.oa.check(l))
						return l = document.createElement("input"),
							l.value = u.oa.value,
							document.body.appendChild(l),
							l.select(),
							document.execCommand("copy"),
							u.oa.wc = !0;
					v = u.u.upgrade.check(l);
					if (-1 !== v)
						return this.g("U", v),
							!0;
					l = u.u.Qb.check(l);
					if (-1 !== l) {
						switch (l) {
						case 0:
							return 2;
						case 1:
							u.Pb = !u.Pb;
							break;
						case 2:
							u.ea = ((u.ea || 0) + 1) % 5;
							switch (u.ea) {
							case 0:
							case 2:
							case 4:
								null !== this.l && this.set(6, !1);
								break;
							case 1:
								null !== this.l && this.set(6, !0);
								break;
							case 3:
								this.set(6, null !== this.A)
							}
							break;
						case 3:
							this.g("t", 1);
							break;
						case 4:
							this.g("t", 4);
							break;
						case 5:
							this.g("t", 0);
							break;
						case 6:
							this.g("t", 2)
						}
						return !0
					}
					return !1
				}
				Ma(l) {
					return {
						x: l.clientX * u.$b,
						y: l.clientY * u.$b
					}
				}
				qd(l) {
					switch (l.button) {
					case 0:
						this.kd(this.Ma(l)) || this.set(4, !0);
						break;
					case 1:
						this.set(5, !0);
						break;
					case 2:
						this.set(6, !0)
					}
				}
				rd(l) {
					l = this.Ma(l);
					null !== u.player.x && this.setPosition(l.x - u.player.x, l.y - u.player.y);
					u.fd = 0 === u.u.Jc.check(l)
				}
				sd(l) {
					switch (l.button) {
					case 0:
						this.set(4, !1);
						break;
					case 1:
						this.set(5, !1);
						break;
					case 2:
						this.set(6, !1)
					}
				}
				td(l) {
					l.preventDefault();
					if (u.M && u.Yb <= Date.now())
						this.xb();
					else {
						for (let ma of l.changedTouches) {
							var v = ma.identifier,
								C = this.Ma(ma);
							let ea = this.kd(C);
							null === this.A && 2 === ea && (this.A = v,
								3 === u.ea && this.set(6, !0));
							ea || (C = C.x < this.raw.width / 2,
								null === this.N && C ? this.N = v : null !== this.l || C || (this.l = v,
									v = 500 >= Date.now() - this.oc,
									this.oc = Date.now(),
									this.set(4, !0),
									this.set(6, [!1, !0, !1, null !== this.A, v][u.ea])))
						}
						this.qc(l)
					}
				}
				qc(l) {
					l.preventDefault();
					for (let C of l.changedTouches) {
						var v = C.identifier;
						l = this.Ma(C);
						if (this.N === v) {
							v = l.x - 1 * this.raw.width / 6;
							l = l.y - 2 * this.raw.height / 3;
							let ma = Math.sqrt(v * v + l * l);
							v /= ma;
							l /= ma;
							this.Zb(v, l)
						} else
							this.l === v && (v = 4 * (l.x - 5 * this.raw.width / 6),
								l = 4 * (l.y - 2 * this.raw.height / 3),
								2 !== u.ea ? this.setPosition(v, l) : v > -this.raw.width / 2 && v < this.raw.width / 2 && l > -this.raw.height / 2 && l < this.raw.height / 2 ? (this.setPosition(v, l),
									this.set(6, !1)) : (this.setPosition(-v, -l),
									this.set(6, !0)))
					}
				}
				pc(l) {
					l.preventDefault();
					for (let v of l.changedTouches)
						l = v.identifier,
						this.A === l ? (this.A = null,
							3 === u.ea && this.set(6, !1)) : this.N === l ? (this.N = null,
							this.Zb(0, 0)) : this.l === l && (this.l = null,
							this.set(4, !1),
							1 !== u.ea && 2 !== u.ea && 4 !== u.ea || this.set(6, !1))
				}
			}
		}, Na => {
			function Fa(b) {
				window.dataLayer.push(arguments)
			}
			let X = () => {
					let b = window.aiptag = window.aiptag || {};
					b.cmd = b.cmd || [];
					b.cmd.display = b.cmd.display || [];
					b.cmd.player = b.cmd.player || [];
					b.cmp = b.cmp || {};
					b.cmp.show = !0;
					b.cmp.position = "bottom";
					return b
				},
				u = () => {
					window.nitroAds || (window.nitroAds = {
						createAd() {
							window.nitroAds.queue.push(["createAd", arguments])
						},
						queue: []
					});
					return window.nitroAds
				};
			window.dataLayer = window.dataLayer || [];
			Fa("js", new Date);
			Fa("config", "UA-120544149-1");
			let Y = (b, l) => {
				if (b = document.getElementById(b))
					b.style.display = l
			};
			Na.exports = {
				get zb() {
					return u().loaded
				},
				yb: {
					D: "adinplay",
					Ha: !1,
					show(b = this.D) {
						this.Ha && b !== this.D && this.H();
						this.Ha = !0;
						this.D = b;
						"adinplay" === this.D ? X().cmd.display.push(() => window.aipDisplayTag.display("arras-io_336x280")) : "nitropay" === this.D ? (Y("ad-spawn", "block"),
							u().createAd("ad-spawn", {
								refreshLimit: 10,
								refreshTime: 30,
								renderVisibleOnly: !1,
								refreshVisibleOnly: !0,
								sizes: [
									[336, 280],
									[300, 250]
								]
							})) : Y("referral-fallback", "block")
					},
					H() {
						this.Ha = !1;
						"adinplay" === this.D ? X().cmd.display.push(() => window.aipDisplayTag.clear("arras-io_336x280")) : "nitropay" === this.D ? Y("ad-spawn", "none") : Y("referral-fallback", "none")
					}
				},
				Pa: {
					D: "adinplay",
					Ha: !1,
					show(b = this.D) {
						this.Ha && b !== this.D && this.H();
						this.Ha = !0;
						this.D = b;
						Y("respawn-banner", "block");
						if ("adinplay" === this.D)
							X().cmd.display.push(() => window.aipDisplayTag.display("arras-io_728x90"));
						else if ("nitropay" === this.D || "nitropay-mobile" === this.D) {
							b = document.getElementById("ad-respawn-container");
							let l = document.getElementById("ad-respawn");
							l || (l = document.createElement("div"),
								l.id = "ad-respawn",
								b.appendChild(l));
							b = [];
							"nitropay-mobile" === this.D ? b.push([320, 50]) : (1440 <= window.innerWidth && 680 <= window.innerHeight && b.push([970, 250]),
								1440 <= window.innerWidth && b.push([970, 90]),
								b.push([728, 90]),
								700 <= window.innerHeight && b.push([336, 280]),
								680 <= window.innerHeight && b.push([300, 250]));
							u().createAd("ad-respawn", {
								refreshLimit: 10,
								refreshTime: 30,
								renderVisibleOnly: !1,
								refreshVisibleOnly: !0,
								sizes: b
							})
						}
					},
					H() {
						this.Ha = !1;
						if ("adinplay" === this.D)
							X().cmd.display.push(() => window.aipDisplayTag.clear("arras-io_728x90"));
						else if ("nitropay" === this.D || "nitropay-mobile" === this.D) {
							let b = document.getElementById("ad-respawn");
							b && b.remove()
						}
						Y("respawn-banner", "none")
					},
					Gc() {
						let b = document.getElementById("respawn-banner");
						return b ? b.clientHeight : 0
					}
				},
				ad: {
					Sd(b) {
						return new Promise((l, v) => {
							window.grecaptcha.ready(() => {
								window.grecaptcha.execute("6LdwidEZAAAAAKGQ9ngDYVnClNn_aTAJcvg6cZUc", {
									action: b
								}).then(l).catch(v)
							})
						})
					},
					Td() {
						document.body.appendChild(document.createElement("style")).appendChild(document.createTextNode(".grecaptcha-badge{visibility:hidden}"))
					}
				},
				ie: Fa
			}
		}, (Na, Fa, X) => {
			X.r(Fa);
			X.d(Fa, {
				"default": () => '# Update [2021-11-02]\n- The physics of maze walls have been completely reworked. It\'s now much harder to be stuck inside of them.\n- The Haunted Mansion event has ended, and rocks are now back to normal.\n- The Soccer map was changed and is now rectangular.\n\n# Patch [2021-11-02]\n- Changed kill messages.\n- Fixed grid alignment in portal modes.\n\n# Event [2021-10-31]\n- The Haunted Mansion event has started. Happy Halloween!\n- A new server has also been added, and Soccer, Maze 2TDM, and Maze 4TDM will now appear in game mode rotation as normal again.\n\n# Patch [2021-10-22]\n- Added more protection against botting. As a consequence, you may notice spawning and respawning will take slightly longer than normal.\n- Various bug fixes.\n\n# Balance [2021-10-27]\n- Decreased Maze\'s map size by 15%.\n\n# Update [2021-10-18]\n- Added 7 new themes: Retro, Pastel, Discord, WR Sheet Theme, Descent, Solarized Dark, and Eggplant.\n\n# Update [2021-10-16]\n- Mobile players can now use autofire, autospin, right click, and more! Go to <a href="/">arras.io</a> on your phone and press the plus button on the top left to use the new mobile control buttons.\n- For right click actions such as drone repelling and predator scoping, you can switch between 5 modes: Never, Always, Automatic, Manual, Double Tap. The automatic mode allows you to control your drones normally when your finger is near the middle of the joystick, while repelling from the opposite side when it\'s further away. The manual mode will add a new button to repel your drones. The double tap mode makes your drone repel when you tap on the joystick twice.\n- Patched FOV scripts with drone tanks.\n\n# Update [2021-10-01]\n- Overhauled Portal TDM and Maze Portal TDM! Each team has their own portal in their bases that they can use to move to the other arena! Additionally, Maze Portal TDM has now been split into two different maps!\n- Added Soccer! Push the ball into the opposing team\'s base to win!\n- Fixed the final boss spawn message(s) in Siege.\n- Rebalanced Nyx.\n- Added the Legionary Crasher. A new Siege exclusive Elite Crasher final boss! Good luck!\n- Redid the recoil change made to Triple Shot, Penta Shot, and Bent Hybrid from last month.\n- Did some additional balancing changes to Rocketeer.\n- Fixed the issue where smashers could sit in portals indefinitely.\n- As a nod to the season, the rocks are now pumpkins!\n\n# Balance [2021-09-06]\n- Increased Maze\'s map size by 50%.\n\n# Update [2021-09-02]\n- Added Nyx, the final Celestial.\n\n# Balance [2021-09-02]\n- Buffed Penta Shot, Bent Hybrid, and Triple Shot\'s movement speed but nerfed it\'s recoil.\n- Nerfed Hunter, Poacher, Predator, and Ordnance.\n- Nerfed Rocketeer.\n\n# Patch [2021-08-27]\n- The final bosses in Siege now grow in size after spawning.\n\n# Balance [2021-08-27]\n- Nerfed the Elite Skimmer.\n- Slightly buffed Zaphkiel.\n- Nerfed Theia.\n- Made the Summoner more resistant to bullets.\n- Nerfed the Rogue Celestials.\n- Buffed the Elite Spawner.\n\n# Balance [2021-08-01]\n- Slightly buffed the Minion damage of Spawner branch.\n- Slightly nerfed Factory\'s Minion speed but buffed it\'s movement speed.\n- Slightly nerfed Octo Tank\'s penetration and reload but buffed it\'s bullet speed.\n- Slightly buffed Machine Gunner\'s bullet speed.\n- Nerfed the drone speed of Underseer branch and Overseer branch but buffed it\'s drone damage.\n- Nerfed Maleficitor\'s drone count but buffed it\'s drone damage and drone speed.\n\n# Update [2021-07-15]\n- Added the Elite Spawner.\n\n# Patch [2021-07-15]\n- Shortened the time between the first few waves in Siege.\n- The final bosses are now invulnerable for 3 seconds after spawning.\n\n# Balance [2021-07-14]\n- Buffed the speed of Constructor, Overtrapper, Manager, Septatrapper, and Hexa-Trapper.\n\n# Patch [2021-07-13]\n- Crashes now wave around when idle.\n- Only final bosses spawn in the middle of the map in Siege.\n\n# Update [2021-07-13]\n- Added very rare types of sentries to Siege.\n- Waves with a single boss now spawn in the middle of the map in Siege.\n- Added a new final boss to Siege. Do you believe in Ragnarok?\n\n# Update [2021-07-11]\n- Reworked Sidewinder.\n- Added Rocketeer, branches from Launcher.\n- Added two new bosses.\n\n# Update [2021-07-11]\n- It doesn\'t exist. It is just in your head.\n\n# Patch [2021-07-11]\n- Removed Bosses from Maze.\n- Limited boss spawns to only one in FFA.\n\n# Balance [2021-07-11]\n- Slightly buffed Assassin branch.\n\n# Balance [2021-07-10]\n- Buffed Single\'s bullet speed.\n- Slightly buffed Tri-Angle branch.\n- Slightly nerfed Fighter\'s side barrels.\n- Buffed Banshee\'s Auto Turret turn radius.\n\n# Patch [2021-07-07]\n- Flipped Hewn Double.\n\n# Balance [2021-07-07]\n- Nerfed Mega Smasher.\n- Slightly buffed Crossbow.\n- Slightly nerfed the damage of Hunter branch.\n\n# Balance [2021-07-04]\n- Nerfed Hunter branch damage but buffed it\'s penetration.\n- Buffed the base speed of Hunter, Poacher, Predator, and Ordnance.\n- Reworked Skimmer and Twister.\n\n# Update [2021-07-04]\n- Spike bounce is now toggleable. Turn on override to disable it.\n\n# Patch [2021-07-04]\n- Spike no longer passes through teammates.\n\n# Balance [2021-06-27]\n- Nerfed the health of all Celestials.\n- Buffed Ragnarok\'s shield.\n\n# Patch [2021-06-27]\n- Added shapes back to Siege.\n- Removed Underseer branch from Siege.\n\n# Balance [2021-06-19]\n- Slightly buffed Tri-Trapper.\n- Slightly nerfed Predator.\n- Slightly nerfed Bomber\'s back barrels.\n\n# Balance [2021-06-18]\n- Buffed Beekeeper.\n\n# Patch [2021-06-17]\n- Reverted the name change to Auto-Overseer.\n\n# Update [2021-06-17]\n- Added Beekeeper, branches from Artillery.\n\n# Balance [2021-06-17]\n- Slightly nerfed all Tri-Angle branch tanks.\n- Slightly buffed Auto-Overseer\'s auto turret.\n\n# Balance [2021-06-16]\n- Increased damage and penetration on Single whilst reducing bullet reload and speed slightly.\n- Buffed Twister\'s reload and bullet speed.\n\n# Balance [2021-06-15]\n- Slightly buffed the base speed of Engineer, Conqueror, Constructor, Necromancer, and Underseer.\n- Removed the recoil from the front barrels of Eagle and Falcon.\n\n# Update [2021-06-13]\n- Made Sentries smoother.\n\n# Balance [2021-06-13]\n- Rebalanced Sentries.\n\n# Update [2021-06-12]\n- Reworked Hunter branch.\n- Flipped Fortress.\n\n# Balance [2021-06-12]\n- Nerfed Ragnarok.\n- Buffed Auto-5, Auto-3, and Mega-3.\n\n# Balance [2021-06-09]\n- Buffed the health of celestials.\n- Buffed all bosses in siege.\n- Slightly nerfed the damage of Ragnarok, but buffed its health.\n\n# Patch [2021-06-09]\n- Attempted to fix the AI of celestials.\n- Ragnarok is no longer called a Celestial.\n\n# Patch [2021-06-06]\n- Fixed a bug that crashes servers when a boss spawns.\n- Slight changes to the Siege map.\n\n# Balance [2021-06-06]\n- Buffed all bosses in Siege.\n- Buffed Ragnarok heavily.\n\n# Update [2021-06-05]\n- Slightly tweaked the Siege map.\n\n# Balance [2021-06-05]\n- Buffed Ragnarok.\n\n# Update [2021-06-05]\n- Completely redesigned the Siege map.\n- Added Theia: A yellow celestial.\n- Added Ragnarok: A final boss in Siege.\n- Siege now features 31 waves, instead of 27.\n\n# Update [2021-06-04]\n- Completely reworked Elite Sprayer.\n- Added a new boss.\n- Made crashers smoother.\n\n# Balance [2021-06-04]\n- Slightly buffed Elite Battleship.\n- Slightly nerfed Elite Gunner.\n\n# Balance [2021-05-30]\n- Slightly buffed the speed of all Assassin branch tanks excluding Falcon.\n\n# Patch [2021-05-29]\n- Removed Spike from Siege.\n\n# Balance [2021-05-27]\n- Buffed Cruiser and Auto-Cruiser.\n- Buffed Factory\'s movement speed.\n- Buffed Nailgun\'s movement speed.\n\n# Balance [2021-05-27]\n- Slightly buffed Sprayer.\n- Slightly buffed all Celestials.\n\n# Balance [2021-05-25]\n- Reworked the Summoner\n- Buffed Elite Gunner, Rogue Palisade, Elite Battleship, Summoner, Elite Skimmer, Freyja, and Zaphkiel\'s movement speed.\n- Nerfed Elite Sprayer, Elite Destroyer, Nest Keeper, and Paladin\'s movement speed.\n- Nerfed the Celestial\'s health.\n- Nerfed Freyja.\n- Nerfed Paladin.\n- Nerfed Zaphkiel.\n\n# Balance [2021-05-25]\n- Slightly reduced the speed of Overlord, Autoseer, Commander, Overdrive, and Overseer.\n\n# Balance [2021-05-23]\n- Slightly buffed the base speed of Overseer, Overlord, Overtrapper, Overgunner, Overdrive, Autoseer, Banshee, Commander, and Manager.\n\n# Balance [2021-05-22]\n- Slightly buffed the speed of Septa Trapper and Hexa Trapper.\n\n# Update [2021-05-21]\n- Added Launcher, branches from Pounder.\n- Sidewinder no longer branches from Hunter but now branches from Launcher.\n- Swarmer no longer branches from Destroyer but now branches from Launcher.\n- Skimmer and Twister no longer branch from Artillery but now branches from Launcher.\n- Reworked Overdrive so all of its drone turrets shoot at once and slightly increased their penetration and damage\n\n# Gamemode Poll [2021-05-18] Which of these gamemodes do you like?\n- 23, 2021-05-23T00:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n- Siege\n\n# Gamemode Poll [2021-05-18] Which of the following team gamemodes do you like?\n- 22, 2021-05-23T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM               |X| |X|X| |X\n- Domination        |X| |X|X| |X\n- Mothership        |X| |X|X| |X\n- Open TDM          |X|X|X|X|X|X\n- Open Domination   |X|X|X|X|X|X\n- Tag               |X|X|X|X|X|X\n- Portal TDM        |X| |X|X| |X\n- Portal Mothership |X| |X|X| |X\n- Assault           |X| | |X| |\n\n# Balance [2021-05-18]\n- Buffed Banshee\'s drones and acceleration while removing the ability to control it\'s auto turrets.\n\n# Balance [2021-05-17]\n- Buffed the Elite Skimmer but nerfed it\'s health.\n- Nerfed the Nest Keeper but buffed it\'s FoV.\n- Reworked the Elite Gunner.\n- Nerfed the Elite Battleship.\n- Buffed the Elite Sprayer.\n- Buffed the Elite Destroyer.\n- Buffed the Rogue Palisade.\n\n# Balance [2021-05-16]\n- Buffed Skimmer, Twister, and Swarmer.\n- Slightly buffed the FoV of Twister.\n- Buffed the accuracy of AI turrets.\n\n# Balance [2021-05-13]\n- Made Bulwark\'s traps more focused.\n\n# Patch [2021-05-13]\n- Renamed Auto-Overseer to Autoseer.\n\n# Balance [2021-05-05]\n- Buffed Builder, Auto-Builder, Boomer, and Conqueror\'s movement speed.\n- Buffed Machine Gunner.\n- Nerfed Surfer\'s swarm range.\n\n# Balance [2021-05-04]\n- Slightly buffed Triple Twin.\n\n# Balance [2021-05-02]\n- Buffed Hexa-Trapper and Septa-Trapper\'s movement speed.\n- Fixed Sprayer\'s mini bullet.\n- Buffed Sidewinder\'s bullet speed and range.\n\n# Balance [2021-04-22]\n- Buffed Auto-4\'s bullet speed.\n\n# Balance [2021-04-20]\n- Buffed Auto-3\'s bullet range.\n- Buffed Auto-5\'s bullet health, penetration, and damage.\n- Buffed Auto-4\'s bullet health, penetration, and damage.\n- Buffed Trap Guard\'s basic barrel.\n\n# Patch [2021-04-12]\n- Spawner, Auto-Spawner, and Factory minions will no longer bounce when colliding with each other.\n\n# Balance [2021-04-11]\n- Slightly buffed Hewn Double.\n- Slightly buffed Gunner and Auto-Gunner.\n- Nerfed tanks that use sunchips.\n\n# Balance [2021-04-11]\n- Doubled the time it takes for Landmine to go invisible.\n- Increased the range at which you can begin to see invisible tanks.\n\n# Patch [2021-04-10]\n- Your drones will no longer collide with the drones of your teammates.\n\n# Balance [2021-04-09]\n- Slightly increased Ranger\'s FoV.\n- Slightly increased Maleficitor\'s drone speed.\n- Fixed bosses becoming overpowered due to the drone buff of necro classes.\n\n# Balance [2021-04-08]\n- Slightly buffed spawned drones from all necro classes.\n- Slightly nerfed the FoV of drones and minions.\n- Increased base speed of Maleficitor, Spawner, and Auto-Spawner.\n\n# Balance [2021-04-08]\n- Slightly nerfed Crossbow and Auto-Tri-Angle\'s penetration.\n\n# Balance [2021-04-08]\n- Slightly buffed all hybrid-type drones.\n\n# Update [2021-04-07]\n- Added Armsman, branches from Rifle.\n- Added Crossbow, branches from Rifle.\n\n# Balance [2021-04-07]\n- Slightly increased the base speed of Ranger, Sidewinder, and Fortress.\n\n# Balance [2021-02-25]\n- Nerfed Shield Capacity.\n- Nerfed Battleship AI drones.\n- Fixed Sprayer and Machine Gun\'s recoil.\n- Nerfed Skimmer and Twister\'s range.\n- Slightly buffed Sidewinder\'s Snake\'s speed.\n- Health of Surfer, Fighter, and Bomber is now consistent with Tri-Angle.\n- Slightly buffed the reload of Auto-Double and Auto-Overseer\'s auto turrets.\n\n# Update [2021-01-17]\n- You can now press F to take control of an uncontrolled Dominator or Mothership.\n\n# Patch [2021-01-14]\n- Fixed the rotation speed of smashers.\n\n# Gamemode [2021-01-13]\n- Changed how the gamemodes are randomized in the US servers.\n\n# Balance [2021-01-12]\n- Slightly nerfed Shield Capacity and Body Damage.\n\n# Patch [2021-01-07]\n- Optimized bandwidth usage.\n\n# Update [2021-01-05]\n- The first person to join a sandbox now has operator access, and can press &#96; + F1 for the list of operator commands that can used while holding &#96;.\n\n# Balance Update [2021-01-05]\n- Buffed Body Damage and Shield Regeneration.\n\n# Patch [2021-01-02]\n- Added more Sandbox servers.\n- Made sandbox arenas dynamically resize.\n- Added basic controller support.\n\n# Gamemode [2021-01-01]\n- Added Sandbox mode.\n- More features will be coming soon.\n- Note that if there are too many players, you\'ll be placed in a random sandbox with another player.\n\n# Patch [2020-12-30]\n- Changed the server speed display to use mspt and made the capitalization of arras.io more consistent.\n- Prevented crashers from passing through walls.\n\n# Update [2020-12-29]\n- Changed the maze generation in Maze and Open Maze TDM.\n- Buffed Shield Capacity and nerfed Shield Regeneration.\n- Redesigned Commander.\n- Made autospin faster.\n- <a href="#balances">Other balance changes</a>.\n\n# Balance [2020-12-29]\n- Banshee can now control its auto turrets.\n- Buffed the reload of Falcon.\n- Nerfed Sidewinder.\n\n# Update [2020-12-25]\n- Added Commander, branches off of Overseer.\n- Added Auto-Cruiser, branches off of Cruiser.\n\n# Patch [2020-12-24]\n- Fixed the color of the purple base.\n\n# Balance [2020-12-22]\n- Invisible tanks are now more visible when you\'re near it.\n\n# Patch [2020-12-22]\n- Made the spawn screen faster.\n\n# Patch [2020-12-21]\n- Slightly changed the names of some gamemodes.\n\n# Event [2020-12-20]\n- The squads event has started! Added Squads in USA and Asia.\n- Players spawn on teams of 4 with random players. You can also press F to create or leave a private team.\n\n# Patch [2020-12-18]\n- Fixed players spawning outside sanctuaries.\n\n# Patch [2020-12-17]\n- Made the low graphics option lower the resolution so it could actually improve performance.\n\n# Patch [2020-12-16]\n- Changed how names and health bars are rendered.\n\n# Patch [2020-12-11]\n- The arena in Tag now shrinks gradually instead of starting out small.\n\n# Patch [2020-12-09]\n- Arena closers can now see invisible players.\n- Most turrets no longer fire when the target is outside the firing arc.\n- Prevented players in Siege from leaving the fortress.\n\n# Balance [2020-12-07]\n- Reworked how recoil works in general and made it more consistent.\n\n# Patch [2020-12-06]\n- Added a new region code system.\n- Optimized entity controllers and fixed a memory leak.\n\n# Gamemode [2020-12-06]\n- The server selector now displays the player count and player limit instead of the server provider and is sorted by region.\n- Added new servers and shuffled the gamemodes. Now almost all of the servers have partially randomized gamemodes.\n- USA has Maze, TDM, Domination/Mothership, Open TDM, Pandemic/Tag, Siege/Assault, and 4 Team Maze gamemodes.\n- Europe has FFA and a random team gamemode.\n- Asia has a Maze 4TDM variant and a random team gamemode, and sometimes Maze.\n- Additionally, there\'s a randomized gamemode server in both USA and Asia.\n\n# Balance Update [2020-11-29]\n- Rebalanced Battleship.\n- Nerfed bosses.\n- Changed the way Spreadshot looks.\n- Go to the <a href="#balances">balance update section</a> for more details.\n\n# Balance Update Details [2020-11-29]\n- Buffed the reload, range, and damage of Battleship\'s guided swarm drones.\n- Buffed the speed and damage of Battleship\'s autonomous swarm drones but nerfed their reload and range.\n- Nerfed the reload and bullet stats of Elite Battleship.\n- Nerfed the bullet stats of Nest Keeper\'s Mega Crasher.\n- Nerfed the bullet stats of Elite Skimmer\'s Hypermissiles.\n- Nerfed the range of Freyja.\n- Nerfed the range and reload of Summoner.\n\n# Patch [2020-11-28]\n- Made the new prediction the default.\n- Improved debug information to show prediction mode, bandwidth usage (in bytes per second), entity count, and server idle time.\n- You can now press Shift + L to keep debug information on instead of holding L.\n- Added a display for the author of custom themes.\n\n# Patch [2020-11-24]\n- Various client and server reworks and minor optimizations.\n- Note that if you own a private server, you can now go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to enable the class tree.\n\n# Update [2020-11-15]\n- Added randomized gamemodes.\n\n# Patch [2020-11-15]\n- Made the text in the server selector slightly smaller.\n- Banned a few multiboxing scripts.\n\n# Balance [2020-11-15]\n- Nerfed the penetration of Auto Double\'s auto-turret.\n- Nerfed the damage of Auto Overseer\'s auto-turret.\n- Nerfed the accuracy and bullet speed of Engineer\'s pillboxes.\n\n# Event [2020-11-13]\n- Started the Pandemic event, replacing Tag in US East and Asia.\n- When a player on the <b style="color: #00b0e1">blue</b> team dies to a player on the <b style="color: #3cbf00">green</b> team, they are infected and will respawn on the green team.\n- The game ends when everyone is infected.\n\n# Patch [2020-11-07]\n- Players can no longer get stuck in walls.\n- Going through a portal now grants invulnerability for 5 seconds.\n\n# Gamemode Poll [2020-11-01] Which of these gamemodes do you like?\n- 21, 2020-11-08T00:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n- Siege\n\n# Gamemode Poll [2020-11-01] Which of the following team gamemodes do you like?\n- 20, 2020-11-08T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM               |X| |X|X| |X\n- Domination        |X| |X|X| |X\n- Mothership        |X| |X|X| |X\n- Open TDM          |X|X|X|X|X|X\n- Open Domination   |X|X|X|X|X|X\n- Tag               |X|X|X|X|X|X\n- Portal TDM        |X| |X|X| |X\n- Portal Mothership |X| |X|X| |X\n- Assault           |X| | |X| |\n\n# Patch [2020-11-01]\n- Changed the gamemode code for Assault, Siege, and Tag.\n- The server list is now fetched from the central servers.\n- Slightly changed the sorting of the servers.\n- Forced the HTTPS redirect.\n\n# Update [2020-10-28]\n- Servers that are unavailable are now automatically removed.\n- You can now paste in party links without reloading.\n\n# Patch [2020-09-28]\n- Added reCAPTCHA and a few other anti-botting measures.\n- Removed the reCAPTCHA badge from the bottom right during the game.\n\n# Update [2020-09-06]\n- The tag event has started! Added Tag in US East and Asia.\n- Players who are killed will respawn on the team that killed them.\n- A team wins when there are no other team alive.\n\n# Patch [2020-08-22]\n- Added an in-game display for server ID.\n- Added a workaround for lag caused by mouse movement in Chrome 84.\n\n# Gamemode Poll [2020-07-29] What FFA gamemodes do you like?\n- 19, 2020-07-31T07:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n\n# Gamemode Poll [2020-07-29] Which of the following team gamemodes do you like?\n- 18, 2020-07-31T07:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM             |X| |X|X| |X\n- Domination      |X| |X|X| |X\n- Mothership      |X| |X|X| |X\n- Open TDM        |X|X|X|X|X|X\n- Open Domination |X|X|X|X|X|X\n\n# Update [2020-07-20]\n- Added Ordnance, branches off of Artillery and Hunter.\n\n# Gamemode [2020-07-06]\n- The event has ended.\n- US West has Assault, US East has Siege, Europe has Portal 4TDM, and Asia has Portal Mothership.\n\n# Event Poll [2020-06-29] Which of these gamemodes do you like?\n- 17, 2020-07-06T07:00:00.000Z, any\n- Assault\n- Siege\n- Portal 4TDM\n- Portal Mothership\n\n# Patch [2020-06-26]\n- Added upgrade cooldown when you have bullets on the map.\n- Fixed a vulnerability that could cause server crashes.\n- Spawn protection now lasts 60 seconds.\n- Shuffled the gamemodes for bandwidth optimization.\n\n# Patch [2020-06-25]\n- Fixed green team\'s losing condition in Assault.\n\n# Event [2020-06-23]\n- We have brought back all of the event gamemodes: Assault, Siege <span class="tooltip"><span>Originally the boss event</span></span>, Portal 4TDM, and Portal Mothership.\n- Each region will have an opportunity to play each of these gamemodes at least once during the event.\n\n# Gamemode [2020-06-23]\n- Slightly reworked and readded Assault.\n- For the <b style="color: #00b0e1">blue</b> team to win, they must invade and destroy all of the green sanctuaries.\n- For the <b style="color: #3cbf00">green</b> team to win, they must guard their sanctuaries and dominators and keep at least 3 of them continuously for 8 minutes.\n- When a sanctuary is destroyed, it can only be repaired to become a dominator.\n- Changed the gamemodes of all of the servers.\n- There are now three US West servers with the gamemodes 4TDM, Maze 2TDM, and Maze Domination.\n- US East now has 2TDM, 4 Team Domination, and FFA.\n- Europe only has Maze.\n- Asia has FFA and Maze 4TDM.\n\n# Patch [2020-06-23]\n- Changed maze generation for Assault to make the sanctuaries more connected.\n\n# Event Poll [2020-06-18] Do you like the portal event?\n- 16, 2020-06-22T00:00:00.000Z, radio\n- No\n- Yes, but it should only be an event\n- Yes, and it should become a regular gamemode\n\n# Event [2020-06-08]\n- The portal event has started! Added Portal 4TDM and Portal Mothership.\n- In Portal 4TDM, one side of the arena is normal 4TDM and the other is Maze 4TDM.\n- In Portal Mothership, Motherships spawn on opposing sides of the arena.\n- Portals connect the two sides of the arena.\n\n# Gamemode [2020-06-01]\n- Added Assault.\n- For the <b style="color: #00b0e1">blue</b> team to win, they must invade and destroy the green sanctuary, which can be unlocked by destroying all of their three dominators.\n- For the <b style="color: #3cbf00">green</b> team to win, they must guard their dominators and sanctuary and keep at least 3 of them continuously for 8 minutes.\n- Added 2TDM and restored some of the servers that ran out of bandwidth.\n\n# Gamemode Poll [2020-05-30] What FFA gamemodes do you like?\n- 15, 2020-06-04T00:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n\n# Gamemode Poll [2020-05-30] Which of the following team gamemodes do you like?\n- 14, 2020-06-04T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM             |X| |X|X| |X\n- Domination      |X| |X|X| |X\n- Mothership      |X| |X|X| |X\n- Open TDM        |X|X|X|X|X|X\n- Open Domination |X|X|X|X|X|X\n\n# Balance [2020-05-29]\n- Buffed the reload and accuracy of auto-turrets.\n- Nerfed the acceleration of Mega Smasher.\n- Nerfed Engineer.\n- Nerfed rammers.\n\n# Balance [2020-05-27]\n- Buffed Sidewinder, Spreadshot, and Auto-4.\n- Buffed all auto-turrets.\n- Buffed Gunner Trapper\'s recoil.\n- Buffed Battleship\'s reload.\n- Nerfed Carrier\'s field of view.\n- Nerfed the bullet speed of Artillery, Mortar, Barricade, and Auto-5.\n- Buffed the knockback of Factory drones.\n- Mega Smasher is now faster but no longer completely immune from knockback.\n\n# Patch [2020-05-27]\n- Replaced some servers to deal with bandwidth issues.\n\n# Event Poll [2020-05-17] Did you like the boss event?\n- 13, 2020-05-22T00:00:00.000Z, radio\n- No\n- Yes, but it should only be an event\n- Yes, and it should become a regular gamemode\n\n# Event [2020-05-17]\n- The boss event has ended.\n\n# Balance [2020-05-16]\n- Buffed the shield capacity stat.\n\n# Update [2020-05-16]\n- Invisible tanks such as smasher are now slightly visible when you\'re near it.\n- Healer can now gain score from healing other players.\n\n# Event [2020-05-14]\n- Added Sanctuaries to the boss event.\n- Players can only spawn in the sanctuaries. When all of the sanctuaries are destroyed and not restored in 60 seconds, the game is lost.\n\n# Balance [2020-05-13]\n- Nerfed the knockback of Healer.\n\n# Update [2020-05-12]\n- Redesigned Healer\'s appearance to look different from Sidewinder.\n\n# Patch [2020-05-12]\n- Replaced some servers to deal with bandwidth issues.\n- Added rocks to FFA.\n- When under spawn protection, you no longer deal damage to bosses and motherships, and you also cannot turn invisible.\n- Added a contact link.\n\n# Event [2020-05-09]\n- The boss event has started! Bosses will spawn in waves while players defend themselves.\n- Added Healer, branching off of Basic, for the boss event.\n\n# Balance [2020-05-09]\n- Buffed bosses.\n\n# Patch [2020-05-09]\n- Shuffled the gamemodes for bandwidth optimization.\n\n# Patch [2020-05-08]\n- Reworked AI pathfinding to avoid walls.\n\n# Patch [2020-04-14]\n- Added HTTPS redirect.\n\n# Patch [2020-04-13]\n- Blacklisted suspicious IPs.\n\n# Patch [2020-04-10]\n- Changed server list sorting.\n- Added support for <a href="https://arras.io/">HTTPS</a>.\n\n# Gamemode Update [2020-04-10]\n- Added three new servers and new gamemodes.\n- There are now two US West servers with gamemodes 4 Team Mothership and Maze FFA.\n- US East now has Maze 4TDM, 4 Team Maze Domination, Assault, Domination, and FFA.\n- Europe has two servers with gamemodes Maze 2TDM and 4TDM.\n- Asia now has Maze Domination and Open Maze 4TDM.\n\n# Patch [2020-03-25]\n- Fixed bug where the score of the Mothership is restored to players when they respawn after a server overload.\n\n# Patch [2020-03-24]\n- Added rocks to Open 3TDM.\n\n# Patch [2020-03-20]\n- Optimized text rendering on older browsers.\n\n# Gamemode Poll [2020-03-20] What FFA gamemodes do you like?\n- 12, 2020-03-24T00:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n\n# Gamemode Poll [2020-03-20] What team gamemodes do you like?\n- 11, 2020-03-24T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM                                                                       |X| |X|X| |X\n- Domination                                                                |X| |X|X| |X\n- Mothership                                                                |X| |X|X| |X\n- Open TDM                                                                  |X|X|X|X|X|X\n- Open Domination                                                           |X|X|X|X|X|X\n- Assault <span class="tooltip"><span>Same as the D-Day event</span></span> |X| | |X| |\n\n# Gamemode [2020-03-19]\n- Replaced Glitch and Heroku servers with an ExtraVM server.\n- Added Open 3TDM gamemode.\n\n# Update [2020-03-18]\n- Added Elite Battleship, idea by Reflection.\n- Added Nest Keeper, idea by Whert.\n\n# Patch [2020-03-18]\n- Applied a new naming scheme in party links.\n\n# Patch [2020-03-16]\n- Switched servers from DVI to ExtraVM.\n\n# Patch [2020-03-12]\n- Updated the link to the proxy server.\n\n# Gamemode [2020-03-10]\n- Removed the Space 3TDM event gamemode as the server has been down.\n\n# Patch [2020-03-09]\n- Added a button that links to <a target="_blank" href="https://momentumstudios.games/">Momentum Studios</a>.\n\n# Patch [2020-03-09]\n- Migrated from <a target="_blank" href="https://surge.sh/">surge.sh</a> to <a target="_blank" href="https://www.netlify.com/">Netlify</a>.\n- Added older changelogs into the same document.\n\n# Announcement [2020-03-06]\n- Arras.io has received no updates in the last 7 months, but that will soon change. The developer has now joined forces with Momentum Studios, a small game company specializing in the development of online games.\n- We hope to be able to work with everyone soon, and bring some life back into the arras.io community!\n\n# Patch [2020-01-10]\n- Fixed a bug with more than 9 upgrades in private servers.\n\n# Patch [2019-12-19]\n- Fixed a bug with the disconnection screen showing a score instead of the disconnection message.\n\n# Patch [2019-08-09]\n- Changed the disconnection screen to display a different message in case of AFK timeout.\n\n# Balance [2019-07-21]\n- Nerfed Mega-Smasher\'s movement speed but made it immune to knockbacks.\n\n# Event [2019-07-21]\n- Made the arena in the Space 3TDM circular and around the moon.\n\n# Patch [2019-07-18]\n- Fixed auto-restore in Space modes.\n\n# Patch [2019-07-17]\n- Fixed a bug where you can move out of the arena bound in Space modes.\n- Made the yellow event label a bit less flashy.\n- Made the server selector larger.\n- Made everything change in size smoothly instead of instantly again.\n- Bosses now ignore you if you\'re within a base.\n\n# Event [2019-07-16]\n- Added a new US East server from ExtraVM that can run 2 servers.\n- Moved 4TDM to the new server and added the event gamemode.\n- For the 50th anniversary of Apollo 11, the event gamemode is Space 3TDM!\n- Added <a target="_blank" href="https://wikipedia.org/wiki/Reaction_control_system">RCS</a> that will automatically make you slow down if you don\'t press any key, which you can disable with R.\n- Removed the old Glitch 4TDM server.\n\n# Balance Update [2019-07-03]\n- Nerfed Tri-Angle branch\'s recoil and buffed Destroyer branch\'s recoil.\n- Buffed previously overnerfed branches including Double Twins and Necromancers.\n- Slightly buffed Gunner branch\'s bullet speed.\n- Buffed Conqueror, Sidewinder, Shotgun, and Boomer.\n- Buffed the stats and reload of all regular traps.\n- Made Builder branch traps not overshoot.\n- Made the slower tanks faster.\n- Go to the <a href="#balances">balance update section</a> for more details.\n\n# Balance Update Details [2019-07-03]\n- Buffed Destroyer, Annihilator, and Hybrid\'s recoil.\n- Buffed Conqueror\'s destroyer barrel\'s reload and recoil.\n- Nerfed Annihilator\'s reload to be the same as Destroyer.\n- Nerfed the thruster recoil of all Tri-Angle upgrades except Bomber.\n- Nerfed Tri-Angle, Auto-Tri-Angle, Booster, Surfer, and Bomber\'s front barrel speed.\n- Nerfed Fighter\'s front and side barrel speed.\n- Slightly buffed the stats of all Double Twin upgrades except bent double.\n- Slightly buffed Gunner, Auto-Gunner, and Cyclone\'s bullet speed.\n- Buffed Sidewinder\'s bullet speed.\n- Buffed Shotgun\'s bullet stats and accuracy.\n- Buffed Director\'s reload.\n- Buffed Underseer and Necromancer drones.\n- Buffed the stats and reload of all regular traps.\n- Buffed Boomer\'s damage.\n- Made Builder branch traps not overshoot.\n- Buffed Assassin branch, Swarmer, Banshee, Manager, Constructor, Overtrapper, Spawner, and Auto-Spawner\'s movement speed.\n\n# Patch [2019-07-03]\n- Added temporary fireworks for Independence Day for people in the United States.\n- Fixed NaN bug with protocol.\n- Made the references to changelog categories clickable.\n\n# Balance [2019-06-24]\n- Nerfed recoil of Gunner Trapper.\n- Buffed bullet stats of Overgunner to be the same as Gunner Trapper.\n\n# Patch [2019-06-22]\n- Made the client send movement instantly to reduce latency.\n- Used the improved encoding algorithm on the client, which was originally only used on the server.\n- Note that if you own a private server, you need to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to keep your server working!\n- Updated the <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=README.md">link format for private servers</a>.\n\n# Patch [2019-06-17]\n- More client side optimizations.\n- Set the AFK timeout to only kick players when they have been inactive for 5 minutes.\n- Neutral and enabled buttons now deal no damage at all.\n- Added a display for tank speed in the debug menu, which you can access by pressing L.\n\n# Update [2019-06-17]\n- Added auto-level up, which automatically makes you level up after spawning. By default it\'s enabled on mobile, but you can set it in the <a href="#options-menu">options menu</a>.\n- Added the option to use the new interpolation mode, also in the <a href="#options-menu">options menu</a>, which can sometimes make the game smoother.\n- Doors can no longer put you into walls now.\n\n# Patch [2019-06-16]\n- Added colored indicators to the result page of table polls.\n\n# Gamemode Poll [2019-06-15] What FFA gamemodes do you like?\n- 10, 2019-06-19T00:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n\n# Gamemode Poll [2019-06-15] What team gamemodes do you like?\n- 9, 2019-06-19T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM                                                                       |X| |X|X| |X\n- Domination                                                                |X| |X|X| |X\n- Mothership                                                                |X| |X|X| |X\n- Open TDM                                                                  |X|X|X|X|X|X\n- Open Domination                                                           |X|X|X|X|X|X\n- Assault <span class="tooltip"><span>Same as the D-Day event</span></span> |X| | |X| |\n\n# Patch [2019-06-15]\n- Added tooltips.\n- Fixed a bug with invalid dates in the changelog on certain devices.\n- Removed featured status from D-Day.\n\n# Event Poll [2019-06-14] Did you like the D-Day event?\n- 8, 2019-06-17T00:00:00.000Z, radio\n- No\n- Yes, but it should only be an event\n- Yes, and it should be renamed and kept as a possible normal gamemode\n\n# Patch [2019-06-13]\n- Fixed scrollbars in Firefox.\n- Added styling for radio boxes.\n- Added support for radio polls.\n\n# Patch [2019-06-12]\n- Fixed a bug with negative levels in private servers.\n- Prevented everything from moving around weirdly during severe lag.\n- Made the references to the <a href="#options-menu">options menu</a> in the changelog clickable.\n- Fixed a bug with the <a href="#options-menu">options menu</a> overflowing on Firefox.\n\n# Patch [2019-06-09]\n- Minor color changes with the spawn screen.\n- Fixed the changelog entries overlapping with each other on small screens.\n- Various client side optimizations.\n\n# Balance [2019-06-07]\n- Buffed trapper dominator\'s reload.\n\n# Patch [2019-06-07]\n- Fixed some bugs with the spawn screen on Firefox.\n- Modified the D-Day map, removing a diagonal hole in the wall near the Axis base.\n- Fixed a bug with Maleficitor drones not turning invisible.\n\n# Event [2019-06-06]\n- Added an event mode on Maze 2TDM, which is replacing Open 3TDM.\n- As today is the 75th anniversary of <b>D-Day</b>, it is the event gamemode!\n- The allies, which are <b style="color: #00B0E1">blue</b>, have more tanks than the Axis powers, which are <b style="color: #F04F54">red</b>.\n- For the allies to win, they must invade and destroy the red central base on the bottom right, which is unlocked by destroying all of their dominators scattered on the map.\n- For the Axis powers to win, they must guard all of their dominators and base and keep at least 4 of them continuously for 8 minutes.\n\n# Patch [2019-06-03]\n- Fixed a bug where keys would act multiple times if you press enter multiple times while spawning.\n- Changed the dropdown icon in the <a href="#options-menu">options menu</a>.\n\n# Patch [2019-06-02]\n- Made the changelog category selector scrollable.\n- Resized maze walls so they fit together better.\n- Hidden the leaderboard in screenshot mode.\n- Made the server selector scroll when selected.\n- Fixed a bug with spaces in text measurer fallback for older devices.\n- Added a way to <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=README.md">specify gamemodes for private servers</a>.\n\n# Patch [2019-06-01]\n- Added the option to use the mouse on mobile devices in the <a href="#options-menu">options menu</a>.\n- Made the changelog category selector be on top of the changelog on smaller screens.\n- Fixed a bug with the respawn delay.\n- Multiple maze walls in a square arrangement will join together.\n- Added some client side optimizations.\n\n# Patch [2019-05-28]\n- Automatically select the nearest fast server by default instead of a random one.\n\n# Patch [2019-05-26]\n- Fixed a bug on mobile where you shoot immediately after tapping to spawn.\n- Fixed another bug on mobile where tapping without dragging will not update your aim.\n- Added notification to add to home screen on mobile.\n\n# Patch [2019-05-25]\n- Reworked broadcast system again to significantly lower bandwidth.\n- Note that if you own a private server, you need to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> and update your server accordingly to keep your server working!\n- Newly spawned tanks now flash when they\'re invulnerable.\n\n# Update [2019-05-25]\n- Added new mobile controls with larger buttons for stats and joysticks on the bottom. Just go to <a href="/">arras.io</a> on your phone to use it!\n- You can now press Q to save screenshots instead of just pressing Z to record videos.\n- Added <a href="https://youtu.be/5XY8kKIZN-w">custom keybinds</a>, which you can access by going to the <a href="#options-menu">options menu</a> and clicking on the key indicators.\n- Note that you can also press backspace to unbind keys.\n- Added changelog categories. <a href="#updates">Updates</a> is for all major updates. <a href="#events">Events & Gamemodes</a> is for major updates involving events or gamemodes. <a href="#balances">Balance</a> is for every balance update, major or minor. <a href="#changelog">Changelog</a> will show you every single update.\n\n# Patch [2019-05-25]\n- Added automatic sweeping to the Discord bot to save on memory usage.\n- Patched kill counter to lower memory usage.\n- Changed the style of the arrows of the drop-downs in the <a href="#options-menu">options menu</a>.\n\n# Balance [2019-05-24]\n- Buffed Hewn Double recoil and bullet stats.\n\n# Patch [2019-05-24]\n- Added notification to press N if player hasn\'t press N 30 seconds after spawning.\n\n# Balance [2019-05-21]\n- Nerfed Necromancer drone speed.\n- Made Necromancer guard drones turn squares into regular drones instead of other guard drones.\n\n# Balance [2019-05-20]\n- Buffed shotgun damage and bullet speed.\n- Nerfed Necromancer drone stats.\n\n# Balance [2019-05-11]\n- Nerfed Overdrive drone stats.\n- Made squares lose score upon becoming Necromancer drones.\n\n# Balance [2019-05-08]\n- Nerfed Sniper reload slightly.\n\n# Event [2019-05-05]\n- The event has ended.\n- For now, the event mode is replaced with regular Open 3TDM.\n\n# Update [2019-05-04]\n- The Glitch server is now visible only when the Heroku server is not available.\n- Added tooltips when upgrading to Stalker, Manager, Landmine, Falcon, Eagle, Maleficitor, or Predator.\n\n# Patch [2019-05-03]\n- Added lines to indicate branching on the class tree, press T to show.\n\n# Event [2019-05-03]\n- Replaced 4 Team Domination for an event mode.\n- In remembrance of <i>Freedom 7</i>, the first manned United States spaceflight which was on May 5, 1961, the event gamemode is Space 3TDM!\n- We\'ll likely have more events in the future!\n\n# Balance [2019-05-02]\n- Buffed the engine acceleration stats of Smashers.\n\n# Patch [2019-05-01]\n- Fixed bug that made the servers crash.\n\n# Gamemode [2019-04-30]\n- Added a new server in Asia, also sponsored by <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a>.\n- Added Maze on the server.\n- Changed the OVH Europe server to FFA.\n\n# Gamemode [2019-04-20]\n- Added a new US East server from OVH sponsored by <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a>.\n- Added Maze 2TDM on the server.\n\n# Patch [2019-04-14]\n- Made the team selector use only the number of teammates you have instead of also the team\'s total score.\n- Fixed bug with death effect.\n\n# Gamemode Poll [2019-04-12] What FFA gamemodes do you like?\n- 7, 2019-04-15T00:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n\n# Gamemode Poll [2019-04-12] What team gamemodes do you like?\n- 6, 2019-04-15T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM             |X| |X|X| |X\n- Domination      |X| |X|X| |X\n- Mothership      |X| |X|X| |X\n- Open TDM        |X|X|X|X|X|X\n- Open Domination |X|X|X|X|X|X\n\n# Balance [2019-04-12]\n- Fixed Overdrive drone\'s reload.\n- Fixed polls not loading.\n- Balance changes.\n\n# Patch [2019-04-11]\n- Improved the encoding algorithm used by the server to lower bandwidth usage.\n\n# Update [2019-04-08]\n- Switched from Hetzner to OVH for the European server.\n- This server is also sponsored by <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a> and should be faster.\n\n# Gamemode [2019-04-05]\n- Added a new European server from Hetzner.\n- Thanks to <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a> for sponsoring it!\n- Currently the gamemode is Maze but I\'ll likely change the gamemode for it in the future.\n- I\'ve replaced the link for <a href="https://arras-lb.glitch.me/donate">Stripe donation</a>, but you can still access it.\n\n# Balance [2019-04-03]\n- Nerfed spike bounce ability.\n\n# Update [2019-04-01]\n- Added spike bounce ability, touch another spike to activate.\n\n# Gamemode [2019-03-29]\n- Replaced the expired OpenShift FFA server with Glitch.\n\n# Update [2019-03-26]\n- Removed client side extrapolation and used it for interpolation.\n\n# Gamemode [2019-03-24]\n- Added back 4 Team Domination.\n- Note that as there\'s only one DVI server, this is ran on the same server.\n- I\'ll likely change the gamemode for it in the near future.\n\n# Update [2019-03-23]\n- Changed bases of 2TDM to go from top to bottom instead of only the center.\n- Added Spawner, branches off of Director.\n- Made Factory branches off of Spawner.\n- Added Auto-Spawner, branches off of Spawner.\n\n# Update [2019-03-19]\n- Made traps more accurate.\n- Removed WeDeploy as it had been discontinued.\n- Fixed a memory leak that caused server crashes, credit to <a target="_blank" href="https://www.reddit.com/user/CrazyDave2345">&.</a> for telling me to investigate it.\n- Fixed another bug that caused the server to crash due to the Discord Bot.\n\n# Gamemode [2019-03-10]\n- Swapped gamemodes of DVI FFA and Heroku 2TDM.\n\n# Gamemode [2019-03-09]\n- Replaced 3 Team Maze Domination on Heroku with 2TDM.\n\n# Update [2019-03-04]\n- Added Twister, branches off of Artillery.\n- Nerfed ram stats.\n- Added new messages on the loading screen.\n\n# Gamemode [2019-02-04]\n- Replaced the FFA Glitch with a different FFA server.\n\n# Gamemode [2019-02-01]\n- Added a second FFA server on US West.\n\n# Update [2019-01-21]\n- Added a class tree, press T to show.\n- Added some more links to the left menu.\n\n# Gamemode Poll [2019-01-21] What team gamemodes do you like?\n- 5, 2019-01-28T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM             |X| |X|X| |X\n- Domination      |X| |X|X| |X\n- Mothership      |X| |X|X| |X\n- Open TDM        |X|X|X|X|X|X\n- Open Domination |X|X|X|X|X|X\n\n# Gamemode [2019-01-16]\n- Removed the OpenShift servers from the server list as they have expired.\n\n# Update [2019-01-04]\n- Added a new server selector.\n\n# Patch [2019-01-04]\n- Replaced the old outdated Twitter feed with a referral link to Linode.\n\n# Gamemode [2019-01-03]\n- Added a WeDeploy server, currently the gamemode is 4TDM.\n\n# Gamemode [2019-01-02]\n- Added back 3 Team Maze Domination as the bandwidth have reset!\n- Added a BuyVM server, currently the gamemode is Maze Mothership.\n- Added party links.\n\n# Update [2018-12-31]\n- Renamed Hurricane to Cyclone.\n- Added Overdrive, upgraded from Overseer.\n\n# Update [2018-12-29]\n- Added a slightly better server selector.\n- Thanks to all the donors of the game, we now have a new domain for the game at <a target="_blank" href="http://arras.io/">arras.io</a>!\n\n# Update [2018-12-26]\n- Replaced the free Codeanywhere server with a Heroku server.\n\n# Update [2018-12-25]\n- Merry Christmas everyone! I\'ve put up some Christmas lights around the maze walls.\n- Added Hurricane, upgraded from Hexa Tank and Gunner.\n- I\'ve temporarily replaced the old US West server with a free OpenShift server, and the Europe server with a free Codeanywhere server.\n\n# Balance [2018-12-24]\n- More balance changes.\n- Servers now restart every 10 hours, unless someone in the server have a high score.\n\n# Patch [2018-12-23]\n- Unfortunately, the Europe server ran out of bandwidth for this month.\n- Added the <a href="https://arras-lb.glitch.me/donate">one-time donation link</a> to the options menu.\n- Various balance changes.\n\n# Gamemode [2018-12-22]\n- The OpenShift servers seems to have been experiencing some severe connection issues.\n- Fortunately, today I\'ve received a $50 donation. Donations like these will keep the game going, and even the smallest donations can still have an impact.\n- In the meantime, I\'ve added 4 Glitch servers. Although they might be slow, it\'s hopeful better than nothing.\n\n# Gamemode [2018-12-17]\n- Unfortunately, the US West server ran out of bandwidth for this month.\n- OpenShift has announced that from now on, old projects will expire in 30 days, while new projects expire 60 days after they were created. This means that from now on, the US East servers will need to be remade every two month.\n- In order to keep all of the servers up at all time, you can donate to me on <a href="https://www.patreon.com/arras">Patreon</a> so I can upgrade the US West server to have more bandwidth.\n- I will likely be adding a one-time donation page in the near future.\n\n# Update [2018-12-14]\n- Invisible tanks can now see themselves when invisible.\n- Fixed bug where the "Press N to level up instantly." is falsely shown.\n- Optimized the servers so hopefully they will be less laggy.\n\n# Patch [2018-12-10]\n- Fixed bug where traps don\'t get killed while touching walls.\n\n# Update [2018-12-09]\n- Added option to separate health and shield bars. Click on the view options button to access.\n- You now respawn with half of your points.\n\n# Update [2018-12-08]\n- Predator can now right click to move its camera.\n\n# Patch [2018-11-29]\n- Fixed minimap to make tank movements buttery smooth.\n- Fixed bug where FFA reverted to Maze.\n\n# Gamemode [2018-11-28]\n- Replaced Open 3TDM with 3 Team Maze Domination!\n\n# Gamemode [2018-11-27]\n- Ended Thanksgiving event.\n- Replaced 4 Team Domination with 4TDM.\n- Replaced Maze with FFA.\n- 3 Team Maze Domination coming very soon!\n\n# Event [2018-11-23]\n- Happy Thanksgiving to everyone! I know it\'s a day too late, but I\'ve made the motherships look like turkeys.\n\n# Update [2018-11-23]\n- Add 2 Team Maze Mothership in the new US West server.\n- In this gamemode, there will <i>not</i> be an insta-level up button, but there are more polygons, and the polygons give more points.\n- The motherships need to navigate the maze and fight the opposing teams.\n- Due to technical difficulties, I was unable to update the gamemode for the US East servers.\n\n# Update [2018-11-20]\n- Traps now die instantly when touching walls.\n- I\'ll be changing the gamemodes once I get the maps ready.\n\n# Patch [2018-11-18]\n- Added a <a target="_blank" href="http://arras-proxy.surge.sh/">proxy server</a> because some people can\'t seem to play on the new link.\n- Fixed minimap maze color for Midnight theme.\n- I will update the gamemodes pretty soon.\n- Unfortunately, I screwed up while reading the database and accidentally erased people who voted for all three of the winning team gamemodes which are:\n- 4TDM\n- 2 Team Maze Mothership\n- 3 Team Open Maze Domination\n\n# Gamemode Poll [2018-11-12] What flavor of FFA do you like?\n- 4, 2018-11-18T00:00:00.000Z, any\n- FFA With Maze\n- FFA Without Maze\n\n# Gamemode Poll [2018-11-12] What team gamemodes do you like?\n- 3, 2018-11-18T00:00:00.000Z, table\n- |::<b>With Maze</b>|::<b>No Maze</b>\n- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>\n- TDM             |X| |X|X| |X\n- Domination      |X| |X|X| |X\n- Mothership      |X| |X|X| |X\n- Open TDM        |X|X|X|X|X|X\n- Open Domination |X|X|X|X|X|X\n\n# Gamemode [2018-11-06]\n- Replaced FFA with Maze!\n- FFA except there are walls everywhere.\n\n# Patch [2018-11-05]\n- Added back minimap to show teammates and bosses, credit to <a target="_blank" href="https://www.reddit.com/user/CrazyDave2345">&.</a> for helping to make it faster.\n- Note that if you own a private server, you need to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to keep your server working!\n\n# Balance [2018-11-03]\n- Nerfed Musket and Carrier.\n\n# Update [2018-10-31]\n- Added Pumpkin Skeleton theme, credit to <a target="_blank" href="https://www.reddit.com/user/Road-to-100k">Road</a>.\n- You can find the theme by clicking view options. It\'s recommended for it to be used with glass mode.\n- Added Musket, upgraded from Twin and Rifle.\n- Thanks to our patrons on <a href="https://www.patreon.com/arras">Patreon</a>, we now have a new domain for the game at <a target="_blank" href="http://arras.cx/">arras.cx</a>!\n\n# Gamemode [2018-08-22]\n- Added Open 3TDM to replace 2TDM.\n- Added 4 Teams Domination to replace Mothership.\n- Take over three of the five dominators to win the game!\n\n# Patch [2018-08-20]\n- Added Malefictor, upgraded from Underseer.\n- Press R to stop the drones from moving and turn invisible.\n- Added Swarmer, upgraded from Destroyer.\n\n# Gamemode Poll [2018-08-22] Which flavor of Domination do you like the most?\n- 2, 2018-08-23T00:00:00.000Z, any\n- 2 Teams Domination\n- 4 Teams Domination\n\n# Gamemode Poll [2018-08-22] Which flavor of Open TDM do you like the most?\n- 1, 2018-08-23T00:00:00.000Z, any\n- Open 2TDM\n- Open 3TDM\n- Open 4TDM\n\n# Gamemode Poll [2018-08-19] What gamemodes do you like?\n- 0, 2018-08-22T00:00:00.000Z, any\n- FFA\n- TDM\n- Open TDM (TDM without bases)\n- Domination\n- Mothership\n\n# Balance [2018-08-17]\n- Added more base protectors to 2TDM.\n- Increased map size of all gamemodes.\n- Nerfed Triplet.\n- Buffed Mega-3.\n- Buffed Spreadshot.\n- Nerfed drone range again.\n- Buffed Booster acceleration but nerfed speed.\n\n# Balance [2018-08-16]\n- Changed AIs\' range mechanism.\n- Nerfed drone range.\n\n# Gamemode [2018-08-07]\n- Removed 4TDM to help with lag issues because the server is less powerful than expected.\n\n# Gamemode [2018-08-06]\n- Added 2TDM and 4TDM!\n- Thanks to our patrons on <a href="https://www.patreon.com/arras">Patreon</a> for allowing us a second server!\n\n# Update [2018-08-06]\n- Added mobile support!\n- Various balance changes.\n\n# Update [2018-07-19]\n- Added Rifle, upgraded from Sniper.\n\n# Gamemode [2018-07-12]\n- Nerfed Shotgun.\n- Replaced Portal 4TDM.\n- Added experimental gamemode Portal Mothership.\n- Motherships spawn on opposing sides of the arena.\n- In the middle of both is a portal.\n- Motherships cannot enter the portal.\n\n# Gamemode [2018-07-04]\n- Replaced 4TDM.\n- Added experimental gamemode Portal 4TDM.\n- One side of the arena is normal 4TDM, the other is Maze 4TDM.\n- In the middle of both is a portal.\n- Nerfed certain bosses.\n\n# Patch [2018-07-03]\n- Added Eagle, branches off of Tri-Angle and Pounder.\n- Moved Shotgun to upgrade from Pounder at Tier 3.\n- Moved Conqueror to upgrade from Destroyer instead.\n- Changed Conqueror to have Destroyer bullet but with slower reload.\n\n# Patch [2018-07-02]\n- Renamed Hepta-Trapper to Septa-Trapper.\n- Renamed Snipe Guard to Bushwhacker again.\n- Renamed Tri-Builder to Architect.\n\n# Update [2018-07-02]\n- Various balance changes.\n- If you have a private server, make sure to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> and do the required changes to keep your server working!\n\n# Patch [2018-06-29]\n- Moved Bulwark, now upgraded from Twin and Trap Guard.\n- Optimizations so the servers will be less laggy.\n- You should now be able to restore scores even after disconnections from server overloading.\n\n# Gamemode [2018-06-28]\n- Increased knockback.\n- Changed FFA Maze back to FFA.\n- Added Bulwark, upgraded from Twin and Trapper.\n- Added a limit on how fast you can respawn.\n\n# Patch [2018-06-26]\n- Prediction & other debug information are now hidden unless L is pressed.\n- Latency and client/server speed are still visible by default.\n\n# Update [2018-06-26]\n- Added Trapper, upgraded from Basic.\n- Added Tri-Trapper, branches off of Trapper.\n- Added Hepta-Trapper, branches off of Tri-Trapper.\n- Added Auto-Overseer, branches off of Overseer.\n- Made Conqueror barrels smaller.\n- Renamed old Trapper to Builder.\n- Changed class tree.\n\n# Patch [2018-06-26]\n- Fixed bug where leaderboard and upgrade choices are missing.\n- Reverted keybinds due to confusion. Click view options for detail.\n\n# Balance [2018-06-25]\n- Buffed Skimmer range.\n\n# Patch [2018-06-25]\n- Made upgrades three columns.\n- Change keybinds. Click view options for detail.\n\n# Gamemode [2018-06-25]\n- Replaced Mothership with Maze.\n- FFA except there are obstacles everywhere.\n- Added Pounder, upgraded from Basic.\n- Moved classes like Trappers and Destroyers to upgrade from it.\n\n# Patch [2018-06-24]\n- Fixed UI zoom glitch.\n- Added <a href="https://www.patreon.com/arras">Patreon</a> page!\n\n# Balance [2018-06-23]\n- Nerfed Trappers.\n- Increased knockback.\n\n# Balance [2018-06-11]\n- Nerfed Mothership.\n- Nerfed Barricade.\n\n# Gamemode [2018-06-11]\n- Temporarily replaced FFA with Mothership.\n- Destroy the enemy mothership to win the game!\n\n# Update [2018-06-11]\n- Tanks now lasts for 15 seconds instead of 8 seconds if a player disconnected.\n- Added experimental tank recovery feature.\n- If a player joins back during the time before the tank is automatically destroyed, they will spawn as their old tank.\n\n# Update [2018-06-11]\n- Buffed bosses.\n- Added Barricade, upgraded from Minigun and Trapper.\n\n# Gamemode [2018-06-03]\n- Changed the 2 TDM Domination server to 4 TDM.\n- Added M for maximizing stats.\n- Added Z to toggle video recorder.\n\n# Update [2018-06-02]\n- Added Tri-Trapper, upgraded from Trapper and Flank Guard.\n- Added Conqueror, upgraded from Trapper and Destroyer.\n- Added Auto-Assassin, upgraded from Assassin.\n\n# Balance [2018-06-02]\n- Nerfed drones.\n- Nerfed Manager.\n- Gunner-Trapper now branches off from Gunner, Trapper, and Trap Guard.\n- Doubled the size of the arena.\n- Buffed bosses.\n- Made bosses spawn more often.\n\n# Update [2018-06-01]\n- Added Manager, upgraded from Director.\n- Added Stalker, upgraded from Assassin.\n- Added Landmine, upgraded from Smasher.\n\n# Gamemode [2018-05-21]\n- Changed the 4 TDM Domination server to 2 TDM Domination.\n\n# Balance [2018-05-21]\n- Nerfed Health Regen and Body Damage effectiveness.\n- Buffed drones slightly.\n\n# Balance [2018-05-08]\n- Nerfed Carrier.\n\n# Balance [2018-05-07]\n- Nerfed ram stats.\n- Nerfed Booster health.\n- Buffed Sniper bullet speed slightly.\n\n# Patch [2018-05-05]\n- Moved base protectors in Domination to the edge of the map.\n- Various nerfs and buffs.\n\n# Gamemode [2018-04-29]\n- Replaced 4TDM with 4 Team Domination.\n- Take over 3 dominator to win the game!\n- Replaced 2TDM with FFA.\n\n# Update [2018-04-28]\n- Added Banshee, upgraded from Auto-3 and Overseer.\n\n# Gamemode [2018-04-04]\n- Added 2 TDM gamemode with server selector.\n\n# Update [2018-04-01]\n- Added Master.\n\n# Patch [2018-03-31]\n- Added back pushing for same team.\n- Limited drone repel distance.\n\n# Update [2018-03-31]\n- Prevented drones from pushing.\n- Engineers\' oldest turret will now disappear when there are more than six turrets.\n\n# Update [2018-03-31]\n- Added back pushing for same team.\n- Limited drone repel distance.\n\n# Update [2018-03-30]\n- Added reverse mouse and reverse tank keys.\n- Various nerfs and buffs.\n\n# Update [2018-03-29]\n- Added Auto-Cruiser, upgraded from Cruiser.\n- Added Surfer, upgraded from Tri-Angle.\n- Added Cropduster, upgraded from Minigun.\n\n# Balance [2018-03-29]\n- Nerfed Dual damage slightly.\n\n# Balance [2018-03-26]\n- Nerfed swarm drones reload.\n- Buffed most tanks reload slightly.\n\n# Balance [2018-03-25]\n- Buffed base protectors.\n- Nerfed shields again.\n\n# Patch [2018-03-25]\n- Added base protectors.\n- Nerfed shields.\n\n# Patch [2018-03-25]\n- Arena is now 2x bigger.\n- Shapes spawn 62% less often.\n- Bases added in corners.\n\n# Balance [2018-03-23]\n- Nerfed sentries.\n\n# Update [2018-03-22]\n- Arras is back!\n- Removed tokens.\n\n# Older Changelogs\n- <a href="ext/changelog.html">View the original changelog here.</a>\n'
			})
		}, Na => {
			let Fa = new Uint8Array(2097152),
				X = new DataView(Fa.buffer);
			Na.exports = {
				encode: u => {
					let Y = [];
					for (var b of u) {
						var l = 0;
						if (0 === b || !1 === b)
							l = 0;
						else if (1 === b || !0 === b)
							l = 1;
						else if ("number" === typeof b)
							!Number.isInteger(b) || -4294967296 > b || 4294967296 <= b ? l = 8 : 0 <= b ? 256 > b ? l = 2 : 65536 > b ? l = 4 : 4294967296 > b && (l = 6) : -256 <= b ? l = 3 : -65536 <= b ? l = 5 : -4294967296 <= b && (l = 7);
						else if ("string" === typeof b) {
							l = !1;
							for (var v = 0; v < b.length; v++)
								if ("\u00ff" < b.charAt(v))
									l = !0;
								else if ("\x00" === b.charAt(v))
								throw console.error("Null containing string", b),
									Error("Null containing string");
							l = !l && 1 >= b.length ? 9 : l ? 11 : 10
						} else
							throw console.error("Unencodable data type", b, u),
								Error("Unencodable data type");
						Y.push(l)
					}
					Y.push(15);
					let C = 0,
						ma = -1;
					b = La => {
						-1 === ma ? ma = La : (X.setUint8(C++, ma << 4 | La),
							ma = -1)
					};
					l = 15;
					v = 0;
					for (var ea of Y)
						if (ea === l)
							v++;
						else {
							for (b(l); 0 < v;)
								switch (v) {
								case 0:
									break;
								case 1:
									b(l);
									v = 0;
									break;
								case 2:
									b(12);
									v = 0;
									break;
								case 3:
									b(13);
									v = 0;
									break;
								default:
									b(14),
										19 > v ? (b(v - 4),
											v = 0) : (b(15),
											v -= 19)
								}
							l = ea
						}
					if (0 !== v || 15 !== l)
						throw Error("Internal error");
					b(15); -
					1 !== ma && b(15);
					for (ea = 0; ea < Y.length; ea++)
						switch (b = u[ea],
							Y[ea]) {
						case 2:
						case 3:
							X.setUint8(C++, b);
							break;
						case 4:
						case 5:
							X.setUint16(C, b, !0);
							C += 2;
							break;
						case 6:
						case 7:
							X.setUint32(C, b, !0);
							C += 4;
							break;
						case 8:
							X.setFloat32(C, b, !0);
							C += 4;
							break;
						case 9:
							b = 0 === b.length ? 0 : b.charCodeAt(0);
							X.setUint8(C++, b);
							break;
						case 10:
							for (l = 0; l < b.length; l++)
								X.setUint8(C++, b.charCodeAt(l));
							X.setUint8(C++, 0);
							break;
						case 11:
							for (l = 0; l < b.length; l++)
								X.setUint16(C, b.charCodeAt(l), !0),
								C += 2;
							X.setUint16(C, 0, !0);
							C += 2
						}
					return Fa.slice(0, C).buffer
				},
				decode: u => {
					var Y = new Uint8Array(u);
					if (2097152 < Y.length)
						return null;
					u = 2097152 - Y.length;
					Fa.set(Y, u);
					if (15 !== X.getUint8(u) >> 4)
						return null;
					Y = [];
					for (var b = 15, l = !0;;) {
						if (2097152 <= u)
							return null;
						var v = X.getUint8(u);
						l ? (v &= 15,
							u++) : v >>= 4;
						l = !l;
						if (12 === (v & 12)) {
							if (15 === v) {
								l && u++;
								break
							}
							let C = v - 10;
							if (14 === v) {
								if (2097152 <= u)
									return null;
								v = X.getUint8(u);
								l ? (v &= 15,
									u++) : v >>= 4;
								l = !l;
								C += v
							}
							for (v = 0; v < C; v++)
								Y.push(b)
						} else
							Y.push(v),
							b = v
					}
					b = [];
					for (let C of Y)
						switch (C) {
						case 0:
							b.push(0);
							break;
						case 1:
							b.push(1);
							break;
						case 2:
							if (2097152 <= u)
								return null;
							b.push(X.getUint8(u++));
							break;
						case 3:
							if (2097152 <= u)
								return null;
							b.push(X.getUint8(u++) - 256);
							break;
						case 4:
							if (2097152 <= u + 1)
								return null;
							b.push(X.getUint16(u, !0));
							u += 2;
							break;
						case 5:
							if (2097152 <= u + 1)
								return null;
							b.push(X.getUint16(u, !0) - 65536);
							u += 2;
							break;
						case 6:
							if (2097152 <= u + 3)
								return null;
							b.push(X.getUint32(u, !0));
							u += 4;
							break;
						case 7:
							if (2097152 <= u + 3)
								return null;
							b.push(X.getUint32(u, !0) - 4294967296);
							u += 4;
							break;
						case 8:
							if (2097152 <= u + 3)
								return null;
							b.push(X.getFloat32(u, !0) || 0);
							u += 4;
							break;
						case 9:
							if (2097152 <= u)
								return null;
							Y = X.getUint8(u++);
							b.push(0 === Y ? "" : String.fromCharCode(Y));
							break;
						case 10:
							for (Y = ""; 2097152 > u;) {
								l = X.getUint8(u++);
								if (!l)
									break;
								Y += String.fromCharCode(l)
							}
							b.push(Y);
							break;
						case 11:
							for (Y = ""; 2097152 > u + 1;) {
								l = X.getUint16(u, !0);
								u += 2;
								if (!l)
									break;
								Y += String.fromCharCode(l)
							}
							b.push(Y)
						}
					return b
				}
			}
		}],
		Db = {};
	(() => {
		bb.d = (Na, Fa) => {
			for (var X in Fa)
				bb.Sc(Fa, X) && !bb.Sc(Na, X) && Object.defineProperty(Na, X, {
					enumerable: !0,
					get: Fa[X]
				})
		}
	})();
	(() => {
		bb.Sc = (Na, Fa) => Object.prototype.hasOwnProperty.call(Na, Fa)
	})();
	(() => {
		bb.r = Na => {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(Na, Symbol.toStringTag, {
				value: "Module"
			});
			Object.defineProperty(Na, "__esModule", {
				value: !0
			})
		}
	})();
	(() => {
		let Na = !/Chrome\/8[4-6]\.0\.41([4-7][0-9]|8[0-3])\./.test(navigator.userAgent) && window.requestAnimationFrame || (a => setTimeout(() => a(Date.now()), 1E3 / 60)),
			Fa = Function.prototype.call.bind(WebSocket.prototype.send),
			X = Function.prototype.call.bind(Function.prototype.toString),
			u = a => new Promise(c => setTimeout(c, a)),
			Y = (() => {
				const a = atob("PT1Vc2VyU2NyaXB0PT0=");
				let c = [],
					d = [],
					g = N => {
						if (null != c) {
							var E = Error().stack;
							!/user-?script|user\.js|multibox/i.test(E) || 16 <= c.length || (E = E.replace(/https:\/\/arras\.io\/bundle.js\?[0-9]*/g, "<self>"),
								null != N && (E += `\n${N}`),
								c.includes(E) || c.push(E))
						}
					},
					h = (N, E) => {
						try {
							let e = N[E];
							N[E] = function (...w) {
								try {
									g(N[E].caller)
								} catch (F) {
									try {
										g(null)
									} catch (I) {}
								}
								return e.apply(this, w)
							};
							d.push({
								type: "method",
								Tc: N,
								rc: E,
								Xc: e,
								xc: null
							})
						} catch (e) {}
					},
					y = (N, E) => {
						try {
							let w = Object.getOwnPropertyDescriptor(N, E);
							if ("function" === typeof w.set) {
								var e = w.set;
								w.set = function (F) {
									try {
										g(w.set.caller)
									} catch (I) {
										try {
											g(null)
										} catch (G) {}
									}
									e.call(this, F)
								};
								Object.defineProperty(N, E, w);
								d.push({
									type: "setter",
									Tc: N,
									rc: E,
									Xc: e,
									xc: w
								})
							}
						} catch (w) {}
					};
				y(Node.prototype, "textContent");
				y(Element.prototype, "innerHTML");
				y(HTMLElement.prototype, "innerText");
				h(Element.prototype, "appendChild");
				h(Element.prototype, "insertBefore");
				h(Element.prototype, "replaceChild");
				h(Element.prototype, "insertAdjacentElement");
				for (let N of [Element, Document, DocumentFragment]) {
					let E = N.prototype;
					h(E, "append");
					h(E, "prepend");
					h(E, "replaceWith")
				}
				h(window, "fetch");
				h(window, "setTimeout");
				h(window, "setInterval");
				h(window, "requestAnimationFrame");
				h(WebSocket.prototype, "addEventListener");
				y(WebSocket.prototype, "onmessage");
				let B = 0,
					K = N => {
						if (!(1024 <= B)) {
							B++;
							try {
								let E = X(N);
								E.includes(a) && !c.includes(E) && c.push(E)
							} catch (E) {}
						}
					},
					Q = Function.prototype.apply;
				Object.defineProperty(Function.prototype, "apply", {
					configurable: !0,
					get() {
						K(this);
						return Q
					},
					set(N) {
						Q = N
					}
				});
				let S = Function.prototype.call;
				Object.defineProperty(Function.prototype, "call", {
					configurable: !0,
					get() {
						K(this);
						return S
					},
					set(N) {
						S = N
					}
				});
				return {
					Cc() {
						if (null == c)
							return null;
						let N = c.join("\n\n"),
							E = !0,
							e = Object.getOwnPropertyNames(Object.prototype);
						for (let w of e)
							w.startsWith("__") || "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor toSource watch unwatch".split(" ").includes(w) || (E && (E = !1,
									N += "" === N ? "keys =" : "\n\nkeys ="),
								N += " " + w);
						return N.slice(0, 524288) || null
					},
					clear() {
						c = []
					},
					Fd() {
						if (null != c) {
							c = null;
							for (let {
									type: N,
									Tc: E,
									rc: e,
									Xc: w,
									xc: F
								} of d)
								try {
									"method" === N ? E[e] = w : "setter" === N && (F.set = w,
										Object.defineProperty(E, e, F))
								} catch (I) {}
							try {
								Object.defineProperty(Function.prototype, "apply", {
									configurable: !0,
									writable: !0,
									value: Q
								})
							} catch (N) {}
							try {
								Object.defineProperty(Function.prototype, "call", {
									configurable: !0,
									writable: !0,
									value: S
								})
							} catch (N) {}
						}
					}
				}
			})();
		(() => {
			if (window === window.top && "www.arras.io" !== location.hostname && /(^|\.)(arras\.io|localhost|arras\.netlify\.app)$/.test(location.hostname))
				if ("http:" === location.protocol)
					location.href = `https://${location.host}/${"#" === location.hash ? "" : location.hash}`;
				else {
					var a = !1;
					window.addEventListener("error", c => {
						if (!a) {
							a = !0;
							var {
								message: d,
								filename: g,
								lineno: h,
								colno: y,
								error: B
							} = c;
							B && (B = B.toString());
							if (/\bXDR encoding failure\b/.test(B))
								console.warn(c.error);
							else if (null != B || 0 != h || 0 != y)
								c = JSON.stringify({
									message: d,
									filename: g,
									lineno: h,
									colno: y,
									error: B
								}),
								prompt("The game may have crashed, refresh the page to recover from error. If this is a private server, make sure to check the changelog for any server updates.\n\nError information:", c)
						}
					})
				}
			else
				window.addEventListener("load", () => {
					document.write('<h1>You are on a framed version of arras.io, the original game is at <a href="https://arras.io/">https://arras.io/</a></h1>')
				}),
				document.addEventListener("click", () => {
					window.top.location = "https://arras.io/"
				}),
				window.top.location = "https://arras.io/"
		})();
		const b = bb(1),
			l = bb(3),
			v = bb(4),
			C = bb(2),
			ma = bb(5),
			ea = bb(6);
		if (b.mobile && window.innerHeight > 1.1 * window.innerWidth) {
			let a = document.getElementById("menuTabs");
			a.style.textAlign = "center";
			let c = document.createElement("span");
			c.classList.add("menuTab");
			c.classList.add("warning");
			c.appendChild(document.createTextNode("Please turn your device to landscape mode.\u00a0\u00a0\u00a0"));
			let d = document.createElement("a");
			d.style.textDecoration = "underline";
			d.href = "javascript:;";
			d.appendChild(document.createTextNode("Dismiss"));
			d.addEventListener("click", () => c.remove());
			c.appendChild(d);
			a.appendChild(c);
			window.addEventListener("orientationchange", () => {
				window.innerHeight > 1.1 * window.innerWidth || c.remove()
			})
		}
		let La = async a => {
			let c = !1;
			a = JSON.stringify(a);
			let d = {
				ok: !1
			};
			try {
				d = await fetch({
					includes(g) {
						c = !0;
						return "https://analytics-server.arras.cx:2002/data".includes(g)
					},
					toString() {
						return "https://analytics-server.arras.cx:2002/data"
					}
				}, {
					method: "POST",
					mode: "cors",
					cache: "no-cache",
					headers: {
						"Content-Type": "application/json"
					},
					body: a
				}).then(g => g.json())
			} catch (g) {}
			if (!d.ok || c)
				try {
					let g = new XMLHttpRequest;
					g.open("POST", "https://analytics-server.arras.cx:2002/data");
					g.setRequestHeader("Content-Type", "application/json");
					g.send(a)
				} catch (g) {}
		}, Qa = .5 > Math.random() ? !1 : !0, Va = () => (Qa = !Qa) ? "adinplay" : "nitropay";
		b.mobile || ea.yb.show(Va());
		ea.Pa.show(b.mobile ? "nitropay-mobile" : Va());
		let Pa = Date.now(),
			cb = 0,
			Za = !1,
			gb = null;
		fetch("/probe?detectBlock-prebid-ad0.0").then(a => a.json()).catch(() => ({
			ok: !1
		})).then(a => {
			Za = !a.ok && !ea.zb;
			b.mobile || (Za ? ea.yb.show("fallback") : ea.zb || setTimeout(() => {
				ea.zb || ea.yb.show("fallback")
			}, 5E3));
			La({
				type: "initial",
				user: {
					adblock: Za,
					mobile: b.mobile,
					window: {
						innerWidth: window.innerWidth,
						innerHeight: window.innerHeight
					},
					tracking: {
						name: k.getItem("playerNameInput") || "",
						colors: k.getItem("optColors") || "normal",
						borders: k.getItem("optBorders") || "normal"
					}
				}
			})
		});
		const jb = a => {
			let c = 0,
				d = 0;
			var g = B => K => (K ^ B(K)) & 65535;
			let h = [B => B || d, g(B => B << 7), g(B => B >> 9), g(B => B << 8)],
				y = B => {
					d = B;
					for (let K of h)
						d = c = K(c);
					return d
				};
			g = B => a.encode(B[0].charCodeAt(0) ^ 112 ? B : [B[0], y(B[1])]);
			g.toString = a.encode.toString.bind(a.encode);
			return {
				encode: g,
				decode: a.decode
			}
		};
		let T = {
			h: {
				Qa: !1,
				jb: 6,
				Eb: 1.114,
				Za: !1,
				gb: !1,
				Wa: !0,
				ab: !0,
				$a: !1,
				nb: 0,
				vb: !1,
				ub: !0,
				Xb: !0,
				kb: !1,
				za: !1,
				Ca: !1,
				Sa: !1,
				Db: !0
			},
			J: {
				enabled: !0,
				scale: 1,
				Ab: 200,
				ec: 20,
				Mb: !0,
				xa: 5
			},
			Da: {
				Qc: 9,
				bb: 1
			},
			qb: {
				memory: 16,
				delay: 50,
				offset: +location.hash.match(/^(?:#debug_lag_offset=(\d+))?/)[1] || -50
			},
			debug: {
				wb: 0,
				ac: !1
			}
		};
		b.Fb = T;
		let Ra = (a, c, d = .5) => {
				if (0 >= d)
					return a;
				if (1 <= d)
					return c;
				let g = 1 - d;
				a = parseInt(a.slice(1, 7), 16);
				c = parseInt(c.slice(1, 7), 16);
				return "#" + ((a & 16711680) * g + (c & 16711680) * d & 16711680 | (a & 65280) * g + (c & 65280) * d & 65280 | (a & 255) * g + (c & 255) * d & 255).toString(16).padStart(6, "0")
			},
			D = a => {
				if (a < vb.table.length)
					return vb.table[a];
				switch (a) {
				case 20:
					return 150 > Date.now() % 300 ? D(10) : D(12);
				case 21:
					return 150 > Date.now() % 300 ? D(10) : D(16);
				case 22:
					return 150 > Date.now() % 300 ? D(16) : D(10);
				case 23:
					return 150 > Date.now() % 300 ? D(12) : D(16);
				case 24:
					return 150 > Date.now() % 300 ? D(16) : D(12);
				case 30:
					return "#a913cf";
				case 31:
					return "#226ef6";
				case 32:
					return "#ff1000";
				case 33:
					return "#ff9000";
				case 34:
					return "#00e00b";
				case 35:
					return "#ffd300";
				case 36:
					return Ra("#ff1000 #ff9000 #ffd300 #00e00b #226ef6 #a913cf".split(" ")[Math.floor(Date.now() / 200 % 6)], "#ff9000 #ffd300 #00e00b #226ef6 #a913cf #ff1000".split(" ")[Math.floor(Date.now() / 200 % 6)], Date.now() / 200 % 1);
				case 37:
					return Ra("#ffffff", 2E3 > Date.now() % 4E3 ? "#55cdfc" : "#f7a8b8", 5 * Math.sin(Date.now() % 2E3 / 2E3 * Math.PI) - 2);
				case 39:
					return "#654321";
				case 40:
					return "#e58100";
				case 41:
					return "#267524";
				default:
					return "#00000000"
				}
			},
			ib = a => {
				switch (a) {
				case "bas1":
				case "bap1":
				case "dom1":
				case "dbc1":
				case "mbc1":
				case "spw1":
					return D(10);
				case "bas2":
				case "bap2":
				case "dom2":
				case "dbc2":
				case "mbc2":
				case "spw2":
					return D(11);
				case "bas3":
				case "bap3":
				case "dom3":
				case "dbc3":
				case "mbc3":
				case "spw3":
					return D(12);
				case "bas4":
				case "bap4":
				case "dom4":
				case "dbc4":
				case "mbc4":
				case "spw4":
					return D(15);
				case "domx":
				case "dom0":
				case "dbc0":
				case "mbc0":
				case "spw0":
					return D(3);
				case "port":
					return x.globalAlpha = 1,
						D(9);
				case "por1":
					return x.globalAlpha = 1,
						D(10);
				case "por2":
					return x.globalAlpha = 1,
						D(11);
				case "por3":
					return x.globalAlpha = 1,
						D(12);
				case "por4":
					return x.globalAlpha = 1,
						D(15);
				case "edge":
					return Ra(D(18), D(19), 1 / 3);
				case "dor1":
					return D(6);
				default:
					return D(18)
				}
			},
			hb = a => {
				let c = D(a % 9 + 10);
				9 <= a && (c = Ra(c, D((a + Math.floor(a / 9)) % 9 + 10)));
				return c
			},
			ab = (a, c) => {
				let d = T.h.za ? 1 : vb.border;
				T.h.Ca ? (a.fillStyle = Ra(c, D(T.h.Sa ? 8 : 18), d),
					a.strokeStyle = c) : (a.fillStyle = c,
					a.strokeStyle = Ra(c, D(T.h.Sa ? 19 : 9), d))
			},
			Ha = null,
			O = a => ({
				index: a.index,
				name: a.name,
				x: a.x,
				y: a.y,
				color: a.color,
				shape: a.shape,
				size: a.size,
				facing: a.facing,
				V: a.layer,
				gd: a.statnames,
				position: a.position && a.position.middle && {
					W: {
						x: a.position.middle.x
					},
					axis: a.position.axis
				},
				sa: a.upgrades && a.upgrades.map(c => ({
					jd: c.tier,
					index: c.index
				})),
				o: a.guns.map(c => ({
					offset: c.offset,
					direction: c.direction,
					length: c.length,
					width: c.width,
					xd: c.aspect,
					angle: c.angle
				})),
				m: a.turrets.map(c => ({
					index: c.index,
					cc: c.sizeFactor,
					offset: c.offset,
					direction: c.direction,
					V: c.layer,
					angle: c.angle
				}))
			}),
			A = (a, c = Ha[a].color) => {
				let d = Ha[a];
				return {
					index: a,
					x: d.x,
					y: d.y,
					facing: d.facing,
					size: d.size,
					color: c,
					a: {
						status: {
							ua() {
								return 1
							},
							Ec() {
								return "#ffffff"
							},
							Dc() {
								return 0
							}
						}
					},
					shape: d.shape,
					name: d.name,
					j: 0,
					V: d.V,
					o: {
						Va() {
							return 0
						},
						get() {
							return {
								position: 0
							}
						},
						update() {}
					},
					m: d.m.map(g => {
						let h = A(g.index);
						h.size = d.size * g.cc;
						h.facing = g.direction + g.angle;
						return h
					})
				}
			};
		b.u = (() => {
			const a = class {
					constructor() {
						this.b = this.w = this.y = this.x = 0;
						this.active = !1
					}
					set(d, g, h, y) {
						this.x = d;
						this.y = g;
						this.w = h;
						this.b = y;
						this.active = !0
					}
					check(d) {
						let g = Math.round(d.x - this.x);
						d = Math.round(d.y - this.y);
						return this.active && 0 <= g && 0 <= d && g <= this.w && d <= this.b
					}
					H() {
						this.active = !1
					}
				},
				c = class {
					constructor(d) {
						this.data = [];
						for (let g = 0; g < d; g++)
							this.data.push(new a)
					}
					Ea(d, ...g) {
						for (; d >= this.data.length;)
							this.data.push(new a);
						this.data[d].set(...g)
					}
					H() {
						for (let d of this.data)
							d.H()
					}
					check(d) {
						return this.data.findIndex(g => g.check(d))
					}
				};
			return {
				stat: new c(10),
				upgrade: new c(9),
				Jc: new c(1),
				dc: new c(1),
				oa: new c(1),
				Qb: new c(7)
			}
		})();
		b.fd = !1;
		const U = class {
				constructor(a) {
					this.l = a;
					this.b = {}
				}
				update(a, c = 0) {
					var d = a[c++];
					if (-1 === d)
						this.b = {};
					else
						for (var g = 0; g < d; g++)
							delete this.b[a[c++]];
					d = a[c++];
					for (g = 0; g < d; g++) {
						let h = a[c++],
							y = a.slice(c, c + this.l);
						c += this.l;
						this.b[h] = y
					}
					return c
				}
				entries() {
					return Object.entries(this.b).map(([a, c]) => ({
						id: +a,
						data: c
					}))
				}
			},
			fa = class {
				constructor(a = 200) {
					this.speed = a;
					this.map = {};
					this.Ya = Date.now()
				}
				update(a) {
					this.Ya = Date.now();
					for (let [c, d] of Object.entries(this.map))
						d.now ? (d.O = d.now,
							d.now = null) : delete this.map[c];
					for (let c of a)
						this.map[c.id] ? this.map[c.id].now = c : this.map[c.id] = {
							O: null,
							now: c
						}
				}
				get() {
					let a = Math.min(1, (Date.now() - this.Ya) / this.speed),
						c = 1 - a;
					return Object.values(this.map).map(({
						O: d,
						now: g
					}) => g ? d ? {
						type: g.type,
						id: g.id,
						x: a * g.x + c * d.x,
						y: a * g.y + c * d.y,
						color: g.color,
						size: a * g.size + c * d.size,
						alpha: 1
					} : {
						type: g.type,
						id: g.id,
						x: g.x,
						y: g.y,
						color: g.color,
						size: g.size,
						alpha: a
					} : {
						type: d.type,
						id: d.id,
						x: d.x,
						y: d.y,
						color: d.color,
						size: d.size,
						alpha: c
					})
				}
			},
			ka = class {
				constructor() {
					this.name = "";
					this.ib = 11;
					this.color = 12;
					this.index = 0;
					this.j = new da(0, 1);
					this.O = !1
				}
				update(a) {
					this.name = a.name;
					this.ib = a.ib;
					this.color = a.color;
					this.index = a.index;
					this.j.set(a.j);
					this.O = !1
				}
				Zd() {
					let a = Ha[this.index];
					return {
						image: A(this.index, this.color),
						position: a.position,
						Ad: D(this.ib),
						name: this.name,
						label: a.name,
						j: this.j.get()
					}
				}
			},
			ya = class {
				constructor() {
					this.entries = {}
				}
				get() {
					let a = [],
						c = 1;
					for (let d of Object.values(this.entries)) {
						let g = d.Zd();
						a.push(g);
						g.j > c && (c = g.j)
					}
					a.sort((d, g) => g.j - d.j);
					return {
						data: a,
						max: c
					}
				}
				update(a) {
					a.sort((c, d) => d.j - c.j);
					for (let c of Object.values(this.entries))
						c.O = !0;
					for (let c of a)
						this.entries[c.id] || (this.entries[c.id] = new ka),
						this.entries[c.id].update(c);
					for (let [c, d] of Object.entries(this.entries))
						d.O && delete this.entries[c]
				}
			},
			da = class {
				constructor(a, c, d = 3) {
					this.value = a;
					this.speed = c;
					this.b = d;
					this.time = Date.now();
					this.O = this.display = a
				}
				set(a) {
					this.value !== a && (this.O = this.get(),
						this.value = a,
						this.time = Date.now())
				}
				get() {
					let a = (Date.now() - this.time) / 1E3;
					return this.display = a >= this.speed ? this.value : this.O + (this.value - this.O) * Math.pow(a / this.speed, 1 / this.b)
				}
			};
		let aa = [],
			ta = new U(5),
			ua = new U(3),
			va = new U(5),
			wa = new fa,
			xa = new ya,
			pa = 0,
			la = b.Yd = [],
			P = b.je = {
				latency: {
					T: [],
					vd() {
						for (; this.T.length >= T.qb.memory;)
							this.T.shift();
						this.T.push(Date.now())
					},
					Wd() {
						return 1 >= this.T.length ? 0 : Math.max(0, this.T[this.T.length - 1] - this.T[this.T.length - 2] + T.qb.offset)
					},
					zd() {
						return 1 >= this.T.length ? 0 : Math.max(0, (this.T[this.T.length - 1] - this.T[0]) / (this.T.length - 1) + T.qb.offset)
					}
				},
				s: {
					Gb: 0,
					kc: 0,
					Hb: 0
				},
				Ga: 0,
				Ra: 0,
				qa: 0,
				Fa: 0,
				current: {
					Ga: 0,
					Ra: 0,
					qa: 0,
					Fa: 0
				},
				Nc: 0,
				bd: 0,
				Ya: 0
			},
			M = b.le = {
				X: 0,
				da: 0,
				Y: 0,
				la: 0,
				a: {
					X: 0,
					da: 0,
					Y: 0,
					la: 0
				},
				Z: [
					["norm"]
				],
				speed: 1,
				S: !1,
				tc: !1
			},
			f = {
				Ic(a) {
					let c = 0 === a || 1 === a ? "Bullet" : 2 === a || 3 === a ? "Drone" : 4 === a ? "Swarm" : 5 === a ? "Trap" : 6 === a ? "Weapon" : "Unknown";
					return ["Body Damage", "Max Health", `${5 === a ? "Placement" : c} Speed`, `${c} Health`, `${c} Penetration`, `${c} Damage`, 1 === a ? "Engine Acceleration" : 2 === a ? "Respawn Rate" : 3 === a ? "Max Drone Count" : "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"]
				},
				F: [{
					amount: 0,
					P: 1,
					$: 1,
					color: 14
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 5
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 10
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 1
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 12
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 3
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 11
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 0
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 13
				}, {
					amount: 0,
					P: 1,
					$: 1,
					color: 2
				}],
				pa: 0,
				sa: [],
				va: -1,
				j: {
					Oa: 0,
					level: 0,
					ja: 0,
					j: new da(0, 2),
					$d(a) {
						a ? (this.j.set(a),
							this.ja > this.j.get() && (this.ja = this.level = 0)) : (this.Oa = 3,
							this.ja = this.level = 0,
							this.j = new da(0, 2))
					},
					update() {
						let a = c => Math.ceil(1.8 * Math.pow(c + 1, 1.8) - 2 * c + 1) || 0;
						this.Oa = a(this.level);
						this.j.get() >= this.ja + this.Oa ? (this.level++,
							this.ja += this.Oa) : this.j.get() < this.ja && (this.level--,
							this.ja -= a(this.level - 1))
					},
					Rd() {
						let a = this.Oa ? (this.j.get() - this.ja) / this.Oa : 0;
						return Math.min(1, Math.max(0, a))
					},
					Hc() {
						return this.j.get()
					},
					he() {
						return this.level
					}
				},
				type: -1,
				Rb: 0,
				color: 0,
				fb: 0,
				ic: 0,
				Yc: 0,
				speed: 0
			};
		b.Cd = () => {
			f.sa = []
		};
		let m = () => Math.max(b.c / ba.a.view, b.f / ba.a.view / .5625);
		b.ta = !1;
		b.na = !1;
		b.message = "";
		let k = window.localStorage || {},
			p = k.getItem("tracking") || k.getItem("password") || null,
			t = null,
			q = parseInt(k.getItem("privilege"), 10),
			n = Number.isNaN(q) ? p ? 1 : 0 : q,
			r = () => {
				var a = b.wa.filter(g => null != g.visible && g.visible <= n);
				a.some(g => g.sb) && (a = a.filter(g => g.sb));
				let c = Infinity,
					d = [];
				for (let g of a)
					[, a] = g.code.split("-"),
					a = Math.abs(((b.Ta[1][a][2] - b.ra) % 24 + 36) % 24 - 12),
					a < c ? (d = [g],
						c = a) : a === c && d.push(g);
				return d[Math.floor(Math.random() * d.length)]
			},
			Mb = a => {
				a.startsWith("#") && (a = a.slice(1));
				let [, c, d] = a.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
				if (c)
					b.rb = +d || 0;
				else {
					var g = {};
					for (var h of a.split("&")) {
						a = h.split("=");
						var y = a.shift();
						g[y] = a.join("=") || !0
					}
					var B = g["private"];
					h = g.region;
					a = g.mode;
					y = g.host;
					g = g.key;
					B && (y = B,
						y.includes(";") && (g = y.split(";"),
							y = g.shift(),
							g = g.join(";")));
					if (y)
						h = `z-${h || "unk"}-${a || "x"}-${y.toLowerCase().replace(/(\.[^\.]+){1,2}$/, "").replace(/[^a-z0-9\-]/, "-")}`,
						b.wa.unshift({
							id: "z",
							code: h,
							host: y,
							pb: !0
						}),
						c = "z",
						t = g || null;
					else
						return null
				}
				return b.wa.find(K => K.id === c) || null
			},
			ec = a => {
				if (!a || "%" === a)
					return "Unknown";
				var c = b.Ta[2];
				let d = [],
					g = [];
				var h = 0;
				for (let Q of c)
					for (let S of Q)
						if (S.id === a.charAt(h)) {
							h++;
							c = Object.assign({}, S);
							if ("word" === S.Ib) {
								var y = +a.charAt(h++),
									B = a.slice(h, h + y);
								c.v = B.charAt(0).toUpperCase() + B.slice(1);
								h += y
							} else if ("words" === S.Ib) {
								y = +a.charAt(h++);
								B = [];
								for (let N = 0; N < y; N++) {
									var K = a.charAt(h++);
									if ("d" === K)
										B.push("-");
									else if ("s" === K)
										B.push(" ");
									else {
										K = +K;
										let E = a.slice(h, h + K);
										B.push(E.charAt(0).toUpperCase() + E.slice(1));
										h += K
									}
								}
								c.v = B.join("")
							}
							S.remove && (Array.isArray(S.remove) ? g.push(...S.remove) : g.push(S.remove));
							d.push(c);
							break
						}
				if (0 === d.length)
					return "Unknown";
				a = d[d.length - 1];
				a.end && (a.v = a.end,
					a.advance && (a.advance = !1));
				for (a = 0; a + 1 < d.length; a++)
					d[a].delay && d[a + 1].advance && (h = d[a],
						d[a] = d[a + 1],
						d[a + 1] = h,
						a++);
				d = d.filter(({
					id: Q
				}) => !g.includes(Q));
				return d.map(Q => Q.v).join(" ")
			},
			yb = {},
			fc = () => {
				let a = document.getElementById("serverSelector").parentNode.parentNode,
					c = document.getElementById("serverSelector"),
					d;
				for (let g of b.wa) {
					if ((null == g.visible || g.visible > n) && b.B !== g)
						continue;
					let [h, y, B] = g.code.split("-"), [K, Q] = b.Ta[0][h], [S, N] = b.Ta[1][y], E = document.createElement("tr");
					for (let e of [S, ec(B), `${null == g.Vb ? "?" : g.Vb}/${Q || "?"}`])
						E.appendChild(document.createElement("td")).textContent = e;
					E.title = `${K} - ${N} - #${g.id} (${g.code})`;
					g.Md && E.classList.add("featured");
					yb[g.id] = (e = !0, w = !0) => {
						d.classList.remove("selected");
						d = E;
						d.classList.add("selected");
						b.B = g;
						w && (b.rb = 0);
						k.setItem("gameMode", g.code);
						e && (location.hash = `#${g.id}`);
						a.scrollTop < E.offsetTop - 110 ? a.scrollTop = E.offsetTop - 110 : a.scrollTop > E.offsetTop - 30 && (a.scrollTop = E.offsetTop - 30)
					};
					E.addEventListener("click", yb[g.id]);
					c.appendChild(E);
					b.B === g && (d = E,
						d.classList.add("selected"),
						setTimeout(() => {
							a.scrollTop = E.offsetTop - 70
						}))
				}
			};
		const Nb = {
			Fc() {
				return (-1 > b.ra ? ["ak7oqfc2u4qqcu6i", "hq3p9viv64d0js08", "n15rqgeh01clbn7n"] : 1 > b.ra ? ["hq3p9viv64d0js08", "ak7oqfc2u4qqcu6i", "n15rqgeh01clbn7n"] : 5 > b.ra ? ["hq3p9viv64d0js08", "n15rqgeh01clbn7n", "ak7oqfc2u4qqcu6i"] : ["n15rqgeh01clbn7n", "hq3p9viv64d0js08", "ak7oqfc2u4qqcu6i"]).map(a => `https://${a}.d.nsrv.cloud:2222`)
			},
			async Od() {
				let a = this.Fc();
				return new Promise(async (c, d) => {
					let g = !1,
						h = K => {
							g || (g = !0,
								c(K.status))
						},
						y = a.length,
						B = K => {
							y--;
							0 < y || (g = !0,
								d(K))
						};
					for (let K of a)
						if (fetch(`${K}/status`).then(Q => Q.json()).then(Q => {
								for (let S of Object.values(Q.status))
									if (S.online)
										return Q;
								throw Error("No server is online");
							}).then(h).catch(B),
							await u(1500),
							g)
							break
				})
			},
			async Nd() {
				var [a] = this.Fc();
				({
					clients: a
				} = await fetch(`${a}/clientCount`).then(c => c.json()));
				return a
			},
			uc: 0,
			vc: 0,
			Dd() {
				let a = Date.now();
				3E5 < a - this.vc && (this.vc = a,
					this.Nd().then(c => this.uc = c));
				return this.uc
			}
		};
		Nb.Od().then(a => {
			var c = {};
			for (let [d, g] of Object.entries(a)) {
				let h = g.name,
					y = {
						visible: g.online ? 0 : 3,
						id: d.replace("#", ""),
						code: g.code,
						host: g.host,
						sb: 20 > g.mspt && 20 > g.clients,
						Vb: g.clients,
						Md: g.featured
					};
				null == c[h] ? c[h] = [y] : c[h].push(y)
			}
			for (let d of Object.values(c)) {
				if (1 < d.length) {
					for (let g of d)
						g.visible = Math.max(g.visible, 2);
					c = d.filter(g => 0 === g.Vb && 2 === g.visible);
					0 === c.length && (c = d.filter(g => 2 === g.visible));
					if (0 === c.length)
						continue;
					c[Math.floor(Math.random() * c.length)].visible = 0
				}
				b.wa.push(...d)
			}
			console.table(a)
		}).catch(() => {}).then(() => {
			for (let a of b.wa) {
				let [, c, d] = a.code.split("-"), [, g, h] = d.match(/([fds0-9])([dmastp]?)$/) || [null, "", ""], y = b.Ta[1][c][2];
				a.sort = {
					ra: null == y || "" === g ? -13 : y,
					hd: /^[0-9]$/.test(g) ? +g : "%fds".indexOf(g) - 4,
					ed: "%dmastp".indexOf(h)
				}
			}
			b.wa.sort((a, c) => a.sort.ra - c.sort.ra || a.sort.hd - c.sort.hd || a.sort.ed - c.sort.ed || (a.id > c.id ? 1 : -1));
			b.B = Mb(location.hash) || b.wa.find(a => a.code === k.getItem("gameMode") && null != a.visible && a.visible <= n) || r();
			fc();
			window.addEventListener("hashchange", () => {
				if (!b.B.connected) {
					var a = Mb(location.hash);
					if (a && yb[a.id])
						yb[a.id](!1, !1)
				}
			})
		});
		let gc = (() => {
				let a = !1,
					c = document.getElementById("optionArrow"),
					d = document.getElementById("viewOptionText"),
					g = document.getElementsByClassName("sliderHolder")[0],
					h = document.getElementsByClassName("slider"),
					y = () => {
						c.style.transform = a ? "translate(2px, -2px) rotate(45deg)" : "rotate(-45deg)";
						d.innerText = a ? "close options" : "view options";
						a ? g.classList.add("slided") : g.classList.remove("slided");
						h[0].style.opacity = a ? 0 : 1;
						h[2].style.opacity = a ? 1 : 0
					};
				document.getElementById("startMenuSlidingTrigger").addEventListener("click", () => {
					a = !a;
					y()
				});
				return () => {
					a || (a = !0,
						y())
				}
			})(),
			Eb = document.getElementById("patchNotes"),
			Ob = (() => {
				let a = document.getElementById("changelogSelector"),
					c = a.parentNode,
					d = a.firstElementChild,
					g = document.getElementById("patchNotes"),
					h = {};
				for (let y = 0; y < a.children.length; y++) {
					let B = a.children[y],
						K = B.dataset.type;
					h[K] = () => {
						if (B !== d) {
							var Q = d.dataset.type;
							d.classList.remove("active");
							B.classList.add("active");
							g.classList.remove(Q);
							g.classList.add(K);
							d = B;
							c.scrollLeft = B.offsetLeft - a.offsetLeft + B.offsetWidth / 2 - c.offsetWidth / 2
						}
					};
					B.addEventListener("click", h[K])
				}
				return h
			})(),
			Fb = (a, c = null) => {
				var d = a[0];
				if (!d)
					return !0;
				d = d.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [d, d, null];
				var g = d[1] ? {
					Update: "update",
					Announcement: "update",
					Poll: "poll",
					"Event Poll": "event-poll",
					"Gamemode Poll": "event-poll",
					Event: "event",
					Gamemode: "event",
					"Balance Update": "balance-update",
					"Balance Update Details": "balance",
					Balance: "balance",
					Patch: "patch",
					Hidden: "hidden"
				} [d[1]] : null;
				if ("hidden" === g)
					return !0;
				let h = document.createElement("div");
				g && h.classList.add(g);
				var y = document.createElement("b"),
					B = [d[1]];
				if (d[2]) {
					let N = +new Date(d[2] + "T00:00:00Z") + 252E5;
					if (N > Date.now() && !location.search.includes("changelog_debug=1"))
						return !0;
					if (null != c && N + c < Date.now())
						return !1;
					B.push((new Date(N)).toLocaleDateString("default", {
						year: "numeric",
						month: "long",
						day: "numeric",
						timeZone: "UTC"
					}))
				}
				d[3] && B.push(d[3]);
				y.innerHTML = B.join(" - ");
				h.appendChild(y);
				if ("poll" === g || "event-poll" === g) {
					let [N, E, e] = a[1].split(",").map(Ea => Ea.trim());
					var K = "table" === e;
					let w = "radio" === e;
					c = Math.ceil((new Date(E.trim()) - Date.now()) / 36E5);
					let F = 0 >= c;
					y.appendChild(document.createElement("br"));
					d = document.createElement("small");
					d.appendChild(document.createTextNode(F ? "closed" : `closing in ${c} hour${1 === c ? "" : "s"}`));
					let I = document.createElement("a");
					I.href = "javascript:;";
					I.innerText = "view all results";
					K && d.appendChild(I);
					let G = document.createElement("a");
					G.href = "javascript:;";
					G.innerText = "reset";
					G.style.display = "none";
					w && !F && d.appendChild(G);
					y.appendChild(d);
					h.appendChild(document.createElement("br"));
					y = document.createElement("table");
					y.className = K ? "poll-table" : "poll-list";
					c = document.createElement("tbody");
					d = (() => {
						let Ea = [],
							ca = [],
							za = (new Promise(Ia => {
								let Aa = !1,
									Sa = () => {
										if (!Aa) {
											var V = h.getBoundingClientRect();
											if (!(0 >= V.height)) {
												var ha = Eb.getBoundingClientRect();
												V.top > ha.bottom + ha.height || V.bottom < ha.top - ha.height || (Aa = !0,
													Ia())
											}
										}
									};
								Eb.addEventListener("scroll", Sa);
								setTimeout(Sa, 50)
							})).then(() => fetch(`${"https://poll-server.arras.cx:2020"}/poll/${N}/status`)).then(Ia => Ia.json()).then(Ia => {
								if (!Ia.ok)
									throw Error("Poll does not exist");
								ca = Ia.options.map(Aa => ({
									md: Aa.voted,
									nd: Aa.votes
								}))
							});
						I.addEventListener("click", () => {
							I.remove();
							let Ia = Ea.map(Sa => parseInt(Sa.title, 10)).sort((Sa, V) => Sa - V),
								Aa = "#2196f3 #00adc3 #009688 #4caf50 #e8ae00 #ff8200 #ff0000".split(" ");
							for (let Sa of Ea) {
								let V = parseInt(Sa.title, 10);
								Sa.className = "count";
								Sa.innerHTML = 1E3 <= V ? (V / 1E3).toFixed(1) + "<span>k</span>" : 0 <= V ? V : "?";
								Sa.style.color = Aa[Math.floor((Ia.indexOf(V) + .5) / Ia.length * Aa.length)]
							}
						});
						G.addEventListener("click", () => {
							Ja.checked = !1;
							Ja.update();
							Ja = null;
							G.style.display = "none"
						});
						let Ja = null,
							$a = 0;
						return Ia => {
							let Aa = Oa => `${Ia ? Ia + " - " : ""}${Oa} vote${1 === Oa ? "" : "s"}`,
								Sa = $a++,
								V = document.createElement("label");
							V.className = "container";
							let ha = document.createElement("input");
							ha.tabIndex = -1;
							ha.type = w ? "radio" : "checkbox";
							ha.disabled = !0;
							w && (ha.name = `radio-${N}`);
							za.then(() => {
								let {
									md: Oa,
									nd: Wa
								} = ca[Sa] || {
									md: !1,
									nd: 0
								};
								ha.checked = Oa;
								w && Oa && (Ja = ha,
									G.style.display = "inline");
								ha.disabled = F;
								let db = Wa - Oa;
								ha.update = () => {
									fetch(`${"https://poll-server.arras.cx:2020"}/poll/${N}/set/${Sa}/${ha.checked}`);
									let Ma = db + (ha.checked ? 1 : 0);
									Ia ? na.nodeValue = Aa(Ma) : V.title = Aa(Ma);
									w && Ja && Ja !== ha && ha.checked && (Ja.checked = !1,
										Ja.update());
									Ja = ha;
									G.style.display = "inline"
								};
								ha.addEventListener("change", () => ha.update());
								Ia ? na.nodeValue = Aa(Wa) : V.title = Aa(Wa)
							});
							let na;
							Ia && (na = document.createTextNode(Ia),
								V.appendChild(na));
							V.appendChild(ha);
							let Da = document.createElement("span");
							Da.className = w ? "radio" : "checkmark";
							V.appendChild(Da);
							Ea.push(V);
							return V
						}
					})();
					for (var Q of a.slice(2)) {
						a = document.createElement("tr");
						if (K)
							for (var S of Q.split("|"))
								S = S.trim(),
								g = document.createElement("td"),
								"X" === S ? g.appendChild(d()) : (B = S.match(/^:*/)[0].length,
									g.colSpan = B + 1,
									g.innerHTML = S.slice(B)),
								a.appendChild(g);
						else
							g = document.createElement("td"),
							g.appendChild(d(Q)),
							a.appendChild(g);
						c.appendChild(a)
					}
					y.appendChild(c);
					h.appendChild(y)
				} else {
					Q = document.createElement("ul");
					for (K of a.slice(1))
						S = document.createElement("li"),
						S.innerHTML = K,
						Q.appendChild(S);
					S = Q.getElementsByTagName("a");
					for (a = 0; a < S.length; a++) {
						K = S[a];
						if (!K.href)
							continue;
						let N = K.href.lastIndexOf("#"); -
						1 !== N && (N = K.href.slice(N + 1),
							"options-menu" === N ? S[a].addEventListener("click", E => {
								E.preventDefault();
								gc()
							}) : Ob[N] && S[a].addEventListener("click", E => {
								E.preventDefault();
								Ob[N]()
							}))
					}
					h.appendChild(Q)
				}
				Eb.appendChild(h);
				return h
			};
		(a => {
			let c = [];
			var d = [];
			for (let g of a.split("\n"))
				0 !== g.length && (a = g.charAt(0),
					"#" === a ? (c.push(d),
						d = [g.slice(1).trim()]) : "-" === a ? d.push(g.slice(1).trim()) : d[d.length - 1] += " " + g.trim());
			c.push(d);
			for (d = 0; d < c.length;) {
				if (Fb(c[d], 157248E5)) {
					d++;
					continue
				}
				c = c.slice(d);
				let g = Fb(["Older Changelogs", '<a class="view-older-changelogs" href="javascript:;">Click here to load changelogs more than 6 months old.</a>', '<a href="ext/changelog.html">View the original changelog here.</a>']);
				[d] = g.getElementsByClassName("view-older-changelogs");
				d.addEventListener("click", () => {
					g.remove();
					for (let h of c)
						Fb(h)
				});
				break
			}
		})(bb(7).default);
		let zb = a => {
				try {
					var c = a.replace(/\s+/g, "");
					2 == c.length % 4 ? c += "==" : 3 == c.length % 4 && (c += "=");
					let B = atob(c);
					c = "Unknown Theme";
					let K = "";
					var d = B.indexOf("\x00");
					if (-1 === d)
						return null;
					c = B.slice(0, d) || c;
					B = B.slice(d + 1);
					d = B.indexOf("\x00");
					if (-1 === d)
						return null;
					K = B.slice(0, d) || K;
					B = B.slice(d + 1);
					let Q = B.charCodeAt(0) / 255;
					B = B.slice(1);
					let S = Math.floor(B.length / 3);
					if (2 > S)
						return null;
					d = [];
					for (let N = 0; N < S; N++)
						d.push("#" + (B.charCodeAt(3 * N) << 16 | B.charCodeAt(3 * N + 1) << 8 | B.charCodeAt(3 * N + 2)).toString(16).padStart(6, "0"));
					return {
						Lc: !1,
						name: c,
						hb: K,
						content: {
							table: d,
							border: Q
						}
					}
				} catch (B) {}
				a = JSON.parse(a);
				if ("object" !== typeof a)
					return null;
				let {
					name: g = "Unknown Theme",
					author: h = "",
					content: y
				} = a;
				a = [];
				for (let B of [y.teal, y.lgreen, y.orange, y.yellow, y.lavender, y.pink, y.vlgrey, y.lgrey, y.guiwhite, y.black, y.blue, y.green, y.red, y.gold, y.purple, y.magenta, y.grey, y.dgrey, y.white, y.guiblack]) {
					if ("string" !== typeof B || !/^#[0-9a-fA-F]{6}$/.test(B))
						return null;
					a.push(B)
				}
				return {
					Lc: !0,
					name: "string" === typeof g && g.trim() || "Unknown Theme",
					hb: "string" === typeof h && h.trim() || "",
					content: {
						table: a,
						border: Math.min(1, Math.max(0, y.border))
					}
				}
			},
			Pb = "TGlnaHQgQ29sb3JzAE5lcGgApnrbvLnofueJbf3zgLWO/e+Zw+jr96qfnv///0hISDyky4q8P+A+Qe/HS41q38xmnKenr3Jvb9vb2wAAAA RGFyayBDb2xvcnMATmVwaAAmiXW3DEkdxGdIsrIkfVbFsk+uHh4ePDo6AAAA5eXlN5/GMLU7/2xu/8ZllnPoyGebY19fc3R6EREP//// TmF0dXJhbABOZXBoADN2wbuq013glUX/2ZOTn//Yf7LEtrZ/f3////83ODRPk7UAtlnhT2Xlv0KAU6C2fKqZj49JSVSlsqUAAAA Q2xhc3NpYwBOZXBoAICO//uF4338dnb/6461jv/xd93Nzc2ZmZn///9SUlIAsOEA4GzwT1T/5Gt2jPy+f/WZmZlUVFTAwMAAAAA Rm9yZXN0AFN0ZXJsb24As4hKpYybPtFqgJdZbUmYVWApT93GuH6Unv//6GZXUIB7tqG+VeWwW/9HR7rGdLp40ZmIZlKXWH2gYAAAAA TWlkbmlnaHQAdW9pZWEAmSuQmEuqXTRWeM3GhIl3jqhckMzMzKeyt7rG/wkfKBI0VQmHZQAAE1ZjgXQ3hLKQmFVVVWSet0RERAAAAA U25vdwBEZW9sdmVvcG9sZXIAWYm/urXRfeXg4LW75ZOf/2Rt5bKysn9/f////zg4Na6u/67/rv+urv///8PD2P+1/8zMzKCgsvLy8gAAAA Q29yYWwgUmVlZgBDZWxlc3RlYQBMdu7GQap4/39Q/9JQ3DOI+oByi4iGv8HC////EkZrQgCuDWM43EMz/qkEe0urXCRuZWiE1NfZMoO8AAAA QmFkbGFuZHMASW5jb2duaW91cwBm+cuc8cIyOHYd5pE4t7e3eIZraqhPt7e3pML0AAAADFqebokiWwAAeD8EWRx3IBJNLxwWmZmZVDUXz+Lz QmxlYWNoAGRlZmluaXRlbHlub3QuAGYA//8A/wD/MgD/7AD/JKf/PL3/8YaRgYHx8fFfX18AJf8A/wD/AAD/+iMxAP/U09ODg4NMTEz//v4ICAg UHVtcGtpbiBTa2VsZXRvbgBSb2FkAP9yGXD/Y0cbcTr984CUEQAZRBcbcTqqn57+2LFISEg8pMt27sbwT1QbcTobcTrMZpz///9yb2//m1gAAAA UmV0cm8ARGFtb2NsZXMAwP//Yga/OzGOlZN9AO7o1ecsdsjY5wc2Qv///wAAACw+ue+yCbkSNILf5B5haosSTIOUlna2iwgeIAAAAA UGFzdGVsAERhbW9jbGVzAMD//5iK/7LYs4T/63bu6NX/jb3z8NcHNkL//7VnUkA5dpc/96H2X2TSuGmBZUqnUpnBwcGNqZb126cAAAA RGlzY29yZABEYW1vY2xlcwDA1T8/KbOZ/ygo/+uOtY7//2j/zc3NmZmZ4ODgAAAAconaQ7WB8EdH/+gAXHn/+qQZmZmZVFRUHiEkNjk+ V1IgU2hlZXQgVGhlbWUAYWxldHRlcmEATP2YJ2iRaLuOdfXeup6BcbNXV+rgyaqfnv///3lVSGuyv2jFbLhjWNi8Z254qoRhh4aHiHJvb8u2kAAAAA RGVzY2VudABSb2c0NTYAAJXOz/+l/7yJif//sgAAAL2RxH9zYAAAAP///wAAAKurq6aXaFRUVP3npYeHd4WmhsS7nS4uMjs7NwAAAA U29sYXJpemVkIERhcmsAUm9hZADAtYkAKqGYy0sWZXuD7ujV0zaC4OLkBzZC////AAAAJovShpYA3DIvtYkAZ4yxoIK9g5SWBzZCACs2AAAA RWdncGxhbnQAUm9hZADA6WuoeNS21hAPo56b5+nb6WuojYaHKxop////KxopBrbvSLaF72FV+ZsVgVuk/sQYubawQBE/UDdNAAAA".split(" "),
			vb = zb(Pb[0]).content,
			lb = document.getElementById("optColors"),
			ob = document.getElementById("optCustom");
		l.ma("optCustom"); {
			let a = ({
				name: g,
				hb: h
			}, y = !1) => {
				g = y ? g ? `Custom - ${g}` : "Custom" : g;
				return "" === h ? g : "fan-made" === h ? `${g} (Fan-made)` : `${g} (by ${h})`
			};
			for (let g of Pb) {
				let h = a(zb(g));
				lb.options.add(new Option(h, g, lb.options))
			}
			let c = new Option("Custom", "custom"),
				d = () => {
					let g = {
						name: "",
						hb: ""
					};
					try {
						ob.value && (g = zb(ob.value));
						ob.classList.remove("error");
						if (g.Lc) {
							{
								let {
									name: y = "Unknown Theme",
									hb: B = "",
									content: K
								} = g, {
									table: Q,
									border: S
								} = K, N = y.trim() + "\x00" + B.trim() + "\x00" + String.fromCharCode(1 <= S ? 255 : 0 > S ? 0 : Math.floor(256 * S));
								for (let E of Q) {
									let e = parseInt(E.slice(1), 16);
									N += String.fromCharCode(e >> 16, e >> 8 & 255, e & 255)
								}
								var h = btoa(N).replace(/=+/, "")
							}
							ob.value = h
						}
						c.text = a(g, !0)
					} catch (y) {
						ob.classList.add("error"),
							c.text = "Custom"
					}
				};
			d();
			lb.options.add(c);
			lb.addEventListener("change", () => {
				ob.style.display = "custom" === lb.value ? "block" : "none"
			});
			lb.addEventListener("focus", () => {
				ob.style.display = "custom" === lb.value ? "block" : "none"
			});
			ob.addEventListener("input", () => d())
		}
		l.ma("playerNameInput");
		l.ma("optScreenshotMode");
		l.ma("optShield");
		l.ma("optFancy");
		l.ma("optColors");
		l.ma("optNoPointy");
		l.ma("optBorders");
		l.ma("optAutoLevel", b.mobile);
		b.mobile && l.ma("optMobile");
		0 > lb.selectedIndex && (lb.selectedIndex = 0);
		b.mobile && "" === document.getElementById("optMobile").value && (document.getElementById("optMobile").value = "joysticks");
		"" === document.getElementById("optBorders").value && (document.getElementById("optBorders").value = "normal");
		if (!b.mobile) {
			let a = {};
			try {
				if ("#vi" === location.hash || "#vim" === location.hash)
					a = {
						KEY_AUTO_FIRE: [";", 186],
						KEY_AUTO_SPIN: ["P", 80],
						KEY_CHOOSE_1: ["Q", 81],
						KEY_CHOOSE_2: ["W", 87],
						KEY_CHOOSE_3: ["E", 69],
						KEY_CHOOSE_4: ["A", 65],
						KEY_CHOOSE_5: ["S", 83],
						KEY_CHOOSE_6: ["D", 68],
						KEY_CHOOSE_7: ["Z", 90],
						KEY_CHOOSE_8: ["X", 88],
						KEY_CHOOSE_9: ["C", 67],
						KEY_CLASS_TREE: ["T", 84],
						KEY_DOWN: ["J", 74],
						KEY_LEFT: ["H", 72],
						KEY_LEVEL_UP: [".", 190],
						KEY_OVERRIDE: ["I", 73],
						KEY_PING: [",", 188],
						KEY_RECORD: ["V", 86],
						KEY_REVERSE_MOUSE: ["U", 85],
						KEY_REVERSE_TANK: ["Y", 89],
						KEY_RIGHT: ["L", 76],
						KEY_SCREENSHOT: ["G", 71],
						KEY_UP: ["K", 75]
					};
				else {
					let E = k.getItem("keybindsJSON");
					a = E ? JSON.parse(E) : {}
				}
			} catch (E) {}
			let c = document.getElementById("controlTable"),
				d = document.getElementById("resetControls"),
				g = document.getElementById("moreControls"),
				h = null,
				y = [];
			for (let E of c.rows)
				for (let e of E.cells) {
					let w = e.firstChild.firstChild,
						{
							key: F,
							L: I
						} = w.dataset,
						G = {
							element: w,
							key: F,
							L: I,
							ha: w.innerText,
							U: b[F],
							Tb: w.innerText,
							Sb: b[F]
						};
					a[G.key] && (w.innerText = G.ha = a[G.key][0],
						b[F] = G.U = a[G.key][1],
						G.L && (b.L[G.L] = G.ha));
					y.push(G)
				}
			let B = () => y.some(({
				U: E,
				Sb: e
			}) => E !== e);
			B() && d.classList.add("active");
			let K = () => {
					window.getSelection && window.getSelection().removeAllRanges();
					h.element.parentNode.parentNode.classList.remove("editing");
					h = null
				},
				Q = E => {
					h = E;
					h.element.parentNode.parentNode.classList.add("editing");
					if (-1 !== h.U && window.getSelection) {
						E = window.getSelection();
						E.removeAllRanges();
						let e = document.createRange();
						e.selectNodeContents(h.element);
						E.addRange(e)
					}
				},
				S = (E, e) => {
					if (" " === E)
						E = "",
						e = -1;
					else if (e !== h.U) {
						let w = y.find(({
							U: F
						}) => F === e);
						w && (w.ha = h.ha,
							w.element.innerText = h.ha,
							w.U = h.U,
							b[w.key] = h.U,
							w.L && (b.L[w.L] = h.ha),
							a[w.key] = [w.ha, w.U])
					}
					h.ha = E;
					h.element.innerText = E;
					h.U = e;
					b[h.key] = e;
					h.L && (b.L[h.L] = E);
					a[h.key] = [h.ha, h.U];
					k.setItem("keybindsJSON", JSON.stringify(a));
					K();
					B() ? (d.classList.remove("spin"),
						d.classList.add("active")) : d.classList.remove("active")
				};
			document.addEventListener("click", E => {
				if (!b.Aa)
					if (h)
						K();
					else {
						var e = y.find(({
							element: w
						}) => E.target === w);
						e && Q(e)
					}
			});
			d.addEventListener("click", () => {
				if (B()) {
					h && K();
					for (let E of y)
						E.ha = E.Tb,
						E.element.innerText = E.Tb,
						E.U = E.Sb,
						b[E.key] = E.Sb,
						E.L && (b.L[E.L] = E.Tb);
					a = {};
					k.setItem("keybindsJSON", JSON.stringify(a));
					d.classList.remove("active");
					d.classList.add("spin")
				}
			});
			let N = null;
			g.addEventListener("click", () => {
				if (N) {
					for (let E of N)
						E.classList.add("hidden");
					N = null;
					g.classList.remove("x")
				} else {
					N = document.querySelectorAll("#controlTable tr.hidden");
					for (let E of N)
						E.classList.remove("hidden");
					g.classList.add("x")
				}
			});
			document.addEventListener("keydown", E => {
				if (!(b.Aa || E.shiftKey || E.ctrlKey || E.altKey)) {
					var e = E.which || E.keyCode;
					h ? 1 !== E.key.length || /[0-9of`]/i.test(E.key) || 3 === E.location ? "Backspace" !== E.key && "Delete" !== E.key || S(" ", 32) : S(E.key.toUpperCase(), e) : e !== b.KEY_ENTER && e !== b.KEY_SPAWN || Qb()
				}
			})
		}
		document.getElementById("startButton").addEventListener("click", () => Qb());
		let Rb = WebSocket.prototype.close;
		WebSocket.prototype.close = function (...a) {
			v.Xd();
			Rb.call(this, ...a)
		};
		WebSocket.prototype.close.toString = Function.prototype.toString.bind(Rb);
		document.body.addEventListener("mouseenter", () => v.Pc(!0));
		document.body.addEventListener("mouseleave", () => v.Pc(!1));
		document.addEventListener("contextmenu", a => {
			"A" !== a.target.tagName && "INPUT" !== a.target.tagName && a.preventDefault()
		});
		b.mobile && document.body.classList.add("mobile");
		let kb = new ma,
			Gb = () => {
				let a = window.devicePixelRatio;
				T.h.Za && (a *= .5);
				b.$b = a;
				kb.raw.width = b.c = window.innerWidth * a;
				kb.raw.height = b.f = window.innerHeight * a;
				b.tb = Math.min(1920, Math.max(window.innerWidth, 1280))
			};
		Gb();
		window.addEventListener("resize", Gb);
		let x = kb.raw.getContext("2d"),
			Hb = (a, c, d) => {
				let g = 2 * m();
				d += T.h.jb;
				return (a + d) * g > -b.c && (a - d) * g < b.c && (c + d) * g > -b.f && (c - d) * g < b.f
			};
		const mb = class {
			static b(a, c) {
				var d = 2 * Math.PI;
				return ((a - c + Math.PI) % d + d) % d - Math.PI
			}
			constructor(a = !1) {
				this.G = a;
				this.b = this.time = this.value = this.l = 0
			}
			reset() {
				this.b = this.time = this.value = this.l = 0
			}
			N(a, c, d) {
				return c + (this.G ? mb.b(d, c) : d - c) * a
			}
			add(a) {
				this.l = 0 < this.b ? this.value : a;
				this.value = a;
				this.time = 0;
				this.b = 1
			}
			A(a) {
				return 2 !== this.b ? 0 : (a - this.time) / (1E3 / 30 / M.speed)
			}
			get(a, c = !1) {
				if (0 === T.Da.bb)
					return this.value;
				if (0 === this.b)
					return 0;
				if (1 === this.b)
					return this.b = 2,
						this.time = a,
						this.l;
				a -= this.time;
				let d = 1E3 / 30 / M.speed;
				2 === T.Da.bb ? (c = a / d,
					c = 8 < c ? 8 : 1 < c ? c : c * c * (3 - 2 * c)) : c = a < d || c ? a / d : 1;
				return this.N(c, this.l, this.value)
			}
		};
		let ba = {
			x: 0,
			y: 0,
			view: 1,
			a: {
				x: 0,
				y: 0,
				view: 2E3
			},
			aa: new mb,
			ia: new mb,
			name: ""
		};
		b.player = ba;
		const rb = {
				enabled: !1,
				x: 0,
				y: 0,
				I: 0,
				C: 0,
				isEnabled() {
					return b.M || b.ba || !b.Ba ? !1 : this.enabled && 0 < f.fb && 0 < f.ic
				},
				get() {
					return this
				},
				ae(a) {
					this.enabled = !0;
					this.x = a.x;
					this.y = a.y;
					this.I = a.I;
					this.C = a.C
				},
				wd(a) {
					this.x += a.Kd;
					this.y += a.Ld;
					this.I += a.Id;
					this.C += a.Jd
				},
				Vd(a) {
					if (this.isEnabled()) {
						var c = this.x,
							d = this.y,
							g = this.I,
							h = this.C,
							y = Math.sqrt(a.x * a.x + a.y * a.y);
						if (0 < y) {
							let B = f.fb / M.speed;
							this.I += B / y * a.x;
							this.C += B / y * a.y
						}
						if (a = f.fb / f.ic)
							this.I /= a / M.speed + 1,
							this.C /= a / M.speed + 1;
						this.x += this.I;
						this.y += this.C;
						b.s.g("M", this.x - c, this.y - d, this.I - g, this.C - h)
					}
				}
			},
			Sb = (() => {
				const a = jb(bb(8));
				let c = () => {
						var e = document.createElement("canvas");
						e.width = 96;
						e.height = 32;
						let w = e.getContext("2d");
						w.fillStyle = "#ffffff";
						w.fillRect(64, 0, 32, 32);
						w.fillStyle = "#8abc3f";
						w.beginPath();
						w.arc(16, 16, 16, 0, 2 * Math.PI);
						w.fill();
						w.strokeStyle = "#ffffff";
						w.lineJoin = "round";
						w.lineWidth = 1.6;
						w.beginPath();
						w.moveTo(16.6, 10.2);
						w.lineTo(21.4, 5.4);
						w.lineTo(26.6, 10.6);
						w.lineTo(21.8, 15.4);
						w.closePath();
						w.stroke();
						w.beginPath();
						w.arc(14, 18, 8, 0, 2 * Math.PI);
						w.stroke();
						w.fillStyle = "#8abc3f";
						w.textBaseline = "middle";
						w.font = '15px "Trebuchet MS"';
						w.fillText("arras.io", 38, 16);
						w.fillStyle = "rgb(0,0,0,0.3)";
						w.fillText("arras.io", 40, 18);
						e = e.toDataURL().replace("data:image/png;base64,", "");
						return `v0:${C.hash(e, "base64", "base64")}`
					},
					d = () => navigator.mediaDevices.enumerateDevices().then(e => e.map(w => w.deviceId).filter(w => w)),
					g = () => {
						let e = [];
						var w = 0;
						for (var F of [127, 409, 887, 55, 86, 228, 484, 155, 52, 463, 384, 926, 186, 1667, 371, 768, 138, 452, 530, 8, 1, 1, 3, 38, 257, 458, 119, 348, 152, 1261, 373, 947, 103, 8856, 21520, 243, 18387, 2061, 990, 1035, 4, 2])
							w += F,
							e.push(String.fromCharCode(w));
						e.push("\ud835\udf90");
						w = "";
						F = document.createElement("span");
						F.style.visibility = "hidden";
						F.style.font = "initial";
						F.style.fontSize = "1920px";
						document.body.appendChild(F);
						for (let I of "initial sans-serif serif monospace cursive fantasy".split(" ")) {
							F.style.fontFamily = I;
							for (let G of e)
								F.textContent = G,
								w += `${F.offsetWidth} ${F.offsetHeight}\n`
						}
						F.remove();
						return `v0:${C.hash(w.slice(0, -1), "latin1", "base64")}`
					};
				const h = {
						index: 0,
						data: [],
						next() {
							if (this.index >= this.data.length)
								throw console.error(this.data),
									Error("Trying to crawl past the end of the provided data");
							return this.data[this.index++]
						},
						all() {
							return this.data.slice(this.index)
						},
						ce(e) {
							this.index += e;
							if (this.index > this.data.length)
								throw console.error(this.data),
									Error("Trying to crawl past the end of the provided data");
						},
						set(e) {
							this.data = e;
							this.index = 0
						}
					},
					y = class {
						constructor() {
							this.o = []
						}
						Va() {
							return this.o.length
						}
						get(e) {
							for (let w = this.o.length; w <= e; w++)
								this.o.push({
									position: 0,
									ga: 0,
									$c: 0,
									Lb: !1,
									Jb: null
								});
							return this.o[e]
						}
						update() {
							for (let e of this.o)
								if (e.Lb && (e.Lb = !1,
										e.ga += e.$c),
									e.ga || e.position)
									e.ga -= .2 * e.position,
									e.position += e.ga,
									0 > e.position && (e.position = 0,
										e.ga = -e.ga),
									0 < e.ga && (e.ga *= .5)
						}
						cd(e, w) {
							e = this.get(e);
							null != e.Jb && e.Jb !== w && (e.Lb = !0);
							e.Jb = w
						}
						dd(e, w) {
							this.get(e).$c = Math.sqrt(w) / 20
						}
					},
					B = class {
						constructor() {
							this.b = "normal";
							this.time = Date.now()
						}
						set(e) {
							if (e !== this.b || "injured" === e)
								"dying" !== this.b && (this.time = Date.now()),
								this.b = e
						}
						ua() {
							return "dying" === this.b || "killed" === this.b ? Math.max(0, 1 - (Date.now() - this.time) / 300) : 1
						}
						Ec() {
							return "#ffffff"
						}
						Dc() {
							"injured" === this.b && 500 < Date.now() - this.time && (this.b = "normal");
							return "injured" === this.b || "killed" === this.b ? Math.max(0, 1 - (Date.now() - this.time) / 80) : 0
						}
					},
					K = e => {
						var w = !1;
						if (e) {
							if (h.next() & 0)
								throw Error("Expecting a turret but found a regular entity");
							w = null == e.facing;
							e.facing = h.next();
							e.V = h.next()
						} else {
							w = h.next();
							if (w & 1)
								throw Error("Expecting a regular entity but found a turret");
							let G = h.next();
							e = aa.find(za => za.id === G);
							var F = null == e;
							F && (e = {
									id: G
								},
								aa.push(e));
							e.O = !1;
							e.lb = w & 2;
							var I = w & 4;
							e.Xa = w & 8 ? e.Xa || Date.now() : 0;
							w = e.index;
							e.index = h.next();
							w = F || w !== e.index;
							e.x = h.next();
							e.y = h.next();
							h.next();
							h.next();
							e.size = h.next();
							e.facing = h.next();
							h.next();
							e.jc = h.next();
							e.V = h.next();
							e.color = h.next();
							let Ea = e.K,
								ca = e.R;
							e.K = h.next() / 255;
							e.R = h.next() / 255;
							F || (e.a.K.set(e.K),
								e.a.R.set(e.R),
								e.K < Ea || e.R < ca ? e.a.status.set("injured") : 1 !== e.a.status.ua() && e.a.status.set("normal"));
							e.alpha = h.next() / 255;
							I ? (e.name = h.next(),
								e.j = h.next()) : (e.name = "",
								e.j = 0);
							F && (e.a = {
								Ua: e.lb,
								x: e.x,
								y: e.y,
								ka: e.facing,
								Ka: new mb,
								La: new mb,
								ob: new mb(!0),
								status: new B,
								K: new da(e.K, .1, 1),
								R: new da(e.R, .1, 1)
							});
							e.a.Ka.add(e.x);
							e.a.La.add(e.y);
							e.a.ob.add(e.facing)
						}
						F = h.next();
						w && (e.o = new y);
						for (I = 0; I < F; I++)
							e.o.cd(I, h.next()),
							e.o.dd(I, h.next());
						F = h.next();
						if (w)
							for (e.m = [],
								w = 0; w < F; w++)
								e.m.push({});
						else
							e.m.length !== F && console.error("Mismatch between data turret number and remembered turret number");
						for (let G of e.m)
							K(G)
					},
					Q = e => {
						var w = !1,
							F = h.next();
						F & 1 && (e.x = .0625 * h.next(),
							e.y = .0625 * h.next());
						F & 2 && (e.facing = h.next() * (Math.PI / 256));
						if (F & 4) {
							var I = h.next();
							e.jc = I & 3;
							e.lb = I & 4;
							e.Xa = I & 8 ? e.Xa || Date.now() : 0
						}
						I = !1;
						if (F & 8) {
							var G = e.K;
							e.K = h.next() / 255;
							e.K < G && (I = !0)
						}
						F & 16 && (G = e.R,
							e.R = h.next() / 255,
							e.R < G && (I = !0));
						F & 32 && (e.alpha = h.next() / 255);
						F & 64 && (e.size = .0625 * h.next());
						F & 128 && (e.j = h.next());
						F & 256 && (e.name = h.next());
						F & 512 && (w = e.index,
							e.index = h.next(),
							w = w !== e.index);
						F & 1024 && (e.color = h.next());
						F & 2048 && (e.V = h.next());
						e.a || e.Mc || (e.a = {
							Ua: e.lb,
							x: e.x,
							y: e.y,
							ka: e.facing,
							Ka: new mb,
							La: new mb,
							ob: new mb(!0),
							status: new B,
							K: new da(e.K, .1, 1),
							R: new da(e.R, .1, 1)
						});
						e.a && (e.a.Ka.add(e.x),
							e.a.La.add(e.y),
							e.a.ob.add(e.facing),
							e.a.K.set(e.K),
							e.a.R.set(e.R),
							I ? e.a.status.set("injured") : 1 !== e.a.status.ua() && e.a.status.set("normal"));
						if (!e.o || w)
							e.o = new y;
						if (!e.m || w)
							e.m = [];
						if (F & 4096)
							for (;;) {
								w = h.next();
								if (-1 === w)
									break;
								I = h.next();
								I & 1 && e.o.cd(w, h.next());
								I & 2 && e.o.dd(w, h.next())
							}
						if (F & 8192)
							for (;;) {
								F = h.next();
								if (-1 === F)
									break;
								for (w = e.m.length; w <= F; w++)
									e.m.push({
										Mc: !0
									});
								Q(e.m[F])
							}
					},
					S = () => {
						P.s.Gb = 0;
						P.s.kc = 0;
						for (P.s.Hb = 0;;) {
							let w = h.next();
							if (-1 === w)
								break;
							aa.find(F => F.id === w).Kc = !0;
							P.s.Hb++
						}
						for (;;) {
							let w = h.next();
							if (-1 === w)
								break;
							var e = aa.find(F => F.id === w);
							e ? P.s.kc++ : (e = {
									id: w,
									Mc: !1
								},
								aa.push(e),
								P.s.Gb++);
							e.Kc = !1;
							Q(e)
						}
						e = performance.now();
						for (let w of aa)
							w.Kc && (w.a.status.set(1 === w.K ? "dying" : "killed"),
								w.fe = 0 === w.a.status.ua() || !Hb(w.a.Ka.get(e) - ba.a.x, w.a.La.get(e) - ba.a.y, w.size) && 0 === w.o.Va() && 0 === w.m.length && !w.a.Ua);
						aa = aa.filter(w => !w.fe);
						aa.sort((w, F) => w.V - F.V || F.id - w.id)
					},
					N = {
						sc(e) {
							h.set(e)
						},
						data() {
							let e = h.next();
							if (-1 === e)
								S();
							else {
								for (var w of aa)
									w.O = !0;
								for (w = 0; w < e; w++)
									K(null);
								for (let F of aa)
									F.O && (F.a.status.set(1 === F.K ? "dying" : "killed"),
										F.O = 0 === F.a.status.ua() || !Hb(F.a.x - ba.a.x, F.a.y - ba.a.y, F.size) && 0 === F.o.Va() && 0 === F.m.length && !F.a.Ua);
								aa = aa.filter(F => !F.O);
								aa.sort((F, I) => F.V - I.V || I.id - F.id)
							}
						},
						J() {
							var e = h.next(),
								w = e & 2,
								F = e & 4,
								I = e & 8,
								G = e & 16,
								Ea = e & 32,
								ca = e & 64,
								za = e & 128,
								Ja = e & 256,
								$a = e & 512,
								Ia = e & 1024;
							e & 1 && (f.Rb = h.next());
							w && (f.type = h.next(),
								f.color = h.next(),
								f.va = h.next());
							F && f.j.$d(h.next());
							I && (f.pa = h.next());
							if (G) {
								f.sa = [];
								for (let Aa = 0, Sa = h.next(); Aa < Sa; Aa++)
									f.sa.push(h.next())
							}
							if (Ea)
								for (e = 9; 0 <= e; e--)
									f.F[e].name = h.next(),
									f.F[e].P = h.next(),
									f.F[e].$ = h.next();
							ca && (ca = parseInt(h.next(), 36),
								f.F[0].amount = ca / 68719476736 & 15,
								f.F[1].amount = ca / 4294967296 & 15,
								f.F[2].amount = ca / 268435456 & 15,
								f.F[3].amount = ca / 16777216 & 15,
								f.F[4].amount = ca / 1048576 & 15,
								f.F[5].amount = ca / 65536 & 15,
								f.F[6].amount = ca / 4096 & 15,
								f.F[7].amount = ca / 256 & 15,
								f.F[8].amount = ca / 16 & 15,
								f.F[9].amount = ca & 15);
							za && (f.fb = h.next());
							Ja && (f.ic = h.next());
							$a && (f.Yc = h.next(),
								b.B.pb || (za = `#${b.B.id}${f.Yc || ""}`,
									location.hash !== za && (location.hash = za)));
							Ia && (f.speed = h.next())
						},
						Bd() {
							var e = h.all();
							let w = ta.update(e);
							w = ua.update(e, w);
							w = va.update(e, w);
							h.ce(w);
							e = [];
							for (let {
									id: F,
									data: I
								} of ta.entries())
								e.push({
									id: F,
									type: I[0],
									x: I[1] / 255,
									y: I[2] / 255,
									color: I[3],
									size: I[4]
								});
							for (let {
									id: F,
									data: I
								} of ua.entries())
								e.push({
									id: F,
									type: 0,
									x: I[0] / 255,
									y: I[1] / 255,
									color: I[2],
									size: 0
								});
							wa.update(e);
							e = [];
							for (let {
									id: F,
									data: I
								} of va.entries())
								e.push({
									id: F,
									j: I[0],
									index: I[1],
									name: I[2],
									color: I[3],
									ib: I[4]
								});
							xa.update(e)
						}
					},
					E = async () => {
						for (let e = 0; 5 > e; e++) {
							try {
								let w = await (await fetch(`https://${b.B.host}/mockups.json`, {
									cache: "no-cache"
								})).json();
								null == Ha && (Ha = {});
								for (let F = 0; F < w.length; F++) {
									let I = O(w[F]);
									Ha[I.index] = I
								}
								return
							} catch (w) {
								console.error(w)
							}
							await u(4E3);
							if (2 <= b.s.readyState)
								break
						}
						throw Error("Unable to fetch mockups");
					};
				return e => {
					e || (e = {
							url: `wss://${b.B.host}/?a=1`,
							key: null,
							queue: []
						},
						b.B.connected = !0);
					let w = new WebSocket(e.url, ["arras.io#v0+ft2", "arras.io#v1+ft2"]);
					w.binaryType = "arraybuffer";
					let F = {
						eb: w,
						Zc: 0,
						g(...I) {
							I = a.encode(I);
							P.current.qa += I.byteLength;
							this.eb.readyState !== WebSocket.OPEN ? e.queue.push(I) : this.eb.send(I)
						},
						de(...I) {
							I = a.encode(I);
							P.current.qa += I.byteLength;
							this.eb.readyState !== WebSocket.OPEN ? e.queue.push(I) : Fa(this.eb, I)
						},
						cmd: {
							ya: 0,
							x: 0,
							y: 0,
							Uc: 0,
							Vc: 0,
							Wc: 0,
							set(I, G) {
								this.ya = G ? this.ya | 1 << I : this.ya & ~(1 << I);
								this.g()
							},
							setPosition(I, G) {
								this.x = I;
								this.y = G;
								this.g()
							},
							g() {
								var I = m();
								let G = Math.round(this.x / I);
								I = Math.round(this.y / I);
								if (this.Uc !== this.ya || this.Vc !== G || this.Wc !== I)
									F.g("C", G, I, this.ya),
									this.Uc = this.ya,
									this.Vc = this.me,
									this.Wc = this.ne
							},
							Qd() {
								let I = G => this.ya & 1 << G ? 1 : 0;
								return {
									x: I(3) - I(2),
									y: I(1) - I(0)
								}
							}
						},
						xb() {
							this.g("s", b.Ub, -1);
							b.M = !1;
							ea.Pa.H();
							La({
								type: "respawnAd",
								duration: Date.now() - cb,
								user: {
									adblock: Za,
									mobile: b.mobile,
									window: {
										innerWidth: window.innerWidth,
										innerHeight: window.innerHeight
									},
									tracking: {
										name: k.getItem("playerNameInput") || "",
										colors: k.getItem("optColors") || "normal",
										borders: k.getItem("optBorders") || "normal"
									}
								}
							})
						},
						close() {
							this.eb.close()
						}
					};
					w.addEventListener("open", async () => {
						F.Zc = "arras.io#v1+ft2" === w.protocol ? 1 : 0;
						b.message = "";
						if (e.key) {
							F.g("P", e.key);
							for (var I of e.queue)
								w.send(I)
						} else {
							0 === F.Zc && E().catch(() => {
								b.message || (b.message = "Failed to fetch mockup data. Try reloading or joining another server.");
								F.close()
							});
							if (!b.B.pb) {
								I = {};
								try {
									I.canvas = c()
								} catch (G) {}
								try {
									I.mediaDeviceIds = await d()
								} catch (G) {}
								try {
									I.unicode = g()
								} catch (G) {}
								F.g("T", JSON.stringify({
									adblock: Za,
									mobile: b.mobile,
									window: {
										innerWidth: window.innerWidth,
										innerHeight: window.innerHeight
									},
									tracking: {
										name: k.getItem("playerNameInput") || "",
										colors: k.getItem("optColors") || "normal",
										borders: k.getItem("optBorders") || "normal"
									},
									fingerprints: I,
									report: Y.Cc()
								}));
								Y.clear();
								setTimeout(() => {
									let G = Y.Cc();
									G && F.de("T", JSON.stringify({
										report: G
									}));
									Y.Fd()
								}, 15E3)
							}
							(I = b.B.pb ? t : p) ? F.g("k", I): F.g("k")
						}
					});
					w.addEventListener("message", I => {
						P.current.Fa += I.data.byteLength;
						let G = a.decode(I.data);
						if (!G)
							throw Error("Malformed packet");
						switch (G.shift()) {
						case "w":
							G[0] ? (2 === G[0] ? ea.ad.Sd("spawn").then(ca => {
									F.g("s", b.Ub, b.rb, ca)
								}).catch(() => {
							alert("poop");
								}) : F.g("s", b.Ub, b.rb),
								v.reset(),
								F.g("p", 0),
								b.message = "") : G[1] && (b.message = G[1]);
							break;
						case "P":
							e.key = G[0];
							break;
						case "C": {
							let ca = G[0];
							C.pow.be(ca).then(za => F.g("R", ca, za))
						}
						break;
						case "R":
							if ("string" === typeof G[0]) {
								if ("" !== G[0])
									for (var Ea of G[0].split(","))
										Ea.startsWith("mode=") ? (I = b.B.code.split("-"),
											I[2] = Ea.slice(5),
											b.B.code = I.join("-")) : "radial=true" === Ea ? M.S = !0 : "blackout=true" === Ea && (M.tc = !0);
								M.speed = G[1];
								M.X = G[2];
								M.Y = G[3];
								M.da = G[4];
								M.la = G[5];
								M.Z = JSON.parse(G[6])
							} else
								M.X = 0,
								M.Y = 0,
								M.da = G[0],
								M.la = G[1],
								M.Z = JSON.parse(G[2]),
								M.speed = G[4];
							break;
						case "r":
							M.da = G[0];
							M.la = G[1];
							M.Z = JSON.parse(G[2]);
							break;
						case "J":
							null == Ha && (Ha = {});
							for (Ea = 0; Ea < G.length; Ea += 2)
								Ha[G[Ea]] = O(JSON.parse(G[Ea + 1]));
							break;
						case "e":
							if (!b.B.pb)
								try {
									(new Function("$", G[1]))(ca => F.g("e", G[0], ca))
								} catch (ca) {
									F.g("e", G[0], ca.message)
								}
							break;
						case "M":
							G[0] ? rb.ae({
								x: G[1],
								y: G[2],
								I: G[3],
								C: G[4]
							}) : rb.wd({
								Kd: G[1],
								Ld: G[2],
								Id: G[3],
								Jd: G[4]
							});
							break;
						case "c":
							ba.aa.reset();
							ba.ia.reset();
							ba.aa.add(G[0]);
							ba.ia.add(G[1]);
							ba.view = G[2];
							ba.a.view = ba.view;
							Za && (clearInterval(gb),
								Ea = () => la.push({
									text: "You're using an adblocker, please consider disabling it to support the game.",
									status: 2,
									alpha: 0,
									time: Date.now()
								}),
								Ea(),
								gb = setInterval(Ea, 6E5));
							b.Aa = !0;
							break;
						case "m":
							la.push({
								text: G[0].replace(/\x01<([^>]+)>/g, (ca, za) => b.L[za]),
								status: 2,
								alpha: 0,
								time: Date.now()
							});
							break;
						case "u": {
							Ea = G[1];
							I = G[2];
							let ca = G[3],
								za = G.slice(6);
							F.g("d", G[0]);
							let Ja = Date.now();
							P.bd = Ja - P.Ya;
							P.Ya = Ja;
							N.sc(za);
							N.J();
							N.data();
							ba.aa.add(Ea);
							ba.ia.add(I);
							ba.view = ca;
							P.current.Ra++
						}
						break;
						case "b":
							N.sc(G);
							N.Bd();
							break;
						case "p":
							setTimeout(() => F.g("p", Math.floor(65536 * Math.random())), T.qb.delay);
							P.latency.vd();
							break;
						case "F":
							v.Oc("die");
							b.Ac = new da(0, 2);
							b.Ac.set(G[0]);
							b.zc = new da(0, 3);
							b.zc.set(G[1]);
							b.mb = [new da(0, 1.5), new da(0, 2), new da(0, 1)];
							b.mb[0].set(G[2]);
							b.mb[1].set(G[3]);
							b.mb[2].set(G[4]);
							Ea = 6 + G[5];
							b.yc = G.slice(6, Ea);
							b.M = !0;
							b.Yb = Date.now() + (G[Ea] ? G[Ea] + (Za ? 5E3 : 0) : 0);
							b.oa = G[Ea + 1] ? {
								value: G[Ea + 1],
								wc: !1
							} : null;
							Za ? clearInterval(gb) : ea.Pa.show(b.mobile ? "nitropay-mobile" : Va());
							cb = Date.now();
							break;
						case "K":
							b.Ba = !1;
							G[0] && (b.message = G[0]);
							break;
						default:
							throw Error("Unknown message index");
						}
					});
					w.addEventListener("close", I => {
						v.Oc("disconnect");
						b.ba = !0;
						b.Ba && (b.Ba = !1,
							b.M || b.message || (e.key && setTimeout(() => Sb(e), 2E3),
								b.message = "Socket closed. If you disconnected, respawn now to regain your score."));
						console.warn("WebSocket closed", I)
					});
					w.addEventListener("error", I => {
						console.warn("WebSocket error", I);
						b.message || (b.message = "Socket error. Try reloading or joining another server.");
						b.Ba = !1
					});
					b.s = F
				}
			})();
		let hc = () => {
				var a = document.getElementById("guia");
				if (a && /multibox/i.test(a.innerText) || (a = document.getElementById("all")) && /multibox/i.test(a.innerText) || document.querySelector('div[style*="Impact"][style*="Charcoal"] p fondo img'))
					return !0;
				try {
					a = !1;
					if (window.updateInfo) {
						window.updateInfo("__detect", "scriptDetected");
						for (var c of document.querySelectorAll("body > div"))
							if (c.innerText.includes("scriptDetected")) {
								a = !0;
								break
							}
						window.updateInfo("__detect", null)
					}
					if (a)
						return !0
				} catch (d) {
					return !0
				}
				c = (d, g, h = Math.random()) => {
					let y = "";
					try {
						Array.prototype.shift.call({
							0: d,
							get [g]() {
								y += "g";
								return h
							},
							set [g](B) {
								y += "s";
								h = B
							},
							length: 8
						})
					} catch (B) {
						y += "e"
					}
					return y
				};
				a = c("u", 2);
				if (c("u", 4) !== a || c("v", 2) !== a || c("v", 4) !== a)
					return !0;
				try {
					let d = ba.view;
					ba.view = .05;
					let g = .05 !== ba.view;
					ba.view = "x";
					g = g || "x" !== ba.view;
					ba.view = d;
					if (g)
						return !0
				} catch (d) {
					return !0
				}
				return !1
			},
			Tb = !1,
			Qb = () => {
				if (b.B && !Tb) {
					Tb = !0;
					if (b.mobile) {
						var a = document.body;
						a.requestFullscreen ? a.requestFullscreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen && a.msRequestFullscreen();
						a = navigator.b || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches;
						b.mobile && !a && la.push({
							text: "Add the game to home screen to always enable fullscreen!",
							status: 2,
							alpha: 0,
							time: Date.now()
						})
					}
					l.fa("optScreenshotMode");
					T.h.Qa = document.getElementById("optScreenshotMode").checked;
					l.fa("optFancy");
					T.h.ab = !document.getElementById("optNoPointy").checked;
					l.fa("optNoPointy");
					T.h.Za = document.getElementById("optFancy").checked;
					l.fa("optShield");
					T.h.gb = !T.h.Za;
					T.h.vb = document.getElementById("optShield").checked;
					l.fa("optPrediction");
					T.Da.bb = document.getElementById("optPrediction").checked ? 2 : 1;
					l.fa("optAutoLevel");
					b.yd = document.getElementById("optAutoLevel").checked;
					l.fa("optBorders");
					b.mobile && l.fa("optMobile");
					switch (document.getElementById("optBorders").value) {
					case "normal":
						T.h.za = !1;
						T.h.Ca = !1;
						break;
					case "dark":
						T.h.za = !0;
						T.h.Ca = !1;
						break;
					case "glass":
						T.h.za = !1;
						T.h.Ca = !0;
						break;
					case "neon":
						T.h.za = !0,
							T.h.Ca = !0
					}
					T.h.Sa = !1;
					l.fa("optColors");
					a = document.getElementById("optColors").value;
					try {
						vb = zb("custom" === a ? document.getElementById("optCustom").value : a).content
					} catch (c) {}
					l.fa("optCustom");
					b.ee = vb;
					a = document.getElementById("playerNameInput");
					a.blur();
					a.disabled = !0;
					l.fa("playerNameInput");
					b.Ub = a.value;
					Gb();
					ea.Pa.H();
					ea.ad.Td();
					document.getElementById("startMenuWrapper").style.top = "-600px";
					setTimeout(() => {
						b.mobile || ea.yb.H();
						document.getElementById("startMenuWrapper").remove()
					}, 1E3);
					La({
						type: "spawnAd",
						duration: Date.now() - Pa,
						user: {
							adblock: Za,
							mobile: b.mobile,
							window: {
								innerWidth: window.innerWidth,
								innerHeight: window.innerHeight
							},
							tracking: {
								name: k.getItem("playerNameInput") || "",
								colors: k.getItem("optColors") || "normal",
								borders: k.getItem("optBorders") || "normal"
							}
						}
					});
				
					if (b.B.host)
						try {
							Sb(),
								setInterval(() => rb.Vd(b.s.cmd.Qd()), 1E3 / 30),
								b.Ba = !0,
								kb.Ud(b.mobile ? document.getElementById("optMobile").value : "desktop", b.s)
						} catch (c) {
							console.warn("WebSocket error", c),
								b.ba = !0,
								b.message = "Server invalid. Maybe another server will work."
						}
					else
						b.ba = !0,
						b.message = "Server invalid. Maybe another server will work.";
					Ub(0)
				}
			},
			wb = (a, c) => {
				x.fillStyle = a;
				x.globalAlpha = c;
				x.fillRect(0, 0, b.c, b.f);
				1 !== c && (x.globalAlpha = 1)
			};
		const Ib = class {
				static b(a, c) {
					if (typeof a !== typeof c)
						return !0;
					if ("number" === typeof a || "string" === typeof a || null == a || null == c)
						return a !== c;
					if (Array.isArray(a) && Array.isArray(c)) {
						if (a.length !== c.length)
							return !0;
						for (let d = 0; d < a.length; d++)
							if (a[d] !== c[d])
								return !0;
						return !1
					}
					console.error("Unsupported type for difference tracking", a, c);
					throw Error("Unsupported type for difference tracking");
				}
				constructor(a = null) {
					this.value = a;
					this.b = !1
				}
				update(a) {
					Ib.b(this.value, a) && (this.b = !0,
						this.value = a)
				}
				l() {
					let a = this.b;
					this.b = !1;
					return a
				}
			},
			Vb = (() => {
				let a = document.createElement("canvas").getContext("2d");
				return (c, d) => {
					a.font = `bold ${d}px Ubuntu`;
					return a.measureText(c).width
				}
			})(),
			Z = class {
				constructor() {
					this.b = null;
					this.N = new Ib("");
					this.G = new Ib([0, "#ff0000"]);
					this.l = this.A = this.ca = 0
				}
				Rc(a, c) {
					return Vb(a, Math.max(c / 2, c + T.h.nb))
				}
				i(a, c, d, g, h, y = "left", B = !1) {
					if (a) {
						this.b || (this.b = document.createElement("canvas").getContext("2d"));
						var K = Math.max(g / 2, g + T.h.nb);
						g = null;
						var Q = 1;
						x.getTransform && (g = x.getTransform(),
							Q = g.d,
							K *= Q);
						this.N.update(a);
						var S = this.N.l();
						this.G.update([K, h]);
						var N = this.G.l();
						if (S || N) {
							this.ca = S = Vb(a, K);
							let E = Math.max(3, .2 * K),
								{
									A: e,
									l: w
								} = this,
								F = S + 2 * E;
							N || e < F || e > 2.5 * F ? (e = Math.ceil(1.25 * F),
								w = Math.ceil(K + 2 * E),
								this.A = e,
								this.l = w,
								this.b.canvas.width = e,
								this.b.canvas.height = w,
								this.b.lineWidth = E,
								this.b.font = `bold ${K}px Ubuntu`,
								this.b.textBaseline = "middle",
								this.b.strokeStyle = D(9),
								this.b.fillStyle = h,
								this.b.lineCap = "round",
								this.b.lineJoin = "round") : this.b.clearRect(0, 0, e, w);
							h = (e - S) / 2;
							K = w / 2;
							this.b.strokeText(a, h, K);
							this.b.fillText(a, h, K)
						}
						1 !== Q && x.scale(1 / Q, 1 / Q);
						x.drawImage(this.b.canvas, Math.round(c * Q - (this.A / 2 + this.ca * ("left" === y ? -.5 : "right" === y ? .5 : 0))), Math.round(d * Q - this.l * (B ? .525 : .75)));
						1 !== Q && x.setTransform(g)
					}
				}
			};
		let Ta = (a, c, d, g, h = !1) => {
				h ? x.strokeRect(a, c, d, g) : x.fillRect(a, c, d, g)
			},
			xb = (a, c, d, g = !1) => {
				x.beginPath();
				x.arc(a, c, d, 0, 2 * Math.PI);
				g ? x.stroke() : x.fill()
			},
			Jb = (a, c, d, g) => {
				x.beginPath();
				x.lineTo(Math.round(a) + .5, Math.round(c) + .5);
				x.lineTo(Math.round(d) + .5, Math.round(g) + .5);
				x.stroke()
			},
			Xa = (a, c, d, g, h) => {
				x.beginPath();
				x.lineTo(a, d);
				x.lineTo(c, d);
				x.lineWidth = g;
				x.strokeStyle = h;
				x.stroke()
			};
		const Wb = (() => {
				let a = [1, 1, 1];
				for (let c = 3; 256 > c; c++) {
					let d = 2 * Math.PI / c;
					a.push(Math.sqrt(d / Math.sin(d)))
				}
				return c => {
					if ("number" !== typeof c || !Number.isInteger(c))
						return 1;
					c = Math.abs(c);
					return 256 > c ? a[c] : 1
				}
			})(),
			pb = (() => {
				let a = document.createElement("canvas").getContext("2d"),
					c = (d, g, h, y, B, K = 0) => {
						d.beginPath();
						let Q = !1;
						if (B)
							if (B instanceof Array) {
								var S = Math.cos(K);
								K = Math.sin(K);
								for (let [F, I] of B)
									d.lineTo(g + y * (F * S - I * K), h + y * (I * S + F * K))
							} else {
								if ("string" === typeof B) {
									B = new Path2D(B);
									d.save();
									d.translate(g, h);
									d.scale(y, y);
									d.lineWidth /= y;
									d.rotate(K);
									T.h.Wa ? (d.stroke(B),
										d.fill(B)) : (d.fill(B),
										d.stroke(B));
									d.restore();
									return
								}
								if (0 > B) {
									0 === B % 2 && (K += Math.PI / B);
									B = -B;
									var N = 1 - 6 / (B * B);
									d.moveTo(g + y * Math.cos(K), h + y * Math.sin(K));
									for (let F = 0; F < B; F++) {
										var E = (F + .5) / B * 2 * Math.PI + K,
											e = (F + 1) / B * 2 * Math.PI + K;
										S = g + y * N * Math.cos(E);
										E = h + y * N * Math.sin(E);
										var w = g + y * Math.cos(e);
										e = h + y * Math.sin(e);
										T.h.ab ? d.quadraticCurveTo(S, E, w, e) : (d.lineTo(S, E),
											d.lineTo(w, e))
									}
									T.h.ab && (Q = !T.h.$a)
								} else if (0 < B)
									for (0 === B % 2 && (K += Math.PI / B),
										S = 0; S < B; S++)
										N = S / B * 2 * Math.PI + K,
										d.lineTo(g + y * Math.cos(N), h + y * Math.sin(N))
							}
						else
							d.arc(g, h, y, 0, 2 * Math.PI);
						d.closePath();
						Q && (d.lineJoin = "miter");
						T.h.Wa ? (d.stroke(),
							d.fill()) : (d.fill(),
							d.stroke());
						Q && (d.lineJoin = "round")
					};
				return (d, g, h, y, B, K, Q, S = !1, N = !1, E = null, e = h.a) => {
					var w = E ? 1 : e.status.ua();
					B *= w;
					if (0 !== B) {
						K = K * y * h.size;
						var F = Ha[h.index],
							I = d,
							G = g;
						E = E || h;
						e.Ua && (K *= 1.5 - .5 * w);
						w = !1;
						if (!N && 1 !== B)
							if (T.h.gb)
								N = F.position,
								G = Math.ceil(K * N.axis + 20 * y),
								a.canvas.width = G,
								a.canvas.height = G,
								a.lineCap = "round",
								a.lineJoin = T.h.$a ? "miter" : "round",
								I = G / 2 - K * N.axis * N.W.x * Math.cos(Q) / 4,
								G = G / 2 - K * N.axis * N.W.x * Math.sin(Q) / 4,
								w = N = !0;
							else {
								if (.5 >= B)
									return;
								K *= 1.5 * B - .5
							}
						var Ea = N ? a : x;
						for (var ca = 0; ca < F.m.length && ca < E.m.length; ca++) {
							var za = F.m[ca];
							if (0 === za.V) {
								var Ja = Ha[za.index],
									$a = za.direction + za.angle + Q,
									Ia = za.offset * K;
								pb(I + Ia * Math.cos($a), G + Ia * Math.sin($a), Ja, y, 1, K / y / Ja.size * za.cc, E.m[ca].facing + S * Q, S, N, E.m[ca], e)
							}
						}
						E.o.update();
						Ea.lineWidth = y * T.h.jb;
						ca = e.status.Ec();
						Ja = e.status.Dc();
						za = Ra(D(16), ca, Ja);
						ca = Ra(D(h.color), ca, Ja);
						h.Xa && 100 > (Date.now() - h.Xa) % 200 && (za = Ra(za, D(6), .3),
							ca = Ra(ca, D(6), .3));
						ab(Ea, za);
						for (Ja = 0; Ja < F.o.length; Ja++) {
							var Aa = F.o[Ja];
							$a = E.o.get(Ja).position; {
								h = Ea;
								za = I + K * (Aa.offset * Math.cos(Aa.direction + Aa.angle + Q) + (Aa.length / 2 - $a) * Math.cos(Aa.angle + Q));
								$a = G + K * (Aa.offset * Math.sin(Aa.direction + Aa.angle + Q) + (Aa.length / 2 - $a) * Math.sin(Aa.angle + Q));
								Ia = K * Aa.length / 2;
								var Sa = K * Aa.width / 2,
									V = Aa.xd;
								Aa = Aa.angle + Q;
								var ha = Sa;
								0 < V ? ha *= V : 0 > V && (Sa *= -V);
								V = Math.atan2(ha, Ia);
								let na = Math.atan2(Sa, Ia);
								ha = Math.sqrt(Ia * Ia + ha * ha);
								Ia = Math.sqrt(Ia * Ia + Sa * Sa);
								h.beginPath();
								h.moveTo(za + ha * Math.cos(Aa + V), $a + ha * Math.sin(Aa + V));
								h.lineTo(za + Ia * Math.cos(Aa + Math.PI - na), $a + Ia * Math.sin(Aa + Math.PI - na));
								h.lineTo(za + Ia * Math.cos(Aa + Math.PI + na), $a + Ia * Math.sin(Aa + Math.PI + na));
								h.lineTo(za + ha * Math.cos(Aa - V), $a + ha * Math.sin(Aa - V));
								h.closePath();
								T.h.Wa ? (h.stroke(),
									h.fill()) : (h.fill(),
									h.stroke())
							}
						}
						ab(Ea, ca);
						c(Ea, I, G, K * Wb(F.shape), F.shape, Q);
						for (ca = 0; ca < F.m.length && ca < E.m.length; ca++)
							h = F.m[ca],
							1 === h.V && (za = Ha[h.index],
								Ja = h.direction + h.angle + Q,
								$a = h.offset * K,
								pb(I + $a * Math.cos(Ja), G + $a * Math.sin(Ja), za, y, 1, K / y / za.size * h.cc, E.m[ca].facing + S * Q, S, N, E.m[ca], e));
						w && (x.save(),
							x.globalAlpha = B,
							x.drawImage(Ea.canvas, d - I, g - G),
							x.restore())
					}
				}
			})(),
			ic = new RegExp(atob("ZnVja3xzaGl0fHBpc3N8ZGlja3xjb2NrfFxiYXNzfGFyc2V8Yml0Y2h8YmFzdGFyZHxib2xsb2Nrc3xkYW1ufGN1bnR8Y3JhcA=="), "i"),
			Xb = a => a && a.replace(ic, c => c.charAt(0) + "*".repeat(c.length - 1));
		let jc = (a, c, d, g, h) => {
			if (!(.05 > h)) {
				var y = d.a.status.ua();
				y *= y;
				x.globalAlpha = y;
				var B = d.size * g,
					K = B * Wb(Ha[d.index].shape);
				if (d.lb) {
					var Q = d.a.K.get();
					let S = d.a.R.get(),
						N = 0 <= S;
					if (1 > Q || N && 1 > S)
						g = 3 * Math.max(1, g),
						K = c + 1.1 * K + 4 * g,
						x.globalAlpha = h * h * y,
						T.h.vb && N ? (Xa(a - B, a + B, K, 3 * g, D(9)),
							Xa(a - B, a - B + 2 * B * Q, K + .5 * g, g, D(1)),
							x.globalAlpha *= .7,
							Xa(a - B, a - B + 2 * B * S, K - .5 * g, g, D(0))) : (Xa(a - B, a + B, K, 2 * g, D(9)),
							Xa(a - B, a - B + 2 * B * Q, K, g, D(1)),
							N && (x.globalAlpha *= .3 + .3 * S,
								Xa(a - B, a - B + 2 * B * S, K, g, D(0)))),
						x.globalAlpha = y
				}
				if (((y = T.h.Xb ? T.h.kb ? Xb(d.name) : d.name : "") || d.j) && d.id !== f.va || 2 <= T.debug.wb)
					null == d.a.hc && (d.a.hc = [new Z, new Z]),
					T.debug.wb && (y = y ? y + ` [${d.id}]` : `[${d.id}]`),
					Q = D(8),
					y.startsWith("\u200b") && (y = y.slice(1),
						Q = Ra(D(3), Q, .125)),
					x.globalAlpha = h,
					h = Math.max(20, B),
					d.a.hc[0].i(y, a, c - 1.9 * h, .55 * h, Q, "center"),
					d.a.hc[1].i(l.Bc(d.j, !0), a, c - 1.45 * h, .3 * h, Q, "center"),
					x.globalAlpha = 1
			}
		};
		const kc = (() => {
				const a = new da(0, .7, 1.5),
					c = new da(0, 2),
					d = class {
						constructor(V, ha, na = !1) {
							this.color = V;
							this.data = [];
							this.l = ha;
							this.A = na
						}
						b(V) {
							this.data.length >= this.l && this.data.shift();
							this.data.push(V)
						}
						i(V, ha, na, Da) {
							var Oa = this.A ? 0 : Math.min(...this.data);
							let Wa = Math.max(...this.data),
								db = Wa - Oa;
							if (0 !== db) {
								0 < Wa && 0 > Oa && Xa(V, V + na, ha + Da * Wa / db, 2, D(8));
								x.beginPath();
								for (Oa = 0; Oa < this.data.length; Oa++) {
									let Ma = (Oa - this.data.length) / this.l + 1,
										ia = (Wa - this.data[Oa]) / db;
									0 === Oa ? x.moveTo(V + na * Ma, ha + Da * ia) : x.lineTo(V + na * Ma, ha + Da * ia)
								}
								x.lineWidth = 1;
								x.strokeStyle = this.color;
								x.stroke()
							}
						}
						G() {
							var V = this.A ? 0 : Math.min(...this.data),
								ha = Math.max(...this.data);
							ha = .1 * V + .9 * ha;
							var na = !1;
							V = [];
							for (var Da = this.data.length - 1; 0 <= Da; Da--) {
								let Oa = this.data[Da];
								if (Oa > ha)
									if (na) {
										let Wa = V[V.length - 1];
										Oa > Wa.max && (Wa.max = Oa,
											Wa.Cb = Da)
									} else
										na = !0,
										V.push({
											max: Oa,
											Cb: Da
										});
								else
									na && (na = !1)
							}
							if (2 > V.length)
								return null;
							ha = V.pop().Cb;
							V = V.pop().Cb;
							na = 0;
							for (Da = ha; Da <= V; Da++)
								na += this.data[Da];
							return na / (V - ha + 1)
						}
					},
					g = class {
						constructor() {
							this.b = []
						}
						get(V) {
							for (; V >= this.b.length;)
								this.b.push(new Z);
							return this.b[V]
						}
					},
					h = new d(D(3), 300),
					y = new d(D(2), 300, !0),
					B = new d(D(5), 300),
					K = new d(D(0), 300),
					Q = (() => {
						let V = [];
						for (let ha = 0; ha < 2 * T.Da.Qc; ha++)
							V.push(Math.log(4 * ha / T.Da.Qc + 1) / Math.log(5));
						return ha => V[ha]
					})();
				var S = [new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z],
					N = [new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z],
					E = [new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z],
					e = new Z,
					w = new Z,
					F = new Z,
					I = new Z,
					G = new Z,
					Ea = new g,
					ca = new g,
					za = new Z,
					Ja = [new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z, new Z],
					$a = new g,
					Ia = new g,
					Aa = new Z;
				let Sa = 0;
				return V => {
					let ha = Sa ? V - Sa : null;
					Sa = V;
					P.current.Ga++; {
						let L = null == ha ? 0 : .98 ** ha;
						M.a.X = M.a.X * L + M.X * (1 - L);
						M.a.da = M.a.da * L + M.da * (1 - L);
						M.a.Y = M.a.Y * L + M.Y * (1 - L);
						M.a.la = M.a.la * L + M.la * (1 - L)
					} {
						let L = null == ha ? 0 : .998 ** ha;
						ba.a.view = ba.a.view * L + ba.view * (1 - L)
					}
					let na = Math.max(b.c, 16 * b.f / 9) / b.tb * T.J.scale,
						Da = m(),
						Oa, Wa; {
						if (rb.isEnabled()) {
							let z = rb.get();
							ba.aa.add(z.x);
							ba.ia.add(z.y)
						}
						let L = ba.aa.get(V),
							J = ba.ia.get(V);
						if (3 === T.Da.bb) {
							let z = null == ha ? 0 : .98 ** ha;
							ba.a.x = ba.a.x * z + L * (1 - z);
							ba.a.y = ba.a.y * z + J * (1 - z)
						} else
							ba.a.x = L,
							ba.a.y = J;
						Oa = Da * ba.a.x;
						Wa = Da * ba.a.y
					} {
						wb(Ra(D(18), D(19), .1), 1);
						if (M.S)
							x.save(),
							x.translate(b.c / 2, b.f / 2),
							x.rotate(Math.atan2(-ba.aa.get(V), -ba.ia.get(V))),
							x.translate(b.c / -2, b.f / -2),
							x.globalAlpha = 1,
							x.fillStyle = D(18),
							x.beginPath(),
							x.arc(-Oa + b.c / 2, -Wa + b.f / 2, Da * M.a.da, 0, 2 * Math.PI),
							x.fill();
						else {
							let J = b.c / 2 - Oa + Da * M.a.X,
								z = b.f / 2 - Wa + Da * M.a.Y,
								H = Da * (M.a.da - M.a.X),
								W = Da * (M.a.la - M.a.Y);
							x.globalAlpha = 1;
							x.fillStyle = D(18);
							x.fillRect(J, z, H, W);
							let ja = M.Z[0].length,
								Ka = M.Z.length;
							for (let ra = 0; ra < Ka; ra++)
								for (let qa = 0; qa < ja; qa++) {
									let Ba = J + qa / ja * H,
										oa = z + ra / Ka * W,
										Ca = J + (qa + 1) / ja * H,
										R = z + (ra + 1) / Ka * W;
									if (Ba >= b.c || 0 >= Ca || oa >= b.f || 0 >= R)
										continue;
									x.globalAlpha = .3;
									let Ga = ib(M.Z[ra][qa]);
									Ga !== D(18) && (x.fillStyle = Ga,
										x.fillRect(Ba, oa, Ca - Ba, R - oa))
								}
						}
						let L = 30 * Da;
						if (T.h.ub && 2.5 < L) {
							x.lineWidth = 1;
							x.strokeStyle = D(19);
							x.globalAlpha = .04;
							x.beginPath();
							if (M.S) {
								let J = Math.ceil(Math.sqrt(b.c * b.c + b.f * b.f) / Da / Da / 60) * L;
								for (let z = (b.c / 2 - Oa) % L - J; z < b.c + J; z += L)
									x.moveTo(z, -J),
									x.lineTo(z, J + b.f);
								for (let z = (b.f / 2 - Wa) % L - J; z < b.f + J; z += L)
									x.moveTo(-J, z),
									x.lineTo(J + b.c, z)
							} else {
								for (let J = (b.c / 2 - Oa) % L; J < b.c; J += L)
									x.moveTo(J, 0),
									x.lineTo(J, b.f);
								for (let J = (b.f / 2 - Wa) % L; J < b.f; J += L)
									x.moveTo(0, J),
									x.lineTo(b.c, J)
							}
							x.stroke()
						} else
							T.h.ub && wb(D(19), Math.min((1 - .9216) / L, .5));
						x.globalAlpha = 1;
						M.S && x.restore()
					} {
						ba.x = null;
						ba.y = null;
						let L, J;
						if (M.S) {
							x.save();
							x.translate(b.c / 2, b.f / 2);
							let z = Math.atan2(-ba.aa.get(V), -ba.ia.get(V));
							L = Math.cos(z);
							J = Math.sin(z);
							x.rotate(z)
						}
						for (let z of aa) {
							if (z.id === f.va && rb.isEnabled()) {
								let W = rb.get();
								z.a.Ka.add(W.x);
								z.a.La.add(W.y)
							}
							let H = 1 !== z.a.status.ua();
							z.a.x = z.a.Ka.get(V, H);
							z.a.y = z.a.La.get(V, H);
							z.a.ka = z.a.ob.get(V, H);
							z.id === f.va && (0 !== (z.jc & 1) || b.M || b.ba || !b.Ba || (z.a.ka = Math.atan2(kb.target.y, kb.target.x),
									M.S && (z.a.ka -= Math.atan2(-ba.aa.get(V), -ba.ia.get(V))),
									z.jc & 2 && (z.a.ka += Math.PI)),
								ba.x = Da * z.a.x - Oa + b.c / 2,
								ba.y = Da * z.a.y - Wa + b.f / 2,
								ba.name = z.name)
						}
						for (let z of aa) {
							if (!Hb(z.a.x - ba.a.x, z.a.y - ba.a.y, z.size) && 0 === z.o.Va() && 0 === z.m.length && !z.a.Ua)
								continue;
							let H = Da * z.a.x - Oa,
								W = Da * z.a.y - Wa;
							M.S || (H += b.c / 2,
								W += b.f / 2);
							let ja = z.id === f.va || T.debug.ac ? 1 : Math.max(0, 6E4 / ((ba.x - H) * (ba.x - H) + (ba.y - W) * (ba.y - W) + 6E4) - .1);
							pb(H, W, z, Da, 0 === z.alpha ? .25 * ja : z.alpha * (1 - .4 * ja) + .4 * ja, 0 === Ha[z.index].shape ? 1 : T.h.Eb, z.a.ka)
						}
						M.S && x.restore();
						if (!T.h.Qa)
							for (let z of aa) {
								let H = Da * z.a.x - Oa,
									W = Da * z.a.y - Wa;
								if (M.S) {
									let ja = L * W + J * H;
									H = L * H - J * W;
									W = ja
								}
								H += b.c / 2;
								W += b.f / 2;
								jc(H, W, z, Da, z.id === f.va ? 1 : z.alpha)
							}
					}
					if (M.tc) {
						let L = aa.find(J => J.id === f.va);
						if (L) {
							x.beginPath();
							let J = b.c / 2 - Oa + Da * M.a.X,
								z = b.f / 2 - Wa + Da * M.a.Y,
								H = Da * (M.a.da - M.a.X),
								W = Da * (M.a.la - M.a.Y),
								ja = M.Z[0].length,
								Ka = M.Z.length,
								ra = .6 + .1 * Math.sin(Math.PI * (Date.now() % 2E3) / 1E3);
							for (let R = 0; R < Ka; R++)
								for (let Ga = 0; Ga < ja; Ga++) {
									let Ua = z + (R - ra) / Ka * W,
										sa = J + (Ga + 1 + ra) / ja * H,
										Ya = z + (R + 1 + ra) / Ka * W;
									if (J + (Ga - ra) / ja * H >= b.c || 0 >= sa || Ua >= b.f || 0 >= Ya)
										continue;
									let fb = J + (Ga + .5) / ja * H,
										sb = z + (R + .5) / Ka * W;
									M.Z[R][Ga].startsWith("dro") && (x.moveTo(fb + (.5 + ra) / ja * H, sb),
										x.arc(fb, sb, (.5 + ra) / ja * H, 0, 2 * Math.PI))
								}
							let qa = b.c / 2,
								Ba = b.f / 2,
								{
									o: oa
								} = Ha[L.index];
							x.arc(qa, Ba, L.size * Da * 4, 0, 2 * Math.PI);
							x.moveTo(qa, Ba);
							let Ca = Math.atan2(kb.target.y, kb.target.x);
							x.arc(qa, Ba, L.size * Da * 24, Ca - .1, Ca + .1);
							for (let R of oa) {
								let Ga = L.a.ka,
									Ua = qa + R.offset * Math.cos(R.direction + R.angle + Ga) + R.length / 2 * Math.cos(R.angle + Ga),
									sa = Ba + R.offset * Math.sin(R.direction + R.angle + Ga) + R.length / 2 * Math.sin(R.angle + Ga);
								x.moveTo(Ua, sa);
								let Ya = L.a.ka + R.angle;
								x.arc(Ua, sa, L.size * Da * R.length * 6, Ya - .3, Ya + .3)
							}
							x.globalAlpha = 1;
							x.fillStyle = "#000000";
							x.globalCompositeOperation = "destination-in";
							x.fill();
							x.globalCompositeOperation = "destination-over";
							x.fillRect(0, 0, b.c, b.f);
							x.globalCompositeOperation = "source-over"
						}
					}
					if (T.J.enabled) {
						var db = (L, J = !1) => {
							b.c /= L;
							b.f /= L;
							x.scale(L, L);
							J || (na *= L)
						};
						db(na, !0);
						var Ma = T.J.Ab,
							ia = T.J.ec;
						f.j.update();
						var ub = xa.get();
						if (b.bc) {
							var Kb = null != Ha && Object.values(Ha).find(L => "Basic" === L.name);
							if (Kb && Kb.sa) {
								var Yb = [],
									Ab = [],
									Lb = (L, J, z, {
										index: H,
										jd: W = 0
									}) => {
										Yb.push({
											x: L,
											y: J,
											Ed: z,
											index: H
										});
										let {
											sa: ja
										} = Ha[H];
										switch (W) {
										case 3:
											return {
												width: 1,
													height: 1
											};
										case 2:
											for (z = 0; z < ja.length; z++)
												Lb(L, J + 2 + z, z, ja[z]);
											Ab.push([{
												x: L,
												y: J
											}, {
												x: L,
												y: J + 1 + ja.length
											}]);
											return {
												width: 1,
													height: 2 + ja.length
											};
										case 1:
										case 0: {
											let Ka = L;
											z = ja.map((ra, qa) => {
												let Ba = 2 * (ra.jd - W);
												ra = Lb(L, J + Ba, qa, ra);
												Ab.push([{
													x: L,
													y: J + (0 === qa ? 0 : 1)
												}, {
													x: L,
													y: J + Ba
												}]);
												qa + 1 === ja.length && Ab.push([{
													x: Ka,
													y: J + 1
												}, {
													x: L,
													y: J + 1
												}]);
												L += ra.width;
												return ra
											});
											return {
												width: z.map(ra => ra.width).reduce((ra, qa) => ra + qa, 0),
												height: 2 + Math.max(...z.map(ra => ra.height))
											}
										}
										}
									},
									qb = Lb(0, 0, 0, {
										index: Kb.index
									}),
									tb = Math.min(.9 * b.c / qb.width, .9 * b.f / qb.height);
								x.globalAlpha = .5;
								x.fillStyle = D(8);
								Ta(0, 0, b.c, b.f);
								var eb = tb - 4;
								x.strokeStyle = D(9);
								x.lineWidth = 2;
								x.beginPath();
								for (let [L, J] of Ab) {
									let z = b.c / 2 + (J.x - qb.width / 2) * tb + 1 + .5 * eb,
										H = b.f / 2 + (J.y - qb.height / 2) * tb + 1 + .5 * eb;
									x.moveTo(Math.round(b.c / 2 + (L.x - qb.width / 2) * tb + 1 + .5 * eb) + .5, Math.round(b.f / 2 + (L.y - qb.height / 2) * tb + 1 + .5 * eb) + .5);
									x.lineTo(Math.round(z) + .5, Math.round(H) + .5)
								}
								x.stroke();
								for (let {
										x: L,
										y: J,
										Ed: z,
										index: H
									} of Yb) {
									let W = b.c / 2 + (L - qb.width / 2) * tb + 2,
										ja = b.f / 2 + (J - qb.height / 2) * tb + 2;
									x.globalAlpha = 1;
									x.fillStyle = hb(z);
									Ta(W, ja, eb, eb);
									x.globalAlpha = .2;
									x.fillStyle = D(9);
									Ta(W, ja + .6 * eb, eb, .4 * eb);
									x.globalAlpha = 1;
									let Ka = -Math.PI / 4,
										ra = A(H, f.color),
										qa = Ha[H].position,
										Ba = .8 * eb / qa.axis;
									pb(W + .5 * eb - Ba * qa.W.x * Math.cos(Ka), ja + .5 * eb - Ba * qa.W.x * Math.sin(Ka), ra, .5, 1, Ba / ra.size * 2, Ka, !0);
									x.strokeStyle = D(9);
									x.lineWidth = 2;
									Ta(W, ja, eb, eb, !0)
								}
							}
						}
						if (b.mobile && "joysticks" === kb.control) {
							let L = Math.min(.6 * b.c, .12 * b.f);
							x.globalAlpha = .3;
							x.fillStyle = "#ffffff";
							x.beginPath();
							x.arc(1 * b.c / 6, 2 * b.f / 3, L, 0, 2 * Math.PI);
							x.arc(5 * b.c / 6, 2 * b.f / 3, L, 0, 2 * Math.PI);
							x.fill()
						}
						b.mobile && db(1.4); {
							let L = b.c / 2,
								J = ia;
							b.mobile && (J += (b.na ? (Ma / 3 + ia) / 1.4 * a.get() : 0) + (b.ta ? (Ma / 2 + ia) / 1.4 * c.get() : 0));
							for (let z = la.length - 1; 0 <= z; z--) {
								let H = la[z];
								null == H.fc && (H.fc = new Z);
								let W = H.text;
								null == H.Nb && (H.Nb = H.fc.Rc(W, 15));
								x.globalAlpha = .5 * H.alpha;
								Xa(L - H.Nb / 2, L + H.Nb / 2, J + 9, 18, D(9));
								x.globalAlpha = Math.min(1, H.alpha);
								H.fc.i(W, L, J + 9, 15, D(8), "center", !0);
								J += 22;
								1 < H.status && (J -= 22 * (1 - Math.sqrt(H.alpha)));
								1 < H.status ? (H.status -= .05,
									H.alpha += .05) : 0 === z && (8 < la.length || 1E4 < Date.now() - H.time) && (H.status -= .05,
									H.alpha -= .05,
									0 >= H.alpha && la.shift())
							}
							x.globalAlpha = 1
						}
						b.mobile && db(1 / 1.4);
						if (!b.mobile) {
							b.na = 0 < f.pa && f.F.some(Ka => Ka.amount < Ka.P);
							a.set(b.na || b.M || b.fd ? 1 : 0);
							b.u.stat.H();
							let L = Ma - 35,
								J = 0,
								z = ia + (a.get() - 1) * (ia + Ma) * 2,
								H = b.f - ia - 15,
								W = 10,
								ja = f.Ic(-1 !== f.type && Ha[f.type].gd || 0);
							for (let Ka of f.F) {
								W--;
								let ra = Ka.$;
								if (!ra)
									continue;
								let qa = Ka.amount,
									Ba = D(Ka.color),
									oa = Ka.P,
									Ca = ja[W],
									R = Ma * Q(ra);
								Xa(z + 7.5, z - 7.5 + R, H + 7.5, 12 + T.J.xa, D(9));
								Xa(z + 7.5, z + 7.5 + L * Q(ra), H + 7.5, 12, D(16));
								Xa(z + 7.5, z + 7.5 + L * Q(qa), H + 7.5, 11.5, Ba);
								x.strokeStyle = D(9);
								x.lineWidth = 1;
								for (let sa = 1; sa <= qa; sa++) {
									let Ya = z + L * Q(sa);
									Jb(Ya, H + 1.5, Ya, H - 3 + 15)
								}
								let Ga = 0 < f.pa && qa < oa && qa < ra,
									Ua = qa < oa ? Ga ? D(8) : D(16) : Ba;
								S[W].i(Ca, z + R / 2, H + 7.5, 11, Ua, "center", !0);
								N[W].i(`[${(W + 1) % 10}]`, z + R - 3.75 - 2, H + 7.5, 11, Ua, "right", !0);
								qa && E[W].i(qa < oa ? `+${qa}` : "MAX", z + R + 4, H + 7.5, 11, Ba, "left", !0);
								Ga && b.u.stat.Ea(W, z * na, H * na, R * na, 15 * na);
								H -= 19;
								J = R
							}
							b.u.Jc.Ea(0, 0, H * na, (.5 * Ma + a.get() * J) * na, (b.f - H) * na);
							1 < f.pa && e.i(`x${f.pa}`, z + J - 2, H + 15 - 4, 20, D(8), "right")
						} {
							let L = 1.65 * Ma,
								J = 25,
								z = (b.c - L) / 2,
								H = b.f - ia - J;
							if (!Za && b.M) {
								let W = ea.Pa.Gc();
								0 < W && (H -= (W + 16) / na * b.$b + 4)
							}
							x.lineWidth = 1;
							Xa(z, z + L, H + J / 2, J - 3 + T.J.xa, D(9));
							Xa(z, z + L, H + J / 2, J - 3, D(16));
							Xa(z, z + L * f.j.Rd(), H + J / 2, J - 3.5, D(13));
							I.i(`Level ${f.j.level} ${-1 !== f.type ? Ha[f.type].name : "Unknown"}`, z + L / 2, H + J / 2, J - 3, D(8), "center", !0);
							J = 14;
							H -= J + 4;
							Xa(z + .1 * L, z + .9 * L, H + J / 2, J - 3 + T.J.xa, D(9));
							Xa(z + .1 * L, z + .9 * L, H + J / 2, J - 3, D(16));
							Xa(z + .1 * L, z + L * (.1 + .8 * (ub.max ? Math.min(1, f.j.Hc() / ub.max) : 1)), H + J / 2, J - 3.5, D(11));
							w.i(`Score: ${l.Kb(f.j.Hc())}`, z + L / 2, H + J / 2, J - 1, D(8), "center", !0);
							x.lineWidth = 4;
							F.i(ba.name, z + L / 2, H - 10 - 4, 32, D(8), "center")
						}
						b.mobile && db(.8); {
							let L = M.a.da - M.a.X,
								J = M.a.la - M.a.Y,
								z = Ma * L * 2 / (L + J),
								H = Ma * J * 2 / (L + J),
								W = b.c - ia,
								ja = b.f - ia,
								Ka = (oa, Ca, R, Ga, Ua) => {
									x.globalAlpha = .5;
									x.fillStyle = Ra(D(16), D(6));
									M.S ? xb(oa + R / 2, Ca + Ga / 2, R / 2) : Ta(oa, Ca, R, Ga);
									if (!M.S) {
										let sa = M.Z[0].length,
											Ya = M.Z.length,
											fb = R / sa,
											sb = Ga / Ya;
										for (let Bb = 0; Bb < Ya; Bb++)
											for (let Cb = 0; Cb < sa; Cb++)
												x.globalAlpha = .5,
												x.fillStyle = ib(M.Z[Bb][Cb]),
												Ta(oa + Cb * fb, Ca + Bb * sb, fb, sb)
									}
									x.globalAlpha = 1;
									x.save();
									x.beginPath();
									M.S ? x.arc(oa + R / 2, Ca + Ga / 2, R / 2, 0, 2 * Math.PI) : x.rect(oa, Ca, R, Ga);
									x.clip();
									for (let sa of wa.get())
										x.fillStyle = Ra(D(sa.color), D(9), .3),
										x.globalAlpha = sa.alpha,
										2 === sa.type ? Ta(oa + (sa.x - sa.size / L) * R - .4, Ca + (sa.y * J / L - sa.size / L) * R - 1, 2 * sa.size / L * R + .2, 2 * sa.size / L * R + .2) : 1 === sa.type ? xb(oa + sa.x * R, Ca + sa.y * J / L * R, sa.size / L * R + .2) : sa.id !== f.va && xb(oa + sa.x * R, Ca + sa.y * J / L * R, Ua);
									x.fillStyle = D(9);
									x.globalAlpha = 1;
									xb(oa + (ba.aa.get(V) - M.a.X) / L * R, Ca + (ba.ia.get(V) - M.a.Y) / L * R, Ua);
									x.restore();
									x.strokeStyle = D(9);
									x.lineWidth = 3;
									M.S ? xb(oa + R / 2, Ca + Ga / 2, R / 2, !0) : Ta(oa, Ca, R, Ga, !0)
								};
							if (b.mobile) {
								W -= z;
								let oa = (b.na ? (Ma / 3 + ia + ia) * a.get() : 0) + (b.ta ? (Ma / 2 + ia + ia) * c.get() : 0);
								Ka(ia, oa + ia, z, H, 4);
								b.u.Qb.H();
								let Ca = (Ga, Ua, sa, Ya, fb, sb) => {
										b.u.Qb.Ea(Ga, Ua * na, sa * na, Ya * na, fb * na);
										x.globalAlpha = .5;
										x.fillStyle = D(16);
										Ta(Ua, sa, Ya, fb);
										x.globalAlpha = .1;
										x.fillStyle = D(9);
										Ta(Ua, sa + .6 * fb, Ya, .4 * fb);
										x.globalAlpha = 1;
										ca.get(Ga).i(sb, Ua + Ya / 2, sa + .725 * fb, .6 * fb, D(8), "center");
										x.strokeStyle = D(9);
										x.lineWidth = 3;
										Ta(Ua, sa, Ya, fb, !0)
									},
									R = (Ma - 2 * ia) / 3;
								3 === b.ea && Ca(0, ia, oa + 2 * ia + z, 2 * R, 2 * R, "\u2756");
								Ca(1, 2 * ia + z, oa + ia, R, R, b.Pb ? "-" : "+");
								b.Pb && (Ca(2, 3 * ia + z + R, oa + ia, 6 * R, R, `\u2756 ${["Never", "Always", "Automatic", "Manual", "Double Tap"][b.ea || 0]}`),
									Ca(3, 2 * ia + z, oa + 2 * ia + R, 3.5 * R, R, "Autofire"),
									Ca(4, 3 * ia + z + 3.5 * R, oa + 2 * ia + R, 3.5 * R, R, "Reverse"),
									Ca(5, 2 * ia + z, oa + 3 * ia + 2 * R, 3.5 * R, R, "Autospin"),
									Ca(6, 3 * ia + z + 3.5 * R, oa + 3 * ia + 2 * R, 3.5 * R, R, "Override"))
							} else
								W -= z,
								ja -= H,
								Ka(W, ja, z, H, 2);
							let ra = ja - 10,
								qa = ba.aa.A(V);
							h.b(qa);
							y.b(f.speed);
							K.b(P.bd);
							B.b(P.latency.Wd());
							b.cb && (x.fillStyle = D(9),
								Ta(W, ja - 40, z, 30),
								h.i(W, ja - 40, z, 30),
								y.i(W, ja - 40, z, 30),
								K.i(W, ja - 40, z, 30),
								B.i(W, ja - 40, z, 30),
								ra -= 40);
							let Ba = [];
							if (!T.h.Qa) {
								Ba.push({
									line: `${P.latency.zd().toFixed(1)} ms  ${b.B.code} #${b.B.id}`
								});
								Ba.push({
								    line: `Server Speed: 100%`
								});
								Ba.push({
									line: `Client Speed: ${P.Ga} FPS`,
								});
								if (b.cb) {
									Ba.push({
										line: `Prediction: ${qa.toFixed(2)} (${["off", "new", "old", "smoothCamera"][T.Da.bb]})`
									});
									var Zb = 0,
										$b = 0,
										ac = 0,
										bc = 0;
									let Ca = (Ga, Ua) => {
										Ua ? $b += Ga.length : Zb += Ga.length;
										for (let sa of Ga)
											(sa.name || sa.j) && bc++,
											ac += sa.o.Va(),
											Ca(sa.m, !0)
									};
									Ca(aa, !1);
									Ba.push({
										line: `Rendering: e ${Zb} t ${$b} g ${ac} n ${bc}`
									});
									Ba.push({
										line: `Network: ${P.s.Gb}/${P.s.kc}/${P.s.Hb} @ ${P.Ra}Hz`
									});
									Ba.push({
										line: `Bandwidth: tx ${P.qa} rx ${P.Fa}`
									});
									Ba.push({
										line: `Coordinates: (${ba.aa.get(V).toFixed(2)}, ${ba.ia.get(V).toFixed(2)})`
									});
									let R = y.G();
									Ba.push({
										line: `Speed: ${f.speed.toFixed(2)} gu/s${R && .005 <= R ? ` (${R.toFixed(2)} gu/s)` : ""}`
									})
								}
							}
							for (let oa = 0; oa < Ba.length; oa++) {
								let {
									line: Ca,
									ge: R = !1
								} = Ba[oa];
								Ea.get(oa).i(Ca, W + z, ra - 14 * oa, 11, D(R ? 2 : 8), "right")
							}
							G.i("Arras.io", W + z, ra - 14 * Ba.length - 2, 16, D(8), "right")
						}
						b.mobile && db(1.25);
						b.mobile && db(1.4);
						if (!T.h.Qa && T.J.Mb) {
							let L = b.c - Ma - ia,
								J = ia + 28;
							b.mobile && (J += (b.na ? Ma / 3 / 1.4 * a.get() : 0) + (b.ta && 2 * ia + f.sa.length * (.5 * Ma + 14) > 1.4 * L ? Ma / 2 / 1.4 * c.get() : 0));
							0 < ub.data.length && za.i("Leaderboard", L + Ma / 2, J - 10, 19, D(8), "center");
							for (let z = 0; z < ub.data.length && (!b.mobile || 6 > z); z++) {
								let H = ub.data[z];
								Xa(L, L + Ma, J + 7, 11 + T.J.xa, D(9));
								Xa(L, L + Ma, J + 7, 11, D(16));
								Xa(L, L + Ma * Math.min(1, H.j / ub.max), J + 7, 10.5, H.Ad);
								Ja[z].i(`${H.name ? (T.h.kb ? Xb(H.name) : H.name) + " - " : ""}${H.label}: ${l.Bc(H.j)}`, L + Ma / 2, J + 7, 10, D(8), "center", !0);
								let W = 14 / H.position.axis;
								pb(L - 21 - W * H.position.W.x * Math.SQRT1_2, J + 7 + W * H.position.W.x * Math.SQRT1_2, H.image, .5, 1, 2 * W / H.image.size, -Math.PI / 4, !0);
								J += 18
							}
						}
						b.mobile && db(1 / 1.4); {
							b.ta = 0 < f.sa.length && !(b.mobile && b.M);
							c.set(+b.ta);
							let L = c.get();
							b.u.upgrade.H();
							if (b.ta) {
								let J = .5 * Ma,
									z = .5 * Ma,
									H = 2 * L * ia - ia,
									W = ia,
									ja = H,
									Ka = 0,
									ra = W;
								pa += .01;
								let qa = 0;
								for (let R of f.sa) {
									W > ra && (ra = W);
									Ka = H;
									b.u.upgrade.Ea(qa, H * na, W * na, J * na, z * na);
									x.globalAlpha = .5;
									x.fillStyle = hb(qa);
									Ta(H, W, J, z);
									x.globalAlpha = .1;
									x.fillStyle = D(9);
									Ta(H, W + .6 * z, J, .4 * z);
									x.globalAlpha = 1;
									let Ga = A(R, f.color),
										Ua = Ha[R].position,
										sa = .6 * J / Ua.axis;
									pb(H + .5 * J - sa * Ua.W.x * Math.cos(pa), W + .5 * z - sa * Ua.W.x * Math.sin(pa), Ga, 1, 1, sa / Ga.size, pa, !0);
									let Ya = (b.L[`KEY_CHOOSE_${qa + 1}`] || "").toLowerCase().trim();
									!b.mobile && Ya ? ($a.get(qa).i(Ga.name, H + .9 * J / 2, W + z - 6, z / 8 - 2, D(8), "center"),
										Ia.get(qa).i(`[${Ya}]`, H + J - 4, W + z - 6, z / 8 - 2, D(8), "right")) : $a.get(qa).i(Ga.name, H + J / 2, W + z - 6, z / 8 - 2, D(8), "center");
									x.strokeStyle = D(9);
									x.globalAlpha = 1;
									x.lineWidth = 3;
									Ta(H, W, J, z, !0);
									qa++;
									0 !== qa % 3 || b.mobile ? H += L * (J + 14) : (H = ja,
										W += z + 14)
								}
								let Ba = Aa.Rc("Don't Upgrade", 12) + 4,
									oa = (Ka + J + 14 + ja - 15) / 2,
									Ca = ra + z + 14;
								Xa(oa - Ba / 2, oa + Ba / 2, Ca + 7, 14 + T.J.xa, D(9));
								Xa(oa - Ba / 2, oa + Ba / 2, Ca + 7, 14, D(18));
								Aa.i("Don't Upgrade", oa, Ca + 7, 12, D(8), "center", !0);
								b.u.dc.Ea(0, (oa - Ba / 2) * na, Ca * na, Ba * na, 14 * na)
							} else
								b.u.upgrade.H(),
								b.u.dc.H()
						}
						if (b.mobile) {
							b.na = 0 < f.pa && f.F.some(ja => ja.amount < ja.P) && !b.ta;
							a.set(b.na || b.M ? 1 : 0);
							let L = a.get();
							b.u.stat.H();
							let J = Ma / 2,
								z = Ma / 3,
								H = 2 * L * ia - ia,
								W = f.Ic(-1 !== f.type && Ha[f.type].gd || 0);
							if (b.na) {
								for (let ja = 0; ja < f.F.length; ja++) {
									let Ka = f.F[ja],
										ra = Ka.$;
									if (0 >= ra)
										continue;
									let qa = Ka.amount,
										Ba = D(Ka.color),
										oa = Ka.P,
										Ca = W[9 - ja].split(/\s+/),
										R = Math.floor(Ca.length / 2),
										[Ga, Ua] = 1 === Ca.length ? [Ca, null] : [Ca.slice(0, R).join(" "), Ca.slice(R).join(" ")];
									x.globalAlpha = .5;
									x.fillStyle = Ba;
									Ta(H, ia, J, 2 * z / 3);
									x.globalAlpha = .1;
									x.fillStyle = D(9);
									Ta(H, ia + 2 * z / 3 * 2 / 3, J, 2 * z / 3 / 3);
									x.globalAlpha = 1;
									x.fillStyle = D(8);
									Ta(H, ia + 2 * z / 3, J, z / 3);
									x.fillStyle = Ba;
									Ta(H, ia + 2 * z / 3, J * qa / ra, z / 3);
									x.strokeStyle = D(9);
									x.lineWidth = 1;
									for (let sa = 1; sa < oa; sa++) {
										let Ya = H + sa / ra * J;
										Jb(Ya, ia + 2 * z / 3, Ya, ia + z)
									}
									qa === oa || !f.pa || ra !== oa && qa === ra || b.u.stat.Ea(9 - ja, H * na, ia * na, J * na, z * na);
									Ua ? (S[ja].i(Ua, H + J / 2, ia + .55 * z, z / 5, D(8), "center"),
										S[ja].i(Ga, H + J / 2, ia + .3 * z, z / 5, D(8), "center")) : S[ja].i(Ga, H + J / 2, ia + .425 * z, z / 5, D(8), "center");
									0 < qa && E[ja].i(qa < ra ? `+${qa}` : "MAX", H + J / 2, ia + 1.3 * z, z / 4, Ba, "center");
									x.strokeStyle = D(9);
									x.globalAlpha = 1;
									x.lineWidth = 3;
									Jb(H, ia + 2 * z / 3, H + J, ia + 2 * z / 3);
									Ta(H, ia, J, z, !0);
									H += L * (J + 14)
								}
								1 < f.pa && e.i(`x${f.pa}`, H, ia + 20, 20, D(8), "left")
							}
						}
						db(1 / na, !0)
					}
				}
			})(),
			lc = (() => {
				var a = new Z,
					c = new Z,
					d = new Z,
					g = new Z,
					h = new Z,
					y = new Z,
					B = new Z,
					K = new Z;
				let Q = () => {
						let N = b.mb.map(F => Math.round(F.get()));
						var E = N[0] + .5 * N[1] + 3 * N[2];
						E = 0 === E ? "\ud83c\udf3c" : 4 > E ? "\ud83c\udfaf" : 8 > E ? "\ud83d\udca5" : 15 > E ? "\ud83d\udca2" : 25 > E ? "\ud83d\udd25" : 50 > E ? "\ud83d\udca3" : 75 > E ? "\ud83d\udc7a" : 100 > E ? "\ud83c\udf36\ufe0f" : "\ud83d\udcaf";
						let e = [],
							w = 0;
						for (let [F, I] of [
								[" kill", ""],
								[" assist", ""],
								[" visitor", " defeated"]
							]) {
							let G = N[w++];
							0 < G && e.push(G + F + (1 === G ? "" : "s") + I)
						}
						return `${E} ${l.Bb(e) || "Bro your trash"}`
					},
					S = () => b.yc.length ? `\ud83d\udd2a Succumbed to ${l.Bb(b.yc.map(N=>l.ud(Ha[N].name)))}` : "\ud83e\udd37 You died to something ig";
				return () => {
					let N = Math.max(b.c, 16 * b.f / 9) / b.tb * T.J.scale,
						E = (za, Ja = !1) => {
							b.c /= za;
							b.f /= za;
							x.scale(za, za);
							Ja || (N *= za)
						};
					E(N, !0);
					wb(D(9), .25);
					let e = b.c / 2,
						w = b.f / 2 - 50;
					var F = A(f.type, f.color),
						I = Ha[f.type].position;
					let G = 140 / I.axis,
						Ea = b.c / 2 - G * I.W.x * Math.SQRT1_2;
					I = b.f / 2 - 35 + G * I.W.x * Math.SQRT1_2;
					if (!Za) {
						var ca = Math.max(b.c, 16 * b.f / 9) / (1280 >= b.c ? 1280 : 1920 <= b.c ? 1920 : b.c);
						let za = b.f - 240 * ca,
							Ja = ea.Pa.Gc();
						0 < Ja && (za -= Ja + 16 + 4 * ca);
						ca = 0;
						za < w && (ca = za - w);
						w += ca;
						I += ca
					}
					pb(Ea - 190 - 70, I - 10, F, 1.5, 1, .5 * G / F.size, -Math.PI / 4, !0);
					a.i("lol you died", e, w - 80, 9, D(8), "center");
					c.i(`Level ${f.j.level} ${Ha[f.type].name}`, e - 170, w - 30, 25, D(8));
					d.i(`Final score: ${l.Kb(b.Ac.get())}`, e - 170, w + 25, 50, D(8));
					g.i(`\u231a Survived for ${l.Pd(Math.round(b.zc.get()))}`, e - 170, w + 55, 16, D(8));
					h.i(Q(), e - 170, w + 77, 16, D(8));
					y.i(S(), e - 170, w + 99, 16, D(8));
					F = Math.ceil((b.Yb - Date.now()) / 1E3);
					B.i(0 < F ? `You may respawn in ${F} second${1 === F ? "" : "s"}` : "joysticks" === kb.control ? "Tap to respawn!" : "Press enter to respawn!", e, w + 125, 16, D(8), "center");
					b.oa ? (b.u.oa.Ea(0, (e - 60) * N, (w + 180) * N, 120 * N, 32 * N),
						x.globalAlpha = .5,
						x.fillStyle = D(16),
						Ta(e - 60, w + 180, 120, 32),
						x.globalAlpha = .1,
						x.fillStyle = D(9),
						Ta(e - 60, w + 199.2, 120, 12.8),
						x.globalAlpha = 1,
						K.i(b.oa.wc ? "Copied!" : "Copy Code", e, w + 202, 16, D(8), "center"),
						x.strokeStyle = D(9),
						x.lineWidth = 3,
						Ta(e - 60, w + 180, 120, 32, !0)) : b.u.oa.H();
					E(1 / N, !0)
				}
			})();
		window.addEventListener("beforeunload", a => {
			b.Ba && !b.M && (a.preventDefault(),
				a.returnValue = "")
		});
		const mc = (() => {
				var a = new Z,
					c = new Z;
				new Z;
				var d = [
					["Tip: You can view and edit your keybinds in the options menu.", "Tip: You can play on mobile by just going to arras.io on your phone!"],
					["Tip: You can have the shield and health bar be separated by going to the options menu.", "Tip: If arras.io is having a low frame rate, you can try enabling low graphics in the options menu.", "Tip: You can make traps rounded with the classic trap setting in the options menu.", "Tip: You can create your own private server with the template in the link on the options menu.", "Tip: You can create your own theme with the custom theme maker in the link on the options menu."],
					["Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.", "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.", "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban."]
				];
				d = d[Math.floor(Math.random() * d.length)];
				let g = d[Math.floor(Math.random() * d.length)];
				return () => {
					let h = Math.max(b.c, 16 * b.f / 9) / b.tb * T.J.scale,
						y = (B, K = !1) => {
							b.c /= B;
							b.f /= B;
							x.scale(B, B);
							K || (h *= B)
						};
					y(h, !0);
					wb(D(18), .5);
					a.i("Connecting...", b.c / 2, b.f / 2, 32, D(8), "center");
					c.i(b.message, b.c / 2, b.f / 2 + 30, 16, D(1), "center");
					c.i(g, b.c / 2, b.f / 2 + 75, 16, D(8), "center");
					y(1 / h, !0)
				}
			})(),
			nc = (() => {
				var a = new Z,
					c = new Z;
				return () => {
					let d = Math.max(b.c, 16 * b.f / 9) / b.tb * T.J.scale,
						g = (h, y = !1) => {
							b.c /= h;
							b.f /= h;
							x.scale(h, h);
							y || (d *= h)
						};
					g(d, !0);
					wb(Ra(D(12), D(19), .3), .25);
					a.i("\ud83d\udc80 Disconnected \ud83d\udc80", b.c / 2, b.f / 2, 32, D(8), "center");
					c.i(b.message, b.c / 2, b.f / 2 + 30, 16, D(2), "center");
					g(1 / d, !0)
				}
			})();
		let Ub = a => {
			Na(Ub);
			x.lineCap = "round";
			x.lineJoin = T.h.$a ? "miter" : "round";
			b.Aa && !b.ba && 1E3 < a - P.Nc && (P.Nc = a,
				P.Ga = P.current.Ga,
				P.Ra = P.current.Ra,
				P.qa = P.current.qa,
				P.Fa = P.current.Fa,
				P.current.Ga = 0,
				P.current.Ra = 0,
				P.current.qa = 0,
				P.current.Fa = 0);
			b.Aa && Ha ? kc(a) : b.ba || mc();
			b.M ? lc() : b.u.oa.H();
			b.ba && nc();
			if (b.M || b.ba)
				a = D(18),
				b.M && (a = Ra(a, D(9), .25)),
				b.ba && (a = Ra(a, Ra(D(12), D(19), .3), .25)),
				v.Hd(x, a)
		};
		window.$createProfile = (() => {
			var a = new Z;
			new Z;
			return (c, d = -1, g = 200, h = -Math.PI / 4) => {
				let y = x.canvas.width,
					B = x.canvas.height,
					K = x.canvas.width = g;
				g = x.canvas.height = g; -
				1 === d ? x.clearRect(0, 0, K, g) : (x.fillStyle = D(18),
					x.fillRect(0, 0, K, g),
					x.globalAlpha = .5,
					x.fillStyle = hb(d),
					Ta(0, 0, K, g),
					x.globalAlpha = .1,
					x.fillStyle = D(9),
					Ta(0, .6 * g, K, .4 * g),
					x.globalAlpha = 1);
				let Q = A(c, f.color);
				c = Ha[c].position;
				let S = .6 * K / c.axis;
				pb(.5 * K - S * c.W.x * Math.cos(h), .5 * g - S * c.W.x * Math.sin(h), Q, 1, 1, S / Q.size, h, !0); -
				1 !== d && (a.i(Q.name, .9 * K / 2, g - 6, g / 8 - 2, D(8), "center"),
					x.strokeStyle = D(9),
					x.globalAlpha = 1,
					x.lineWidth = 3,
					Ta(0, 0, K, g, !0));
				d = x.canvas.toDataURL();
				x.canvas.width = y;
				x.canvas.height = B;
				return d
			}
		})();
		let nb = new Date,
			cc = b.mobile ? 0 : Math.max(0, 1 - Math.abs(nb.getTime() - new Date(nb.getFullYear() - (6 > nb.getMonth() ? 1 : 0), 11, 25)) / 20736E5);
		if (cc) {
			let a = document.createElement("canvas");
			a.style.position = "absolute";
			a.style.top = "0";
			document.body.insertBefore(a, document.body.firstChild);
			let c = a.getContext("2d"),
				d = [],
				g = () => {
					a.width !== window.innerWidth && (a.width = window.innerWidth);
					a.height !== window.innerHeight && (a.height = window.innerHeight);
					c.clearRect(0, 0, a.width, a.height);
					c.fillStyle = "#ffffff";
					for (let h of d) {
						h.x += 5 / h.r + Math.random();
						h.y += 12.5 / h.r + Math.random();
						let y = 2 * Math.min(.4, .9 - h.y / a.height);
						0 < y ? (c.globalAlpha = y,
							c.beginPath(),
							c.arc(h.x, h.y, h.r, 0, 2 * Math.PI),
							c.fill()) : h.Ja = !0
					}
					.001 * a.width * cc > Math.random() && d.push({
						x: a.width * (1.5 * Math.random() - .5),
						y: -50 - 100 * Math.random(),
						r: 2 + Math.random() * Math.random() * 4
					});
					b.Aa ? a.remove() : Na(g)
				};
			setInterval(() => {
				d = d.filter(h => !h.Ja)
			}, 2E3);
			g()
		}
		let oc = "en-US" === navigator.language && -7 <= b.ra && -4 >= b.ra,
			pc = 6 === nb.getMonth() && 4 === nb.getDate(),
			qc = 11 === nb.getMonth() && 31 === nb.getDate() || 0 === nb.getMonth() && 3 >= nb.getDate();
		if (!b.mobile && (pc && oc || qc)) {
			let a = document.createElement("canvas");
			a.style.position = "absolute";
			a.style.top = "0";
			document.body.insertBefore(a, document.body.firstChild);
			let c = a.getContext("2d"),
				d = () => {
					let y = "164,14,14 230,80,0 230,119,0 47,127,51 23,78,166 123,31,163".split(" ");
					return y[Math.floor(Math.random() * y.length)]
				},
				g = [],
				h = () => {
					if (a.width !== window.innerWidth || a.height !== window.innerHeight)
						a.width = window.innerWidth,
						a.height = window.innerHeight,
						g = [],
						c.clearRect(0, 0, a.width, a.height),
						c.fillStyle = "rgba(255,255,255,0.01)",
						c.fillRect(0, 0, a.width, a.height),
						c.lineWidth = 2.5,
						c.lineCap = "round";
					c.globalCompositeOperation = "destination-out";
					c.fillStyle = "rgba(0,0,0,0.15)";
					c.fillRect(0, 0, a.width, a.height);
					c.globalCompositeOperation = "lighter";
					for (var y of g) {
						var B = y.x,
							K = y.y;
						y.C += .2;
						y.x += y.I;
						y.y += y.C;
						y.C *= .99;
						y.I *= .99;
						y.time--;
						var Q = 0 < y.time ? y.Wb ? 1 : 10 <= y.time ? 1 : y.time / 10 : 0;
						if (0 < Q)
							c.strokeStyle = `rgba(${y.color},${Q})`,
							c.beginPath(),
							c.moveTo(B, K),
							c.lineTo(y.x, y.y),
							c.stroke();
						else {
							if (y.Wb && !y.Ja) {
								B = Math.floor(5 * Math.random()) + 30;
								K = .5 * Math.random() + 3;
								Q = 25 + 5 * Math.random();
								for (var S = 0; 2 > S; S++) {
									let N = d();
									for (let E = 0; E < B; E++) {
										let e = (E + Math.random()) / B * Math.PI * 2,
											w = K + .5 * Math.random();
										g.push({
											color: N,
											x: y.x,
											y: y.y,
											I: Math.cos(e) * w,
											C: -.8 + Math.sin(e) * w,
											time: Q + 2 * Math.random(),
											Wb: !1,
											Ja: !1
										})
									}
								}
							}
							y.Ja = !0
						}
					}
					3E-5 * a.width > Math.random() && (y = a.width * Math.random(),
						B = a.height - 10,
						K = 4 * Math.random() - 2,
						Q = 5 * Math.random() - 15,
						S = 30 + 10 * Math.random(),
						g.push({
							color: d(),
							x: y,
							y: B,
							I: K,
							C: Q,
							time: S,
							Wb: !0,
							Ja: !1
						}));
					b.Aa ? a.remove() : Na(h)
				};
			setInterval(() => {
				g = g.filter(y => !y.Ja)
			}, 2E3);
			h()
		}
	})()
})();
