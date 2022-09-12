import React from "react";
import { Feather } from '@expo/vector-icons'
import { Button, IButtonProps, Icon, useColorMode, useColorModeValue } from "native-base";

interface Props extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props }: Props) => {
  const colorScheme = useColorModeValue('emerald', 'emerald')
  const inactiveTextColor = useColorModeValue('muted.500', undefined)
  const pressedBgColor = useColorModeValue('emerald.400', 'emerald.800')

  return (
    <Button
      size="lg"
      colorScheme={'emerald'}
      bg={active ? undefined : 'transparent'}
      _pressed={{ bg: pressedBgColor }}
      _text={{ color: active ? 'muted.50' : inactiveTextColor }}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Feather} name={icon} size="md" opacity={0.7} />}
      {...props}
    >
      {children}
    </Button>
  )
}

export default MenuButton