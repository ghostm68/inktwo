import * as PIXI from "pixi.js"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"
import img7 from "./img/7.jpg"
import disp from "./img/displacement.png"
import fit from "math-fit"
import gsap from "gsap"
function loadImages(paths,whenLoaded){
    const imgs = [];
    const img0 = [];
    paths.forEach(function(path){
        const img = new Image();
        img.onload = function () {
            imgs.push(img)
            img0.push({path,img})
            if(imgs.length === paths.length) whenLoaded(img0)
        };
img.src = path;
    })
}
class Sketch {
constructor(){
    this.app = new PIXI.Application({ 
        // backgroundColor: 0xede3da,
        backgroundColor: 0x000000,
    resizeTo: window });
document.body.appendChild(this.app.view);
this.scroll=0;
this.scrollTarget=0;
this.margin=50;
this.width = (window.innerWidth - 2 * this.margin)/3;
this.height = window.innerHeight*0.8;
this.container = new PIXI.Container();
this.app.stage.addChild(this.container);
this.images = [img1,img2,img3,img4,img5,img6,img7];
this.ENTIREWIDTH = this.images.length*(this.width + this.margin)
loadImages(this.images, (images)=>{
    this.loadedImages = images;
    this.add()
    this.render()
    this.scrollEvent()
    this.addFilter()
})

}
addFilter(){
this.displacementSprite = PIXI.Sprite.from(disp);
this.app.stage.addChild(this.displacementSprite);
let target = {
    w:512,
    h:512,
}
let parent = {
    w:window.innerWidth,
    h:window.innerHeight
}
let cover = fit(target,parent)
this.displacementSprite.position.set(cover.left,cover.top)
this.displacementSprite.scale.set(cover.scale,cover.scale);

this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
this.displacementFilter.scale.x = 0;
this.displacementFilter.scale.y= 0
this.container.filters = [this.displacementFilter]
}
scrollEvent(){
document.addEventListener("mousewheel",(e)=>{
    this.scrollTarget = e.wheelDelta;
})

}
add(){
    let parent = {
        w:this.width,
        h:this.height,
    }
    this.thumbs = [];
    this.loadedImages.forEach((img,i)=>{
       let texture = PIXI.Texture.from(img.img);
       const sprite = new PIXI.Sprite(texture);
       const container = new PIXI.Container();
       let spriteContainer = new PIXI.Container();
    //    sprite.width= 100;
    //    sprite.height= 100;

let mask = new PIXI.Sprite(PIXI.Texture.WHITE)

mask.width = this.width
mask.height = this.height
sprite.mask = mask;

    sprite.anchor.set(0.5);

    sprite.position.set(
        sprite.texture.orig.width/2,
        sprite.texture.orig.height/2,

    )

let image = {
    w:sprite.texture.orig.width,
    h:sprite.texture.orig.height,
}
let cover = fit(image,parent)

spriteContainer.position.set(cover.left,cover.top)
spriteContainer.scale.set(cover.scale,cover.scale)



container.x = (this.margin + this.width)*i;
container.y = this.height/10;

spriteContainer.addChild(sprite)
container.interactive = true;
container.on("mouseover",this.mouseOn)
container.on("mouseout",this.mouseOut) 
container.addChild(spriteContainer)
container.addChild(mask)
this.container.addChild(container)
this.thumbs.push(container)
// console.log(this.thumbs)
    })
    
}

mouseOn(e){
    let el = e.target.children[0].children[0]
    gsap.to(el.scale, {
        duration:0.5,
    x:1.1,
    y:1.1,
    ease:"power3"
})
}
mouseOut(e){
    let el = e.currentTarget.children[0].children[0]
    gsap.to(el.scale, {
        duration:0.5,
        x:1,
        y:1,
        ease:"power3"
    })
}

calcPos(scroll,pos){
    let temp = (scroll + pos +this.ENTIREWIDTH + this.width + this.margin)%this.ENTIREWIDTH - this.width - this.margin;
    return temp;
}

render(){
    this.app.ticker.add(() => {
        this.app.renderer.render(this.container);
        this.direction = this.scroll>0?-1:1
        this.scroll -= (this.scroll - this.scrollTarget)*0.3
        this.scroll *=0.1
        this.thumbs.forEach((th)=>{
            th.position.x = this.scroll ? this.calcPos(this.scroll, th.position.x) : this.calcPos(-3, th.position.x)
        });
        this.displacementFilter.scale.x =  this.scroll ? 6*this.direction*Math.abs(this.scroll) : 0
    });
}
}
new Sketch();