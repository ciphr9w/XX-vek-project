const startButton = document.getElementById("startButton");

const timeline = document.getElementById("timeline");

const timelineSection =
    document.getElementById("timelineSection");


// =========================
// MODAL
// =========================

const eraModal =
    document.getElementById("eraModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalIcon =
    document.getElementById("modalIcon");

const modalYear =
    document.getElementById("modalYear");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalFacts =
    document.getElementById("modalFacts");

const modalDetailed =
    document.getElementById("modalDetailed");


// =========================
// ДАННЫЕ О ЭПОХАХ
// =========================

const detailedStories = {

    1: `
        Начало XX века стало временем постепенного
        перехода от привычных способов жизни к новым
        технологиям. Электричество начинает активно
        использоваться в городах, появляются электрические
        фонари и освещение в домах.

        Одновременно совершенствуются средства связи.
        Телефон позволяет людям разговаривать друг с другом
        на расстоянии, а телеграф используется для передачи
        коротких сообщений на большие расстояния.

        Благодаря этим технологиям расстояние между людьми
        постепенно перестаёт быть таким серьёзным препятствием.
        Информация начинает передаваться значительно быстрее,
        чем раньше.
    `,

    2: `
        В 1920–1930-е годы огромную роль начинает играть
        радио. В отличие от телефона и телеграфа, оно позволяет
        одновременно передавать информацию большому количеству
        людей.

        Радиопередачи становятся новым способом получать
        новости, слушать музыку, образовательные программы
        и другие передачи. Радио постепенно входит в жизнь
        обычных семей и становится одним из главных средств
        массовой информации.

        Теперь важные сообщения можно было услышать практически
        одновременно во многих местах. Это сильно изменило
        скорость распространения информации.
    `,

    3: `
        В середине XX века всё большую роль начинает играть
        телевидение. Оно объединило возможности радио
        с изображением и позволило людям не только слышать,
        но и видеть происходящие события.

        Телевизоры постепенно появляются в домах.
        Люди смотрят новости, фильмы, спортивные соревнования,
        концерты и другие передачи.

        Телевидение становится важной частью массовой культуры.
        Информация теперь воспринимается сразу через несколько
        каналов — человек одновременно видит изображение
        и слышит звук.
    `,

    4: `
        В 1960–1970-е годы особенно быстро развиваются
        электронные технологии. Компьютеры сначала занимают
        целые помещения и используются главным образом
        в научных организациях, промышленности и крупных
        учреждениях.

        Одновременно развивается спутниковая связь.
        Искусственные спутники Земли позволяют передавать
        телевизионные сигналы и другую информацию на огромные
        расстояния.

        Космические технологии начинают влиять не только
        на исследования космоса, но и на обычную связь
        между людьми на Земле.
    `,

    5: `
        В 1980-е годы компьютерная техника становится
        значительно доступнее. Вместо огромных машин
        появляются персональные компьютеры, которыми могут
        пользоваться отдельные люди.

        Компьютеры начинают использоваться в офисах,
        учебных заведениях, научной работе и постепенно
        появляются в домах.

        Информация всё чаще создаётся и хранится
        в цифровом виде. Человек получает возможность
        не только читать или смотреть информацию,
        но и самостоятельно создавать, изменять
        и сохранять её с помощью компьютера.
    `,

    6: `
        В 1990-е годы начинается стремительное распространение
        Интернета. Компьютеры получают возможность связываться
        друг с другом через глобальную сеть.

        Особенно важным событием становится появление
        Всемирной паутины — World Wide Web. Благодаря ей
        пользователи получают удобный способ находить
        и просматривать информацию на разных сайтах.

        Интернет постепенно становится новым пространством
        для общения, поиска информации и обмена данными.
        К концу XX века начинается переход к цифровому
        информационному обществу.
    `
};


// =========================
// ЗАГРУЗКА ДАННЫХ
// =========================

async function loadTimeline() {

    try {

        const response = await fetch(
            "https://kixilly.pythonanywhere.com/api/eras"
        );


        if (!response.ok) {

            throw new Error(
                "Не удалось получить данные"
            );

        }


        const eras = await response.json();


        timeline.innerHTML = "";


        // =========================
        // СОЗДАНИЕ КАРТОЧЕК
        // =========================

        eras.forEach((era) => {

            const card =
                document.createElement("article");


            card.classList.add(
                "timeline-card"
            );


            card.innerHTML = `

                <div class="timeline-image">

                    <img
                        src="images/${era.image}"
                        alt="${era.title}"
                    >

                </div>

                <div class="timeline-mini-icon">
                    ${era.icon}
                </div>

                <span class="timeline-year">
                    ${era.year}
                </span>

                <h3>
                    ${era.title}
                </h3>

                <p>
                    ${era.description}
                </p>

                <div class="facts">

                    ${era.facts.map(fact => `

                        <div class="fact">

                            <span>+</span>

                            ${fact}

                        </div>

                    `).join("")}

                </div>

                <div class="open-hint">
                    Нажмите, чтобы узнать больше →
                </div>

            `;


            // =========================
            // ОТКРЫТИЕ ПОДРОБНОГО ОКНА
            // =========================

            card.addEventListener(
                "click",
                () => {

                    modalImage.src =
                        `images/${era.image}`;

                    modalImage.alt =
                        era.title;


                    modalIcon.textContent =
                        era.icon;


                    modalYear.textContent =
                        era.year;


                    modalTitle.textContent =
                        era.title;


                    modalDescription.textContent =
                        era.description;


                    // Подробный рассказ

                    modalDetailed.textContent =
                        detailedStories[era.id];


                    // Очищаем старые факты

                    modalFacts.innerHTML = "";


                    // Добавляем факты

                    era.facts.forEach((fact) => {

                        const factElement =
                            document.createElement(
                                "div"
                            );


                        factElement.classList.add(
                            "modal-fact"
                        );


                        factElement.innerHTML = `

                            <span>✓</span>

                            ${fact}

                        `;


                        modalFacts.appendChild(
                            factElement
                        );

                    });


                    // Показываем окно

                    eraModal.classList.add(
                        "active"
                    );


                    // Запрещаем прокрутку страницы

                    document.body.style.overflow =
                        "hidden";

                }
            );


            timeline.appendChild(card);

        });


    } catch (error) {

        console.error(error);


        timeline.innerHTML = `

            <p>

                Не удалось загрузить данные.

                Проверьте, запущен ли
                Python-сервер.

            </p>

        `;

    }

}


// =========================
// КНОПКА "НАЧАТЬ ПУТЕШЕСТВИЕ"
// =========================

startButton.addEventListener(
    "click",
    () => {

        timelineSection.scrollIntoView({

            behavior: "smooth"

        });

    }
);


// =========================
// ФУНКЦИЯ ЗАКРЫТИЯ ОКНА
// =========================

function closeEraModal() {

    eraModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


// =========================
// КНОПКА ЗАКРЫТИЯ
// =========================

closeModal.addEventListener(
    "click",
    closeEraModal
);


// =========================
// КЛИК ПО ФОНУ
// =========================

eraModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === eraModal
        ) {

            closeEraModal();

        }

    }
);


// =========================
// КЛАВИША ESC
// =========================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            eraModal.classList.contains("active")
        ) {

            closeEraModal();

        }

    }
);


// =========================
// ЗАПУСК
// =========================

/* =========================
   ПОЯВЛЕНИЕ ПРЕДМЕТОВ ПРИ СКРОЛЛЕ
   ========================= */

const objectItems = document.querySelectorAll('.object-item');

const objectObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                objectObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

objectItems.forEach((item) => {
    objectObserver.observe(item);
});

loadTimeline();