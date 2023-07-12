import{k as m,o as r,c as _,f as s,F as x,l as R,t as c,n as b,p as w,q as I,r as p,b as S,e as g,u as y,i as f,d as $,m as z,a as v,w as D,z as F,y as B}from"./index-ee1e62b8.js";const M={class:"container"},A={class:"main__info"},C={class:"main__info-item-name"},L={class:"main__info-item-text"},N={__name:"Info",props:{item:Object},setup(t){const e=t,i=m(()=>[{name:"Бюджет",text:e.item.budget?"$"+e.item.budget:"Нет информации"},{name:"Сборы",text:e.item.revenue?"$"+e.item.revenue:"Нет информации"},{name:"Статус",text:e.item.status},{name:"Исходное название",text:e.item.original_title||e.item.original_name}]);return(n,o)=>(r(),_("div",M,[s("div",A,[(r(!0),_(x,null,R(i.value,a=>(r(),_("div",{class:"main__info-item",key:a.name},[s("span",C,c(a.name),1),s("span",L,c(a.text),1)]))),128))])]))}},U=b("trailer",{state:()=>({url:"https://api.themoviedb.org/3/",movie:null,tv:null}),actions:{async getTrailer({type:t,id:e}){try{let i=await w.get(`${this.url}${t}/${e}/videos?api_key=${I}&language=ru-RU`);t=="movie"?this.movie=i.data.results:t=="tv"&&(this.tv=i.data.results)}catch{console.error("ошибка при получении трейлеров")}}}}),V={class:"main__intro"},Y={alt:"",class:"main__intro-poster"},j={class:"main__intro-block"},O={class:"main__intro-left"},q={class:"main__intro-left-title"},E={class:"main__intro-left-text"},G={class:"main__intro-left-descr"},K={class:"main__intro-right"},H={alt:"",class:"main__intro-right-img"},J={class:"main__intro-actors"},P=s("h2",{class:"main__intro-actors-title"},"В главных ролях",-1),Q={__name:"Intro",props:{type:String,item:Object},setup(t){const e=t,i=U();i.getTrailer({type:e.type,id:e.item.id});const n=m(()=>e.type=="movie"?i.movie:e.type=="tv"?i.tv:""),o=m(()=>new Date(e.item.release_date).getFullYear()||new Date(e.item.first_air_date).getFullYear()),a=m(()=>e.item.genres.reduce((l,u)=>l+", "+u.name,"")),h=m(()=>{let l=e.type=="movie"?e.item.runtime:e.type=="tv"?e.item.episode_run_time:"",u=Math.floor(l/60),d=l%60;return u==0?d+"m":u+"h "+d+"m"});return(l,u)=>{const d=p("Trailer"),T=p("Actors"),k=S("lazy");return r(),_("div",V,[g(s("img",Y,null,512),[[k,y(f)+t.item.poster_path]]),s("div",j,[s("div",O,[s("h1",q,c(t.item.title||t.item.name),1),s("p",E,c(t.item.overview||"Нет описания"),1),s("p",G,[s("span",null,c(o.value)+c(a.value),1),s("span",null,c(h.value),1)]),n.value&&n.value.length>0?(r(),$(d,{key:0,id:n.value[0].key},null,8,["id"])):z("",!0)]),s("div",K,[g(s("img",H,null,512),[[k,y(f)+t.item.backdrop_path]])]),s("div",J,[P,v(T,{type:t.type,id:t.item.id,count:"6"},null,8,["type","id"])])])])}}};const W={class:"main__rec"},X={class:"container"},Z=s("h2",{class:"main__rec-title"},"Рекомендации",-1),ee={class:"main__rec-list"},te={alt:"",class:"main__rec-list-item-img"},se={class:"main__rec-list-item-title"},ie={__name:"Recommend",props:{type:String,getRec:Array},setup(t){return(e,i)=>{const n=p("router-link"),o=S("lazy");return r(),_("div",W,[s("div",X,[Z,s("div",ee,[(r(!0),_(x,null,R(t.getRec,a=>(r(),$(n,{key:a.id,to:`${a.id}`,class:"main__rec-list-item"},{default:D(()=>[g(s("img",te,null,512),[[o,y(f)+a.backdrop_path]]),s("h2",se,c(a.name||a.title),1)]),_:2},1032,["to"]))),128))])])])}}},ae=b("rec",{state:()=>({url:"https://api.themoviedb.org/3/",movies:null,tvs:null}),actions:{async getRec({type:t,id:e}){try{let i=await w.get(`${this.url}${t}/${e}/recommendations?api_key=${I}&language=ru-RU`);t=="movie"?this.movies=i.data.results:t=="tv"&&(this.tvs=i.data.results)}catch{console.error("ошибка при получении рекомендованных данных")}}}}),ne={key:0,class:"main__media"},re={__name:"Media",props:{type:String},setup(t){const e=t,i=F(),n=B(),o=ae();setTimeout(()=>{n.getItemId({type:e.type,id:i.params.id}),o.getRec({type:e.type,id:i.params.id})},500);const a=m(()=>e.type=="movie"?n.movie:e.type=="tv"?n.tv:""),h=m(()=>{if(o.movies||o.tvs)return(e.type=="movie"?o.movies:e.type=="tv"?o.tvs:"").slice(0,4)});return(l,u)=>{const d=p("Loader");return a.value?(r(),_("div",ne,[v(Q,{type:t.type,item:a.value},null,8,["type","item"]),v(N,{item:a.value},null,8,["item"]),v(ie,{type:t.type,getRec:h.value},null,8,["type","getRec"])])):(r(),$(d,{key:1}))}}};export{re as _};
