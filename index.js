const confirm = document.querySelector(".confirm");
const continueb = document.querySelector(".continue");
const name = document.getElementById("name");
const cardnumber = document.getElementById("cardnumber");
const year = document.getElementById("year");
const month = document.getElementById("month");
const cvc = document.getElementById("cvc");
const form = document.querySelector("form");

const namesh = document.querySelector(".namesh");
const cardsh = document.querySelector(".cardsh");
const expsh = document.querySelector(".expsh");
const cvcsh = document.querySelector(".cvcsh");

const namee = document.querySelector(".namee");
const carde = document.querySelector(".carde");
const cardw = document.querySelector(".cardw");
const datee = document.querySelector(".datee");
const cvce = document.querySelector(".cvce");
const cardw1 = document.querySelector(".cardw1");

const colorRed = getComputedStyle(document.documentElement).getPropertyValue("--Redinputerrors");
const colorGray = getComputedStyle(document.documentElement).getPropertyValue("--Lightgrayishviolet");

const header = document.querySelector("header");
const formside = document.querySelector(".formside");

var namec = "Jane Appleseed";
var cardc = "0000 0000 0000 0000";
var expc = "00/00";
var cvcc = "000";

const dnamec = "Jane Appleseed";
const dcardc = "0000 0000 0000 0000";
const dexpc = "00/00";
const dcvcc = "000";

var expflag = true;

var flags = [true, true, true, true, true];
var overall = true;
cardnumber.addEventListener('input', function(event){
    var value = event.target.value.replace(/\s+/g, '');
    if(value.length > 16){
        value = value.slice(0, 16);
    }
    if (value.length > 0) {
        value = value.match(/.{1,4}/g).join(' '); // Add a space after every 4 digits
    }
    event.target.value = value;
})
confirm.addEventListener("click", function(event){
    event.preventDefault();
    if(name.value == ""){
        erroring(namee, name);
        flags[0] = false;
    }
    else{
        deerroring(namee, name);
        namec = name.value;
        flags[0] = true;
    }
    const withoutspace = cardnumber.value.replace(/\s/g, "");
    if(cardnumber.value == ""){
        erroring(carde, cardnumber);
        cardw.style.display = "none";
        cardw1.style.display = "none";
        flags[1] = false;
    }
    else if(withoutspace.length < 16){
        erroring(cardw1, cardnumber);
        carde.style.display = "none";
        cardw.style.display = "none";
        flags[1] = false;
    }
    else if(isNaN(withoutspace)){
        erroring(cardw, cardnumber);
        carde.style.display = "none";
        cardw1.style.display = "none";
        flags[1] = false;
    }
    else{
        deerroring(cardw, cardnumber);
        cardw1.style.display = "none";
        carde.style.display = "none";
        cardc = cardnumber.value;
        flags[1] = true;
    }

    if(year.value == ""){
        erroring(datee, year);
        flags[2] = false;
    }
    else{
        deerroring(datee, year);
        flags[2] = true;
    }

    if(month.value == ""){
        erroring(datee, month);
        flags[3] = false;
    }
    else{
        deerroring(datee, month);
        flags[3] = true;
    }

    if(cvc.value == ""){
        erroring(cvce, cvc);
        flags[4] = false;
    }
    else{
        deerroring(cvce, cvc);
        cvcc = cvc.value;
        flags[4] = true;
    }

    if(!flags[2] || !flags[3]){
        expflag = false;
        datee.style.display = "block";
    }

    if(expflag) expc = month.value + "/" + year.value;
    console.log(expc);
    expflag = true;

    flags.forEach(fl => {
        if(!fl) overall = false;
    })

    if(overall){
        formside.style.display = "none";
        header.style.display = "flex";
    }
    namesh.textContent = namec;
    cardsh.textContent = cardc;
    expsh.textContent = expc;
    cvcsh.textContent = cvcc;

    overall = true;
})
continueb.addEventListener("click", function(){
    form.reset();
    namesh.textContent = dnamec;
    cardsh.textContent = dcardc;
    expsh.textContent = dexpc;
    cvcsh.textContent = dcvcc;
    formside.style.display = "flex";
    header.style.display = "none";
})
function erroring(message, bordering, ){
    message.style.display = "block";
    bordering.style.border = `2px solid ${colorRed}`
}
function deerroring(message, bordering, ){
    message.style.display = "none";
    bordering.style.border = `2px solid ${colorGray}`
}
