"use strict";(self.webpackChunkecomm=self.webpackChunkecomm||[]).push([[932],{6666:(F,m,l)=>{l.r(m),l.d(m,{LoginComponent:()=>L});var u=l(6814),r=l(95),_=l(1120),e=l(4769),p=l(3599);function d(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"Email is Required"),e.qZA())}function f(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"email invalid"),e.qZA())}function c(n,a){if(1&n&&(e.TgZ(0,"div",13),e.YNc(1,d,2,0,"p",14),e.YNc(2,f,2,0,"p",14),e.qZA()),2&n){const i=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=i.loginForm.get("email"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("email"))?null:o.getError("email"))}}function h(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"password is Required"),e.qZA())}function Z(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"password must start with upperCase then from 6 to 10 "),e.qZA())}function v(n,a){if(1&n&&(e.TgZ(0,"div",13),e.YNc(1,h,2,0,"p",14),e.YNc(2,Z,2,0,"p",14),e.qZA()),2&n){const i=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=i.loginForm.get("password"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=i.loginForm.get("password"))?null:o.getError("pattern"))}}function T(n,a){1&n&&e._UZ(0,"i",15)}function A(n,a){if(1&n&&(e.TgZ(0,"p",16),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Oqu(i.errMsg)}}let L=(()=>{class n{constructor(i,t,o){this._FormBuilder=i,this._AuthService=t,this._Router=o,this.errMsg="",this.isLoading=!1,this.loginForm=this._FormBuilder.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.pattern(/^[A-Z][a-z0-9]{5,9}$/)]]})}handleForm(){this.loginForm.valid&&(this.isLoading=!0,this._AuthService.login(this.loginForm.value).subscribe({next:t=>{"success"==t.message&&(localStorage.setItem("eToken",t.token),this._AuthService.decodeUser(),this.isLoading=!1,this._Router.navigate(["./home"]))},error:t=>{this.errMsg=t.error.message,this.isLoading=!1}}))}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(r.qu),e.Y36(p.e),e.Y36(_.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:6,consts:[[1,"bg-main-light","p-4","rounded","my-3","w-75","mx-auto"],[3,"formGroup","ngSubmit"],[1,"mb-2"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"text-center"],[1,"btn-main","ms-auto","d-block",3,"disabled"],["class","fas fa-spinner fa-spin",4,"ngIf"],["routerLink","/forgetpassword",1,"link-primary","cursor-pointer"],["class","alert alert-danger mt-1",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"fas","fa-spinner","fa-spin"],[1,"alert","alert-danger","mt-1"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"login now"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return o.handleForm()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"email :"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.YNc(8,c,3,2,"div",5),e.TgZ(9,"div",2)(10,"label",6),e._uU(11,"password :"),e.qZA(),e._UZ(12,"input",7),e.qZA(),e.YNc(13,v,3,2,"div",5),e.TgZ(14,"div",8)(15,"button",9),e.YNc(16,T,1,0,"i",10),e._uU(17," login"),e.qZA(),e.TgZ(18,"a",11),e._uU(19,"Forget Password"),e.qZA()()(),e.YNc(20,A,2,1,"p",12),e.qZA()),2&t){let s,g;e.xp6(3),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&((null==(s=o.loginForm.get("email"))?null:s.touched)||(null==(s=o.loginForm.get("email"))?null:s.value.length)>0)),e.xp6(5),e.Q6J("ngIf",(null==(g=o.loginForm.get("password"))?null:g.errors)&&((null==(g=o.loginForm.get("password"))?null:g.touched)||(null==(g=o.loginForm.get("password"))?null:g.value.length)>0)),e.xp6(2),e.Q6J("disabled",o.loginForm.invalid),e.xp6(1),e.Q6J("ngIf",o.isLoading),e.xp6(4),e.Q6J("ngIf",o.errMsg)}},dependencies:[u.ez,u.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,_.rH]})}return n})()}}]);