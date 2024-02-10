(() => {
    "use strict";
    const t = t => {
            if (!t) return !1;
            const e = ["checkbox", "radio"];
            return !(!("type" in t) || !e.includes(t.type)) || e.includes(t.role)
        },
        e = t => {
            window.postMessage({
                action: "__simplify__updateFilledInput",
                ...t
            }, "*")
        },
        n = {
            reactClick: t => {
                let {
                    keyPath: n,
                    containerPath: o,
                    inputPath: l,
                    inputIndex: i,
                    eventOptions: u
                } = t;
                try {
                    var a, r;
                    const t = null === (a = document.evaluate(o, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === a ? void 0 : a.snapshotItem(0),
                        d = null === (r = document.evaluate(l, t || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(i);
                    if (!d) throw new Error("Input not found.");
                    try {
                        const t = Object.keys(d).find((t => /^__reactProps/.test(t)));
                        if (!t) throw new Error("React props key not found!");
                        if (!d[t].onClick) throw new Error("Click handler not found!");
                        const e = new MouseEvent("click", u);
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: d
                        }), d[t].onClick(e)
                    } catch (t) {}
                    e({
                        keyPath: n,
                        filled: !0
                    })
                } catch (t) {
                    e({
                        keyPath: n,
                        error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                    })
                }
            },
            tptEnableResume: t => {
                let {
                    keyPath: n
                } = t;
                try {
                    if (!window.tpt) throw new Error("No tpt!");
                    window.tpt.uploadResume.updateAcceptedFieldMode("file"), window.tpt.uploadResume.uploadResumeInputShower("file"), window.tpt.uploadResume.showUploadFileError(!1), window.tpt.uploadResume.checkFilledResumeFile() ? window.tpt.uploadResume.toggleUploadResumeNextButton(!0) : window.tpt.uploadResume.toggleUploadResumeNextButton(!1), e({
                        keyPath: n,
                        filled: !0
                    })
                } catch (t) {
                    e({
                        keyPath: n,
                        error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                    })
                }
            },
            jQuery: n => {
                let {
                    keyPath: o,
                    containerPath: l,
                    inputPath: i,
                    inputIndex: u,
                    value: a,
                    event: r,
                    eventOptions: d
                } = n;
                try {
                    var s, c;
                    if (!window.jQuery) throw new Error("No jQuery!");
                    const n = null === (s = document.evaluate(l, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === s ? void 0 : s.snapshotItem(0),
                        h = null === (c = document.evaluate(i, n || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === c ? void 0 : c.snapshotItem(u);
                    if (!h) throw new Error("Input not found.");
                    try {
                        if (r) window.jQuery(h).trigger(r, d);
                        else if (h instanceof HTMLSelectElement) {
                            if (void 0 === a) throw new Error("Value is undefined!");
                            window.jQuery(h).trigger("focus").trigger("click").val(a).trigger("input").trigger("change")
                        } else if (t(h)) window.jQuery(h).trigger("focus").trigger("click").prop("checked", Boolean(a)).trigger("input").trigger("change");
                        else {
                            if (void 0 === a) throw new Error("Value is undefined!");
                            window.jQuery(h).trigger("focus").trigger("click").trigger("keydown").trigger("keypress").val(a).trigger("input").trigger("keyup").trigger("change")
                        }
                    } catch (t) {
                        if (!r && window.jQuery(h).val() !== a) throw new Error("Failed to set value!")
                    }
                    e({
                        keyPath: o,
                        filled: !0
                    })
                } catch (t) {
                    e({
                        keyPath: o,
                        error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                    })
                }
            },
            dijit: t => {
                let {
                    keyPath: n,
                    containerPath: o,
                    inputPath: l,
                    inputIndex: i,
                    value: u
                } = t;
                try {
                    var a, r;
                    if (!window.dijit) throw new Error("No dijit!");
                    const t = null === (a = document.evaluate(o, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === a ? void 0 : a.snapshotItem(0),
                        d = null === (r = document.evaluate(l, t || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(i);
                    if (!d) throw new Error("Input not found.");
                    if (void 0 === u) throw new Error("Value is undefined!");
                    const s = [].concat(u);
                    let c = !1;
                    try {
                        for (let t = 0; t < s.length; t += 1)
                            if (window.dijit.getEnclosingWidget(d).set("value", s[t]), window.dijit.getEnclosingWidget(d).get("value") === s[t]) {
                                c = !0;
                                break
                            } if (!c) throw new Error("Unable to confirm value was set!")
                    } catch (t) {}
                    e({
                        keyPath: n,
                        filled: !0
                    })
                } catch (t) {
                    e({
                        keyPath: n,
                        error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                    })
                }
            },
            tinyMCE: t => {
                let {
                    keyPath: n,
                    containerPath: o,
                    inputPath: l,
                    inputIndex: i,
                    value: u
                } = t;
                try {
                    var a, r;
                    if (!window.tinyMCE) throw new Error("No tinyMCE!");
                    const t = null === (a = document.evaluate(o, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === a ? void 0 : a.snapshotItem(0),
                        d = null === (r = document.evaluate(l, t || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(i);
                    if (!d) throw new Error("Input not found.");
                    if (void 0 === u) throw new Error("Value is undefined!");
                    const s = [].concat(u);
                    let c = !1;
                    try {
                        for (let t = 0; t < s.length; t += 1)
                            if (window.tinyMCE.get(d.id).setContent(s[t]), window.tinyMCE.get(d.id).getContent() === s[t]) {
                                c = !0;
                                break
                            } if (!c) throw new Error("Unable to confirm value was set!")
                    } catch (t) {}
                    e({
                        keyPath: n,
                        filled: !0
                    })
                } catch (t) {
                    e({
                        keyPath: n,
                        error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                    })
                }
            }
        };
    window.addEventListener("message", (t => {
        var e;
        t.source === window && "__simplify__fillInput" === (null === (e = t.data) || void 0 === e ? void 0 : e.action) && n[t.data.method] && n[t.data.method](t.data)
    }), !1);
    const o = t => {
            window.postMessage({
                action: "__simplify__updateTrackedInput",
                ...t
            }, "*")
        },
        l = t => [].concat(t || ["./parent::*//text()", "./parent::*/parent::*//text()", "./parent::*/parent::*/parent::*//text()", './/ancestor::*[string-length(normalize-space(translate(text(), "Â ", " "))) > 0]//text()']),
        i = t => {
            let {
                field: e,
                inputPath: n,
                inputValuePath: o,
                inputValuePathArray: i = l(o)
            } = t;
            const u = [],
                a = document.evaluate(n, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let t = 0; t < a.snapshotLength; t += 1) {
                const e = a.snapshotItem(t);
                if (null == e ? void 0 : e.checked) {
                    let t = e.value || "";
                    for (let n = 0; n < i.length; n += 1) {
                        const o = document.evaluate(i[n], e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                        for (let e = 0; e < o.snapshotLength; e += 1) {
                            var r, d;
                            if (t = null === (r = o.snapshotItem(e)) || void 0 === r || null === (d = r.nodeValue) || void 0 === d ? void 0 : d.trim(), t) break
                        }
                        if (t) break
                    }
                    t && u.push(t)
                }
            }
            return u
        },
        u = t => {
            let {
                field: e,
                inputPath: n,
                inputValuePath: o,
                inputValuePathArray: i = l(o)
            } = t;
            const u = [],
                a = document.evaluate(n, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let t = 0; t < a.snapshotLength; t += 1) {
                const e = a.snapshotItem(t);
                let n = "";
                for (let t = 0; t < i.length; t += 1) {
                    const o = document.evaluate(i[t], e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                    for (let t = 0; t < o.snapshotLength; t += 1) {
                        var r, d;
                        if (n = null === (r = o.snapshotItem(t)) || void 0 === r || null === (d = r.nodeValue) || void 0 === d ? void 0 : d.trim(), n) break
                    }
                    if (n) break
                }
                n && u.push(n)
            }
            return u
        },
        a = {
            jQuery: e => {
                let {
                    suid: n,
                    containerPath: l,
                    fieldPath: a,
                    fieldIndex: r,
                    labelPath: d,
                    inputPath: s,
                    inputValuePath: c
                } = e;
                try {
                    if (!window.jQuery) throw new Error("No jQuery!");
                    const {
                        field: e,
                        input: h
                    } = (t => {
                        let {
                            containerPath: e,
                            fieldPath: n,
                            fieldIndex: o,
                            labelPath: l,
                            inputPath: i
                        } = t;
                        var u, a, r, d;
                        const s = null === (u = document.evaluate(e, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === u ? void 0 : u.snapshotItem(0),
                            c = null === (a = document.evaluate(n, s || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === a ? void 0 : a.snapshotItem(o);
                        if (!c) throw new Error("Field not found.");
                        const h = null === (r = document.evaluate(l, c, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(0);
                        if (!h) throw new Error("Label not found.");
                        const w = null === (d = document.evaluate(i, c, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === d ? void 0 : d.snapshotItem(0);
                        if (!w) throw new Error("Input not found.");
                        return {
                            container: s,
                            field: c,
                            label: h,
                            input: w
                        }
                    })({
                        containerPath: l,
                        fieldPath: a,
                        fieldIndex: r,
                        labelPath: d,
                        inputPath: s
                    });
                    if (h instanceof HTMLSelectElement) {
                        const t = () => window.jQuery(h).find([].concat(c || "option:selected").join(", ")).text().trim() || window.jQuery(h).val();
                        window.jQuery(h).off("change.__simplify__trackInput"), window.jQuery(h).on("change.__simplify__trackInput", (() => {
                            o({
                                suid: n,
                                inputValue: t()
                            })
                        }))
                    } else if (t(h)) {
                        const t = document.evaluate(s, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                        for (let l = 0; l < t.snapshotLength; l += 1) {
                            const a = t.snapshotItem(l);
                            window.jQuery(a).off("change.__simplify__trackInput"), window.jQuery(a).on("change.__simplify__trackInput", (() => {
                                o({
                                    suid: n,
                                    inputValue: i({
                                        field: e,
                                        inputPath: s,
                                        inputValuePath: c
                                    }),
                                    options: u({
                                        field: e,
                                        inputPath: s,
                                        inputValuePath: c
                                    })
                                })
                            }))
                        }
                    } else {
                        const t = () => c && window.jQuery(e).find([].concat(c).join(", ")).text().trim() || window.jQuery(h).val();
                        window.jQuery(h).off("change.__simplify__trackInput"), window.jQuery(h).on("change.__simplify__trackInput", (() => {
                            o({
                                suid: n,
                                inputValue: t()
                            })
                        }))
                    }
                } catch (t) {
                    o({
                        suid: n,
                        status: "error",
                        error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                    })
                }
            }
        };
    window.addEventListener("message", (t => {
        var e;
        t.source === window && "__simplify__trackInput" === (null === (e = t.data) || void 0 === e ? void 0 : e.action) && a[t.data.method] && a[t.data.method](t.data)
    }), !1)
})();