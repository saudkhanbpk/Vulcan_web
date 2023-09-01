import { Box, Stack } from '@mui/material'
import React from 'react'
import { TextLabel, TextValue } from '../../styles'

export const EmailBox = ({userEmail}) => {
  return (
    <Box px={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <TextLabel>Email</TextLabel>
          <TextValue>{userEmail}</TextValue>
          <Box></Box>
        </Stack>
        <hr />
      </Box>
  )
}
