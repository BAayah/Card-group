let a = document.getElementById('h3')
let c = document.getElementById('h4')
let image = document.getElementById('img')
let main = document.getElementById('main')

let b =() =>{
    a.style.color = 'white'   
    main.style.backgroundImage = 'url(https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG)'
    main.style.border = '3px solid white' 
    // image.style.transform = 'rotate(360deg)'
      
}
setTimeout(() => {
    b()
}, 3000);

let d = () =>{
    a.innerHTML = 'Ayat'
    image.style.border = '2px solid red'
    c.style.color = 'white'
    c.innerHTML = 'Software Developer'
    // image.style.transform = 'rotate(360deg)'
    image.style.transition = '1s'
    document.getElementById("img").src="https://www.shutterstock.com/image-vector/face-expression-woman-blond-hair-260nw-1253667445.jpg";
    document.getElementById('instagram').href='https://www.instagram.com/ba_english_mind_kg/?next=%2F';
    document.getElementById('git').href='https://github.com/BAayah'
}
setTimeout(() => {
    d()
}, 5000);

let e = () =>{
    a.innerHTML = 'Elnura'
    image.style.border = '2px solid yellow'
    c.style.color = 'white'
    c.innerHTML = 'Software Developer'
    // image.style.transform = 'rotate(360deg)'
    image.style.transition = '1s'
    document.getElementById("img").src="https://www.shutterstock.com/image-vector/blonde-woman-cartoon-character-vector-260nw-462671290.jpg";
    document.getElementById('instagram').href='https://www.instagram.com/elnuraenglish/';
    document.getElementById('git').href='https://github.com/elyaSaipidinovna/elyaSaipidinovna'
}
setTimeout(() => {
    e()
}, 7000);

let f = () =>{
    a.innerHTML = 'Nurtilek'
    image.style.border = '2px solid green'
    c.style.color = 'white'
    c.innerHTML = 'Software Developer'
    // image.style.transform = 'rotate(360deg)'
    image.style.transition = '1s'
    document.getElementById("img").src="https://previews.123rf.com/images/solgas/solgas1407/solgas140700014/29863397-teenager-cartoon-boy-with-blond-hair.jpg";
    document.getElementById('instagram').href='https://www.instagram.com/nurnur9499/';
    document.getElementById('git').href='https://github.com/ali132002/ali132002'
}
setTimeout(() => {
    f()
}, 9000);

