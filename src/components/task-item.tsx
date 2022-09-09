import React, { useCallback } from 'react'
import { NativeSyntheticEvent, Pressable, TextInputChangeEventData } from 'react-native'
import { Box, HStack, useTheme, themeTools, useColorModeValue, Icon, Input } from 'native-base'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import AnimatedTaskLabel from './animated-task-label'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
import SwipableView from './swipable-view'
import { Feather } from '@expo/vector-icons'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isEditing: boolean;
  isDone: boolean;
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  onChangeSubject?: (subject: string) => void
  onFinishEditing?: () => void
  subject: string
}

const TaskItem = ({
  isDone,
  onToggleCheckbox,
  subject,
  onPressLabel,
  onRemove,
  simultaneousHandlers,
  isEditing,
  onChangeSubject,
  onFinishEditing
}: Props) => {
  const theme = useTheme()
  const highlightColor = themeTools.getColor(theme, useColorModeValue('green.500', 'green.400'))
  const boxStroke = themeTools.getColor(theme, useColorModeValue('muted.300', 'muted.500'))
  const checkmarkColor = themeTools.getColor(theme, useColorModeValue('white', 'white'))
  const activeTextColor = themeTools.getColor(theme, useColorModeValue('darkText', 'lightText'))
  const doneTextColor = themeTools.getColor(theme, useColorModeValue('muted.400', 'muted.600'))

  const handleChangeSubject = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChangeSubject && onChangeSubject(e.nativeEvent.text)
  }, [onChangeSubject])

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box w="full" h="full" bg="red.500" alignItems="flex-end" justifyContent="center" pr={4}>
          <Icon
            color="white"
            as={<Feather name="trash-2" />}
            size={28}
          />
        </Box>
      }
    >
      <HStack alignItems="center" w="full" px={6} py={2} bg={useColorModeValue('trueGray.50', 'dark.50')}>
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

        {isEditing ? (
          <Input
            placeholder='Task'
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipableView>
  )
}

export default TaskItem