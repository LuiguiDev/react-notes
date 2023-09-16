import { Button } from '@mui/material'

export const Start = () => {
  function manageClick() {
    console.log('App started')
  }

  return (
    <Button onClick={manageClick} >
      Start!
    </Button>
  )
}