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
// 자바스크립트에서 display=none으로 숨겼다가 특정이벤트에 따라 다시 보이고 싶을 때
// 무조건 block을 쓰는게 아닌 그 선택자가 원래 가지고 있는 display속성으로 되돌리기
// dispaly:flex가 선택자에 원래 있었다면 자바스크립트도 display=flex
// display가 선택자에 없었다면? 원래 태그 고유속성에 따라 display=block 또는 display=inline

function popupShow(){
    popup.style.display = 'flex'; /* 버튼 클릭 시 숨겨둔 팝업 요소를 flex 방식으로 다시 보여줌 */
    popup_bg.style.display = 'block';
}

function popupDown(){
    popup.style.display = 'none'; /* 배경 클릭 시 팝업과 배경을 다시 숨김 상태로 변경 */
    popup_bg.style.display = 'none';
}
