const store = {
    data: {
        search: '',
        feed: [
            {
                body: 'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.',
                date: '1m',
                author: 'Franz Kafka',
                avatar: './images/franz-kafka_bigger.jpg'
            },
            {
                body: 'You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.',
                date: '2m',
                author: 'Naguib Mahfouz',
                avatar: './images/naguib-mahfouz.jpg'
            },
            {
                body: 'Lolita, light of my life, fire of my loins.',
                date: '6m',
                author: 'Vladimir Nabokov',
                avatar: './images/nabokov.jpeg'
            },
            {
                body: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.',
                date: '11m',
                author: 'Gabriel Garcia Marquez',
                avatar: './images/marquez.jpg'
            },
            {
                body: 'It was a bright cold day in April, and the clocks were striking thirteen.',
                date: '16m',
                author: 'George Orwell',
                avatar: './images/orwell.jpeg'
            },
            {
                body: 'It was a wrong number that started it, the telephone ringing three times in the dead of night, and the voice on the other end asking for someone he was not.',
                date: '21m',
                author: 'Paul Auster',
                avatar: './images/paul-auster.jpg'
            },
            {
                body: 'Mother died today.',
                date: '26m',
                author: 'Albert Camus',
                avatar: './images/camus.jpeg'
            },
            {
                body: 'He was an old man who fished alone in a skiff in the Gulf Stream and he had gone eighty-four days now without taking a fish.',
                date: '31m',
                author: 'Ernest Hemingway',
                avatar: './images/hemingway.jpeg'
            },
            {
                body: 'In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.',
                date: '40m',
                author: 'F. Scott Fitzgerald',
                avatar: './images/f-scott-fitzgerald.jpg'
            },
            {
                body: 'He—for there could be no doubt of his sex, though the fashion of the time did something to disguise it—was in the act of slicing at the head of a Moor which swung from the rafters.',
                date: '49m',
                author: 'Virginia Woolf',
                avatar: './images/virginia-woolf.jpg'
            },
            {
                body: 'It was now lunch time and they were all sitting under the double green fly of the dining tent pretending that nothing had happened.',
                date: '50m',
                author: 'Ernest Hemingway',
                avatar: './images/hemingway.jpeg'
            },
            {
                body: 'Someone must have slandered Josef K., because one morning, without his having done anything bad, he was arrested.',
                date: '1h',
                author: 'Franz Kafka',
                avatar: './images/franz-kafka_bigger.jpg'
            },
            {
                body: 'Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else ... Knowledge can be communicated, but not wisdom. One can find it, live it, do wonders through it, but one cannot communicate and teach it.',
                date: '1h',
                author: 'Hermann Hesse',
                avatar: './images/hesse.jpeg'
            },
            {
                body: 'Science is the language of the intellect of society. Art is language of the entire human personality',
                date: '2h',
                author: 'Naguib Mahfouz',
                avatar: './images/naguib-mahfouz.jpg'
            }
        ]
    },

    addtweetAction (tweet) {
        this.data.feed.unshift(tweet);
    }
}