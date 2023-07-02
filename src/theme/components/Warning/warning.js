import VuiAlert from "@/theme/components/VuiAlert";
import VuiTypography from "@/theme/components/VuiTypography";
import { useEffect, useState } from "react";


function Warning({ days, hours, minutes, seconds, firstName, color, type }) {

  const [leftDays, setLeftDays] = useState()
  const [leftHours, setLeftHours] = useState()
  const [leftMinutes, setLeftMinutes] = useState()
  const [leftSeconds, setLeftSeconds] = useState()



  useEffect(() => {
    setLeftDays(days)
    setLeftHours(hours)
    setLeftMinutes(minutes)
    setLeftSeconds(seconds)

    if (days > 0 || hours > 0 || minutes > 0 || seconds > 0) {
      let daysLeft = days;
      let hoursLeft = hours;
      let minutesLeft = minutes;
      let secondsLeft = seconds
      setInterval(function () {
        secondsLeft--
        if (secondsLeft === 0 && minutesLeft > 0) {
          minutesLeft--;
          secondsLeft = 59
        }
        if (minutesLeft === 0 && hoursLeft > 0) {
          hoursLeft--
          minutesLeft = 59;
          secondsLeft = 59;
        }
        if (hoursLeft === 0 && daysLeft > 0) {
          daysLeft--
          hoursLeft = 23
          minutesLeft = 59;
          secondsLeft = 59;
        }

        setLeftDays(daysLeft)
        setLeftHours(hoursLeft)
        setLeftMinutes(minutesLeft)
        setLeftSeconds(secondsLeft)
      }, 1000);
    }

  }, [])

  return (
    <>
      <VuiAlert color={color} justifyContent="center">
      {type == "PAYMENT_REMINDER" && 
        <VuiTypography textAlign="center" color="white" fontSize={15}>
          Apreciado {firstName} quedan ( {leftDays}d : {leftHours}h : {leftMinutes}m : {leftSeconds}s ) para que realices la compra de tu membresia o tu cuenta quedará desahabilitada.
        </VuiTypography>
      }

      {type == "WEEKLY_BONUS" && 
        <VuiTypography textAlign="center" color="white" fontSize={15}>
          Ya solo quedan ( {leftDays}d : {leftHours}h : {leftMinutes}m : {leftSeconds}s ) para el cierre de esta semana
        </VuiTypography>
      }

      </VuiAlert>
    </>

  )
}

export default Warning