const quotes = [
    {
        quote: '야망은 보다 엄격하며 단호한 재료로 만들어져야 한다.',
        author: '윌리엄 셰익스피어'
    },
    {
        quote: '침묵을 당하는 모든 진실은 독이 된다.',
    author: 'Friedrich Nietzsche'
    },
    {
    quote: '훌륭한 사람이 저지르는 잘못은 존경할 만한 가치가 있다. 그것이야말로 하찮은 사람의 진실보다도 더 유익하기 때문이다.',
    author: 'Friedrich Nietzsche'
    },
    {
        quote: '더 이상 자신있게 사는 것이 불가능하다면 차라리 당당하게 죽음을 택하라.',
    author: 'Friedrich Nietzsche'
    },
    {
        quote:'언젠가 날기를 배우려는 사람은 우선 서고, 걷고, 달리고, 오르고, 춤추는 것을 배워야 한다. 사람은 곧 바로 날 수는 없다.',
    author: 'Friedrich Nietzsche'
    },
    {
        quote: '얼마만큼 깊이 고뇌할 수 있는가가 인간의 위치를 결정짓는다.',
    author: 'Friedrich Nietzschen'
    },
    {
        quote: '위대한 인간이란 역경을 극복할 줄 아는 동시에 그 역경을 사랑할 줄 아는 사람이다.',
    author: 'Friedrich Nietzsche'
    },
    {
        quote: '무언가가 충분히 중요하다면 확률이 당신에게 유리하지 않더라도 시작하라.',
    author: 'Elon Musk'
    },
    {
        quote: '실패는 하나의 옵션이다. 만약 실패를 겪지 않았다면 당신은 충분히 혁신적이지 않았다는 증거이다.',
    author: 'Elon Musk'
    },
    {
        quote: '자신에게 시련을 주어라.',
    author: 'Friedrich Nietzsche'
    },
    ];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;