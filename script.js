// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const inputEl = document.getElementById('from');
//console.log(inputEl);
const titleEl = document.querySelector('span');
//console.log(titleEl);
inputEl.addEventListener('keyup', () => titleEl.textContent = inputEl.value);


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const buttonEl = document.querySelector('.messageBtn');
const itemEl = document.querySelector('.message');

buttonEl.addEventListener('click', function (e) {
    itemEl.classList.add('animate_animate', 'animate_fadeInLeftBig');
    itemEl.style.visibility = 'visible';

});




// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formCheck = document.querySelector('form');
console.log(formCheck);
const inputOne = formCheck.querySelectorAll('input, select');
console.log(inputOne);
formCheck.addEventListener('submit', (e) => {
    inputOne.forEach(inputOne => {
        if (inputOne.value === '') {
            inputOne.classList.add('error');
            e.preventDefault();
            if (inputOne.value === '') {
                inputOne.style.backgroundColor = 'red';
            }

        }

    });

});


formCheck.addEventListener('submit', (e) => {
    if (!e.target.classList.contains('form_control')) {
        return;
    }
    if (e.target.value === '') {
        e.target.classList.add('error');
    } else {
        e.target.classList.remove('error');
    }
});














