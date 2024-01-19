const { createApp } = Vue

const myApp = createApp({
    data() {
        return {
            textStyle: ['text-center', 'p-3'],
            message: 'Hello Vue!'
        }
    }
})

myApp.mount('#root');

