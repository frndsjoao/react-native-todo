import React, { useCallback, useState } from 'react'
import { Text, Box, Center, VStack, useColorModeValue, Fab, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import ThemeToggle from '../components/theme-toogle'
import TaskList from '../components/task-list'
import shortid from 'shortid'

const initialData = [
  { id: shortid.generate(), subject: 'Finish video', done: false },
  { id: shortid.generate(), subject: 'Play Zomboid', done: false },
  { id: shortid.generate(), subject: 'Send Contract', done: true },
]

export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item) => {
    setData(previousData => {
      const newData = [...previousData]
      const index = previousData.indexOf(item)
      newData[index] = { ...item, done: !item.done }

      return newData
    })
  }, [])

  const handleChangeSubjectTaskItem = useCallback((item, newSubject) => {
    setData(previousData => {
      const newData = [...previousData]
      const index = previousData.indexOf(item)
      newData[index] = { ...item, subject: newSubject }

      return newData
    })
  }, [])

  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId(null)
  }, [])

  const handlePressTaskItem = useCallback(item => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback(item => {
    setData(previousData => {
      const newData = previousData.filter(i => i !== item)

      return newData
    })
  }, [])

  function handleAddNewItem() {
    const id = shortid.generate()
    setData([
      { id, subject: '', done: false },
      ...data
    ])
    setEditingItemId(id)
  }



  return (
    <Center
      _dark={{ bg: 'trueGray.900' }}
      _light={{ bg: 'trueGray.50' }}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeSubjectTaskItem}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItem}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
        <ThemeToggle />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        bgColor="primary.700"
        onPress={handleAddNewItem}
      />
    </Center>
  )
}