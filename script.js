function createPageSec3Components(image,author,title,discription){
    const pageSec3Artlicles = document.querySelector(".page-sec3-article")
    const component = document.createElement("div")
    component.classList.add("article-components")
    const componentArticle = document.createElement("div")
    componentArticle.classList.add("article-text-components")
    const titleSpan = document.createElement("span")
    titleSpan.textContent = title
    titleSpan.classList.add("title-span")
    const discriptionSpan1 = document.createElement("span")
    discriptionSpan1.textContent = discription
    discriptionSpan1.classList.add("description-span")
    const authorSpan = document.createElement("span")
    authorSpan.textContent = author
    authorSpan.classList.add("author-span")
    //
    image.classList.add("article-img")
    //
    componentArticle.appendChild(authorSpan)
    componentArticle.appendChild(titleSpan)
    componentArticle.appendChild(discriptionSpan1)
    component.appendChild(image)
    component.appendChild(componentArticle)
    
    //
    pageSec3Artlicles.appendChild(component)
}

const currencyImg = new Image();
currencyImg.src = "./images/image-currency.jpg";

const restaurantImg = new Image();
restaurantImg.src = "./images/image-restaurant.jpg"

const planeImg = new Image();
planeImg.src = "./images/image-plane.jpg"

const confettiImg = new Image();
confettiImg.src = "./images/image-confetti.jpg"

const components = [
    {
        image: currencyImg,
        author: "By Claire Robinson",
        title: "Receive money in any currency with no fees",
        discription: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …."
    },
    {
        image: restaurantImg,
        author: "By Wilson Hutton",
        title: "Treat yourself without worrying about money",
        discription: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …."
    },
    {
        image: planeImg,
        author: "By Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        discription: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …"
    },
    {
        image: confettiImg,
        author: "By Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        discription: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
    }
]

for (let i = 0; i < components.length; i++){
    const image = components[i].image
    const author = components[i].author
    const title = components[i].title
    const description = components[i].discription
    createPageSec3Components(image,author,title,description)
}