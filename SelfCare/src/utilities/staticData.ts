import Images from 'assets/images';

export const staticValue = {
    DEFAULT: 1,
    TIME_IMAGE_LOAD: 500,
};

export const ERRORS = {
    default: 'common.error.unknown',
    network: 'common.error.network',
};

export const dataPicker = [
    'label1',
    'label2',
    'label3',
    'label4',
    'label5',
    'label6',
    'label7',
    'label8',
    'label9',
    'label10',
];

export const dataDropdown = ['option 1 ', 'option 2', 'option 3', 'option 4'];

export const slides = [
    {
        key: 'one',
        title: 'Discover Top Doctors',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia libero ut metus convallis tempor. Vestibulum consequat, tortor mattis consequat',
        image: Images.photo.slide1,
    },
    {
        key: 'two',
        title: 'Ask Doctor Online',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia libero ut metus convallis tempor. Vestibulum consequat, tortor mattis consequat',
        image: Images.photo.slide2,
    },
    {
        key: 'three',
        title: 'Get Expert Advice',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia libero ut metus convallis tempor. Vestibulum consequat, tortor mattis consequat',
        image: Images.photo.slide3,
    },
];

export const dumpData = [
    {
        id: '1',
        title: 'Your Diet Chart',
        image: Images.photo.stomach,
    },
    {
        id: '2',
        title: 'Medical History',
        image: Images.photo.electrocardiogram,
    },
    {
        id: '3',
        title: 'Lab Results',
        image: Images.photo.serumBag,
    },
    {
        id: '4',
        title: 'Online Chat',
        image: Images.photo.bust,
    },
    {
        id: '5',
        title: 'Finding yourself',
        image: Images.photo.stethoscope,
    },
];
