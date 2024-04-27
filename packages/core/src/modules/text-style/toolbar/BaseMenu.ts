/**
 * @description simply style base menu
 * @author WebJeffery
 */
import { t } from 'i18next'
import { IBlockEditor } from '../../../editor'
import { IToolbarBase } from '../../../toolbar/interface'
import { isMenuDisabled } from '../helper'

abstract class BaseMenu implements IToolbarBase {
  alwaysEnable?: boolean | undefined
  width?: number | undefined
  abstract readonly mark: string
  protected readonly marksNeedToRemove: string[] = [] // 增加 mark 的同时，需要移除哪些 mark （互斥，不能共存的）
  abstract readonly iconSvg: string
  abstract readonly hotkey: string
  readonly tag = 'button'
  title: string = 'default'
  titleName = 'default'

  getTitle() {
    return t(this.titleName)
  }

  /**
   * 获取：是否有 mark
   * @param editor editor
   */
  getValue(editor: IBlockEditor): string | boolean {
    return !!editor
  }

  isActive(editor: IBlockEditor): boolean {
    return isMenuDisabled(editor)
  }

  isDisabled(editor: IBlockEditor): boolean {
    return isMenuDisabled(editor)
  }

  exec(editor: IBlockEditor): IBlockEditor {
    return editor
  }
}

export default BaseMenu
