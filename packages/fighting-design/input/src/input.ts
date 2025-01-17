import type { ExtractPropTypes, PropType } from 'vue'
import type { InputType } from './interface'

export const Props = {
  modelValue: {
    type: String,
    default: (): string => ''
  },
  type: {
    type: String as PropType<InputType>,
    default: (): InputType => 'text',
    validator: (val: InputType): boolean => {
      return (['text', 'password', 'textarea'] as const).includes(val)
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  id: {
    type: String,
    default: (): string => ''
  },
  max: {
    type: Number,
    default: (): null => null
  },
  min: {
    type: Number,
    default: (): null => null
  },
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  name: {
    type: String,
    default: (): string => 'f-input'
  }
} as const

export const Emits = {
  'update:modelValue': (val: string): string => val,
  change: (val: string): string => val
} as const

export type InputPropsType = ExtractPropTypes<typeof Props>
