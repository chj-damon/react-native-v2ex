/**
 * Created by leon<silenceace@gmail.com> on 22/04/01.
 */
import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'

import { Text, Button, Spinner, Placeholder } from '@src/components'
import { ITheme, SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'
import { NavigationService, ROUTES } from '@src/navigation'

/**
 * // TODO: SettingSection
 * SettingSection props
 */
export interface SettingSectionProps {
  /**
   * SettingSection width
   */
  width?: number | string

  /**
   * SettingSection height
   */
  height?: number | string
}

const SettingSection: React.FC<SettingSectionProps> = ({ width, height }: SettingSectionProps) => {
  const readerContent = () => {
    return (
      <View>
        <Text>Hello World, SettingSection.</Text>
      </View>
    )
  }

  return readerContent()
}

const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

export default SettingSection
