// Elementy
const variables = document.querySelectorAll(".variable");
const inputBtn = document.querySelector(".next-btn");
const editBtn = document.querySelector(".btn-edit");
const liElement = document.querySelector(".position");
const ulElement = document.querySelector(".starter-box ul");
const value = document.querySelector(".starter-box ul .position");


// Zmienne
let short;
let short2;
let unit;
let box;
let BSA;
const positionHeader = document.querySelector(".position-header");
const inputValue = document.querySelector(".input").value;
// glowna zmienna do pobocznych funkcji
let left_side_short_mainPunctation = 0;
// głowna zmianna do glownej funkcji
let mainPunctation = 0;

// ------ LEWA KOMORA -------
// --Pomiary w krotkiej osi--

// Podaje uzytkownik
let LVEDV1;
let LVESV1;


// Wyniki
let LVEDV1__BSA;
let LVESV1__BSA;
let SV1;
let SV1__BSA;
let EF1;

//Funkcje  
const leftSide_short_first_step = function () {
    box = BSA = inputValue;
    short2 = "LVEDV 1:";
    variables[0].textContent = short2;
    creatElement("BSA", "m2")

};
const leftSide_short_second_step = function () {
    box = LVEDV1 = inputValue;


    creatElement("LVEDV1:", "ml")
    leftSide_short_third_step_inside()
};
// ta funkcja zadeklarowana jest w innej -> inside
const leftSide_short_third_step_inside = function () {
    box = LVEDV1__BSA = LVEDV1 / BSA;
    short2 = "LVESV1:";
    variables[0].textContent = short2;
    creatElement("LVEDV1 /BSA:", "ml/m2 ");
    leftSide_short_fourth_step_inside();
};
const leftSide_short_fourth_step_inside = function () {
    box = LVESV1 = inputValue;


    creatElement("LVESV1:", "ml");
    leftSide_short_fifth_step_inside()

};
const leftSide_short_fifth_step_inside = function () {
    box = LVESV1__BSA = LVESV1 / BSA;
    creatElement("LVESV1/BSA:", "ml/m2");
    leftSide_short_sixth_step_inside()

};
const leftSide_short_sixth_step_inside = function () {
    box = SV1 = LVEDV1 - LVESV1;
    creatElement("SV1", "ml");
    leftSide_short_seventh_step_inside()

};

const leftSide_short_seventh_step_inside = function () {
    box = SV1__BSA = SV1 / LVEDV1;
    creatElement("SV1/BSA", "ml/m2");
    leftSide_short_eight_step_inside()
};

const leftSide_short_eight_step_inside = function () {
    box = EF1 = SV1 / LVEDV1;
    short2 = "LVEDV2";
    variables[0].textContent = short2;
    creatElement("EF1", "%");

};


// --Pomiary w dlugiej osi--

// Podaje uzytkownik
let LVEDV2;
let LVESV2;


// Wyniki
let LVEDV2__BSA;
let LVESV2__BSA;
let SV2;
let SV2__BSA;
let EF2;

// Funkcje

const leftSide_first_step = function () {
    box = LVEDV2 = inputValue;


    creatElement("LVEDV 2:", "ml")
    leftSide_second_step_inside();
};
const leftSide_second_step_inside = function () {
    box = LVEDV1__BSA = LVEDV1 / BSA;
    short2 = "LVESV2";
    variables[0].textContent = short2;
    creatElement("LVEDV2/BSA:", "ml/m2");
    leftSide_third_step_inside();
};
const leftSide_third_step_inside = function () {
    box = LVESV2 = inputValue;


    creatElement("LVESV2:", "ml");
    leftSide_fourth_step_inside();

};
const leftSide_fourth_step_inside = function () {
    box = LVESV2__BSA = LVESV2 / BSA;
    creatElement("LVESV2/BSA:", "ml/m2");
    leftSide_fifth_step_inside();

};
const leftSide_fifth_step_inside = function () {
    box = SV2 = LVEDV2 - LVESV2;
    creatElement("SV2", "ml");
    leftSide_sixth_step_inside();

};
const leftSide_sixth_step_inside = function () {
    box = SV2__BSA = SV2 / LVEDV2;
    creatElement("SV2/BSA", "ml/m2");
    leftSide_seventh_step_inside();
};
const leftSide_seventh_step_inside = function () {
    box = EF2 = SV2 / LVEDV2;
    creatElement("EF1", "%");

};


// --Srednia z dwoch pomiarow -
// Wyniki
let LVEDV3;
let LVESV3;
let LVEDV3__BSA;
let LVESV3__BSA;
let SV3;
let SV3__BSA;
let EF3;

// Funkcje
const average_left_first_step = function () {
    box = LVEDV3 = (LVEDV1 + LVEDV2) / 2
    creatElement("LVEDV/BSA:", "ml");
    average_left_second_step_inside()
};

const average_left_second_step_inside = function () {
    box = LVEDV3__BSA = LVEDV3 / BSA;
    creatElement("LVEDV2/BSA:", "ml/m2");
    average_left_third_step_inside();
};
const average_left_third_step_inside = function () {
    box = LVESV3 = (LVESV1 + LVESV2) / 2
    creatElement("LVESV3:", "ml");
    average_left_fourth_step_inside();
};
const average_left_fourth_step_inside = function () {
    box = LVESV3__BSA = LVESV3 / BSA;
    creatElement("LVESV3/BSA:", "ml/m2");
    average_left_fifth_step_inside();

};
const average_left_fifth_step_inside = function () {
    box = SV3 = LVEDV3 - LVESV3;
    creatElement("SV3:", "ml");
    average_left_sixth_step_inside();
};
const average_left_sixth_step_inside = function () {
    box = SV3__BSA = SV3 / BSA;
    creatElement(" SV3/BSA:", "ml/m2");
    average_left_seventh_step_inside();
};
const average_left_seventh_step_inside = function () {
    box = EF3 = SV3 / LVEDV3;
    short2 = "RVEDV1";
    variables[0].textContent = short2;
    creatElement("EF3:", "ml/m2");

};







// ------ PRAWA KOMORA -------
// --Pomiary w krotkiej osi--

// Podaje uzytkownik
let RVEDV1;
let RVESV1;


// Wyniki
let RVEDV1__BSA;
let RVESV1__BSA;
let SV1_R;
let RSV1__BSA;
let EF1_R;


//Funkcje  

const rightSide_short_first_step = function () {
    box = RVEDV1 = inputValue;


    const newHeader = document.createElement("li");
    ulElement.appendChild(newHeader);
    newHeader.classList.add("position-header");
    newHeader.textContent = "Prawa Komora"
    creatElement("RVEDV1:", "ml")
    rightSide_short_second_step_inside()
};

const rightSide_short_second_step_inside = function () {
    box = RVEDV1__BSA = RVEDV1 / BSA;
    short2 = "RVESV1";
    variables[0].textContent = short2;
    creatElement("RVEDV1/BSA:", "ml/m2 ");
    rightSide_short_third_step_inside();
};
const rightSide_short_third_step_inside = function () {
    box = RVESV1 = inputValue;


    creatElement("RVESV1:", "ml");
    rightSide_short_fourth_step_inside()

};
const rightSide_short_fourth_step_inside = function () {
    box = RVESV1__BSA = RVESV1 / BSA;
    creatElement("RVESV1/BSA:", "ml/m2");
    rightSide_short_fifth_step_inside()

};
const rightSide_short_fifth_step_inside = function () {
    box = SV1_R = RVEDV1 - RVESV1;
    creatElement("SV1_R", "ml");
    rightSide_short_sixth_step_inside()

};

const rightSide_short_sixth_step_inside = function () {
    box = RSV1__BSA = SV1_R / RVEDV1;
    creatElement("SV1_R/BSA", "ml/m2");
    rightSide_short_seventh_step_inside()
};

const rightSide_short_seventh_step_inside = function () {
    box = EF1_R = SV1_R / RVEDV1;
    short2 = "RVEDV2";
    variables[0].textContent = short2;
    creatElement("EF1_R", "%");

};


// --Pomiary w dlugiej osi--
// Podaje uzytkownik
let RVEDV2;
let RVESV2;


// Wyniki
let RVEDV2__BSA;
let RVESV2__BSA;
let SV2_R;
let SV2__BSA_R;
let EF2_R;

// Funkcje

const rightSide_first_step = function () {
    box = RVEDV2 = inputValue;


    creatElement("RVEDV 2:", "ml")
    rightSide_second_step_inside();
};
const rightSide_second_step_inside = function () {
    box = RVEDV2__BSA = RVEDV2 / BSA;
    short2 = "RVESV2";
    variables[0].textContent = short2;
    creatElement("RVEDV2/BSA:", "ml/m2");
    rightSide_third_step_inside();
};
const rightSide_third_step_inside = function () {
    box = RVESV2 = inputValue;
    creatElement("RVESV2:", "ml");
    rightSide_fourth_step_inside();

};
const rightSide_fourth_step_inside = function () {
    box = RVESV2__BSA = RVESV2 / BSA;
    creatElement("RVESV2/BSA:", "ml/m2");
    rightSide_fifth_step_inside();

};
const rightSide_fifth_step_inside = function () {
    box = SV2_R = RVEDV2 - RVESV2;
    creatElement("SV2_R", "ml");
    rightSide_sixth_step_inside();

};
const rightSide_sixth_step_inside = function () {
    box = SV2__BSA_R = SV2_R / RVEDV2;
    creatElement("SV2_R/BSA", "ml/m2");
    rightSide_seventh_step_inside();
};
const rightSide_seventh_step_inside = function () {
    box = EF2_R = SV2_R / RVEDV2;
    creatElement("EF1", "%");
};


// --Srednia z dwoch pomiarow--
// Wyniki
let RVEDV3;
let RVESV3;
let RVEDV3__BSA;
let RVESV3__BSA;
let SV3_R;
let SV3__BSA_R;
let EF3_R;
const average_right_first_step = function () {
    box = RVEDV3 = (RVEDV1 + RVEDV2) / 2
    creatElement("RVEDV/BSA:", "ml");
    average_right_second_step_inside()
};

const average_right_second_step_inside = function () {
    box = RVEDV3__BSA = RVEDV3 / BSA;
    creatElement("RVEDV2/BSA:", "ml/m2");
    average_right_third_step_inside();
};
const average_right_third_step_inside = function () {
    box = RVESV3 = (RVESV1 + RVESV2) / 2
    creatElement("RVESV3:", "ml");
    average_right_fourth_step_inside();
};
const average_right_fourth_step_inside = function () {
    box = RVESV3__BSA = RVESV3 / BSA;
    creatElement("RVESV3/BSA:", "ml/m2");
    average_right_fifth_step_inside();

};
const average_right_fifth_step_inside = function () {
    box = SV3_R = RVEDV3 - RVESV3;
    creatElement("SV3_R:", "ml");
    average_right_sixth_step_inside();
};
const average_right_sixth_step_inside = function () {
    box = SV3__BSA_R = SV3_R / BSA;
    creatElement("SV3_R/BSA:", "ml/m2");
    average_right_seventh_step_inside();
};
const average_right_seventh_step_inside = function () {
    short2 = "LA";
    variables[0].textContent = short2;
    box = EF3_R = SV3_R / RVEDV3;
    creatElement("EF3_R:", "ml/m2");
};

// Lewy przedsionek 
let LA;
let LA__BSA;
let LAV;
let LAVI;
let LAVI__BSA

const vestibuleLeft_first_step = function () {
    box = LA = inputValue;
    const newHeader = document.createElement("li");
    ulElement.appendChild(newHeader);
    newHeader.classList.add("position-header");
    newHeader.textContent = "Lewy przedsionek"
    creatElement("LA:", "cm2");
    vestibuleLeft_second_step_inside();
};
const vestibuleLeft_second_step_inside = function () {
    box = LA__BSA = LA / BSA;
    short2 = "LAV";
    variables[0].textContent = short2;
    creatElement("LA/BSA:", "cm2/m2");
    vestibuleLeft_third_step_inside();
};
const vestibuleLeft_third_step_inside = function () {
    box = LAV = inputValue;
    creatElement("LAV:", "ml");
    vestibuleLeft_fourth_step_inside();
};
const vestibuleLeft_fourth_step_inside = function () {
    box = LAVI__BSA = LAV / BSA;
    short2 = "RA";
    variables[0].textContent = short2;
    creatElement("LAVI/BSA:", "ml/m2");
};

// Prawy przedsionek 
let RA;
let RA__BSA;
let RAV;
let RAVI;
let RAVI__BSA

const vestibuleRight_first_step = function () {
    box = RA = inputValue;
    const newHeader = document.createElement("li");
    ulElement.appendChild(newHeader);
    newHeader.classList.add("position-header");
    newHeader.textContent = "Prawy przedsionek"
    creatElement("RA:", "cm2");
    vestibuleRight_second_step_inside();
};
const vestibuleRight_second_step_inside = function () {
    box = RA__BSA = RA / BSA;
    short2 = "RAV";
    variables[0].textContent = short2;
    creatElement("RA/BSA:", "cm2/m2");
    vestibuleRight_third_step_inside();
};
const vestibuleRight_third_step_inside = function () {
    box = RAV = inputValue;
    creatElement("RAV:", "ml");
    vestibuleRight_fourth_step_inside();
};
const vestibuleRight_fourth_step_inside = function () {
    box = RAVI__BSA = RAV / BSA;
    short2 = "EPI";
    variables[0].textContent = short2;
    creatElement("RAV:", "ml/m2");
};

// Masa miesnia lewej komory
let MM;
let EPI;
let MM__BSA;


const weight_first_step = function () {
    box = EPI = inputValue;
    box = MM = EPI - LVEDV1
    short2 = "EPI";
    const newHeader = document.createElement("li");
    ulElement.appendChild(newHeader);
    newHeader.classList.add("position-header");
    newHeader.textContent = "Masa miesnia lewej komory"
    creatElement("MM:", "gr");
    weight_second_step_inside();
};
const weight_second_step_inside = function () {
    box = MM__BSA = MM / BSA;
    creatElement("MM/BSA:", "gr/m2");

};


//--- Funkcje ogolne---
const creatElement = function (short, unit) {
    // Tworzenie elementow
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newValue = document.createElement("span");




    // Umieszczenie stworzonych el.
    ulElement.appendChild(newLi);
    newLi.appendChild(newSpan);
    newLi.appendChild(newValue);



    //Nadawanie wartosci/klas
    newLi.classList.add("position");
    newSpan.classList.add("variable");



    newValue.classList.add("value")
    newValue.textContent = box + unit;


    newSpan.textContent = short;


};


const main = function () {

    if (mainPunctation == 0) {
        leftSide_short_first_step()
        mainPunctation++;
    } else if (mainPunctation == 1) {
        leftSide_short_second_step()
        mainPunctation++;
    } else if (mainPunctation == 2) {
        leftSide_first_step()
        mainPunctation++;
    } else if (mainPunctation == 3) {
        average_left_first_step()
        mainPunctation++;
    } else if (mainPunctation == 4) {
        rightSide_short_first_step()
        mainPunctation++;
    } else if (mainPunctation == 5) {
        rightSide_first_step()
        mainPunctation++;
    } else if (mainPunctation == 6) {
        average_right_first_step()
        mainPunctation++;
    } else if (mainPunctation == 7) {
        vestibuleLeft_first_step()
        mainPunctation++;
    } else if (mainPunctation == 8) {
        vestibuleRight_first_step()
        mainPunctation++;
    } else if (mainPunctation == 9) {
        weight_first_step()
        mainPunctation++;
    }

}
inputBtn.addEventListener("click", main);