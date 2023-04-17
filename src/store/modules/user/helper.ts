import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://img.zcool.cn/community/01i54igjjplqkxsdwrlpbw3932.jpg?x-oss-process=image/format,webp/quality,q_100',
      name: 'NEW-USERS',
      description: 'WeChat for <a href="https://wi44bvihwhz.feishu.cn/docx/FUwYdkGGroEjaZxOmvHcBjCHnLd" class="text-blue-500" target="_blank" >内测群</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
