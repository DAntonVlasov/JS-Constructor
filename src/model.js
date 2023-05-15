import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from './classes/blocks'

const text = `
Крутые видео и уроки по ДжаваСкрипт там <a href="https://youtube.com" target="_blank">Ютуб</a>. Тут ты найдешь исчерпывающую информация полюбым аспектам языка  `

export const model = [
    new TitleBlock ('Конструктор сайтов на ДжаваСкрипт', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
          }
    }),
    
    new ImageBlock (image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
          },
          imageStyles: {
            width:'500px',
            height: 'auto',
            alt: 'Это картинка'
          },
    }),
    
    new ColumnsBlock ([
        'Приложение на чистом ДжаваСкрипт, без использования библиотек',
        'Узнаешь как работают принципы Solid и ООП в ДжаваСкрипт за один курс',
        'ДжаваСкрипт - это просто, интересно. Научись создавать любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-waight': 'bold'
        }
    }),

    new TextBlock (text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-waight': 'bold'
        }
    })
]