import Button from '../components/UI/Button'
import s from './Home.module.scss'

export default function Home() {
  async function onClickHandler() {
    await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=thor`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <>
      <h1>HOME</h1>
      <Button
        onClick={onClickHandler}
        customClass={s.btn}
      >
        Click me!
      </Button>
    </>
  )
}
