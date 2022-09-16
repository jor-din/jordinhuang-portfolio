import TypeWriterEffect from 'react-typewriter-effect';

import React from 'react'

const GreetTypewrite = () => {
  return (
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Poppins',
          color: '#789789',
          fontWeight: 500,
          fontSize: '2em',
        }}
        startDelay={2000}
        cursorColor="#789789"
        multiText={[
          'Hello!',
          '你好！',
          'Bonjour!',
          'こんにちは!', 
          'Welcome!'
        ]}
        multiTextDelay={100}
        typeSpeed={300}
      />
  )
}

export default GreetTypewrite