import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Avatar, Box, Center, Heading, HStack, IconButton, useColorModeValue, VStack } from "native-base";
import React, { useCallback } from "react";
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from "./animated-color-box";
import MenuButton from "./menu-button";
import ThemeToggle from "./theme-toggle";


const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('muted.100', 'trueGray.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('emerald.500', 'green.500')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('gray.500', 'gray.200')
            }}
          />
        </HStack>

        <Avatar
          source={require(('../assets/profile.jpg'))}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="emerald.700"
          borderWidth={3}
        />

        <Heading mb={4} size="xl">João Pedro A.</Heading>

        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          // onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton>
      </VStack>

      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}

export default Sidebar