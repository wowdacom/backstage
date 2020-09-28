import {
    createApp
} from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
// Define a new global component called button-counter
// app.component('todo-item', {
//     props: ['todo'],
//     template: `<li>{{ todo.text }}</li>`
// })
app.component('custom-form', {
    emits: {
        // No validation
        click: null,

        // Validate submit event
        submit: ({ email, password }) => {
            if (email && password) {
                return true
            } else {
                console.warn('Invalid submit event payload!')
                return false
            }
        }
    },
    methods: {
        submitForm(email, password) {
            this.$emit('submit', { email, password })
        }
    },
    template: `<form>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>`
})

app.mount('#app')