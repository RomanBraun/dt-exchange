import { log } from "../utils"

export function Notifications() {

  Notification.requestPermission().then(value =>
  {
    log(`Notification Permission: ${value}`)
  })

  return (
    <div/>
  )
}
