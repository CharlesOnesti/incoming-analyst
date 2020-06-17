import React from 'react'
import NavBar from '../../components/NavBar'
import HeaderText from '../../components/HeaderText'
import { Main, TextBox } from './styles'

const Home = () => {
  console.log('home rendered')
  return (
    <>
      <NavBar />
      <HeaderText text="Contact Me" color1="black" />
      <Main>
        <TextBox>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere. Mauris porttitor, ex a
          vulputate ornare, tellus turpis vestibulum ligula, in pharetra lectus tellus vel sem.
          Quisque suscipit turpis eget consectetur convallis. Proin eu tellus laoreet, consectetur
          nunc eu, condimentum sapien. Praesent ultricies lectus vel risus finibus sollicitudin.
          In id ante non ligula placerat euismod vitae dapibus velit. Suspendisse cursus, metus
          et convallis auctor, tortor ipsum viverra erat, vitae lobortis dui purus non ligula.
          Cras aliquam scelerisque elementum. Curabitur malesuada leo nibh, sed dictum lorem
          convallis eget.
        </TextBox>
      </Main>
    </>
  )
}


export default Home
