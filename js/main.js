function PopUpShow() {
  document.getElementById('popup1').style.display = "flex";
  document.getElementById('nameForm').value = "Форма - зателефонуйте нам";
  document.getElementById('popup_content_name').innerText = "Заповніть форму";
  document.getElementById('popup_content_name').style.width="100%";
}
function PopUpShowItem1() {
  document.getElementById('popupItem').style.display = "flex";
  document.getElementById('nameForm2').value = "Форма - Biodine Jodis для дорослих";
  document.getElementById('popup_content_name2').innerText = "Biodine Jodis для дорослих";
  document.getElementById('popup_content_name2').style.width="100%";
}
function PopUpShowItem2() {
  document.getElementById('popupItem').style.display = "flex";
  document.getElementById('nameForm2').value = "Форма - Biodine Jodis для дітей";
  document.getElementById('popup_content_name2').innerText = "Biodine Jodis для дітей";
  document.getElementById('popup_content_name2').style.width="100%";
}
function PopUpShowItem3() {
  document.getElementById('popupItem').style.display = "flex";
  document.getElementById('nameForm2').value = "Форма - Biodine Jodis для вагітних";
  document.getElementById('popup_content_name2').innerText = "Biodine Jodis для вагітних";
  document.getElementById('popup_content_name2').style.width="100%";
}
function PopUpShowItem4() {
  document.getElementById('popupItem').style.display = "flex";
  document.getElementById('nameForm2').value = "Форма - Wheatgrass з додаванням йоду (15 саше по 30 мл)";
  document.getElementById('popup_content_name2').innerText = "Wheatgrass з додаванням йоду";
  document.getElementById('popup_content_name2').style.width="100%";
}
function PopUpShowItem5() {
  document.getElementById('popupItem').style.display = "flex";
  document.getElementById('nameForm2').value = "Форма - Wheatgrass з додаванням йоду (30 саше по 30 мл)";
  document.getElementById('popup_content_name2').innerText = "Wheatgrass з додаванням йоду";
  document.getElementById('popup_content_name2').style.width="100%";
}
function PopUpHideItem() {
  document.getElementById('popupItem').style.display = "none";
}
function PopUpHide() {
  document.getElementById('popup1').style.display = "none";
}
function PopUpHideItem() {
  document.getElementById('popupItem').style.display = "none";
}
function PopUpShow2() {
  $("#popupThanks").css('display', 'flex');
}

function PopUpHide2() {
  $("#popupThanks").hide();
  $("#PopUpHide").hide();

}



$('#form3').submit(function(e) {
  e.preventDefault()
  e.stopImmediatePropagation()
  $.post(
    'main.php', // адрес обработчика
    $("#form3").serialize(), // отправляемые данные

    function(msg) { // получен ответ сервера
      PopUpShow2();
    }
  );

  return false;
});
$('#form4').submit(function(e) {
  e.preventDefault()
  e.stopImmediatePropagation()
  $.post(
    'main2.php', // адрес обработчика
    $("#form4").serialize(), // отправляемые данные

    function(msg) { // получен ответ сервера
      PopUpShow2();
    }
  );

  return false;
});
