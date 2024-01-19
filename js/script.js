console.log('Vue Ok', Vue);

const { createApp } = Vue

createApp({
    data() {
        return {
            textStyle: ['p-5'],
            message: 'Hello Vue!',
            imageStyle: ['rounded mx-auto d-block', 'img-fluid'],
            image: 'img/logo_vue.jpeg',
        }
    }
})

    .mount('#root')