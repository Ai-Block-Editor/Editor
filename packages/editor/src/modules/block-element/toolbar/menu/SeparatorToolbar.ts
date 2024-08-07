import type { IBlockEditor } from '@swc-editor/core'
import { Svgs } from '../../../../assets/icons/svg'
import BaseToolbar from '../../../BaseToolbar'

class SeparatorToolbar extends BaseToolbar {
  readonly mark = 'separator'
  iconSvg = Svgs.separator
  hotkey = 'mod+b'
  titleName = 'textStyle.separator'

  onActive(editor: IBlockEditor): boolean {
    return editor.isActive(this.mark)
  }

  exec(editor: IBlockEditor) {
    editor.commands.toggleBold()
    return editor
  }
}

export default SeparatorToolbar
