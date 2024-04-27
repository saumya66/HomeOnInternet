
const makeThemeDark = async () => {
    try {
        document.documentElement.classList.add('dark')
        await localStorage.setItem("theme", 'dark')
    } catch (error) {
        console.log(error)
    }
  }

  const makeThemeLight= async () => {
    try {
        document.documentElement.classList.remove('dark')
        await localStorage.setItem("theme", 'light')
    } catch (error) {
        console.log(error)
    }
  }
 

  export {makeThemeDark, makeThemeLight}