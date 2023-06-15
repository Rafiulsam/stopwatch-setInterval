const startBtn = document.getElementById('btn-start')
const stopBtn = document.getElementById('btn-stop')
const resetBtn = document.getElementById('btn-reset')
const countField = document.getElementById('count')
let count = countField.innerText

let intervalId;

const startCounting = () => {
    if (!intervalId) {
        intervalId = setInterval(setCounting, 1000)
    }
}

const setCounting = () => {
    startBtn.classList.add('disabled')
    stopBtn.classList.remove('disabled')
    resetBtn.classList.remove('disabled')
    ++count
    countField.textContent = count;
}

const stopCounting = () => {
    startBtn.classList.remove('disabled')
    stopBtn.classList.add('disabled')
    clearInterval(intervalId)
    intervalId = null
}

const resetCounting = () => {
    stopCounting()
    resetBtn.classList.add('disabled')
    count = 0
    countField.textContent = count
}
startBtn.addEventListener('click', startCounting)
stopBtn.addEventListener('click', stopCounting)
resetBtn.addEventListener('click', resetCounting)