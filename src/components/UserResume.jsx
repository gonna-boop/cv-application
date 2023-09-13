import { useAtom, useAtomValue } from 'jotai'
import React, { useState } from 'react'
import { eduMessage, globalMessage } from '../store'

const UserResume = () => {
  const message = useAtomValue(globalMessage);
  const eduMessage2 = useAtomValue(eduMessage);

  return (
    <div className='userResume'>
        <div className='cvHeader'>{message.fullName}{message.email}</div>
        <div className='test'>{eduMessage2}</div>
    </div>
  )
}

export default UserResume