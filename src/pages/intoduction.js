import { ref } from "vue";

const Intoduction = {
    name: "Intoduction",
    template: `
        <div>
            <h1>{{ message }}</h1>
        </div>
    `,
    setup() {
        const message = ref('Hello Vue 3.0 + Pinia + Vuetify + Vite + Axios');

        return { message }
    },
}

export default Intoduction