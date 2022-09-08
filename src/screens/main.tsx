import React, { useState } from 'react'
import { Text, Box, Center, VStack, useColorModeValue, Pressable } from 'native-base'
import ThemeToggle from '../components/theme-toogle'
import TaskItem from '../components/task-item'


export default function MainScreen() {
  const [checked, setChecked] = useState(false)

  return (
    <Center
      _dark={{ bg: 'trueGray.900' }}
      _light={{ bg: 'trueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <TaskItem isDone={checked} onToggleCheckbox={() => setChecked(!checked)} />
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}