// scrole to top
let spa = document.querySelector(".top")
let progr = document.querySelector(".progress")


window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    spa.style.cssText = `
    transform: translateX(200%);
    `

  } else {
    spa.style.cssText = `
    transform: translateX(40%);
    `
  }
  // Fill progress
  progr.style.width = `${window.scrollY * 100 / (document.body.scrollHeight - window.innerHeight)}%`


  spa.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  })
})

//end scrolle




let landingpage = document.querySelector(".landing-page")
let boltes = document.querySelector(".boltes")
let boltesspan = document.querySelectorAll(".boltes span")
let backgroundimges = document.querySelector(".backgroundimges")
let backgroundimgesall = document.querySelectorAll(".backgroundimges img")

window.addEventListener("load", width)
window.addEventListener("resize", width)

function width() {
  let mainwidth = landingpage.clientWidth * 5
  backgroundimges.style.cssText = `
   width:${mainwidth}px `
  backgroundimgesall.forEach((e) => {
    e.style.cssText = `
   width:${mainwidth / 5}px `
  })
}

function startInterval(maxCount) {
  let counter = 0;
  backgroundimges.style.transition = 'none';
  backgroundimges.style.transform = 'translateX(0)';
  let count = 0

  const interval = setInterval(() => {
    // العمليات التي تريد تنفيذها هنا
    //mange boltes
    if (count === 0) {
      loopimg()
      boltesspan[0].classList.add("activie")
      backgroundimges.style.transition = '1s';
      backgroundimges.style.transform = `translateX(${count}% )`;
      count += -20
    } else if (count === -20) {
      loopimg()
      boltesspan[1].classList.add("activie")
      backgroundimges.style.transition = '1s';
      backgroundimges.style.transform = `translateX(${count}% )`;
      count += -20

    } else if (count === -40) {
      loopimg()
      boltesspan[2].classList.add("activie")
      backgroundimges.style.transition = '1s';
      backgroundimges.style.transform = `translateX(${count}% )`;
      count += -20

    } else if (count === -60) {
      loopimg()
      boltesspan[3].classList.add("activie")
      backgroundimges.style.transition = '1s';
      backgroundimges.style.transform = `translateX(${count}% )`;
      count += -20

    } else if (count === -80) {
      loopimg()
      boltesspan[4].classList.add("activie")
      backgroundimges.style.transition = '1s';
      backgroundimges.style.transform = `translateX(${count}% )`;
      count += -20
    }

    if (counter === maxCount) {
      clearInterval(interval);// إيقاف الاستدعاء بعد الانتهاء من العدد المحدد من المرات
      setTimeout(() => {
        startInterval(maxCount); // إعادة تشغيل الاستدعاء بعد فترة من الزمن
        loopimg()
        boltesspan[0].classList.add("activie")
      }, 500); // انتظر 3 ثوانٍ قبل إعادة التشغيل (يمكنك تغيير الفترة حسب الحاجة)
    }
    counter++;
  }, 3000); // كل 5 ثوانٍ (قابل للتغيير)
}

// ابدأ العملية عندما يتم تحميل الصفحة أو عندما تحتاج للبدء
startInterval(5); // ابدأ الاستدعاء وقم بتحديد العدد المطلوب من المرات



function loopimg() {
  boltesspan.forEach((e) => {
    e.classList.remove("activie")
  })
}


window.onscroll = function () {
  let service = document.querySelector(".service")
  if (this.pageYOffset > service.offsetTop - this.innerHeight + service.offsetHeight) {
  }

}
// start header
// star links
let linkul = document.querySelector(".links ul")

document.querySelector(".bars").addEventListener("click",()=>{
linkul.classList.toggle("open")
})
window.addEventListener("click",(e)=>{
if( e.target !== document.querySelector(".bars i")){
  linkul.classList.remove("open")
}

})

window.addEventListener("resize",removeopen)
window.addEventListener("load",removeopen)
function removeopen(){
if(window.innerWidth>=1200){
  linkul.classList.remove("open")
}
}
// end links
// star links
document.querySelector(".signbars").addEventListener("click",()=>{
  document.querySelector(".sign").classList.toggle("signphone")
  })
  window.addEventListener("click",(e)=>{
  if(e.target !== document.querySelector(".sign") & e.target !== document.querySelector(".signbars i")){
    document.querySelector(".sign").classList.remove("signphone")
  }
  })
// end sign 

// end header

// start our menu 
let content = document.querySelector(".menu .content")
let categories = document.querySelector(".menu .categories")
let categorieslink = document.querySelectorAll(".menu .categories a")

let arreyimgs = ["/img/introducation1.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg", "/img/introducation5.jpg",
  "/img/introducation1.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg", "/img/introducation5.jpg",
  "/img/introducation1.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg", "/img/introducation5.jpg",
  "/img/introducation1.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg", "/img/introducation5.jpg",]

//object of imges
let imges = {
  shrimps: arreyimgs,
  crustaceans: ["/img/introducation2.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg",],
  sandwichs: ["/img/introducation3.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg",],
  casserole: ["/img/introducation4.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg",],
  rice: ["/img/introducation5.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg",],
  paste: ["/img/introducation1.jpg", "/img/introducation2.jpg", "/img/introducation3.jpg", "/img/introducation4.jpg",]
}

//start window
let stopcount = 0;
window.onscroll = function () {
  let menu = document.querySelector(".menu")
  let windowheight = window.innerHeight
  if ((window.pageYOffset) > (menu.offsetTop + menu.offsetHeight - windowheight)) {
    if (stopcount === 0) {
      let co = 0;
      let imeganimation = setInterval(() => {
        let sp = document.createElement("img")
        sp.src = `..${imges.shrimps[co]}`
        sp.classList.add("prodect")
        sp.style.cssText = `
      transition: .5s;
`
        content.appendChild(sp)
        co++

        //clearinterval
        if (co === imges.shrimps.length) {
          clearInterval(imeganimation);
        }
      }, 200)
    }
    stopcount += 1
  }
}

//links change
categorieslink.forEach((e) => {
  e.style.cssText = `
    opacity: .7;`
})
document.querySelector(".shrimps").style.cssText = `
  opacity: 1;`

//when click on link
categorieslink.forEach((e) => {
  e.addEventListener("click", () => {
    content.innerHTML = ""
    categorieslink.forEach((e) => {
      e.style.cssText = `
      opacity: .7;`
    })
    e.style.cssText = `
    opacity: 1;
    transition: .2s;`

    Object.keys(imges).forEach((k) => {
      if (e.className === `${k}`) {
        imges[k].forEach((img) => {
          let sp = document.createElement("img")
          sp.src = `..${img}`
          sp.classList.add("prodect")
          content.appendChild(sp)
          sp.style.cssText = `
            opacity: 0;
          `
          setTimeout(() => {
            sp.style.cssText = `
            opacity: 1;
            transition: .5s;
        `
          }, 500);
        })
      }
    })
  })
})

// start menu media 
let magemenu = document.querySelector(".menubars i")

//add class
magemenu.addEventListener("click",()=>{
  categories.classList.toggle("categoriesopen")
})

//click on anywhere close list
window.addEventListener("click",(e)=>{
  if(e.target !== magemenu ){
    categories.classList.remove("categoriesopen")
  }
  })
// end menu media 

// end menu page 
//create popup
window.addEventListener("click", (e) => {
  if (e.target.className === "prodect") {
    window.onscroll = function () {
      return false;
    }
    let popup = document.createElement("div")
    document.querySelector("body").appendChild(popup)
    popup.classList.add("popup")

    //create box
    let popupbox = document.createElement("div")
    popupbox.classList.add("popupbox")
    document.querySelector("body").appendChild(popupbox)
    let head = document.createElement("h3")
    head.innerHTML = `${e.target.className}`
    head.classList.add("popubhead")
    popupbox.appendChild(head)

    let imagetarget = document.createElement("img")
    imagetarget.src = e.target.src
    imagetarget.classList.add("imgpopup")
    popupbox.appendChild(imagetarget)

    //create details
    let descrition = document.createElement("div")
    let descritionhead = document.createElement("h3")
    let descritiontext = document.createElement("p")

    descrition.style.cssText = `
    padding: 0 10px;`
    descritionhead.innerHTML = "Details:"
    descritiontext.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in, cupiditate voluptas soluta est suscipit, itaque culpa incidunt quasi debitis officiis sit officia ratione! Distinctio vel ipsum quidem velit aspernatur."

    descrition.appendChild(descritionhead)
    descrition.appendChild(descritiontext)

    popupbox.appendChild(descrition)

    let closebuttub = document.createElement("span")
    closebuttub.classList.add("close")
    closebuttub.innerHTML = "X"
    popupbox.appendChild(closebuttub)


    //close popupe
    closebuttub.addEventListener("click", () => {
      popupbox.remove()
      popup.remove()
    })

  }
});


// start comments page
let client = document.querySelector(".client")
let clientbox = document.querySelectorAll(".client .box")
let bolets = document.querySelector(".bolets")
let boxarrey = [];
let boxnum = 1;
clientbox.forEach((e) => {
  e.classList.add(`box${boxnum}`)
  boxnum++
})
clientbox.forEach((e) => {
  boxarrey.push(e)
})

let arrebolets =[]
for(i=1;i<=boxarrey.length;i++){
  let sp = document.createElement("span")
  sp.classList.add(`bolet`)
  bolets.appendChild(sp)
arrebolets.push(sp)
}
arrebolets[2].classList.add("activie")

// end comments page
