import { Box, Stack } from '@mui/material'
import React from 'react'
import { TextLabel, TextValue } from '../../styles'

export const EmailBox = ({userEmail}) => {
  return (
    <Box pr={3} pl={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={4}
          pb={4}
        >
          <TextLabel>Email</TextLabel>
          <TextValue>{userEmail}</TextValue>
          <Box></Box>
        </Stack>
        <hr />
      </Box>
  )
}
