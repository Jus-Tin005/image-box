var getImageBoxes = document.querySelectorAll(".image-box"); // NodeList
// console.log(getImageBoxes);

getImageBoxes.forEach((getImageBox,idx) => {
        // console.log(getImageBox);
        // console.log(idx);

        getImageBox.addEventListener("click",() => {
                showBox(idx);
        });

});



function showBox(idx){
        getImageBoxes.forEach((imagebox,curidx) => {
                // console.log("from parameter = " ,idx);  // notice herre = idx from array
                // console.log("from current = " , curidx); // notice herre = idx from imageboxes

                if(idx === curidx) {
                        imagebox.classList.add("show");

                        imagebox.addEventListener("click",(e) => {
                                // console.log(e);
                                // console.log(e.target);
                                // console.log(e.target.className);

                                if(e.target.className === "btn-close") {
                                        imagebox.classList.remove("show");
                                }

                                if(e.target.className === "btn") {
                                        const subBtn = imagebox.querySelector(".btn");
                                        // const subBtn = getImageBoxes[idx].querySelector(".btn");
                                        subBtn.textContent = "Subscribed";
                                }
                        });
                }else {
                        imagebox.classList.remove("show");
                }

        });
}


// for imagebox
/*
const btns = document.querySelectorAll(".btn");
const subBtn = getImageBoxes[0].querySelector(".btn");

*/
