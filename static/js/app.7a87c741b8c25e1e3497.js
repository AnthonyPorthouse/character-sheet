webpackJsonp([1],{"/sEH":function(t,e){},"/y8d":function(t,e){},D7Rc:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={props:{value:{type:Number,required:!0},min:{type:Number,required:!1,default:void 0},max:{type:Number,required:!1,default:void 0}},data:function(){return{currentValue:this.value}},computed:{getMin:function(){return this.min},getMax:function(){return this.max}},methods:{increment:function(){this.setValue(this.currentValue+1)},decrement:function(){this.setValue(this.currentValue-1)},change:function(t){this.setValue(Number(t.target.value))},setValue:function(t){this.currentValue=t,void 0!==this.min&&t<this.min&&(this.currentValue=this.min),void 0!==this.max&&t>this.max&&(this.currentValue=this.max),this.$emit("update",this.currentValue)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"IncDecInput"},[n("button",{on:{click:function(e){e.preventDefault(),t.decrement(e)}}},[t._v("-")]),t._v(" "),n("input",{attrs:{type:"number",min:t.getMin,max:t.getMax},domProps:{value:t.currentValue},on:{input:t.change}}),t._v(" "),n("button",{on:{click:function(e){e.preventDefault(),t.increment(e)}}},[t._v("+")])])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("nqpA")},null,null).exports,l={components:{IncDecInput:r},props:{stat:{type:String,required:!0}},computed:{getFormattedStatName:function(){return this.$store.getters["stats/getFormattedAbbreviation"](this.stat)},getClass:function(){return"Stat Stat--"+this.stat},getStatValue:function(){return this.$store.getters["stats/getValue"](this.stat)},getStatModifier:function(){return this.$store.getters["stats/getModifier"](this.stat)},getFormattedStatModifier:function(){return this.$store.getters["stats/getFormattedModifier"](this.stat)}},methods:{setStatValue:function(t){this.$store.commit("stats/setValue",{stat:this.stat,value:t})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.getClass},[n("header",[t._v("\n    "+t._s(t.getFormattedStatName)+"\n  ")]),t._v(" "),n("IncDecInput",{attrs:{min:0,value:t.getStatValue},on:{update:t.setStatValue}}),t._v(" "),n("input",{staticClass:"Stat__Modifier",attrs:{type:"text",readonly:""},domProps:{value:t.getFormattedStatModifier}})],1)},staticRenderFns:[]};var u={components:{Stat:n("VU/8")(l,o,!1,function(t){n("/sEH")},null,null).exports},computed:{stats:function(){return this.$store.getters["stats/getAllStats"]}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"StatBlock"},[this._m(0),this._v(" "),this._l(this.stats,function(t){return e("Stat",{key:t,attrs:{stat:t}})})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"StatBlock StatBlock__Header"},[e("h1",[this._v("Stat")]),this._v(" "),e("h1",[this._v("Score")]),this._v(" "),e("h1",[this._v("Modifier")])])}]};var d=n("VU/8")(u,c,!1,function(t){n("gQWG")},null,null).exports,m={components:{IncDecInput:r},props:{skill:{type:String,required:!0}},computed:{getSkill:function(){return this.$store.getters["skills/getSkill"](this.skill)},getTotal:function(){return this.$store.getters["skills/getSkillTotal"](this.skill)},getName:function(){return this.getSkill.name},getPoints:function(){return this.getSkill.points},getClassSkill:function(){return this.getSkill.classSkill},getStat:function(){return this.$store.getters["stats/getFormattedAbbreviation"](this.getSkill.stat)},getModifier:function(){return this.$store.getters["stats/getFormattedModifier"](this.getSkill.stat)}},methods:{setPoints:function(t){this.$store.commit("skills/setPoints",{skill:this.skill,value:t})},updateClassSkill:function(t){this.$store.commit("skills/setClassSkill",{skill:this.skill,value:t.target.checked})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Skill"},[n("input",{attrs:{type:"checkbox",value:"true"},domProps:{checked:t.getClassSkill},on:{change:t.updateClassSkill}}),t._v(" "),n("header",[t._v("\n    "+t._s(t.getName)+" ("+t._s(t.getStat)+")\n  ")]),t._v(" "),n("input",{staticClass:"Skill__Total",attrs:{type:"text",readonly:""},domProps:{value:t.getTotal}}),t._v(" "),n("input",{staticClass:"Skill__Modifier",attrs:{type:"text",readonly:""},domProps:{value:t.getModifier}}),t._v(" "),n("IncDecInput",{attrs:{min:0,value:t.getPoints},on:{update:t.setPoints}})],1)},staticRenderFns:[]};var g={components:{Skill:n("VU/8")(m,h,!1,function(t){n("mqO+")},null,null).exports},computed:{getSkills:function(){return this.$store.getters["skills/getAllSkills"]}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Skills"},[this._m(0),this._v(" "),this._m(1),this._v(" "),this._l(this.getSkills,function(t){return e("Skill",{key:t,attrs:{skill:t}})})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("Skills")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Skills__Headings"},[n("span",[t._v(" ")]),t._v(" "),n("h2",[t._v("Skill Name")]),t._v(" "),n("h2",{staticClass:"Skills__Headings--centered"},[t._v("Total Bonus")]),t._v(" "),n("h2",{staticClass:"Skills__Headings--centered"},[t._v("Ability Mod.")]),t._v(" "),n("h2",{staticClass:"Skills__Headings--centered"},[t._v("Ranks")])])}]};var k={name:"App",components:{StatBlock:d,Skills:n("VU/8")(g,f,!1,function(t){n("D7Rc")},null,null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("StatBlock"),this._v(" "),e("Skills")],1)},staticRenderFns:[]};var p,_,S=n("VU/8")(k,v,!1,function(t){n("/y8d")},null,null).exports,y=n("NYxO"),C=n("fZjL"),P=n.n(C),U=n("bOdI"),w=n.n(U),b={namespaced:!0,state:(p={},w()(p,"str",{name:"Strength",value:10}),w()(p,"dex",{name:"Dexterity",value:10}),w()(p,"con",{name:"Constitution",value:10}),w()(p,"int",{name:"Intelligence",value:10}),w()(p,"wis",{name:"Wisdom",value:10}),w()(p,"cha",{name:"Charisma",value:10}),p),getters:{getAllStats:function(t){return P()(t)},getValue:function(t){return function(e){return t[e].value}},getModifier:function(t,e){return function(t){return Math.floor(e.getValue(t)/2)-5}},getFormattedModifier:function(t,e){return function(t){var n=e.getModifier(t);return""+(n>=0?"+":"-")+Math.abs(n)}},getFormattedAbbreviation:function(){return function(t){return t.toUpperCase()}}},mutations:{setValue:function(t,e){var n=e.value;t[e.stat].value=n>=0?n:0}}},x=n("d7EF"),M=n.n(x),V=n("W3Iv"),$=n.n(V),A=(_={},w()(_,"acrobatics",{name:"Acrobatics",stat:"dex",useUntrained:!0,armorCheckPenalty:!0}),w()(_,"appraise",{name:"Appraise",stat:"int",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"bluff",{name:"Bluff",stat:"cha",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"climb",{name:"Climb",stat:"str",useUntrained:!0,armorCheckPenalty:!0}),w()(_,"craft",{name:"Craft",stat:"int",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"diplomacy",{name:"Diplomacy",stat:"cha",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"disableDevice",{name:"Disable Device",stat:"dex",useUntrained:!1,armorCheckPenalty:!0}),w()(_,"disguise",{name:"Disguise",stat:"cha",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"escapeArtist",{name:"Escape Artist",stat:"dex",useUntrained:!0,armorCheckPenalty:!0}),w()(_,"fly",{name:"Fly",stat:"dex",useUntrained:!0,armorCheckPenalty:!0}),w()(_,"handleAnimal",{name:"Handle Animal",stat:"cha",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"heal",{name:"Heal",stat:"wis",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"intimidate",{name:"Intimidate",stat:"cha",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"knowledgeArcana",{name:"Knowledge (arcana)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeDungeoneering",{name:"Knowledge (dungeoneering)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeEngineering",{name:"Knowledge (engineering)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeGeography",{name:"Knowledge (geography)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeHistory",{name:"Knowledge (history)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeLocal",{name:"Knowledge (local)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeNature",{name:"Knowledge (nature)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeNobility",{name:"Knowledge (nobility)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgePlanes",{name:"Knowledge (planes)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"knowledgeReligion",{name:"Knowledge (religion)",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"linguistics",{name:"Linguistics",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"perception",{name:"Perception",stat:"wis",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"perform",{name:"Perform",stat:"cha",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"profession",{name:"Profession",stat:"wis",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"ride",{name:"Ride",stat:"dex",useUntrained:!0,armorCheckPenalty:!0}),w()(_,"senseMotive",{name:"Sense Motive",stat:"wis",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"sleightOfHand",{name:"Sleight of Hand",stat:"dex",useUntrained:!1,armorCheckPenalty:!0}),w()(_,"spellcraft",{name:"Spellcraft",stat:"int",useUntrained:!1,armorCheckPenalty:!1}),w()(_,"stealth",{name:"Stealth",stat:"dex",useUntrained:!0,armorCheckPenalty:!0}),w()(_,"survival",{name:"Survival",stat:"wis",useUntrained:!0,armorCheckPenalty:!1}),w()(_,"swim",{name:"Swim",stat:"str",useUntrained:!0,armorCheckPenalty:!0}),w()(_,"useMagicDevice",{name:"Use Magic Device",stat:"cha",useUntrained:!1,armorCheckPenalty:!1}),_),D={};$()(A).forEach(function(t){var e=M()(t,2),n=e[0],a=e[1];a.points=0,D[n]=a});var F={namespaced:!0,state:D,getters:{getAllSkills:function(t){return P()(t)},getSkill:function(t){return function(e){return t[e]}},getSkillTotal:function(t,e,n,a){return function(t){var n=e.getSkill(t),s=n.points;return s+=a["stats/getModifier"](n.stat),n.classSkill&&(s+=3),s}}},mutations:{setClassSkill:function(t,e){var n=e.skill,a=e.value;t[n].classSkill=a},setPoints:function(t,e){var n=e.skill,a=e.value;t[n].points=a}}};a.a.use(y.a);var E=new y.a.Store({modules:{stats:b,skills:F},strict:!1});a.a.config.productionTip=!1,new a.a({el:"#app",store:E,components:{App:S},template:"<App/>"})},gQWG:function(t,e){},"mqO+":function(t,e){},nqpA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7a87c741b8c25e1e3497.js.map