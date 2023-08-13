import defaultSettings from '@/utils/settings'

const userInfoName = defaultSettings.userInfoName

export function getUserInfo() {
  return localStorage.getItem(userInfoName)
}

export function setUserInfo(info: string) {
  return localStorage.setItem(userInfoName, info)
}
