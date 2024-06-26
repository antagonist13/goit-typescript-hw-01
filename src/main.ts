import './style.css'
import "./basic/1"
import "./basic/2"
import "./basic/3"
import "./basic/4"
import "./basic/5"
import "./basic/6"
import "./basic/7"
import "./generics/1"
import "./generics/2"
import "./generics/3"
import "./generics/4"
import "./generics/5"
import "./generics/6"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Homework 1 TypeScript</h1>
    <p class="read-the-docs">
      I hope it will be a great experience
    </p>
  </div>
`
