(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const c=[{name:"Abier Rahma",birthday:"09 Januari 2002",avatar:"1_ggmnvc",social:{instagram:"https://instagram.com/abierrr_",twitter:"",facebook:""}},{name:"Ibnu Qoribtullah",birthday:"Unknown",avatar:"2_h8kmks",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Faiza",birthday:"05 November 2001",avatar:"3_ew28fb",social:{instagram:"https://instagram.com/faizatulaisyah_17",twitter:"",facebook:""}},{name:"Valentino Harpa",birthday:"14 Februari 2002",avatar:"4_kfdgd0",social:{instagram:"https://instagram.com/bukanvalen",twitter:"",facebook:""}},{name:"Aldo",birthday:"Unknown",avatar:"5_k6zotn",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Rhevy",birthday:"09 November 2002",avatar:"6_qswyya",social:{instagram:"https://instagram.com/rhevyrp",twitter:"",facebook:""}},{name:"Revaldo",birthday:"11 November 2002",avatar:"7_turelv",social:{instagram:"https://instagram.com/xxrevv",twitter:"",facebook:""}},{name:"Irfan",birthday:"24 Desember 2001",avatar:"8_usqfn4",social:{instagram:"https://instagram.com/irfantaufiqr_",twitter:"",facebook:""}},{name:"Rafi",birthday:"Unknown",avatar:"9_jzouw4",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Farida",birthday:"12 Januari 2003",avatar:"10_bow5xx",social:{instagram:"https://instagram.com/faridaaapd",twitter:"",facebook:""}},{name:"Khoiron",birthday:"14 April 2001",avatar:"11_pbcgip",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Frisca",birthday:"Unknown",avatar:"12_nvebq1",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Fian",birthday:"20 Februari 2002",avatar:"13_wnven3",social:{instagram:"https://instagram.com/rulasfia",twitter:"",facebook:""}},{name:"Reza",birthday:"Unknown",avatar:"14_lnqxfo",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Sesil",birthday:"08 Juli 2002",avatar:"15_krtigi",social:{instagram:"https://instagram.com/sesiliasj_",twitter:"",facebook:""}},{name:"Robin",birthday:"16 Oktober 2001",avatar:"16_rvyt3t",social:{instagram:"https://instagram.com/ach_muqorrobin",twitter:"",facebook:""}},{name:"Adit",birthday:"Unknown",avatar:"17_olv4ib",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Nanang",birthday:"10 Oktober 2001",avatar:"18_t85aga",social:{instagram:"https://instagram.com/nanang_aditya01",twitter:"",facebook:""}},{name:"Arya",birthday:"26 Agustus 2001",avatar:"19_o2kypf",social:{instagram:"https://instagram.com/maryaputrap",twitter:"",facebook:""}},{name:"Cahya",birthday:"11 Januari 2002",avatar:"20_bcqmku",social:{instagram:"https://instagram.com/cahyawm11",twitter:"",facebook:""}},{name:"Ranid",birthday:"11 Februari 2002",avatar:"21_jwlzkb",social:{instagram:"https://instagram.com/ranidyaputri",twitter:"",facebook:""}},{name:"Fahri",birthday:"01 Februari 2002",avatar:"22_mpnvvw",social:{instagram:"https://instagram.com/fahrimuda",twitter:"",facebook:""}},{name:"Riska",birthday:"20 Januari 2002",avatar:"23_g6go08",social:{instagram:"https://instagram.com/riskanggraenii_",twitter:"",facebook:""}},{name:"Sabil",birthday:"23 Desember 1999",avatar:"24_xlntk8",social:{instagram:"https://instagram.com/svbila",twitter:"",facebook:""}},{name:"Reyhana",birthday:"Unknown",avatar:"25_eb1ueh",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Harits",birthday:"Unknown",avatar:"26_gofzcj",social:{instagram:"https://instagram.com/",twitter:"",facebook:""}},{name:"Wachid",birthday:"08 November 2001",avatar:"27_kb5elw",social:{instagram:"https://instagram.com/wachid7493",twitter:"",facebook:""}},{name:"Tika",birthday:"15 Maret 2002",avatar:"28_mehoo4",social:{instagram:"https://instagram.com/tikazhraf",twitter:"",facebook:""}}];let m=document.querySelector("#class_member"),l=c.filter((o,t)=>{if((t+1)%4===0)return!0}).map((o,t)=>c.slice(t*4,(t+1)*4));function s(o){return`https://res.cloudinary.com/rulasfia/image/upload/c_scale,w_540/v1663838342/d3-itb-2020/${o}.webp`}function f(o){const[t,e,i,a]=o;return`
    <div class="row">
      <div class="col">
        <span></span>
        <a target="_blank" href="${s(t.avatar)}" data-lightbox="roadtrip">
          <img loading="lazy" src="${s(t.avatar)}" alt="${t.name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${t.name}</h3>
        <p>${t.birthday}</p>
        <div class="social-link">
          <a href="${t.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${t.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${t.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span></span>
        <a target="_blank" href="${s(e.avatar)}" data-lightbox="roadtrip">
          <img loading="lazy" src="${s(e.avatar)}" alt="${e.name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${e.name}</h3>
        <p>${e.birthday||"Unknown"}</p>
        <div class="social-link">
          <a href="${e.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${e.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${e.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <h3>${i.name}</h3>
        <p>${i.birthday||"Unknown"}</p>
        <div class="social-link">
          <a href="${i.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${i.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${i.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span class="arrow"></span>
        <a target="_blank" href="${s(i.avatar)}" data-lightbox="roadtrip">
          <img loading="lazy" src="${s(i.avatar)}" alt="${i.name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${a.name}</h3>
        <p>${a.birthday||"Unknown"}</p>
        <div class="social-link">
          <a href="${a.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${a.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${a.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span class="arrow"></span>
        <a target="_blank" href="${s(a.avatar)}" data-lightbox="roadtrip">
          <img loading="lazy" src="${s(a.avatar)}" alt="${a.name}"/>
        </a>
      </div>
    </div>
    `}l.forEach(o=>{m.insertAdjacentHTML("beforeend",f(o))});
