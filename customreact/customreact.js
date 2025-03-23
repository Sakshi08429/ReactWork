function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    document.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target)
    container.append(domElement)
}
const reactElement ={
    type:'a',
    //props is an object
    props:{
        href:'https://google.com',
        target:'-blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root')
//to render element
customRender(reactElement,mainContainer)
