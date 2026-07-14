/* index.js */
const userBirthday = document.querySelector("#user_birthday")
function birthdayInput() {
    userBirthday.value = 12;
}
const popup = document.querySelector('.flower_popup');
const popup_bg = document.querySelector('.popup_bg');

console.log(popup); /* popup이라는 변수가 잘 들어갔는지 확인 */
console.log(popup_bg);

popup.style.display = 'none'; /* 클릭 전에는 안 보이게 하기 */
popup_bg.style.display = 'none';

function popupShow(){
    popup.style.display = 'flex'; /* 튼 클릭 시 숨겨둔 팝업 요소를 flex 방식으로 다시 보여줌 */
    popup_bg.style.display = 'block';
}

function popupDown(){
    popup.style.display = 'none'; /* 배경 클릭 시 팝업과 배경을 다시 숨김 상태로 변경 */
    popup_bg.style.display = 'none';
}
