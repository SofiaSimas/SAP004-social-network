import template from './template.js'

const login = ()  => {
    const container = document.createElement('div');

    container.innerHTML = template;

    return container;
}

export default login;