import { Box, Stack } from '@mui/material'
import React from 'react'
import { TextLabel, TextValue } from '../../styles'

export const EmailBox = ({userData}) => {
  console.log("Email",userData)
  return (
    <Box px={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <TextLabel>Email</TextLabel>
          <TextValue>{userData?.account?.email}</TextValue>
          <Box></Box>
        </Stack>
        <hr />
      </Box>
  )
}
