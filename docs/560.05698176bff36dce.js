"use strict";(self.webpackChunkecomm=self.webpackChunkecomm||[]).push([[560],{6560:(b,u,a)=>{a.r(u),a.d(u,{RegisterComponent:()=>Q});var d=a(6814),i=a(95),e=a(4769),f=a(3599),c=a(1120);function Z(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"Name is Required"),e.qZA())}function h(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"min length 3"),e.qZA())}function v(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"max length 20"),e.qZA())}function T(r,l){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,Z,2,0,"p",18),e.YNc(2,h,2,0,"p",18),e.YNc(3,v,2,0,"p",18),e.qZA()),2&r){const o=e.oxw();let n,t,s;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("name"))?null:t.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(s=o.registerForm.get("name"))?null:s.getError("maxlength"))}}function q(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"Email is Required"),e.qZA())}function w(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"email invalid"),e.qZA())}function x(r,l){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,q,2,0,"p",18),e.YNc(2,w,2,0,"p",18),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("email"))?null:t.getError("email"))}}function A(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"password is Required"),e.qZA())}function F(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"password must start with upperCase then from 6 to 10 "),e.qZA())}function I(r,l){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,A,2,0,"p",18),e.YNc(2,F,2,0,"p",18),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("password"))?null:t.getError("pattern"))}}function R(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"rePassword is Required"),e.qZA())}function C(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"Password confirmation is incorrect "),e.qZA())}function U(r,l){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,R,2,0,"p",18),e.YNc(2,C,2,0,"p",18),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("rePassword"))?null:t.getError("mismatch"))}}function E(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1,"phone is Required"),e.qZA())}function N(r,l){1&r&&(e.TgZ(0,"p"),e._uU(1," accept only egypt phone numbers"),e.qZA())}function P(r,l){if(1&r&&(e.TgZ(0,"div",17),e.YNc(1,E,2,0,"p",18),e.YNc(2,N,2,0,"p",18),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("phone"))?null:t.getError("pattern"))}}function J(r,l){1&r&&e._UZ(0,"i",19)}function Y(r,l){if(1&r&&(e.TgZ(0,"p",20),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Oqu(o.errMsg)}}let Q=(()=>{class r{constructor(o,n,t){this._FormBuilder=o,this._AuthService=n,this._Router=t,this.errMsg="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[A-Z][a-z0-9]{5,9}$/)]],rePassword:[""],phone:["",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)]]},{validators:this.confirmPassword})}confirmPassword(o){const n=o.get("password")?.value,t=o.get("rePassword")?.value;return n===t?null:{mismatch:!0}}handleForm(){this.registerForm.valid&&(this.isLoading=!0,this._AuthService.register(this.registerForm.value).subscribe({next:n=>{"success"==n.message&&(this.isLoading=!1,this._Router.navigate(["./login"]))},error:n=>{this.errMsg=n.error.message,this.isLoading=!1}}))}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(i.qu),e.Y36(f.e),e.Y36(c.F0))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:33,vars:9,consts:[[1,"bg-main-light","p-4","rounded","my-3","w-75","mx-auto"],[3,"formGroup","ngSubmit"],[1,"mb-2"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword",1,"form-control"],["for","phone"],["formControlName","phone","type","text","id","phone",1,"form-control"],[1,"btn-main","ms-auto","d-block",3,"disabled"],["class","fas fa-spinner fa-spin",4,"ngIf"],["class","alert alert-danger mt-1",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"fas","fa-spinner","fa-spin"],[1,"alert","alert-danger","mt-1"]],template:function(n,t){if(1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"Register Now"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"name :"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.YNc(8,T,4,3,"div",5),e.TgZ(9,"div",2)(10,"label",6),e._uU(11,"email :"),e.qZA(),e._UZ(12,"input",7),e.qZA(),e.YNc(13,x,3,2,"div",5),e.TgZ(14,"div",2)(15,"label",8),e._uU(16,"password :"),e.qZA(),e._UZ(17,"input",9),e.qZA(),e.YNc(18,I,3,2,"div",5),e.TgZ(19,"div",2)(20,"label",10),e._uU(21,"rePassword :"),e.qZA(),e._UZ(22,"input",11),e.qZA(),e.YNc(23,U,3,2,"div",5),e.TgZ(24,"div",2)(25,"label",12),e._uU(26,"phone :"),e.qZA(),e._UZ(27,"input",13),e.qZA(),e.YNc(28,P,3,2,"div",5),e.TgZ(29,"button",14),e.YNc(30,J,1,0,"i",15),e._uU(31," Register"),e.qZA(),e.YNc(32,Y,2,1,"p",16),e.qZA()()),2&n){let s,g,m,p,_;e.xp6(3),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(s=t.registerForm.get("name"))?null:s.errors)&&((null==(s=t.registerForm.get("name"))?null:s.touched)||(null==(s=t.registerForm.get("name"))?null:s.value.length)>0)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.registerForm.get("email"))?null:g.errors)&&((null==(g=t.registerForm.get("email"))?null:g.touched)||(null==(g=t.registerForm.get("email"))?null:g.value.length)>0)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.registerForm.get("password"))?null:m.errors)&&((null==(m=t.registerForm.get("password"))?null:m.touched)||(null==(m=t.registerForm.get("password"))?null:m.value.length)>0)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.registerForm.get("rePassword"))?null:p.errors)&&((null==(p=t.registerForm.get("rePassword"))?null:p.touched)||(null==(p=t.registerForm.get("rePassword"))?null:p.value.length)>0)),e.xp6(5),e.Q6J("ngIf",(null==(_=t.registerForm.get("phone"))?null:_.errors)&&((null==(_=t.registerForm.get("phone"))?null:_.touched)||(null==(_=t.registerForm.get("phone"))?null:_.value.length)>0)),e.xp6(1),e.Q6J("disabled",t.registerForm.invalid),e.xp6(1),e.Q6J("ngIf",t.isLoading),e.xp6(2),e.Q6J("ngIf",t.errMsg)}},dependencies:[d.ez,d.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return r})()}}]);