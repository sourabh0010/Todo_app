import React from 'react'
import Button from '@material-ui/core/Button';

const Buttons = ({ oncilck, text, type, className }) => {

  return (
    <Button type={type} variant="contained" className={className} color="primary" onClick={oncilck}>
      {text}
    </Button>
  )
}

export default Buttons;