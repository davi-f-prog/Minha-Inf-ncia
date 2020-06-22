window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        icone1.className = "anima-icone1 img";
  } 
  else {
    icone1.className = "console-icone1 img";
}

if (document.body.scrollTop > 1770 || document.documentElement.scrollTop > 1770) {
    icone2.className = "anima-icone2";
} 
else {
icone2.className = "console-icone2";
}


if (document.body.scrollTop > 2540 || document.documentElement.scrollTop > 2540) {
    icone3.className = "anima-icone3";
} else {
icone3.className = "console-icone3";
}

if (document.body.scrollTop > 3310 || document.documentElement.scrollTop > 3310) {
    icone4.className = "anima-icone4";
} else {
icone4.className = "console-icone4";
}

if (document.body.scrollTop > 4100 || document.documentElement.scrollTop > 4100) {
    icone5.className = "anima-icone5";
} else {
icone5.className = "console-icone5";
}

if (document.body.scrollTop > 4950 || document.documentElement.scrollTop > 4950) {
    icone6.className = "anima-icone6";
} else {
icone6.className = "console-icone6";
}

if (document.body.scrollTop > 5720 || document.documentElement.scrollTop > 5720) {
    icone7.className = "anima-icone7";
} else {
icone7.className = "console-icone7";
}
}