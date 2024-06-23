'use client'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
export default function Provider({children}) {
  return (
    <ChakraProvider>{children}</ChakraProvider>
  )
}
