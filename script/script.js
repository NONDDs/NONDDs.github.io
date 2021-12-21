document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const tabs = () => {
        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelector('.card-details__title');
        const cardImageItemElem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');
        const descriptionEngine = document.querySelector('.description__Engine');
        const descriptionModel = document.querySelector('.description__Model');
        const descriptionDriveunit = document.querySelector('.description__Driveunit');
        const descriptionColor = document.querySelector('.description__Color');
        const descriptionVidra = document.querySelector('.description__Vidra');

        const data = [
            {
                name: 'Придбати машину',
                img: 'img/Crossover Car.png',
                Model: 'Land Rover Range Rover Sport',
                Driveunit: 'Полный',
                Vidra: '2019',
                Color: 'Серая',
                price: '120990',
                Engine: 3
            },
            {
                name: 'Придбати машину',
                img: 'img/Sport Car.png',
                Model: 'BMW M4 CS',
                Driveunit: 'Полный',
                Vidra: '2017',
                Color: 'Синяя',
                price: '95990',
                Engine: 4
            },
            {
                name: 'Придбати машину',
                img: 'img/USA Car.png',
                Model: 'Lamborghini Huracan ',
                Driveunit: 'Передний',
                Vidra: '2016',
                Color: 'Оранжевый',
                price: '99990',
                Engine: 3.6
            },
        ];

        const deactive = () => {
            cardDetailChangeElems.forEach(btn => btn.classList.remove('active'))
        }

        cardDetailChangeElems.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if(!btn.classList.contains('active')) {
                    deactive();
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = data[i].name;
                    cardImageItemElem.src = data[i].img;
                    cardImageItemElem.alt = data[i].name;
                    cardDetailsPriceElem.textContent = data[i].price + '$'
                    descriptionEngine.textContent = `Двигатель ${data[i].Engine} л`;
                    descriptionModel.textContent = `Модель: ${data[i].Model} `;
                    descriptionDriveunit.textContent = `Привод: ${data[i].Driveunit} `;
                    descriptionColor.textContent = `Цвет: ${data[i].Color} `;
                    descriptionVidra.textContent = `Год выпуска: ${data[i].Vidra} `;
                }
            });
        })
    };

    const accordion = () => {
        const characteristicsTitle = document.querySelectorAll('.characteristics__title');
        const characteristicsDescription = document.querySelectorAll('.characteristics__description');
    
        characteristicsTitle.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                elem.classList.toggle('active');
                characteristicsDescription[i].classList.toggle('active'); 
            });
        }); 
    };

    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const modal = document.querySelector('.modal');
        const modalSubtitle = document.querySelector('.modal__subtitle');

        // if(!modalSubtitle.classList.contains('card-details__button_buy')){
        //     modalSubtitle.textContent = 'Оплата';
        // }

        cardDetailsButtonBuy.addEventListener('click', () => {
            modal.classList.add('open');
        });

        modal.addEventListener('click', () => {
            const target = event.target;
            if(target.classList.contains('modal__close') || target === modal) {
                modal.classList.remove('open');
            }
        });



        document.addEventListener('keydown', function(event) {
            if(event.key === "Escape"){
                modal.classList.remove('open');
            };
        });
    }

    const secondModal = () => {
        const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
        const secondModal = document.querySelector('.modal');
        const modalSecondSubtitle = document.querySelector('.modal__subtitle');

        
        // if(!modalSecondSubtitle.classList.contains('card-details__button_delivery')){
        //     modalSecondSubtitle.textContent = 'Доставка и оплата';
        // }


        cardDetailsButtonDelivery.addEventListener('click', () => {
            secondModal.classList.add('open');
        });

        secondModal.addEventListener('click', () => {
            const target = event.target;
            if(target.classList.contains('modal__close')) {
                modal.classList.remove('open');
            }
        });


//modal__subtitle-second
    }



    tabs();
    accordion();
    modal();
    secondModal();
});