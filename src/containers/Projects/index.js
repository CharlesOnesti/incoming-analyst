import React from 'react'
import NavBar from '../../components/NavBar'
import HeaderText from '../../components/HeaderText'
import Card from '../../components/Card'
import { Main } from './styles'
import owllogo from '../../assets/owllogo.png'
import personicon from '../../assets/personicon.png'

const Home = () => {
  console.log('home rendered')
  return (
    <>
      <NavBar />
      <HeaderText text="Projects" color1="black" />
      <Main>
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={personicon}
          link="https://google.com"
        />
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={owllogo}
          link="https://google.com"
        />
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={owllogo}
          link="https://google.com"
        />
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={owllogo}
          link="https://google.com"
        />
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={owllogo}
          link="https://google.com"
        />
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={owllogo}
          link="https://google.com"
        />
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={owllogo}
          link="https://google.com"
        />
        <Card
          title="Study Labs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere risus quis
          luctus eleifend. Aliquam porta turpis non vestibulum fringilla. Integer efficitur, purus
          placerat laoreet hendrerit, velit tortor volutpat ex, ornare consectetur erat libero
          accumsan quam. Vestibulum imperdiet diam ac auctor posuere."
          img={owllogo}
          link="https://google.com"
        />
      </Main>
    </>
  )
}


export default Home
