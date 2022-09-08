import React, { useCallback } from 'react'
import { Pressable } from 'react-native'
import { Box, HStack, useTheme, themeTools, useColorModeValue, Text } from 'native-base'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import AnimatedTaskLabel from './animated-task-label'

interface Props {
  isDone: boolean;
  onToggleCheckbox?: () => void
}

const TaskItem = ({ isDone, onToggleCheckbox }: Props) => {
  const theme = useTheme()
  const highlightColor = themeTools.getColor(theme, useColorModeValue('green.500', 'green.400'))
  const boxStroke = themeTools.getColor(theme, useColorModeValue('muted.300', 'muted.500'))
  const checkmarkColor = themeTools.getColor(theme, useColorModeValue('white', 'white'))
  const activeTextColor = themeTools.getColor(theme, useColorModeValue('darkText', 'lightText'))
  const doneTextColor = themeTools.getColor(theme, useColorModeValue('muted.400', 'muted.600'))

  return (
    <HStack alignItems="center" w="full" px={4} py={2} bg={useColorModeValue('trueGray.50', 'trueGray.900')}>
      <Box w={30} h={30} mr={2}>
        <Pressable onPress={onToggleCheckbox}>
          <AnimatedCheckbox
            checked={isDone}
            highlightColor={highlightColor}
            checkmarkColor={checkmarkColor}
            boxOutlineColor={boxStroke}
          />
        </Pressable>
      </Box>

      <AnimatedTaskLabel
        textColor={activeTextColor}
        inactiveTextColor={doneTextColor}
        strikethrough={isDone}
        onPress={onToggleCheckbox}
      >
        Task
      </AnimatedTaskLabel>

    </HStack>
  )
}

export default TaskItem